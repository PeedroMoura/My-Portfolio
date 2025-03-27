"use client";

import { BaseURL } from "@/config/constants";
import { projectId, wagmiConfig } from "@/config/web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { PropsWithChildren } from "react";
import { polygon } from "viem/chains";
import { State, WagmiProvider } from "wagmi";

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  defaultChain: polygon,
  termsConditionsUrl: `${BaseURL}/terms`,
  privacyPolicyUrl: `${BaseURL}/privacy`,
  enableAnalytics: true,
  enableOnramp: true,
});

const Web3Provider = ({ children, initialState }: PropsWithChildren<{ initialState?: State }>) => {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
Web3Provider.displayName = "Web3Provider";

export { Web3Provider };
