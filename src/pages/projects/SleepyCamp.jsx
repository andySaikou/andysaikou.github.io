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

            <h1>Sleepy Camp</h1>

            <p>
                Sleepy Camp is a mobile app that helps university students develop healthier and more consistent
                sleep routines. It addresses the growing issue of student sleep deprivation, where stress, workload,
                and late-night phone use often lead to poor rest and burnout. By combining sleep tracking, personalized
                bedtime goals, and social accountability, the app turns good sleep into a shared and rewarding
                experience. Users can set sleep targets, track their progress, and see when their friends are asleep —
                creating gentle motivation to log off and rest on time.
            </p>

            <div className="project-screenshot-section">
                <img
                    src="/projects/sleepy_camp/app_preview.webp"
                    alt="app_preview"
                    className="project-screenshots-image"
                />
            </div>

            <a
                href="https://github.com/orgs/deepsleep-project/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="project-page-button"
            >
                <FaGithub/> View on GitHub
            </a>

            <p>
                The design of Sleepy Camp was shaped directly by the real needs and feedback of university students.
                Using a human-centered and iterative development process, our team continuously refined the app based
                on insights gathered from user interviews and testing sessions, with the aim to balance feedback,
                clarity, and alignment to user habits, ensuring the interface felt both supportive and effortless
                to use. Through this demand-driven process, we created an app that resonates with and addresses
                students’ daily struggles.
            </p>

            <p>
                On the technical side, Sleepy Camp was built to be efficient, scalable, and accessible. Our team chose
                Flutter for its cross-platform capabilities, allowing one codebase to serve both Android and iOS users
                with smooth, native-like performance. On the backend, Haskell provided a robust and reliable foundation
                through its strong type system and functional purity using the Scotty framework with SQLite.
                Together, these technologies ensured that Sleepy Camp delivered a secure, responsive, and enjoyable
                user experience.
            </p>

        </div>
    );
}
