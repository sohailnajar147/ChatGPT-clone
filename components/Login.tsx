"use client";
import { signIn } from "next-auth/react";
function Login() {
  return (
    <div className="flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
      {/* Left Column */}
      <div className="hidden md:relative text-white font-bold text-5xl bg-[#00002e] flex-1 flex-col justify-center px-5 pt-8  md:flex md:px-6 md:py-[22px] lg:px-8">
        <h1>Get started with Chat GPT</h1>
        <h1>RIGHT NOW!</h1>
      </div>

      {/* Right Column */}
      <div className="relative flex h-screen flex-col items-center justify-between font-bold px-5 py-8 bg-black text-white md:px-6">
        <div></div>
        <div className="text-center">
          <h2 className="text-[20px] leading-[1.2] md:text-[32px] md:leading-8">
            Get started
          </h2>
          <button
            onClick={() => {
              signIn("google");
            }}
            className="mt-5 w-full max-w-[440px] relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]"
          >
            Log in with google
          </button>
        </div>
        <div className="text-center">Created by sohail</div>
      </div>
    </div>
  );
}

export default Login;
