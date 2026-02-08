import { motion } from 'framer-motion';
import styles from '../styles/BrideGroom.module.css';
import coupleMain from '../assets/photos/couple-main.jpg'; // Using placeholder for now

const BrideGroom = () => {
    return (
        <section className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.profile}>
                    <div className={styles.imageWrapper}>
                        {/* TODO: Replace with actual Groom photo */}
                        <img src={coupleMain} alt="Groom" className={styles.image} />
                    </div>
                    <h3 className={styles.name}>Romeo Montague</h3>
                    <p className={styles.parents}>Son of Mr. Montague & Mrs. Montague</p>
                    <p className={styles.bio}>The Groom</p>
                    <div className={styles.socials}>
                        {/* Add social icons if needed */}
                    </div>
                </div>

                <div className={styles.divider}>
                    <span className={styles.ampersand}>&</span>
                </div>

                <div className={styles.profile}>
                    <div className={styles.imageWrapper}>
                        {/* TODO: Replace with actual Bride photo */}
                        <img src={coupleMain} alt="Bride" className={styles.image} />
                    </div>
                    <h3 className={styles.name}>Juliet Capulet</h3>
                    <p className={styles.parents}>Daughter of Mr. Capulet & Mrs. Capulet</p>
                    <p className={styles.bio}>The Bride</p>
                </div>
            </motion.div>
        </section>
    );
};

export default BrideGroom;
