import { motion } from 'framer-motion';
import styles from '../styles/QuranSection.module.css';

const QuranSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.heading}>Ar-Rum: 21</h2>

                    <p className={styles.arabic}>
                        وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓاْ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
                    </p>

                    <p className={styles.translation}>
                        "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default QuranSection;
