import { useState, useEffect } from "react";

import style from "./ChatRoom.module.scss";
export const ChatRoom = ({ room, currentRoomId, setCurrentRoomId }) => {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    const seed = Math.floor(Math.random() * 10000);
    const style = "bottts";
    const url = `https://api.dicebear.com/8.x/${style}/svg?seed=${seed}`;
    setAvatarUrl(url);
  }, []);

  return (
    <div
      className={`${style.chat_room_container} ${currentRoomId === room.id ? style.chat_room_active : ""}`}
      onClick={() => setCurrentRoomId(room.id)}
    >
      <div className={style.photo_container}>
        <img src={avatarUrl} alt="Random Avatar" />
      </div>
      <div className={style.info_container}>
        <p className={style.room_name}>{room.name}</p>
      </div>
    </div>
  );
};
