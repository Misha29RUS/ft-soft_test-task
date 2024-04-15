import { useState, useEffect, useRef } from "react";
import style from "./MessageList.module.scss";
import { Message } from "../Message/Message.tsx";
export const MessageList = ({ messages, username }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Выполнение прокрутки при каждом обновлении сообщений
  return (
    <ul className={style.message_list}>
      {messages.map((message) => (
        <li
          className={`${style.message_item} ${message.user === username ? style.message_item_user : style.message_item_ofter}`}
        >
          <Message
            key={message.id}
            text={message.text}
            time={message.time}
            user={message.user}
            currentUser={username}
          />
        </li>
      ))}
      <div ref={messagesEndRef} />
    </ul>
  );
};
