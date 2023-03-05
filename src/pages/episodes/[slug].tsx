import {
  Container,
  EpisodeContainer,
  ThumbnailContainer,
  Nav,
  Description,
} from "../../styles/pages/slug";
import { GetStaticProps, GetStaticPaths } from "next";
import { api } from "../../lib/axios";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePlayer } from "../../contexts/PlayerContext";
import { Header } from "../../components/Header";
import { useThemes } from "../../hooks/useThemes";
import { dark } from "../../styles/themes/dark";

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  publishedAt: string;
  duration: number;
  durationAsString: string;
  url: string;
};

interface EpisodeProps {
  episode: Episode;
}

export default function Episode({ episode }: EpisodeProps) {
  const { themes } = useThemes();
  const { play } = usePlayer();

  return (
    <>
      <Head>
        <title>{episode.title} | Podcastr</title>
      </Head>
      <Header />
      <Container
        style={{ background: `${themes === dark ? "#131313" : "#eee"}` }}
      >
        <EpisodeContainer
          style={{ color: `${themes === dark ? "#aeaeb0" : "#131313"}` }}
        >
          <ThumbnailContainer>
            <Link href="/premium">
              <button type="button">
                <img src="/arrow-left.svg" alt="Voltar" />
              </button>
            </Link>
            <Image
              width={700}
              height={160}
              src={episode.thumbnail}
              alt={episode.title}
            />
            <button onClick={() => play(episode)} type="button">
              <img src="/play.svg" alt="Tocar" />
            </button>
          </ThumbnailContainer>

          <Nav>
            <h1>{episode.title}</h1>
            <span> {episode.members},</span>
            <span> {episode.publishedAt},</span>
            <span> {episode.durationAsString}</span>
          </Nav>

          <Description
            style={{ color: `${themes === dark ? "#aeaeb0" : "#131313"}` }}
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />
        </EpisodeContainer>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug }: any = context.params;

  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  };

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, //24h
  };
};
