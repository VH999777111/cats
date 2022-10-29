import React, { useEffect } from "react";

import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import ModeSwitcher from "../../components/ModeSwitcher/ModeSwitcher";

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <LeftSideBar />
      <ModeSwitcher />
      {children}
    </div>
  );
};

export default AppLayout;
