import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const navType = useNavigationType(); // Returns "POP", "PUSH", or "REPLACE"

    useEffect(() => {
        // Reset scroll on single-project-pages
        if (pathname.includes("/projects/") || pathname.includes("/photography") || navType === "PUSH") {
            window.scrollTo(0, 0);
        }
    }, [pathname, navType]);

    return null;
}