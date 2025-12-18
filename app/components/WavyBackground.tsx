'use client';

import styles from './WavyBackground.module.css';

export default function WavyBackground() {
    return (
        <div className={styles.wavyBackground}>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
            <div className={styles.wave}></div>
        </div>
    );
}
