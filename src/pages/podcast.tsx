import {
  PodcastContainer,
  PodcastConst,
  LatestEpisodeContainer,
  AllEpisodeContainer,
} from "../styles/pages/podcast";
import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import { api } from "../lib/axios";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import { usePlayer } from "../contexts/PlayerContext";
import { useThemes } from "../hooks/useThemes";
import { MagnifyingGlass } from "phosphor-react";
import { useSession } from "next-auth/react";
import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";

interface Episodes {
  id: string;
  title: string;
  members: string;
  publishedAt: string;
  duration: number;
  thumbnail: string;
  durationAsString: string;
  url: string;
}

interface PodcastProps {
  latestEpisodes: Episodes[];
  allEpisodes: Episodes[];
}

export default function Podcast({ latestEpisodes, allEpisodes }: PodcastProps) {
  const { playList } = usePlayer();
  const { themes } = useThemes();
  const { data: session } = useSession();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const episodeList = [...latestEpisodes, ...allEpisodes];

  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:5000/episodes?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  return (
    <>
      <Head>
        <title>Podcast | Podcastr</title>
      </Head>
      <Header />
      <PodcastContainer
        style={{ background: `${themes === "dark" ? "#131313" : "#eee"}` }}
      >
        <PodcastConst>
          <LatestEpisodeContainer>
            <div>
              <h2>??ltimos lan??amentos</h2>

              {session && (
                <form onSubmit={handleSearch}>
                  <input
                    type="search"
                    placeholder="pesquisar por mais podcats"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button type="submit">
                    <MagnifyingGlass size={20} color="#fff" />
                  </button>
                </form>
              )}
            </div>

            <ul>
              {latestEpisodes.map((latestEpisode, index) => (
                <li key={latestEpisode.id}>
                  <Image
                    width={192}
                    height={192}
                    src={latestEpisode.thumbnail}
                    alt={latestEpisode.title}
                  />

                  <div>
                    <Link href={`/episodes/${latestEpisode.id}`}>
                      {latestEpisode.title}
                    </Link>
                    <p>{latestEpisode.members}</p>
                    <span>
                      {latestEpisode.publishedAt},{" "}
                      {latestEpisode.durationAsString}
                    </span>
                  </div>

                  <button
                    onClick={() => playList(episodeList, index)}
                    type="button"
                  >
                    <img src="/play-green.svg" alt="" />
                  </button>
                </li>
              ))}
            </ul>
          </LatestEpisodeContainer>

          <AllEpisodeContainer>
            <h2>Todos epis??dios</h2>
            {results.length > 0 ? (
              <SearchResults
                results={results}
                allEpisodes={allEpisodes}
                latestEpisodes={latestEpisodes}
              />
            ) : (
              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <th></th>
                    <th>PODCAST</th>
                    <th>INTEGRANTES</th>
                    <th>DATA</th>
                    <th>DURA????O</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allEpisodes.map((episode, index) => (
                    <>
                      <div />
                      <tr key={episode.id}>
                        <td>
                          <Image
                            width={120}
                            height={120}
                            src={episode.thumbnail}
                            alt={episode.title}
                          />
                        </td>
                        <td>
                          <Link href={`/episodes/${episode.id}`}>
                            {episode.title}
                          </Link>
                        </td>3
                        <td>{episode.members}</td>
                        <td className="published">{episode.publishedAt}</td>
                        <td>{episode.durationAsString}</td>
                        <td>
                          <button
                            onClick={() =>
                              playList(
                                episodeList,
                                index + latestEpisodes.length
                              )
                            }
                            type="button"
                          >
                            <img src="/play-green.svg" alt="Tocar epis??dio" />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            )}
          </AllEpisodeContainer>
        </PodcastConst>
      </PodcastContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const episodes = data.map((episode: any) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      url: episode.file.url,
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  };
};
