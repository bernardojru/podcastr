import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import { api } from "../lib/axios";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";

import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Link from "next/link";
import { usePlayer } from "../contexts/PlayerContext";
import { useThemes } from "../contexts/ThemeContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MagnifyingGlass } from "phosphor-react";

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
  const { data: session } = useSession();
  const { playList } = usePlayer();
  const { themes } = useThemes();

  const episodeList = [...latestEpisodes, ...allEpisodes];

  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  if (session) {
    return (
      <>
        <Head>
          <title>Podcast | Podcastr</title>
        </Head>
        <div
          className={`overflow-y-scroll h-calc ${
            themes === "dark"
              ? "bg-gray-850 text-gray-300"
              : "bg-gray-50 text-gray-850"
          }`}
        >
          <section className="m-8">
            <div className="flex items-center justify-between">
              <h2 className="mt-4 mb-6 text-2xl">Últimos lançamentos</h2>

              <form className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="pesquisar"
                  className="p-2 bg-gray-900 rounded-md outline-none"
                />
                <button className="bg-gray-900 p-2 rounded-md">
                  <MagnifyingGlass size={20} />
                </button>
              </form>
            </div>

            <ul className="grid grid-cols-2 gap-6">
              {latestEpisodes.map((latestEpisode, index) => (
                <li
                  key={latestEpisode.id}
                  className={`${
                    themes === "dark"
                      ? "bg-gray-900 text-gray-300 border-0"
                      : "bg-white text-gray-850 border"
                  } border-gray-100  p-5 rounded-3xl relative flex items-center`}
                >
                  <Image
                    width={192}
                    height={192}
                    src={latestEpisode.thumbnail}
                    alt={latestEpisode.title}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />

                  <div className="flex-1 ml-4 w-72">
                    <Link
                      href={`/episodes/${latestEpisode.id}`}
                      className="block font-sans font-semibold leading-6 hover:underline"
                    >
                      {latestEpisode.title}
                    </Link>
                    <p
                      className="
                  text-sm mt-2 max-w-[70%] whitespace-nowrap
                  overflow-hidden text-ellipsis
                  "
                    >
                      {latestEpisode.members}
                    </p>
                    <span>{latestEpisode.publishedAt},</span>
                    <span> {latestEpisode.durationAsString}</span>
                  </div>

                  <button
                    onClick={() => playList(episodeList, index)}
                    type="button"
                    className={`
                absolute right-8 bottom-8 w-10 h-10 ${
                  themes === "dark"
                    ? "bg-gray-850 border-0"
                    : "bg-white border border-gray-100 hover:bg-gray-50 "
                }  rounded-md
                flex items-center justify-center transition-colors 
              `}
                  >
                    <img src="/play-green.svg" alt="" className="w-6 h-6" />
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="m-8">
            <h2 className="text-xl">Todos episódios</h2>

            <table cellSpacing={0} className="w-full mt-5">
              <thead>
                <tr
                  className={`${
                    themes === "dark"
                      ? "border-b border-gray-600"
                      : "border-b border-gray-100"
                  }`}
                >
                  <th className="uppercase font-medium text-left"></th>
                  <th className="uppercase font-medium text-left">PODCAST</th>
                  <th className="uppercase font-medium text-left">
                    INTEGRANTES
                  </th>
                  <th className="uppercase font-medium text-left">DATA</th>
                  <th className="uppercase font-medium text-left">DURAÇÃO</th>
                  <th className="uppercase font-medium text-left"></th>
                </tr>
              </thead>
              <tbody>
                {allEpisodes.map((episode, index) => (
                  <>
                    <div className="mb-3" />
                    <tr
                      key={episode.id}
                      className={`${
                        themes === "dark"
                          ? "border-b border-gray-600"
                          : "border-b border-gray-100"
                      } p-8`}
                    >
                      <td className="text-sm ">
                        <Image
                          className="w-10 h-10 rounded-lg object-cover"
                          width={120}
                          height={120}
                          src={episode.thumbnail}
                          alt={episode.title}
                        />
                      </td>
                      <td className="text-sm w-80">
                        <Link
                          href={`/episodes/${episode.id}`}
                          className=" font-semibold leading-6 text-base hover:underline"
                        >
                          {episode.title}
                        </Link>
                      </td>
                      <td className="text-sm  w-44">{episode.members}</td>
                      <td className="text-sm ">{episode.publishedAt}</td>
                      <td className="text-sm">{episode.durationAsString}</td>
                      <td className="text-sm">
                        <button
                          onClick={() =>
                            playList(episodeList, index + latestEpisodes.length)
                          }
                          type="button"
                          className={`${
                            themes === "dark"
                              ? "bg-gray-600"
                              : "bg-white border border-gray-100 hover:bg-gray-50 "
                          } w-8 h-8  rounded-lg flex items-center justify-center  transition-colors `}
                        >
                          <img
                            src="/play-green.svg"
                            alt="Tocar episódio"
                            className="w-5 h-5"
                          />
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </>
    );
  } else {
    return <></>;
  }
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
