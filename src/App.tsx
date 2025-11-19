import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";

export default function App() {
  const dockLinks = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/hrishikesh-patil-2002/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://x.com/hrishikeshhh_",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://github.com/hrishi0102",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <Header />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-max border border-neutral-200 rounded-full bg-white/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.15)] px-4 py-3">
        <FloatingDock items={dockLinks} />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-8 z-40 backdrop-blur-sm bg-white/70" />
    </main>
  );
}
