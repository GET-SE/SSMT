// pages/index.js
import Head from "next/head";
import { useState } from "react";

import styles from "../styles/home.module.css"; // Assuming the CSS module will be in the styles directory

export default function Home() {
   const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 width=device-width"
        />
        <title>Open SSMT: The Path to Universal Language Translation</title>
      </Head>

      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.hamburger} onClick={toggleNav}>
          {/* Icon or text representing the hamburger menu */}
          &#9776;
        </div>
        <nav className={styles.nav}>
          <ul
            className={`${styles.navList} ${
              isNavOpen ? styles.navListOpen : ""
            }`}
          >
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="babelfish.html" className={styles.navLink}>
                Babel Fish Concept
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="babelfish.html" className={styles.navLink}>
                Challenges in S2S Translation
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="babelfish.html" className={styles.navLink}>
                Evolution of Translation Tech
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="babelfish.html" className={styles.navLink}>
                Societal Impact
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="babelfish.html" className={styles.navLink}>
                Diplomacy & Dataset
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="babelfish.html" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.heading}>
        Open SSMT: The Path to Universal Language Translation
      </div>

      <div className={styles.bannerContainer}>
        <img
          src="/media/banner.png"
          alt="Banner Image"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}>
          <h1 className={styles.overlayTitle}>
            Towards Engineering a Universal Translator of Spoken Languages
          </h1>
          <p className={styles.overlayText}>
            Bridging languages. Connecting people.
          </p>
          <button className={styles.ctaButton}>Discover the Journey</button>
        </div>
      </div>

      <div className={styles.introduction}>
        <h2>Introduction</h2>
        <p>
          Language forms the core of human connection, but linguistic barriers
          have always posed challenges. With Open SSMT, we envision a future
          where these barriers dissolve, allowing seamless communication across
          cultures. Join us in our pursuit to redefine communication for the
          21st century.
        </p>
      </div>

      <div className={styles.features}>
        <h2 className={styles.featuresHeading}>Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <img
              src="/media/realtimetranslation.png"
              alt="Real-time Translation"
              className={styles.featureImage}
            />
            <p className={styles.featureText}>
              Instantaneous translation, making conversations flow naturally.
            </p>
          </div>

          <div className={styles.featureItem}>
            <img
              src="/media/aipowered.png"
              alt="AI-Powered"
              className={styles.featureImage}
            />
            <p className={styles.featureText}>
              Harnessing the power of cutting-edge AI to understand and
              translate languages with precision.
            </p>
          </div>

          <div className={styles.featureItem}>
            <img
              src="/media/universal_application.png"
              alt="Universal Application"
              className={styles.featureImage}
            />
            <p className={styles.featureText}>
              A universal solution designed to bridge languages and cultures
              worldwide
            </p>
          </div>

          <div className={styles.featureItem}>
            <img
              src="/media/voiceonlyInterface .png"
              alt="Voice-Only Interface"
              className={styles.featureImage}
            />
            <p className={styles.featureText}>
              Prioritizing voice as the primary medium, ensuring accessibility
              for all.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.workingTowards}>
        <h2 className={styles.workingTowardsHeading}>We are working towards</h2>
        <div className={styles.workingTowardsGrid}>
          {/* Repeat this block for each item */}
          <div className={styles.workingTowardsItem}>
            <div className={styles.workingTowardsImageContainer}>
              <img
                src="/media/languages translated.png"
                alt="Languages Translated"
                className={styles.workingTowardsImage}
              />
            </div>
            <p className={styles.workingTowardsText}>
              Aiming to support over 100 languages, from widely spoken to
              regional dialects.
            </p>
          </div>

          <div className={styles.workingTowardsItem}>
            <div className={styles.workingTowardsImageContainer}>
              <img
                src="/media/hourglass.png"
                alt="Decades of Research"
                className={styles.workingTowardsImage}
              />
            </div>
            <p className={styles.workingTowardsText}>
              Building upon three decades of relentless research and innovation.
            </p>
          </div>

          <div className={styles.workingTowardsItem}>
            <div className={styles.workingTowardsImageContainer}>
              <img
                src="/media/assistance.png"
                alt="Empowering Individuals"
                className={styles.workingTowardsImage}
              />
            </div>
            <p className={styles.workingTowardsText}>
              Empowering the billion-plus individuals worldwide who can't read
              or write.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
