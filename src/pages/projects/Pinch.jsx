import './ProjectPage.css'
import {FaArrowLeft, FaGithub} from "react-icons/fa";

export default function Pinch() {
    return (
        <div className="single-project-page">

            <div className="top-left-buttons">
                <a
                    href="/#/projects"
                    className="single-top-left-button"
                >
                    <FaArrowLeft/>
                </a>
            </div>

            <h1>Pinch</h1>

            <p>
                Pinch is a concise, minimalistic programming language based on dataflow that is represented by arrows.
                The interpreter for Pinch is under development. As a sneak peek, here are some example programs:
            </p>

            <div className="project-screenshot-section">
                <img
                    src="/projects/pinch/example_programs.webp"
                    alt="example programs"
                    className="project-screenshots-image"
                />
            </div>

            <a
                href="https://github.com/andySaikou/Pinch"
                target="_blank"
                rel="noopener noreferrer"
                className="project-page-button"
            >
                <FaGithub/> View on GitHub
            </a>

        </div>
    );
}
