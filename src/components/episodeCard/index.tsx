import Link from "next/link";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";

import "rc-slider/assets/index.css"

import styles from "./styles.module.scss";

export default function EpisodeCard({ data, episodeList, index }) {
  const { 
    playList,
  } = useContext(PlayerContext);

  return(
    <div className={styles.container}>
      <Link href={`/episodes/${data.id}`}>
        <img
          src={data.thumbnail}
          alt="Image background"
        />
      </Link>
      
      <Link href={`/episodes/${data.id}`}>
        <a>{data.title}</a>
      </Link>
      <p>{data.members}</p>
      <span>{data.durationAsString} | {data.publishedAt}</span>
      <button type="button"  onClick={() => playList(episodeList, index)}>
        <img src="/play-green.svg" alt="Tocar Episódio"/>
      </button>
    </div>
  );
}
