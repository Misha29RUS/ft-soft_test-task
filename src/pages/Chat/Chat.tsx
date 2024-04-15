import React, { useState, useEffect, useRef } from "react";

import { MessageList } from "../../components/MessageList/MessageList";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";

import style from "./Chat.module.scss";

interface ChatProps {
  roomId: number;
  user: string;
}

export const Chat: React.FC<ChatProps> = ({ roomId, user }) => {
  const [messages, setMessages] = useState<
    Array<{ id: number; text: string; time: string; user: string }>
  >([]);
  const [input, setInput] = useState<string>("");
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const localStorageKey = `chat-messages-${roomId}`;
    setMessages([]);

    const storedMessages = JSON.parse(
      localStorage.getItem(localStorageKey) || "[]",
    );
    setMessages(storedMessages);
  }, [roomId]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: text.trim(),
      time: new Date().toLocaleTimeString('ru-RU', {
        hour: "2-digit",
        minute: "2-digit",
      }),
      user: user,
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(
      `chat-messages-${roomId}`,
      JSON.stringify(updatedMessages),
    );
    setInput("");
    scrollToBottom();
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className={style.chat_container}>
      <MessageList messages={messages} username={user} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
      >
        <ul className={style.input_area}>
          <li>
            <Input
              type="text"
              placeholder="Введите сообщение..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </li>
          <li>
            <Button imgLeft={"/send.svg"} type="submit">
              Send
            </Button>
          </li>
        </ul>
      </form>
      <div ref={messageEndRef} />
    </div>
  );
};
