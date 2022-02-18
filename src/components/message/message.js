import React from "react";
import { connect } from "react-redux";
import "./message.css";

const Message = ({message, onMessageDelete}) => {
  const onDelete = () => {
    onMessageDelete(message);
  };

  return (
    <div onClick={onDelete} className="message">
      <span className="text">{message}</span>
      <span className="date">{
        `${new Date().getHours()}:${new Date().getMinutes()}`
      }</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageDelete: (message) => dispatch({type: "MESSAGE_DELETED", payload: message})
  };
};

export default connect(null, mapDispatchToProps)(Message);
