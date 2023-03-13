import {
  PlayerButtonsContainer,
  SliderContainer,
  ButtonsContainer,
} from "./styles";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../../../contexts/PlayerContext";
import { convertDurationToTimeString } from "../../../utils/convertDurationToTimeString";
import { Repeat, Shuffle, SkipBack, SkipForward } from "phosphor-react";

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
    <PlayerButtonsContainer>
      <SliderContainer>
        <span>{convertDurationToTimeString(progress)}</span>
        <div className="slider">
          {episode ? (
            <Slider
              max={episode.duration}
              value={progress}
              onChange={() => handleSeek}
              trackStyle={{ backgroundColor: " #04D361" }}
              railStyle={{ backgroundColor: " ##5659EB" }}
              handleStyle={{ borderColor: " #04D361", borderWidth: 4 }}
            />
          ) : (
            <div className="empty"></div>
          )}
        </div>
        <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
      </SliderContainer>

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

      <ButtonsContainer>
        <button
          type="button"
          disabled={!episode || episodeList.length === 1}
          onClick={toggleShuffling}
        >
          <Shuffle
            size={23}
            color="white"
            className={`${isShuffling && "isActive"}`}
          />
        </button>
        <button
          onClick={playPrevious}
          type="button"
          disabled={!episode || !hasPrevious}
        >
          <SkipBack size={23} color="white" weight="fill" />
        </button>
        <button
          type="button"
          className="play"
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
          disabled={!episode || !hasNext}
        >
          <SkipForward size={23} color="white" weight="fill" />
        </button>
        <button type="button" disabled={!episode} onClick={toggleLoop}>
          <Repeat
            size={23}
            color="white"
            weight="fill"
            className={`${isLooping && "isActive"}`}
          />
        </button>
      </ButtonsContainer>
    </PlayerButtonsContainer>
  );
}
