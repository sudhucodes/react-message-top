import React, { useState, useEffect } from "react";
import "./MessageContainer.css";

const MessageContainer = () => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.message = {
      show: (msg, duration = 4000) => {
        setMessage(msg);
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
        }, duration);
      }
    };
  }, []);

  return (
    <div className={`message-top ${isVisible ? "visible" : "hidden"}`}>
      <p>{message}</p>
    </div>
  );
};

export default MessageContainer;
