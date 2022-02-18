import React, { useState } from "react";
import { connect } from "react-redux";
import "./message-input.css";

const MessageInput = (props) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onMessageSubmit(value);
    setValue("");
  }

  return (
    <form className="message-input" onSubmit={(e) => onSubmit(e)}>
      <input type="text" placeholder="Type a message" value={value}
             onChange={(e) => setValue(e.target.value)} />

      <button type="submit" >
        <img src="/img/icon-send.svg" alt="send"/>
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageSubmit: (value) => dispatch({type: "MESSAGE_ADDED", payload: value})
  }
}

export default connect(null, mapDispatchToProps)(MessageInput);
