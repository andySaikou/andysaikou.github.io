import ProjectBanner from "./ProjectBanner.jsx";
import './Projects.css';

export default function Projects() {
  return (
      <div className="projects-page">
        <h1>Projects</h1>

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
              description=""
              link="/#/projects/wacc"
              imageUrl="projects/wacc/logo.webp"
          />

          <ProjectBanner
              title="PintOS Operating System - group project"
              description=""
              link="/#/projects/pintos"
              imageUrl="projects/pintos/logo.webp"
          />

        <ProjectBanner
            title="Japanese Vocabulary Flash Card"
            description=""
            link="/#/projects/jp-flash-card"
            imageUrl="projects/jp_flash_card/logo.webp"
        />

      </div>
  );
}