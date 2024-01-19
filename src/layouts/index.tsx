import React, { ReactNode } from "react";
import HeaderComponent from "@/components/HeaderComponent";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
