import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main
        className={styles.main}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <Image
          className={styles.logo}
          src="/images/connex-logo-cropped.png"
          alt="Connex logo"
          width={350}
          height={225}
          priority
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Image
            className={styles.logo}
            src="/images/connex-name-cropped.png"
            alt="Connex logo"
            width={155}
            height={40}
            priority
          />
          <h3
            style={{
              margin: 0,
              marginLeft: -12,
              textAlign: "left",
              whiteSpace: "nowrap",
            }}
          >
            is on to something exciting that is on the way!
          </h3>
        </div>
        <h2 style={{ marginTop: -20, color: "#bfa100", textAlign: "center" }}>
          Coming Soon!
        </h2>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://tapconnex.framer.website/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 6 }}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="File icon"
            width={16}
            height={16}
            style={{
              filter:
                "invert(80%) sepia(98%) saturate(1176%) hue-rotate(7deg) brightness(105%)",
            }}
          />
          Visit Connex Site Here
        </a>
      </footer>
    </div>
  );
}
