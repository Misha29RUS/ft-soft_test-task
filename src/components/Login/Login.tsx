import React, { useState } from "react";

import { Button } from "../UI/Button/Button.tsx";
import { Input } from "../UI/Input/Input.tsx";
import { Logo } from "../Logo/Logo.tsx";

import style from "./Login.module.scss";

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] =  useState<string>('');
  const handleChange = (event : React.FormEvent) => {
    setUsername(event.target.value.trim());
  };
  const isDisabled = username.length === 0;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isDisabled) {
      localStorage.setItem("chat-username", username);
      onLogin(username);
    }
  };

  return (
    <div className={style.login_container}>
      <ul className={style.login_header}>
        <li>
          <Logo />
        </li>
        <li>
          <p className={style.login_header_title}>FT-SOFT CHAT</p>
        </li>
      </ul>
      <form onSubmit={handleSubmit} className={style.login_form}>
        <p>Пожалуйста, представтесь </p>
        <ul className={style.form_elements}>
          <li className={style.form_element}>
            <Input
              type="text"
              placeholder="Введите ваше имя..."
              value={username}
              onChange={handleChange}
            />
          </li>
          <li className={style.form_element}>
            <Button type="submit" disabled={isDisabled}>
              Войти
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
