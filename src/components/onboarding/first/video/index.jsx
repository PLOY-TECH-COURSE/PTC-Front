import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

const YouTubePlayer = forwardRef((props, ref) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (playerRef.current && playerRef.current.playVideo) {
        playerRef.current.playVideo();
      }
    },
  }));

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: 'Lgl474b8rT4',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: 'Lgl474b8rT4',
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
    };

    const handleVisibilityChange = () => {
      if (
        document.visibilityState === 'visible' &&
        playerRef.current &&
        playerRef.current.playVideo
      ) {
        playerRef.current.playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '110%',
        height: '110%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
});

export default YouTubePlayer;