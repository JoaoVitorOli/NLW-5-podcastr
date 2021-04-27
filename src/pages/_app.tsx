import '../styles/globals.scss'

import Header from "../components/header";
import Player from "../components/player";
import PlayerContextProvider from "../contexts/PlayerContext";

import styles from "../styles/app.module.scss";
import PlayerMobile from '../components/playerMobile';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
          <PlayerMobile />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp
