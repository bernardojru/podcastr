import { createContext, ReactNode, useContext, useState } from "react";

interface Episode {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

interface PlayerContextData {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  playList: (list: Episode[], index: number) => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffling: () => void;
  playNext: () => void;
  playPrevious: () => void;
  clearPlayerState: () => void;
  handleShowPlayer: () => void;
  show: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [show, setShow] = useState(true);

  function handleShowPlayer() { // mostrar o componente player
    setShow((state) => !state);
  }

  function play(episode: Episode) { // podcast isolado na página slug
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number) { // na lista, mostrar apenas o que foi clicado no player
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
    handleShowPlayer();
  }

  function togglePlay() { // informa se tem um episodio a tocar mudando o estado do botão
    setIsPlaying(!isPlaying);
  }

  const hasPrevious = currentEpisodeIndex > 0; // se tiver uma posição está (1) e quer dizer que ele clicou
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length; // verifica tanto se está no aleatório ou se tem uma posição menor que a quantia de podcast na lista é maior e permite avançar para o próximo.

  function playNext() { // avança o podcast estando aleatório ou quando tem ainda tem podcast na fila da lista
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      );
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() { // pega a posição do episodio atual e volta para a posição anterior
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function toggleLoop() { // ativa o modo repetitivo
    setIsLooping(!isLooping);
  }

  function toggleShuffling() { // ativa o modo aleatório
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state: boolean) { // verifica se está a tocar
    setIsPlaying(state);
  }

  function clearPlayerState() { // termina de reproduzir quando chega ao fim de uma lista e já está vazia
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider
      value={{
        show,
        handleShowPlayer,
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        play,
        togglePlay,
        setPlayingState,
        playList,
        playNext,
        playPrevious,
        hasNext,
        hasPrevious,
        toggleLoop,
        toggleShuffling,
        clearPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};
