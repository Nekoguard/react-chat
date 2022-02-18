import React from "react";
import Chat from "../chat/chat";
import MessageInput from "../message-input/message-input";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Chat />
      <MessageInput />
    </div>
  );
};

export default App;
