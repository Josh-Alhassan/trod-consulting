import styles from './HeroBackground.module.css';

export default function HeroBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      {/* === BLUE LEFT GLOW === */}
      <div className={styles.blueGlow} />

      {/* === PURPLE RIGHT GLOW === */}
      <div className={styles.purpleGlow} />

      {/* === YELLOW/WHITE TOP GLOW === */}
      <div className={styles.yellowGlow} />

      {/* === Glassy border shine === */}
      <div className={styles.glassBorder} />

      {/* === Inner Content === */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
