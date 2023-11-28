"use client";
import { db } from "@/firebase";
import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const model = "text-davinci-003";
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt("");
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
    // toast notif
    const notification = toast.loading("chatGPT is thinking...");
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // success
      toast.success("chatGPT has responded", { id: notification });
    });
  };

  return (
    <div className=" border-[#5D5E6A] rounded-2xl border text-white m-5 ">
      <form onSubmit={sendMessage} className="flex p-3 space-x-3">
        <input
          className="flex-1 w-full resize-none focus:outline-none  bg-transparent "
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Message ChatGPT..."
        />
        <button
          disabled={!prompt}
          type="submit"
          className=" bg-white p-2 font-bold rounded-lg disabled:bg-[#494A54] text-black"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
