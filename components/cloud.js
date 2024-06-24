import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const generateInitialClouds = () => {
    const clouds = [];
    const numberOfClouds = 5; // Adjust the number of initial clouds
    const windowWidth = window.innerWidth;
    const spacing = windowWidth / numberOfClouds;

    for (let i = 0; i < numberOfClouds; i++) {
        clouds.push({
            id: Math.random(),
            left: i * spacing,
            top: Math.random() * (window.innerHeight / 8),
        });
    }

    return clouds;
};

const MovingRectangles = () => {
    const [rectangles, setRectangles] = useState([]);

    useEffect(() => {
        // This ensures generateInitialClouds is called only on the client side
        setRectangles(generateInitialClouds());
    }, []);

    // Spawn rectangles less frequently and only in the top quarter
    useEffect(() => {
        const interval = setInterval(() => {
            if (rectangles.length < 5) {
                setRectangles(rectangles => [
                    ...rectangles,
                    { id: Math.random(), left: 0, top: Math.random() * (window.innerHeight / 34) },
                ]);
            }
        }, 7000); // Increase interval to make clouds more spread out

        return () => clearInterval(interval);
    }, [rectangles.length]);

    // Move rectangles and remove them if they go off-screen
    useEffect(() => {
        const interval = setInterval(() => {
            setRectangles(rectangles => rectangles.map(rect => ({
                ...rect,
                left: rect.left + 5, // Move each rectangle to the right
            })).filter(rect => rect.left < window.innerWidth)); // Remove rectangles that go off-screen
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Updated handleMouseOver function
    const handleMouseOver = id => {
        // First, start the fade-out animation by updating the state to include an 'isFadingOut' property
        setRectangles(rectangles => rectangles.map(rect => {
            if (rect.id === id) {
                return { ...rect, isFadingOut: true }; // Mark the rectangle as fading out
            }
            return rect;
        }));

        // Then, after a short delay to allow the fade-out animation to complete, remove the rectangle
        setTimeout(() => {
            setRectangles(rectangles => rectangles.filter(rect => rect.id !== id));
        }, 500); // Delay should match the duration of your fade-out animation
    };

    return (
        <div>
            {rectangles.map(rect => (
                <motion.div
                    key={rect.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: rect.isFadingOut ? 0 : 1 }} // Use the 'isFadingOut' property to control the opacity
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }} // Ensure this matches the timeout delay
                    className="absolute backdrop-blur-sm rounded-full" // Add 'dynamic-blur' class
                    style={{
                        left: `${rect.left}px`,
                        top: `${rect.top}px`,
                    }}
                    onMouseOver={() => handleMouseOver(rect.id)}
                >
                    <Image
                        src="/image/cloud.png"
                        alt="Cloud"
                        className=""
                        width={400}
                        height={200}
                        layout="fixed"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default MovingRectangles;