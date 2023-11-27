"use client";
import { PlusIcon } from "@heroicons/react/20/solid";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React from "react";
import { db } from "@/firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function NewChat() {
  const { data: session } = useSession();
  const router = useRouter();
  const myCollection = "";
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div
      onClick={createNewChat}
      className=" rounded-md p-2 hover:rounded-md hover:bg-gray-700/70 flex items-center space-x-2 text-white hover:cursor-pointer"
    >
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
