"use client";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import Loading from "./Loading";
type Props = {
  chatId: string;
  hidden: boolean;
};
function Chat({ chatId, hidden }: Props) {
  const { data: session } = useSession();
  const [messages, loading] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex-1 overflow-y-scroll ">
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} hidden={hidden} />
      ))}
      {!hidden && <Loading />}
    </div>
  );
}

export default Chat;
