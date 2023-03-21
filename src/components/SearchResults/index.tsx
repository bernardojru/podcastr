import { SearchResultsContainer } from "./styles";

import Image from "next/image";
import Link from "next/link";
import { usePlayer } from "../../contexts/PlayerContext";
import { Play } from "phosphor-react";

interface Results {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  duration: number;
  thumbnail: string;
  durationAsString: string;
  url: string;
}

interface SearchResultsProps {
  results: Results[];
  allEpisodes: Results[];
  latestEpisodes: Results[];
}

export function SearchResults({
  results,
  allEpisodes,
  latestEpisodes,
}: SearchResultsProps) {
  const { play } = usePlayer();
  return (
    <SearchResultsContainer>
      {results.map((episode, _index) => (
        <div key={episode.id}>
          <span>
            <Image
              width={120}
              height={120}
              src={episode.thumbnail}
              alt={episode.title}
            />
          </span>
          <span>
            <Link href={`/episodes/${episode.id}`}>{episode.title}</Link>
          </span>
          <span>{episode.members}</span>
          <span className="published">{episode.publishedAt}</span>
          <span>{episode.durationAsString}</span>
          <span>
            <button onClick={() => play(episode)} type="button">
              <Play size={15} color="green" weight="fill" />
            </button>
          </span>
        </div>
      ))}
    </SearchResultsContainer>
  );
}
