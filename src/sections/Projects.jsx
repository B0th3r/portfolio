import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import arcadeBob from '@/assets/ArcadeBob.png';
import okbLogin from '@/assets/OKB-Login.png';
import okbPatientPortal from '@/assets/OKB-PatientPortal.png';
import okbWalkthrough from '@/assets/OKB-Walkthrough.mp4';
import okbPatientWalkthrough from '@/assets/OKB-PatientWalkthrough.mp4';
import arcadeNeighborhood from '@/assets/ArcadeBob-Neighborhood.mp4';
import arcadeCity from '@/assets/ArcadeBob-City.mp4';
import arcadePD from '@/assets/ArcadeBob-PD.mp4';
import CityMap from '@/assets/ArcadeBob-CityMap.png';
import PdMap from '@/assets/ArcadeBob-PdMap.png';
import Connect from '@/assets/ArcadeBob-MultiGameplay.png';
import Lobby from '@/assets/ArcadeBob-Lobby.png';
import LobbyJoin from '@/assets/ArcadeBob-LobbyJoin.png';
import Blooms from '@/assets/Happiness-Blooms.png';

export const projects = [
  {
    title: "Arcade Bob",
    image: arcadeBob,
    madeWith: ["JavaScript", "Node.js", "Socket.IO", "React", "Tailwind", "AWS"],
    description:
      "A game platform featuring a branching single-player detective story where players explore multiple locations, solve a main case and side quests, there is also a multiplayer arcade mode for head to head online matches.",
    liveUrl: "https://arcadebob.com",
    repoUrl: "https://github.com/B0th3r/Arcade-Bob",
    gallery: [
      {
        type: "video",
        src: arcadeNeighborhood,
        poster: arcadeBob,
      },
      {
        type: "video",
        src: arcadeCity,
        poster: CityMap,
      },
      {
        type: "img",
        src: Connect
      },
      {
        type: "img",
        src: Lobby
      },
      {
        type: "video",
        src: arcadePD,
        poster: PdMap,
      },
      {
        type: "img",
        src: LobbyJoin
      },
    ],
  },
  {
    title: "OKB Portal",
    image: okbLogin,
    madeWith: ["JavaScript", "MySQL", "PHP", "AWS", "Apache"],
    description:
      "Medical web application built for the OKB Hope Foundation to streamline patient care. The portal provides role-based access for patients, doctors, nurses, lab technicians, and pharmacists. It supports visit tracking, vitals entry, lab orders with results, and secure prescription fulfillment. I was solely responsible for designing, developing, and deploying both the backend and frontend.",
    gallery: [
      {
        type: "video",
        src: okbWalkthrough,
        poster: okbLogin,
      },
      {
        type: "video",
        src: okbPatientWalkthrough,
        poster: okbPatientPortal,
      },
    ],
  },
  {
    title: "Happiness Blooms Counseling",
    image: Blooms,
    madeWith: ["React", "JavaScript"],
    description:
      "A website for Happiness Blooms Counseling",
    liveUrl: "https://happinessbloomsllc.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-14"
        >
          My <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-rose-300 bg-clip-text text-transparent">Work</span>
        </motion.h2>

        <div className="mt-14 space-y-20">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center text-sm text-zinc-400"
        >
          Looking for details? Ask me about specific projects or deliverables.
        </motion.div>
      </div>


    </section>
  );
}
