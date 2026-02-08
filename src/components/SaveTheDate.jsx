import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import styles from '../styles/SaveTheDate.module.css';

const SaveTheDate = () => {
    const weddingDate = new Date('2026-10-24T00:00:00');

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = weddingDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.heading}>Save The Date</h2>

                <div className={styles.dateDisplay}>
                    <Calendar className={styles.icon} size={40} />
                    <p className={styles.date}>October 24th, 2026</p>
                </div>

                <div className={styles.countdown}>
                    <div className={styles.timeBox}>
                        <span className={styles.timeValue}>{timeLeft.days}</span>
                        <span className={styles.timeLabel}>Days</span>
                    </div>
                    <div className={styles.timeBox}>
                        <span className={styles.timeValue}>{timeLeft.hours}</span>
                        <span className={styles.timeLabel}>Hours</span>
                    </div>
                    <div className={styles.timeBox}>
                        <span className={styles.timeValue}>{timeLeft.minutes}</span>
                        <span className={styles.timeLabel}>Minutes</span>
                    </div>
                    <div className={styles.timeBox}>
                        <span className={styles.timeValue}>{timeLeft.seconds}</span>
                        <span className={styles.timeLabel}>Seconds</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default SaveTheDate;
