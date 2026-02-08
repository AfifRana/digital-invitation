import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import styles from '../styles/Cover.module.css';

const Cover = ({ onOpen }) => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className={styles.subheading}>The Wedding Celebration of</h2>
                <h1 className={styles.heading}>Romeo & Juliet</h1>
                <p className={styles.date}>Saturday, October 24th, 2026</p>

                <motion.button
                    className={styles.button}
                    onClick={onOpen}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <MailOpen className={styles.icon} size={20} />
                    <span>Open Invitation</span>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Cover;
