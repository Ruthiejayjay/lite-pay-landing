"use client";

import { useEffect } from "react";

export default function Home() {
  // const toggleTheme = () => {
  //   const htmlElement = document.documentElement;
  //   htmlElement.classList.toggle("dark");
  //   localStorage.setItem(
  //     "theme",
  //     htmlElement.classList.contains("dark") ? "dark" : "light"
  //   );
  // };

  // useEffect(() => {
  //   // Load theme from localStorage on initial load
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>Landing Page</div>
      {/* <button
        className="p-4 mt-4 bg-gray-200 dark:bg-gray-700 rounded-lg"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button> */}
    </main>
  );
}
