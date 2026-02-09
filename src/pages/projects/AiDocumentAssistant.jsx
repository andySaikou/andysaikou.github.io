import './ProjectPage.css'
import {FaArrowLeft} from "react-icons/fa";
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

            <h1>LangChain AI Document Assistant</h1>

            <p>
                This project is an LLM-powered tool that answers user questions based on the contents of an uploaded
                knowledge document in the form of a PDF file. Built using LangChain, Chroma vector database and Gradio
                UI, it is capable of delivering relevant and domain-specific answers to user's question.
            </p>

            <div className="project-screenshot-section">
                <img
                    src="/projects/ai_document_assistant/screenshot.webp"
                    alt="assistant page screenshot"
                    className="project-screenshots-image"
                />
            </div>

            <p>
                The application uses Gradio to directly interact with the user, allowing them to upload documents,
                insert their query and later receive the AI answer all in one organised space. The uploaded PDF is
                handled by PyPDFLoader. All text in the document then goes through a recursive text splitter and an
                embedding model, before being inserted into a vector database. Finally, the model is created by
                combining the vector database retriever with a LLM model using LangChain.
            </p>

        </div>
    );
}
