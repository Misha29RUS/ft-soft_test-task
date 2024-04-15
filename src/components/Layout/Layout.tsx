import { useState } from "react";

import { Header } from "./Header/Header.tsx";
import { Sidebar } from "./Sidebar/Sidebar.tsx";

import style from "./Layout.module.scss";

export const Layout = ({ children, currentRoomId, setCurrentRoomId, handleLogout }) => {
  return (
    <div className={style.layout_container}>
      <Header handleLogout={handleLogout}/>
      <div className={style.content_container}>
        <div className={style.sidebar_container}>
          <Sidebar setCurrentRoomId={setCurrentRoomId} currentRoomId={currentRoomId}/>
        </div>
        <div className={style.children_container}>{children}</div>
      </div>
    </div>
  );
};
