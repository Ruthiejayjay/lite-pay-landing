"use client";
import MobileNav from "@/components/General/MobileNavBar/Index";
import NavBar from "@/components/General/NavBar/Index";
import Header from "@/components/Landing/Header/Index";
import HowItWorks from "@/components/Landing/HowItWorks/Index";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <div className="block md:hidden p-4 md:p-8">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <NavBar />
        </div>
        <Header />
        <HowItWorks />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
