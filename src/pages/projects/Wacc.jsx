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

            <h1>WACC Compiler</h1>

            <p>
                The WACC Compiler project involved designing and implementing a fully functional compiler for the
                WACC programming language, developed in Scala using the Parsley parser combinator library and a custom
                backend code generation module. While the primary goal was to closely adhere to the formal language
                specification, it was also crucial to develop the compiler into a modular, extensible and maintainable
                system. This required not only a deep understanding of compiler theory, but also the ability to
                engineer a clean and consistent software architecture capable of handling real-world program inputs
                and edge cases.
            </p>

            <p>
                The compiler was divided into separated phases — parsing, syntax and semantic analysis, code generation
                and optimisation. Each component was designed to operate independently yet they integrate seamlessly
                with one another. Careful attention was given to creating syntax, type, and pre-caught runtime errors
                messages with precise and informative diagnostics, helping the programmer identify the root causes of
                issues in their programs.
            </p>

            <p>
                To verify correctness and maintain long-term reliability, we built a comprehensive testing framework
                that combined unit tests for individual components with integration tests for complete compiler
                pipelines. This framework validated the compiler's compliance with the WACC language specification
                and guaranteed consistent behaviour across the development process. Through iterative refinement and
                systematic debugging, we ensured that the compiler remained both reliable and accurate across a wide
                variety of test programs.
            </p>

        </div>
    );
}
