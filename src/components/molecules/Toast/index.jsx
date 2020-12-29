import React, { useEffect } from "react";

import {
  FiAlertCircle,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from "react-icons/fi";
import { Container, Message } from "./styles";
import { useToast } from "../../../hooks";

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

export default function Toast({ message, style }) {
  const { removeToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!message.description}
      style={style}
    >
      {icons[message.type || "info"]}
      <div>
        <strong>{message.title}</strong>
        {message.description && (
          <Message type={message.type}>{message.description}</Message>
        )}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
}
