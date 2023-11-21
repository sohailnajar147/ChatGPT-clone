"use client";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <NewChat />
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
