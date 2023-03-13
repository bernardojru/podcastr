import {
  PodcastContainer,
  PodcastConst,
  AllEpisodeContainer,
} from "../styles/pages/podcast";
import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import { api } from "../lib/axios";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";

import { format, parseISO } from "date-fns";
import Link from "next/link";
import { usePlayer } from "../contexts/PlayerContext";
import { useThemes } from "../hooks/useThemes";
import { Header } from "../components/Header";
import { ptBR } from "date-fns/locale";
import { Play } from "phosphor-react";

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

  const episodeList = [...latestEpisodes, ...allEpisodes];

  return (
    <>
      <Head>
        <title>Podcast | Podcastr</title>
      </Head>
      <Header />
      <PodcastContainer className={themes}>
        <PodcastConst>
          <AllEpisodeContainer>
            <h2>Todos episódios</h2>
            <table cellSpacing={0}>
              <thead>
                <tr>
                  <th></th>
                  <th>PODCAST</th>
                  <th>INTEGRANTES</th>
                  <th>DATA</th>
                  <th>DURAÇÃO</th>
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
                      </td>
                      <td>{episode.members}</td>
                      <td className="published">{episode.publishedAt}</td>
                      <td>{episode.durationAsString}</td>
                      <td>
                        <button
                          style={{
                            background: `${
                              themes === "dark" ? "#131313" : "#eee"
                            }`,
                          }}
                          onClick={() =>
                            playList(episodeList, index + latestEpisodes.length)
                          }
                          type="button"
                        >
                          <Play size={15} color="green" weight="fill" />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
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
