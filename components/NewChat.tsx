import { PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

function NewChat() {
  return (
    <div className="border border-[#4D4D4F] rounded-md p-2  flex items-center space-x-2 text-white hover:cursor-pointer">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
