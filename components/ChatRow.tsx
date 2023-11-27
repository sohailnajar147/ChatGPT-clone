import { TrashIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, deleteDoc, doc, query } from "firebase/firestore";
import { db } from "@/firebase";

type Props = {
  id: string;
};
function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
  const [messages] = useCollection(
    query(
      collection(db, "users", session?.user?.email!, "chats", id, "messages")
    )
  );
  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.push("/");
  };
  return (
    <Link
      href={`/chat/${id}`}
      className={clsx(
        " hover:rounded-md hover:bg-gray-700/70  cursor-pointer flex justify-between items-center p-1",
        { "bg-gray-700/70 rounded-md": `/chat/${id}` === pathname }
      )}
    >
      <p className="text-white truncate md:max-w-[230px] max-w-[180px]">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "new chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-700"
      />
    </Link>
  );
}

export default ChatRow;
