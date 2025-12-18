import styles from './Hero.module.css';
import TrustedBy from '../trustedBy/TrustedBy';
import LogoItem from '../logoItem/LogoItem';
import HeroBackground from '@/app/components/HeroBackground';
import WavyBackground from '@/app/components/WavyBackground';
const video = '/videos/hero.mp4'

import '../../globals.css'

export default function Hero() {
    return (
        <section>
                    <WavyBackground />
            <div className={`${styles.hero} containerSection`}>
                <HeroBackground>

                    {/* Video Container */}
                    <div className={styles.videoContainer}>
                    <video className={styles.video} src={video} autoPlay loop muted playsInline>
                        Your browser does not support the video tag.
                    </video>

                    <div className={styles.overlay}></div>

                    <div className={styles.content}>
                        <h1 className={styles.heroTitle}>Simplifying and
    driving businesses, delivering results</h1>

                        <p className={styles.heroText}>We combine strategy, technology, and innovation to help organisations unlock growth, enhance efficiency, and thrive in a connected world.</p>
                    </div>
                </div>
                </HeroBackground>

                {/* TrustedBy Container */}
                <div className={styles.trustedByContainer}>
                    <TrustedBy />
                    <LogoItem />
                </div>
            </div>
        </section>
    )
}