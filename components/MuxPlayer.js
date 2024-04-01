

// IT WORKS

import React, { useEffect, useRef } from 'react';

const MuxPlayerComponent = ({ playbackId, ...props }) => {
    const muxPlayerRef = useRef(null);

    useEffect(() => {
        // Find the Mux player element
        const muxPlayer = muxPlayerRef.current;

        // Check if the Mux player element exists
        if (muxPlayer) {
            // Set the playback ID attribute
            muxPlayer.setAttribute('playback-id', playbackId);

            // Disable controls using CSS custom properties
            muxPlayer.style.setProperty('--controls', 'none');

            // Mute the video
            muxPlayer.setAttribute('muted', '');

            // Enable autoplay
            muxPlayer.setAttribute('autoplay', '');

            // Enable looping
            muxPlayer.setAttribute('loop', '');

            // Set border radius for the inner mux-player element
            // muxPlayer.style.borderRadius = '8px';
        }
    }, [playbackId]);

    return (
        <div className="" >
            <mux-player ref={muxPlayerRef} className="mux-player"  {...props}></mux-player>
        </div>
    );
};

export default MuxPlayerComponent;
