import React, { ReactNode } from "react";
import Sidebar from "@/components/layouts/sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
