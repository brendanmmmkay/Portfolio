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

// import React, { useEffect, useRef } from 'react';

// const MuxPlayerComponent = ({ playbackId, ...props }) => {
//     const muxPlayerRef = useRef(null);

//     useEffect(() => {
//         if (muxPlayerRef.current) {
//             muxPlayerRef.current.setAttribute('playback-id', playbackId);
//         }
//     }, [playbackId]);
//     return (
//         // <mux-player ref={muxPlayerRef} {...props}></mux-player>

//         <div className="mux-player-wrapper">
//         <mux-player ref={muxPlayerRef} className="mux-player" {...props}></mux-player>
//         <style jsx>{`
//             .mux-player {
//                 --controls: none;
//             }
//         `}</style>
//     </div>
//     );
// };

// export default MuxPlayerComponent;





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

            // Disable controls by setting the 'controls' attribute to 'false'
            muxPlayer.setAttribute('controls', 'false');
        }
    }, [playbackId]);

    return (
        <div className="mux-player-wrapper">
            <mux-player ref={muxPlayerRef} className="mux-player" {...props}></mux-player>
            {/* Additional styling for disabling controls */}
            <style jsx>{`
                .mux-player {
                    --controls: none;
                }
            `}</style>
        </div>
    );
};

export default MuxPlayerComponent;