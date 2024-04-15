import React, { useState } from 'react';
import { Layout } from "./components/Layout/Layout";
import { Chat } from "./pages/Chat/Chat";
import Login from "./components/Login/Login";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [username, setUsername] = useState<string | null>(
      localStorage.getItem("chat-username")
  );
  const [currentRoomId, setCurrentRoomId] = useState<number | null>(null);

  const handleLogin = (username: string) => {
    setUsername(username);
    localStorage.setItem("chat-username", username);
  };

  const handleLogout = () => {
    localStorage.removeItem("chat-username");
    setUsername(null);
  };

  if (!username) {
    return <Login onLogin={handleLogin} />;
  }

  return (
      <Layout setCurrentRoomId={setCurrentRoomId} currentRoomId={currentRoomId} handleLogout={handleLogout}>
        {currentRoomId && <Chat roomId={currentRoomId} user={username} />}
      </Layout>
  );
}

export default App;
