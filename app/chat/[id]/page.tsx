"use client";
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import Loading from "@/components/Loading";
import { useState } from "react";
type Props = {
  params: {
    id: string;
  };
};
function ChatPage({ params: { id } }: Props) {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <div className="flex flex-col  h-screen  ">
      <Chat chatId={id} hidden={hidden} />
      <ChatInput chatId={id} setHidden={setHidden} />
    </div>
  );
}

export default ChatPage;
