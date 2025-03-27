export const DevMode = process.env.NODE_ENV === "development" as const;
export const BaseURL: string = DevMode ? "http://localhost:3000" : "https://metarides.io" as const;
export const AppName: string = "MetaRides" as const;
export const AppDescription: string = "A thrilling multiplayer racing game where vehicles are digital assets!";
