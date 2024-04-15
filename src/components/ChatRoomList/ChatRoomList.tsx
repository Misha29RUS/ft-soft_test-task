import { useState, useEffect } from "react";

import { ChatRoom } from "../ChatRoom/ChatRoom.tsx";

import style from "./ChatRoomList.module.scss";

export const ChatRoomList = ({ rooms, currentRoomId, setCurrentRoomId }) => {
  return (
    <div className={style.chat_list_container}>
      {rooms.map((room) => (
        <ChatRoom
          key={room.id}
          room={room}
          setCurrentRoomId={setCurrentRoomId}
          currentRoomId={currentRoomId}
        />
      ))}
    </div>
  );
};
