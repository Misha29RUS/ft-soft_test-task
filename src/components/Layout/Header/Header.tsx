import { useState } from "react";

import { Logo } from "../../Logo/Logo.tsx";
import { Button } from "../../UI/Button/Button.tsx";

import style from "./Header.module.scss";

export const Header = ({ handleLogout }) => {
  return (
    <div className={style.header_container}>
      <ul className={style.header_start_content}></ul>
      <ul className={style.header_middle_content}>
        <li>
          <Logo />
        </li>
        <li>
          <p className={style.header_title}>FT-SOFT CHAT</p>
        </li>
      </ul>
      <ul className={style.header_end_content}>
        <li onClick={handleLogout}>
          <Button imgLeft={"/user.svg"}>Сменить пользователя</Button>
        </li>
      </ul>
    </div>
  );
};
