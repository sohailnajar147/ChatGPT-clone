"use client";
import { Toaster } from "react-hot-toast";
import MessageSkeleton from "./MessageSkeleton";

function ClientProvider() {
  return (
    <>
      <Toaster position="top-right"></Toaster>
    </>
  );
}

export default ClientProvider;
