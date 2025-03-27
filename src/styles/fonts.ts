import { cn } from "@/lib/utils";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: [ "latin" ], variable: "--font-orbitron" });

export const fonts = cn("--font-orbitron");
