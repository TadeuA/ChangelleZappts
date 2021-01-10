import React, { createContext, useContext, useCallback, useState } from "react";
import { uuid } from "uuidv4";
import Toast from "../components/organisms/Toast";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(({ title, type, description }) => {
    const id = uuid();

    const toast = {
      id,
      title,
      type,
      description,
    };

    setMessages((state) => [...state, toast]);
  }, []);
  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Toast messages={messages} />
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
