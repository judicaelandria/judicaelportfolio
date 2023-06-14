"use client";
import * as React from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

interface PlayerProps {
  /** video player source */
  src: string;
}

export const VideoPlayer = ({ src }: PlayerProps) => {
  const playerRef = React.useRef<HTMLVideoElement | null>();
  const [isPaused, setIsPaused] = React.useState(false);
  const [showControl, setShowControl] = React.useState(false);

  React.useLayoutEffect(() => {
    if (playerRef) {
      playerRef.current?.classList.remove("hidden");
    }
  }, []);

  const handleShowControl = React.useCallback(
    () => setShowControl(!showControl),
    [showControl]
  );

  const handlePlayorPauseVideo = React.useCallback(() => {
    if (isPaused) playerRef.current?.play();
    else playerRef.current?.pause();
    setShowControl(false);
  }, [isPaused]);
  return (
    <div
      className="relative w-full h-auto max-h-96"
      onMouseEnter={handleShowControl}
      onMouseLeave={handleShowControl}
    >
      <video
        className="w-full h-full rounded-md"
        id="video-player"
        // we use callback ref to avoid to use useffect
        // when getting if the video is paused or not
        // because playerRef.current.paused is not sync updated
        ref={(ref) => {
          playerRef.current = ref;
          setIsPaused(ref?.paused!);
        }}
        src={src}
        autoPlay
        muted
        loop
      />
      {showControl ? (
        <div className="absolute w-full h-full bg-dark/20 flex justify-center items-center inset-0 rounded-md duration-200 transition-all">
          <div className="bg-white rounded-full flex items-center justify-center w-14 h-14 mix-blend-screen">
            {isPaused ? (
              <PlayIcon
                className="w-8 cursor-pointer text-dark"
                onClick={handlePlayorPauseVideo}
              />
            ) : (
              <PauseIcon
                className="w-8 cursor-pointer text-dark"
                onClick={handlePlayorPauseVideo}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
