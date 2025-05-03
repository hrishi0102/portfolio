import { FocusCards } from "@/components/ui/focus-cards";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FlipWords } from "@/components/ui/flip-words";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import edufi from "./assets/edufi.jpeg";
import patchpay from "./assets/patchpay.png";
import insightboard from "./assets/insightboard.png";
import spotify from "./assets/spotify.png";
import equilibri from "./assets/equilibAI.png";
import ai from "./assets/ai.png";
import pitchmembaby from "./assets/pitchmebaby.png";

export default function App() {
  const words = ["Full Stack", "Blockchain", "GenAI"];
  const cards = [
    {
      title: "PatchPay",
      period: "March 2025",
      src: patchpay,
      description:
        "Bug bounty platform which streamlines vulnerability reporting, submissions and instant payments with PaymanAI.",
      stack: ["React", "Express", "PaymanAI", "MongoDB"],
      buttons: [
        { label: "Website", url: "https://patchpay.co" },
        { label: "Source", url: "https://github.com/hrishi0102/patchpay_v0" },
        { label: "Demo", url: "https://www.youtube.com/watch?v=gtY00bJVLDM" },
      ],
    },
    {
      title: "InsightBoard",
      period: "February 2025",
      src: insightboard,
      description:
        "Digital drawing canvas with AI-powered analysis that helps visualize, interpret, and solve complex ideas and equations",
      stack: ["React", "Fabric.js", "Express", "GeminiAI"],
      buttons: [
        { label: "Website", url: "https://ai-insight-board.vercel.app" },
        { label: "Source", url: "https://github.com/hrishi0102/InsightBoard" },
        { label: "Demo", url: "" },
      ],
    },
    {
      title: "PitchMeBaby",
      period: "April 2025",
      src: pitchmembaby,
      description:
        "Interactive voice platform that lets users pitch bizarre objects to AI agent in 60 seconds, and if convinced win $$$",
      stack: ["React", "Node", "PaymanAI", "VapiAI"],
      buttons: [
        { label: "Website", url: "https://pitchmebaby.vercel.app/" },
        { label: "Source", url: "https://github.com/hrishi0102/pitchmebaby" },
        { label: "Demo", url: "#" },
      ],
    },
    {
      title: "EduFi",
      period: "January 2025",
      src: edufi,
      description:
        "Web3 education financing platform that combines Zkproofs, micro-financing and AI-driven course matching",
      stack: ["Solidity", "React", "AgentKit", "ZKVerify", "Circom"],
      buttons: [
        { label: "Website", url: "https://devfolio.co/projects/edufi-8ff4" },
        { label: "Source", url: "https://github.com/hrishi0102/EduFi" },
        { label: "Demo", url: "https://www.youtube.com/watch?v=ESfAMZJaa-M" },
      ],
    },
    {
      title: "Spotify MCP",
      period: "April 2025",
      src: spotify,
      description:
        "A Model Context Protocol (MCP) server that lets you interact with Spotify through Claude to search songs, create playlists, get recommendations",
      stack: ["typescript", "node"],
      buttons: [
        {
          label: "Website",
          url: "https://x.com/Hrishikeshhhh__/status/1909278208626995695",
        },
        { label: "Source", url: "https://github.com/hrishi0102/spotifyyy-mcp" },
        {
          label: "Demo",
          url: "https://x.com/Hrishikeshhhh__/status/1909278208626995695",
        },
      ],
    },
    {
      title: "AI Agents",
      period: "Present",
      src: ai,
      description:
        "Learning and experimenting with various AI agents and their applications.Includes GoogleADK, Langraph, VapiAI, and more.",
      stack: ["typescript", "python"],
      buttons: [
        {
          label: "Website",
          url: "https://github.com/hrishi0102/AI_Agents",
        },
        { label: "Source", url: "https://github.com/hrishi0102/AI_Agents" },
        {
          label: "Demo",
          url: "#",
        },
      ],
    },
    {
      title: "EquilibrAI",
      period: "November 2024",
      src: equilibri,
      description:
        "A powerful DeFi portfolio management platform with automated portfolio rebalancing and AI-powered insights in a single click.",
      stack: ["typescript", "python"],
      buttons: [
        {
          label: "Website",
          url: "https://devfolio.co/projects/equilibrai-0e7c",
        },
        { label: "Source", url: "https://github.com/hrishi0102/AI_Agents" },
        {
          label: "Demo",
          url: "https://www.youtube.com/watch?v=nixKqIJylK4",
        },
      ],
    },
  ];

  const achievements = [
    "3rd Place @ Nomura Kakhushin 7.0 – Offered PPO",
    "Winner @ Payman AI Dev Challenge",
    "Winner @ ETHIndia23, ETHIndia24, ETHMumbai24, BuildOn24, ZKOnline25, Syrus24",
    "300+ Users and 2000+ page visits within 48 hours of launch of PitchMeBaby",
    "250+ Attendees @ AR Workshop Conducted",
    "Interviewed on TV9 Marathi for Arduino Digital Rakhi",
  ];

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
      href: "https://x.com/Hrishikeshhhh__",
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
      <section className="mb-10 text-muted-foreground">
        <h1 className="text-5xl font-bold mt-8 text-black">Hrishikesh Patil</h1>
        <p className="text-lg mt-2">
          SWE @ Nomura | <FlipWords words={words} /> Engineer | 8x Hackathon
          Winner
        </p>
        <p className="text-base mt-12">
          experimenting, building and shipping products at the intersection of
          blockchain, genai and fintech.
        </p>
        check out my{" "}
        <a
          href="https://devfolio.co/@hrishi2002"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-sm underline underline-offset-4 text-black"
        >
          proof of work
        </a>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React.js",
            "Typescript",
            "Node.js",
            "Postgres",
            "Docker",
            "Solidity",
          ].map((skill, index) => (
            <span
              key={index}
              className="bg-black text-white px-3 py-1 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
          <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-indigo-600 text-white px-3 py-1 text-sm rounded-full shadow-md">
            Framework Agnostic ;)
          </span>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <FocusCards cards={cards} />
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Want to see more projects?
          </p>
          <a
            href="https://github.com/hrishi0102?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white text-sm bg-black rounded-full hover:bg-gray-800 transition"
          >
            See More on GitHub
          </a>
        </div>
      </section>

      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 w-max border border-gray-400 rounded-full bg-white shadow-md px-2 py-2">
        <FloatingDock items={dockLinks} />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-8 z-40 backdrop-blur-sm bg-white/70" />
    </main>
  );
}
