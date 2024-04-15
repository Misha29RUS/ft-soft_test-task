import { useState } from "react";

import style from "./Message.module.scss";

export const Message = ({ text, time, user, currentUser }) => {
  const isCurrentUser = user === currentUser;
  return (
      <div>
        <p>{user}</p>
        <div
            className={`${style.message_container} ${isCurrentUser ? style.user : style.other}`}
        >
          <p className={style.message_text}>{text}</p>
          <ul className={style.message_info_group}>
            <li className={style.message_info_time}>{time}</li>
          </ul>
          <div className={style.tail}></div>
        </div>
      </div>

  );
};
