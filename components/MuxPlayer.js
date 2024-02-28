// import React from 'react';

// const MuxDynamic = ({ streamType, playbackId, metadataVideoTitle, metadataViewerUserId, primaryColor, secondaryColor, autoplay, className }) => {
//   return (
//     <div className={`relative object-contain ${className}`}>
//       {/* Your MuxPlayer component JSX */}
//     </div>
//   );
// };

// export default MuxDynamic;

// import React, { useEffect } from 'react';

// const MuxPlayerComponent = ({ playbackId }) => {
//     useEffect(() => {
//         const muxPlayer = document.querySelector('mux-player');
//         if (muxPlayer) {
//             muxPlayer.setAttribute('playback-id', playbackId);
//         }
//     }, [playbackId]);

//     return (
//         <div>
//             {/* Your JSX for rendering the Mux Player */}
//             <mux-player></mux-player>
//         </div>
//     );
// };

// export default MuxPlayerComponent;





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

        }
    }, [playbackId]);

    return (
        <div className="mux-player-wrapper">
            <mux-player ref={muxPlayerRef} className="mux-player" {...props}></mux-player>
        </div>
    );
};

export default MuxPlayerComponent;