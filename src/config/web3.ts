import { AppDescription as description, AppName as name, BaseURL as url } from "@/config/constants";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { mainnet, polygon } from "viem/chains";
import { cookieStorage as storage, createStorage } from "wagmi";

export const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

const metadata = { name, description, url, icons: [ "https://metarides.io/icon.png" ] };

export const wagmiConfig = defaultWagmiConfig({
  chains: [ polygon ], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({ storage }),
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
  enableEmail: true
});
