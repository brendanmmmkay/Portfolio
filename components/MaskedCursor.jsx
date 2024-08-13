import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MaskedCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const setFromMouseMove = (e) => {
            setMousePosition({ x: e.pageX, y: e.pageY });
        };
        const checkIfLinkHover = (e) => {
            // Check if the hovered element or its parent is a link
            const isLink = e.target.closest('a');
            setIsHovered(!!isLink);
        };

        window.addEventListener("mousemove", setFromMouseMove);
        // Listen for mouseover and mouseout to handle link hover states
        document.addEventListener("mouseover", checkIfLinkHover);
        document.addEventListener("mouseout", checkIfLinkHover);

        return () => {
            window.removeEventListener("mousemove", setFromMouseMove);
            document.removeEventListener("mouseover", checkIfLinkHover);
            document.removeEventListener("mouseout", checkIfLinkHover);
        };
    }, []);

    const size = isHovered ? "450" : "30";

    return (
        <motion.div
            className="mask"
            animate={{
                WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
                WebkitMaskSize: `${size}px`,
            }}
            transition={{ ease: "backOut", duration: 0.4 }}
        >
            {/* Content inside the mask */}
        </motion.div>
    );
};

export default MaskedCursor;