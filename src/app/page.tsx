import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Services />
        <TechStack />
        <Projects />
        <Process />
        <WhyWorkWithMe />
        <ContactCTA />
      </main>
      <Footer />
      <AIChat />
    </>
  );
}
