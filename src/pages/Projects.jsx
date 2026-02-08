import ProjectBanner from "./ProjectBanner.jsx";
import './Projects.css';
import {FaArrowLeft} from "react-icons/fa";
import ProjectBannerNoLink from "./ProjectBannerNoLink.jsx";

export default function Projects() {
  return (
      <div className="projects-page">
          <h1>Projects</h1>

          <div className="top-left-buttons">
              <a
                  href="/"
                  className="single-top-left-button"
              >
                  <FaArrowLeft/>
              </a>
          </div>

          <ProjectBanner
              title="Pinch - ongoing"
              description="A concise, minimalistic programming language based on dataflow that is represented by arrows. The interpreter for Pinch is under development."
              link="/#/projects/pinch"
              imageUrl="projects/pinch/logo.webp"
          />

          <ProjectBannerNoLink
              title="Journey On - ongoing"
              description="A travel planner for your upcoming journeys. (Couldn't find any existing app in this category that I think is good enough, so I'm writing my own one now.)"
              imageUrl="projects/journey_on/logo.webp"
          />

          <ProjectBanner
              title="Capture of You"
              description="A daily photo journal that captures one moment of your life each day. A place to reflect on your journey through time and bring your memories back to life."
              link="/#/projects/capture-of-you"
              imageUrl="projects/capture_of_you/logo.webp"
          />

          <ProjectBanner
              title="LangChain AI Document Assistant"
              description="An AI-powered tool capable of providing answers to questions relevant to the knowledge document uploaded by the user."
              link="/#/projects/ai-document-assistant"
              imageUrl="projects/ai_document_assistant/logo.webp"
          />

          <ProjectBanner
              title="Sleepy Camp - DRP group project"
              description="A digital touchpoint designed to help students improve sleep consistency, boost wellbeing, and stay motivated through community support."
              link="/#/projects/sleepy-camp"
              imageUrl="projects/sleepy_camp/logo.webp"
          />

          <ProjectBanner
              title="WACC Compiler - group project"
              description="A fully functional compiler for the WACC programming language. It translates a formal language into executable and efficient assembly code."
              link="/#/projects/wacc"
              imageUrl="projects/wacc/logo.webp"
          />

          <ProjectBannerNoLink
              title="PintOS Operating System - group project"
              description="Safe and robust implementations in a lightweight OS that enables scheduling, system calls, user programs and memory managment."
              imageUrl="projects/pintos/logo.webp"
          />

          <div className="divider-with-text">
              <span>Earlier Projects</span>
          </div>

          <ProjectBannerNoLink
              title="Web Socket Chess Game - group project"
              description="Multiplayer chess game over a LAN network. Chess logic and custom web socket functionalities 'joyfully' implemented in C."
              imageUrl="projects/web_chess_game/logo.webp"
          />

          <ProjectBannerNoLink
              title="Language Vocabulary Flash Card"
              description="A simple program that helps refresh your memory of new vocabulary. Implemented the old-fashioned way using Java and Java Swing."
              imageUrl="projects/jp_flash_card/logo.webp"
          />

      </div>
  );
}