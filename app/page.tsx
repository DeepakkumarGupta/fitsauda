import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 lg:p-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get ready for something amazing from Fitsauda!
        </p>
      </div>

      <div className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-slate-900 to-purple-900 p-2 sm:p-4 lg:p-6 rounded-full">
        fitsauda.com
      </div>

      <div className="mb-8 text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-orange-500 to-purple-800 bg-clip-text text-transparent">
          Coming Soon!
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-8">
          We are working on something awesome for you all fitness enthusiasts!
          Stay tuned!
        </p>
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="text-base sm:text-lg lg:text-xl mb-2">
            Follow us on Instagram for updates:
          </p>
          <a
            href="https://www.instagram.com/fitsaudaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline text-blue-300"
          >
            <FaInstagram size={20} />
            @fitsaudaa
          </a>
        </div>
      </div>
    </main>
  );
}
