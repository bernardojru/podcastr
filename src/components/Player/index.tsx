import { PlayerContainer, ShowButton, PlayerInfo, PlayerEmpty } from "./styles";
import Image from "next/image";
import { usePlayer } from "../../contexts/PlayerContext";
import { PlayerButtons } from "./PlayerButtons";

export function Player() {
  const { handleShowPlayer, show } = usePlayer();
  const { episodeList, currentEpisodeIndex } = usePlayer();

  const episode = episodeList[currentEpisodeIndex];

  return (
    <PlayerContainer
      style={{ transform: `translateX(${show ? "100%" : "0%"})` }}
    >
      <ShowButton onClick={handleShowPlayer} />
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <PlayerInfo>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            alt={episode.title}
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </PlayerInfo>
      ) : (
        <PlayerEmpty>
          <strong>Selecione um podcast para ouvir</strong>
        </PlayerEmpty>
      )}

      <PlayerButtons episode={episode} />
    </PlayerContainer>
  );
}
