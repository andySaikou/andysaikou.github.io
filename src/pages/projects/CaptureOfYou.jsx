import './ProjectPage.css'
import {FaArrowLeft, FaAppStoreIos} from "react-icons/fa";

export default function CaptureOfYou() {
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

            <h1>Capture of You</h1>

            <p>
                This project is especially meaningful to me. As a photography enthusiast, I’ve always been interested
                in how photography influences people’s lives — and in an age where everyone carries a camera in their
                pocket, I often wonder how we can truly preserve our most valuable memories: the small slices of
                everyday life. Capture of You is the exact embodiment of this idea. It is a daily photo journal that
                encourages you to pause and capture one meaningful moment each day. Over time, these moments come
                together to form a reflection of your life.
            </p>

            <div className="project-screenshot-section">
                <img
                    src="/projects/capture_of_you/app_preview.webp"
                    alt="AI Document Assistant"
                    className="project-screenshots-image"
                />
            </div>

            <a
                href="https://apps.apple.com/us/app/%E9%9A%8F%E5%BD%B1/id6740049318"
                target="_blank"
                rel="noopener noreferrer"
                className="project-page-button"
            >
                <FaAppStoreIos/> Download from App Store
            </a>

            <p>
                The app is implemented using native iOS technologies, leveraging SwiftUI for a modern and responsive
                interface, and SwiftData for efficient and secure data management. I designed the UI from
                the ground up to deliver easy-to-navigate interfaces while offering the user flexibility on how they
                would like the pages to be displayed. Custom data access controls were specially designed to collect
                the full information from each uploaded photo, and closely integrated with the app's data storage and
                UI elements.
            </p>

            <p>
                A lot of focus was also paid on the scalability and adaptability of the app. It provides support across
                all device sizes and different iOS versions, while localisation and region-specific data formatting
                make the app suitable for users worldwide. These design choices ensure that Capture of You remains
                accessible, intuitive, and visually appealing; at the same time builds a strong foundation for any
                future enhancement or expansion.
            </p>

        </div>
    );
}
