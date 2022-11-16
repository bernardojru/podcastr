import Image from "next/image";
import { useContext } from "react";
import { usePlayer } from "../../contexts/PlayerContext";
import { PlayerButtons } from "./PlayerButtons";


export function Player() {
  const { episodeList, currentEpisodeIndex } = usePlayer()

  const episode = episodeList[currentEpisodeIndex];
  return (
    <div className="py-12 px-16 w-96 h-screen sticky top-0 bg-purple-500 text-white flex flex-col items-center justify-between">
      <header className="flex items-center gap-4">
        <img src="/playing.svg" alt="Tocando agora" />
        <strong className="font-semibold">Tocando agora</strong>
      </header>

      {episode ? (
        <div className="text-center">
          <Image
            className="rounded-3xl"
            width={592}
            height={592}
            src={episode.thumbnail}
            alt={episode.title}
          />
          <strong className="block mt-8 text-xl font-semibold leading-7">{episode.title}</strong>
          <span className='block mt-4 opacity-60 leading-6'>{episode.members}</span>
        </div>
      ) : (
        <div className="w-full h-80 border border-dashed border-purple-300 rounded-3xl bg-gradient p-16 text-center flex items-center justify-center">
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <PlayerButtons episode={episode}/>
    </div>
  );
}
