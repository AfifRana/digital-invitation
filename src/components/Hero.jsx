import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css'; // We'll create module css files or global styles

const Hero = () => {
    return (
        <section className={styles.hero}>
            <video
                className={styles.videoBackground}
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/photos/hero-bg.jpg"
            >
                <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <span className={styles.tagline}>We Are Getting Married</span>
                <h1 className={styles.title}>Romeo & Juliet</h1>
                <div className={styles.divider}></div>
                <p className={styles.date}>October 24th, 2026 • New York City</p>
                <p className={styles.quote}>"Two souls, one heart."</p>
            </motion.div>
        </section>
    );
};

export default Hero;
