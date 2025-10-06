import { Link } from 'react-router-dom';
import './Home.css';
import HomeBanner from "./HomeBanner.jsx";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Home() {
    return (
        <div className="home-container">
            <div className="top-right-buttons">
                <a
                    href="https://www.linkedin.com/in/shaoyuan-guo-9a0875264/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="top-button"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/andySaikou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="top-button"
                >
                    <FaGithub />
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="top-button"
                >
                    <FaFilePdf />  CV
                </a>
            </div>

            <h1>AndySaikou's Portfolio</h1>
            <p>
                I am a third year Computer Science student at Imperial College London.
                Currently seeking an industrial placement for spring and summer 2026.
                Please check out my projects and photos! (*^_^*)
            </p>

            <div className="banner-grid">
                <HomeBanner
                    link="/andysaikou.github.io/projects"
                    imageUrl="home_projects.jpg"
                    imageAlt="Computer Science Projects Banner"
                />
                <HomeBanner
                    link="/andysaikou.github.io/photography"
                    imageUrl="home_photography.jpg"
                    imageAlt="Photographs Banner"
                />
            </div>
        </div>
    );
}
