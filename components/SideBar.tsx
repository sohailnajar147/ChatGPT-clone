"use client";
import { signOut, useSession } from "next-auth/react";

import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();
  const [snapshot, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );
  console.log(snapshot);
  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <NewChat />
        </div>
        <div>
          {snapshot?.docs.map((doc) => (
            <ChatRow key={doc.id} id={doc.id} />
          ))}
        </div>
      </div>
      {session && (
        <div
          className="w-full hover:rounded-md hover:bg-gray-700/70 p-1 flex items-center space-x-3 cursor-pointer "
          onClick={() => signOut()}
        >
          <img
            className="h-8 w-8 rounded-full"
            src={session.user?.image!}
            alt="user image"
          />
          <p className="text-white">{session.user?.name!}</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
