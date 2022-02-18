import React from "react";
import Message from "../message/message";
import { connect } from "react-redux";
import "./chat.css";

const Chat = ({messages}) => {
  return (
    <div className="chat">
      {
        messages.map((message, i) => {
          return <Message key={i} message={message} />
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

export default connect(mapStateToProps, null)(Chat);
