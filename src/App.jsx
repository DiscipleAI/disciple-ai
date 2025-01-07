// App.jsx
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import LoadingScreen1 from "./LoadingScreen1";
import MainScreen1 from "./MainScreen1";
import PauseIcon from "./assets/PauseIcon";
import PlayIcon from "./assets/PlayIcon";
import Manifesto from "./components/Manifesto";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMainScreen, setIsMainScreen] = useState(false);
  const [isManifestoScreen, setIsManifestoScreen] = useState(false);
  const [audio] = useState(
    () =>
      new Audio(
        "https://firebasestorage.googleapis.com/v0/b/westcoasterbc-chat-app.appspot.com/o/audio%2FAmbient%20Study%20Music%20To%20Concentrate%20-%204%20Hours%20of%20Music%20for%20Studying%2C%20Concentration%20and%20Memory%20(1).mp3?alt=media&token=38e68034-dbc2-4e4d-8339-fa562cbadddb"
      )
  ); // Initialize audio only once
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null); // Reference to the audio element

  useEffect(() => {
    const handleClick = () => {
      playAudio();
      document.removeEventListener("click", handleClick); // Remove event listener after the first click
    };

    // Add click event listener for initial play due to autoplay restrictions
    document.addEventListener("click", handleClick);

    const handleEnded = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        playAudio(); // Replay the audio once it ends
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleEnded);
    }

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.pause(); // Stop the audio when component unmounts
        audioRef.current.currentTime = 0; // Reset audio position if needed
      }
    };
  }, []);

  // useEffect(() => {
  //   alert(
  //     "The AI may be temporarily unavailable for a minute due to high demand. We're working to resolve it quickly—thanks for your patience!"
  //   );
  // }, []);

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Failed to play sound:", error);
        });
    }
  };

  useEffect(() => {
    // const timer = setTimeout(() => setIsLoading(false), 3000);
    // const timer2 = setTimeout(() => setIsMainScreen(true), 5000);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsMainScreen(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      // clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {/* <AudioPlayer /> */}
      <div
        className="fixed bottom-1 left-5 z-50"
        onClick={() => (isPlaying ? pauseAudio() : playAudio())}
      >
        <video
          ref={audioRef}
          src="https://firebasestorage.googleapis.com/v0/b/westcoasterbc-chat-app.appspot.com/o/audio%2FAmbient%20Study%20Music%20To%20Concentrate%20-%204%20Hours%20of%20Music%20for%20Studying%2C%20Concentration%20and%20Memory%20(1).mp3?alt=media&token=38e68034-dbc2-4e4d-8339-fa562cbadddb"
          loop
          playsInline
          className="hidden"
        />

        {isPlaying ? (
          <PauseIcon className="animate-pulse text-black w-[40px] h-[40px] cursor-pointer hover:scale-125 transition-transform duration-100" />
        ) : (
          <PlayIcon className="animate-pulse text-black w-[40px] h-[40px] cursor-pointer hover:scale-125 transition-transform duration-100" />
        )}
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LoadingScreen1 setIsLoading={setIsLoading} />
          </motion.div>
        )}

        {/* {!isLoading && !isMainScreen && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LandingScreen1 setIsMainScreen={setIsMainScreen} />
          </motion.div>
        )} */}

        {!isLoading && isMainScreen && isManifestoScreen && (
          <motion.div
            key="manifesto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Manifesto setIsManifestoScreen={setIsManifestoScreen} />
          </motion.div>
        )}

        {!isLoading && isMainScreen && !isManifestoScreen && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MainScreen1 setIsManifestoScreen={setIsManifestoScreen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
