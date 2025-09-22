import Image from "next/image";
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/images/connex-logo-cropped.png"
          alt="Connex logo"
          width={350}
          height={225}
          priority
        />
        <div className={styles.brandRow}>
          <Image
            className={styles.logo}
            src="/images/connex-name-cropped.png"
            alt="Connex logo text"
            width={155}
            height={40}
            priority
          />
          <h3 className={styles.tagline}>
            is on to something exciting that is on the way!
          </h3>
        </div>
        <h2 className={styles.comingSoon}>Coming Soon!</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://tapconnex.framer.website/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className={styles.footerIcon}
          />
          Visit Connex Site Here
        </a>
      </footer>
    </div>
  );
}
