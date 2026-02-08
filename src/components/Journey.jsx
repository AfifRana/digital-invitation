import { motion } from 'framer-motion';
import { Heart, Calendar, MessageCircle } from 'lucide-react';
import styles from '../styles/Journey.module.css';
import coverBg from '../assets/photos/cover-bg.jpg';
import heroBg from '../assets/photos/hero-bg.jpg';
import coupleMain from '../assets/photos/couple-main.jpg';

const events = [
    {
        year: '2020',
        title: 'First Met',
        description: 'We met at a coffee shop in downtown.',
        icon: <MessageCircle size={24} />,
        image: coverBg
    },
    {
        year: '2021',
        title: 'First Date',
        description: 'A magical evening under the stars.',
        icon: <Calendar size={24} />,
        image: heroBg
    },
    {
        year: '2024',
        title: 'She Said Yes!',
        description: 'Proposed at the place we first met.',
        icon: <Heart size={24} />,
        image: coupleMain
    },
];

const Journey = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Our Journey</h2>
            <div className={styles.timeline}>
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.event} ${index % 2 === 0 ? styles.even : styles.odd}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <div className={styles.content}>
                            <span className={styles.year}>{event.year}</span>
                            <h3 className={styles.title}>{event.title}</h3>
                            <p className={styles.description}>{event.description}</p>
                        </div>
                        <div className={styles.iconWrapper}>{event.icon}</div>
                        <div className={styles.imageWrapper}>
                            <img src={event.image} alt={event.title} className={styles.image} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Journey;
