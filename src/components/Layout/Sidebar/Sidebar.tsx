import { useEffect, useState } from "react";

import { ChatRoomList } from "../../ChatRoomList/ChatRoomList.tsx";
import { Button } from "../../UI/Button/Button.tsx";

import style from "./Sidebar.module.scss";
export const Sidebar = ({ setCurrentRoomId, currentRoomId }) => {
  const [rooms, setRooms] = useState(
    () => JSON.parse(localStorage.getItem("chat-rooms")) || [],
  );

  useEffect(() => {
    localStorage.setItem("chat-rooms", JSON.stringify(rooms));
  }, [rooms]);

  const handleAddRoom = () => {
    const roomName = prompt("Введите название новой комнаты:");
    if (roomName) {
      const newRoom = {
        id: Date.now(),
        name: roomName,
        lastMessage: "",
        lastMessageTime: "",
      };
      setRooms((prevRooms) => [...prevRooms, newRoom]);
    }
  };
  return (
    <div className={style.sidebar_container}>
      <ul className={style.sidebar_header_container}>
        <li>
          <Button type="submit" imgLeft="/add.svg" onClick={handleAddRoom}>
            Новый чат
          </Button>
        </li>
      </ul>
      <ChatRoomList
        setCurrentRoomId={setCurrentRoomId}
        currentRoomId={currentRoomId}
        rooms={rooms}
      />
    </div>
  );
};
