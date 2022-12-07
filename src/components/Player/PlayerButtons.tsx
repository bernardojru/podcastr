import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

interface PlayerButtons {
  episode: Episode;
}

export function PlayerButtons({ episode }: PlayerButtons) {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | any>(null);

  const {
    clearPlayerState,
    episodeList,
    isPlaying,
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffling,
    setPlayingState,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
  } = useContext(PlayerContext);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  return (
    <footer className={`self-stretch ${!episode ? "opacity-50" : ""}`}>
      <div className="flex items-center gap-2 text-sm">
        <span className="inline-block w-16 text-center">
          {convertDurationToTimeString(progress)}
        </span>
        <div className="flex-1">
          {episode ? (
            <Slider
              max={episode.duration}
              value={progress}
              onChange={() => handleSeek}
              trackStyle={{ backgroundColor: " #04D361" }}
              railStyle={{ backgroundColor: " #9f75ff" }}
              handleStyle={{ borderColor: " #04D361", borderWidth: 4 }}
            />
          ) : (
            <div className="w-full h-1 bg-purple-300 rounded-sm"></div>
          )}
        </div>
        <span className="inline-block w-16 text-center">
          {convertDurationToTimeString(episode?.duration ?? 0)}
        </span>
      </div>

      {episode && (
        <audio
          src={episode.url}
          ref={audioRef}
          autoPlay
          onEnded={handleEpisodeEnded}
          loop={isLooping}
          onPlay={() => setPlayingState(true)}
          onLoadedMetadata={setupProgressListener}
          onPause={() => setPlayingState(false)}
        />
      )}

      <div className="flex items-center justify-center mt-10 gap-6">
        <button
          type="button"
          className="bg-transparent border-none text-xs"
          disabled={!episode || episodeList.length === 1}
          onClick={toggleShuffling}
        >
          <img
            className={`${isShuffling && "isActive"}`}
            src="/shuffle.svg"
            alt="Embaralhar"
          />
        </button>
        <button
          onClick={playPrevious}
          type="button"
          className="bg-transparent border-none text-xs"
          disabled={!episode || !hasPrevious}
        >
          <img src="/play-previous.svg" alt="Tocar anterior" />
        </button>
        <button
          type="button"
          className="w-16 h-16 rounded-2xl bg-purple-400 flex items-center justify-center"
          disabled={!episode}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <img src="/pause.svg" alt="Pausar" />
          ) : (
            <img src="/play.svg" alt="Tocar" />
          )}
        </button>
        <button
          onClick={playNext}
          type="button"
          className="bg-transparent border-none text-xs"
          disabled={!episode || !hasNext}
        >
          <img src="/play-next.svg" alt="Tocar Próxima" />
        </button>
        <button
          type="button"
          className={`bg-transparent border-none text-xs`}
          disabled={!episode}
          onClick={toggleLoop}
        >
          <img
            className={`${isLooping && "isActive"}`}
            src="/repeat.svg"
            alt="Repetir"
          />
        </button>
      </div>
    </footer>
  );
}
