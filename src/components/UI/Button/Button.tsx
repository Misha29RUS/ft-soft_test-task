import React, { ReactNode, ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  styles?: React.CSSProperties;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  imgLeft?: string;
}

export const Button = ({
  children,
  onClick,
  styles,
  type = "button", // Установка значения по умолчанию для type
  disabled = false,
  imgLeft = "",
}: ButtonProps) => {
  return (
    <div className={style.button_container} onClick={onClick}>
      {imgLeft != "" && (
        <img src={imgLeft} alt={imgLeft} className={style.img} />
      )}
      <button
        style={styles}
        type={type}
        disabled={disabled}
        className={style.button_text}
      >
        {children}
      </button>
    </div>
  );
};
