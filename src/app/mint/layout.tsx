import { PropsWithChildren } from "react";

const ConnectedLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return <>{children}</>;
}

export default ConnectedLayout;
