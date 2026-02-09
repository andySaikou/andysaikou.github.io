import './ProjectPage.css'
import {FaArrowLeft, FaGithub} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export default function Pinch() {
    const navigate = useNavigate();

    return (
        <div className="single-project-page">

            <div className="top-left-buttons">
                <a
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                    className="single-top-left-button"
                    style={{ cursor: 'pointer' }}
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
