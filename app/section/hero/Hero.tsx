import styles from './Hero.module.css';
import TrustedBy from '../trustedBy/TrustedBy';
import LogoItem from '../logoItem/LogoItem';
import HeroBackground from '@/app/components/HeroBackground';
const video = '/videos/hero.mp4'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <HeroBackground>

                {/* Video Container */}
                <div className={styles.videoContainer}>
                {/* <video className={styles.video} src={video} autoPlay loop muted>
                    Your browser does not support the video tag.
                </video> */}

                <h1 className={styles.heroTitle}>Simplifying and
driving businesses, delivering results</h1>

                    <p className={styles.heroText}>We combine strategy, technology, and innovation to help organisations unlock growth, enhance efficiency, and thrive in a connected world.</p>
                <div className={styles.overlay}></div>
            </div>
            </HeroBackground>

            {/* TrustedBy Container */}
            <div className={styles.trustedByContainer}>
                <TrustedBy />
                <LogoItem />
            </div>
        </div>
    )
}