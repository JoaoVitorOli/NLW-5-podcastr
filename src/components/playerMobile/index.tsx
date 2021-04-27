import { useContext, useState } from "react";
import Slider from "rc-slider";
import Image from "next/image";

import "rc-slider/assets/index.css"

import { PlayerContext } from "../../contexts/PlayerContext";

import styles from "./styles.module.scss";
import { ConvertDurationToTimeString } from "../../utils/ConvertDurationToTimeString";

export default function PlayerMobile() {
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    handleSeek,
    progress,
    togglePlay,
  } = useContext(PlayerContext);

  const episode = episodeList[currentEpisodeIndex];

  return(
    <div className={styles.playerContainer}>
      <div className={styles.playerControll}>
        { episode ? (
          <div className={styles.currentEpisode}>
            <Image
              width={42}
              height={42}
              src={episode.thumbnail}
              objectFit="cover"
            />
          </div>
        ) : (
          <div className={styles.emptyPlayer}>
            <div style={{
              width: "42px",
              height: "42px",
              background: "var(--purple-300)",
              borderRadius: "8px"
            }} />
          </div>
        ) }

        <button
          type="button"
          onClick={togglePlay}
          disabled={!episode}
        >
          { isPlaying ? (
              <img src="/pause.svg" alt="Pausar"/>
            ) : (
              <img src="/play.svg" alt="Tocar"/>
            ) }
        </button>

        <span>{ConvertDurationToTimeString(progress)}</span>
        <div className={styles.slider}>
            { episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor:  "#04d361"}}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <div className={styles.emptySlider} />
            ) }
          </div>
        
        <span>{ConvertDurationToTimeString(episode?.duration ?? 0)}</span>
      </div>

      <span>{episode?.title}</span>
      <span>{episode?.members}</span>
    </div>
  );
}


