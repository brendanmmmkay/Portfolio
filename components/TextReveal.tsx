import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TextRevealTW = () => {
    const texts = [
        "I make aspirational value real through",
        "user experience design & product strategy."
    ];
    const [animationKey, setAnimationKey] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            setAnimationKey(prevKey => prevKey + 1);
        }
    }, [inView]);

    return (
      <div ref={ref}>
          {texts.map((line, lineIndex) => (
              <h1 key={`${animationKey}-${lineIndex}`} className={`overflow-hidden text-3xl md:text-3xl tracking-loose font-Avenir text-stone-700 leading-tighter md:leading-tighter ${inView ? 'animate-text-reveal' : ''}`}>
                  {line.split('').map((char, index) => {
                      // Calculate delay, adding the total animation time of the first line to the second line's characters
                      const baseDelay = index * 0.02;
                      const totalFirstLineAnimationTime = texts[0].length * 0.02;
                      const delay = lineIndex === 1 ? baseDelay + totalFirstLineAnimationTime : baseDelay;
  
                      return (
                          <span
                              className="inline-block [animation-fill-mode:backwards]"
                              key={`${animationKey}-${lineIndex}-${index}`}
                              style={{ animationDelay: `${delay}s` }}
                          >
                              {char === " " ? "\u00A0" : char}
                          </span>
                      );
                  })}
                  {lineIndex === 0 && <br />}
              </h1>
          ))}
      </div>
  );
};

export default TextRevealTW;