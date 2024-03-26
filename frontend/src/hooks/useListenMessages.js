import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import toast from "react-hot-toast";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      if (
        !selectedConversation ||
        newMessage.senderId !== selectedConversation._id
      ) {
        const sound = new Audio(notificationSound);
        sound
          .play()
          // eslint-disable-next-line no-unused-vars
          .catch((error) => {})
          .finally(() => toast("New message", { icon: "🔔" }));
        return;
      }
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      toast("New message", { icon: "🔔" });

      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages, selectedConversation]);
};

export default useListenMessages;
