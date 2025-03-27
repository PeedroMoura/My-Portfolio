"use client";
import vehicleABI from "@/assets/abis/Vehicle";
import { ProgressIcon } from "@/components/progress-icon";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { USDC } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MintOption } from "@/types";
import type { OpenOptions } from "@web3modal/scaffold/dist/types/src/client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Link from "next/link";
import { FC } from "react";
import { decodeEventLog, erc20Abi, formatUnits } from "viem";
import { polygon } from "viem/chains";
import {
  useAccount,
  useReadContract,
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

interface MintModalProps {
  option: MintOption;
}

const MintModal: FC<MintModalProps> = ({ option }) => {
  const { address = "0x0", isDisconnected } = useAccount();
  const { open } = useWeb3Modal();

  const { data: balance = BigInt(0) } = useReadContract({
    address: USDC,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [ address ],
    chainId: polygon.id,
    query: {
      enabled: !isDisconnected,
      placeholderData: BigInt(0),
      initialData: BigInt(0),
    },
  });

  const { data: allowance = BigInt(0) } = useReadContract({
    address: USDC,
    abi: erc20Abi,
    functionName: "allowance",
    args: [ address, option.contract ],
    chainId: polygon.id,
    query: {
      enabled: !isDisconnected,
      placeholderData: BigInt(0),
      initialData: BigInt(0),
      refetchInterval: 10_000
    },
  });

  const { isSuccess: isSimulateApproveSuccess } = useSimulateContract({
    address: USDC,
    abi: erc20Abi,
    functionName: "approve",
    args: [ option.contract, option.price ],
    chainId: polygon.id,
    query: {
      enabled: allowance < option.price,
    },
  });

  const { writeContract: writeContractApprove, isPending: isApprovePending } = useWriteContract();

  const { data: purchaseData, error: purchaseError } = useSimulateContract({
    address: option.contract,
    abi: vehicleABI,
    functionName: "purchase",
    args: [ BigInt(option.collectionId) ],
    chainId: polygon.id,
    query: {
      enabled: allowance >= option.price && balance >= option.price,
    },
  });

  const { writeContract: writeContractPurchase, data: purchaseHash } = useWriteContract();

  const { data } = useWaitForTransactionReceipt({ hash: purchaseHash });

  const newTokenId = () => {
    if (data) {
      const log = data.logs.find((log: any) => log.data === "0x");
      if (log) {
        const event = decodeEventLog({
          abi: vehicleABI,
          data: log.data,
          topics: log.topics,
        });
        if (event.eventName === "Transfer") {
          return Number(event.args.tokenId);
        }
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Mint</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mint your {option.title}!</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 mt-2 gap-y-2 justify-between items-center">
          <div className="flex">
            <p className="text-sm">Step 1</p>
            <ProgressIcon className="ml-2" success={!isDisconnected} />
          </div>
          {isDisconnected
            ? <Button onClick={() => open({ view: "Connect" })}>Connect Wallet</Button>
            : (
              <Button onClick={() => open({ view: "Account" })}>
                {address.slice(0, 4) + "..." + address.slice(-6)}
              </Button>
            )}
          <div className="flex">
            <p className="text-sm">Step 2</p>
            <ProgressIcon className="ml-2" success={allowance >= option.price ? true : undefined} disabled={isDisconnected} />
          </div>
          <Button
            onClick={() => writeContractApprove({
              address: USDC,
              abi: erc20Abi,
              functionName: "approve",
              args: [ option.contract, option.price ],
              chainId: polygon.id
            })}
            disabled={allowance >= option.price || isApprovePending || !isSimulateApproveSuccess}
          >
            {allowance < option.price ? "Approve USDC" : "USDC Approved"}
          </Button>
          <div className="flex">
            <p className="text-sm">Step 3</p>
            <ProgressIcon
              className="ml-2"
              success={balance < option.price ? false : undefined}
              disabled={isDisconnected || allowance < option.price}
            />
          </div>
          <Button
            onClick={() => writeContractPurchase(purchaseData!.request)}
            disabled={balance < option.price || allowance < option.price || !Boolean(purchaseData?.request)}
          >
          {balance < option.price ? "Insufficient Funds" : "Purchase"}
          </Button>
          {balance < option.price && (
            <>
              <p className="text-sm text-red-500">Error</p>
              <p className="text-sm text-red-500 text-center">
                {Number(formatUnits(option.price - balance, 6)).toFixed(2) + " USDC Short"}
              </p>
            </>
          )}
          <p className="text-sm">Step 4</p>
          <Button
            asChild className={cn({
            "pointer-events-none": Boolean(purchaseData?.request),
            "opacity-50": Boolean(data),
          })}
          >
            <Link
              href={`https://opensea.io/assets/matic/${option.contract}/${newTokenId() || 1}`}
              target="_blank"
              className={cn({
                "pointer-events-none": !Boolean(purchaseData?.request),
                "opacity-50": !Boolean(data),
              })}
            >
              View on OpenSea
            </Link>
          </Button>
          {purchaseError && (
            <div className="col-span-2">
              <p className="text-xs text-red-500">
                {purchaseError.message}
              </p>
            </div>
          )}
        </div>
        <DialogFooter className="flex flex-col sm:flex-col text-center sm:justify-center gap-2">
          <div className="flex w-full items-center justify-evenly">
          <p>Need more USDC?</p>
            <Button onClick={() => open({ view: "OnRampProviders" } as OpenOptions)}>Buy USDC</Button>
          </div>
          <div className="flex flex-col text-xs gap-1">
            <span>Polygon Native USDC</span>
            <Link href={`https://polygonscan.com/token/${USDC}`} target="_blank" className="text-xs font-semibold underline">
              {USDC}
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MintModal;
