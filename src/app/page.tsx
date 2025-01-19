"use client";
import MobileNav from "@/components/General/MobileNavBar/Index";
import NavBar from "@/components/General/NavBar/Index";
import Header from "@/components/Landing/Header/Index";
import HowItWorks from "@/components/Landing/HowItWorks/Index";
import About from "@/components/Landing/About/Index";
import VirtualCard from "@/components/Landing/VirtualCard/Index";
import EverythingYouNeedToKnow from "@/components/Landing/EverythingYouNeedToKnow/Index";
import Testimonial from "@/components/Landing/Testimonial/Index";
import FAQ from "@/components/Landing/FAQ/Index";
import GetInTouch from "@/components/Landing/GetInTouch/Index";
import Footer from "@/components/Landing/Footer/Index";

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
        {/* <Header /> */}
        <HowItWorks />
        <About />
        <VirtualCard />
        <EverythingYouNeedToKnow />
        <Testimonial />
        <FAQ />
        <GetInTouch />
        <Footer />
      </main>
    </div>
  );
}
