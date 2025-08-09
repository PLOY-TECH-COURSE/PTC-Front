import React, { useEffect, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import * as S from "../style.jsx";

const YouTubePlayer = forwardRef((props, ref) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (playerRef.current?.playVideo) {
        playerRef.current.playVideo();
      }
    },
  }));

  const initPlayer = () => {
    if (!containerRef.current) return;
    console.log('initPlayer');
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

  useEffect(() => {
    let isMounted = true;

    const onYouTubeIframeAPIReady = () => {
      if (isMounted) {
        initPlayer();
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      isMounted = false;
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