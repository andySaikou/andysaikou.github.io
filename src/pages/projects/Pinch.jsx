import './ProjectPage.css'
import {FaArrowLeft, FaCode, FaGithub} from "react-icons/fa";
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
                    style={{cursor: 'pointer'}}
                >
                    <FaArrowLeft/>
                </a>
            </div>

            <h1>Pinch</h1>

            <p>
                Pinch is a simple, concise and minimalist programming language designed to explore an explicit
                data flow syntax using unique arrow directional operators. Pinch runs seamlessly on a lightweight
                interpreter built in C.
            </p>

            <p>
                <b>You don't need to install anything to write a Pinch program.</b> An interactive playground is built,
                thanks to WebAssembly, where you can write and run your programs with ease.
            </p>

            <div className="project-screenshot-section">
                <img
                    src="/projects/pinch/pinch_playground.webp"
                    alt="web pinch playground"
                    className="project-screenshots-image"
                />
            </div>

            <a
                href="https://andysaikou.github.io/Pinch/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-page-button"
                style={{marginRight: '40px'}}
            >
                <FaCode/> Web Playground
            </a>

            <a
                href="https://github.com/andySaikou/Pinch"
                target="_blank"
                rel="noopener noreferrer"
                className="project-page-button"
            >
                <FaGithub/> View on GitHub
            </a>

            <p>
                In most programming languages, assignment is rigid. You must write <code
                className="code">a = 5</code> for instance, and read from
                right to left. Pinch challenges this idea that we have taken for granted by decoupling the action
                from its operational direction. By using explicit directional
                operators (<code
                className="code">-&gt;</code> and <code
                className="code">&lt;-</code>), the language treats assignment not as a mathematical equality,
                but as a movement of data, so that you can assign to a variable either with <code
                className="code">a &lt;- 5</code> or <code
                className="code">5 -&gt; a</code>.

                This philosophy naturally extends to functions. Instead of wrapping arguments in parentheses like <code
                className="code">add(x,
                y)</code>, a Pinch function collects parameters following in from its surroundings. A call to <code
                className="code">ADD</code> can be written as <code className="code">[a,b] -&gt; ADD</code> or <code
                className="code">a -&gt; ADD &lt;- b</code> or <code
                className="code">ADD &lt;- [a,b]</code>. This syntax helps build a
                visualisation of the flow of data from source to destination, while giving the programmer ultimate
                flexibility over their code. (For the complete language syntax, check out the GitHub repository.)
            </p>

            <p>
                The Pinch interpreter is written in C to take advantage of its portability and performance.
                The architecture consists of three separate stages. The <b>lexer</b> takes raw source code and
                iteratively consume appropriate tokens from it. The <b>parser</b> analyses these tokens to verify
                syntax correctness and construct an abstract representation for each instruction. Finally,
                the <b>interpreter</b> execute the instructions line by line on a runtime environment that tracks
                program state and manages memory allocation.
            </p>

            <p>
                Building Pinch was a deep dive into minimalist design and low-level logic. It changes the way you look
                at code when thinking about the different ways a computer understands a line of instruction.
                I hope you have as much fun playing with it as I did building it.
            </p>

        </div>
    );
}
