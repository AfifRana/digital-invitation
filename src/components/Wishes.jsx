import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import styles from '../styles/Wishes.module.css';

const initialWishes = [
    { name: 'Alice', message: 'Congratulations! So happy for you both.' },
    { name: 'Bob', message: 'Wishing you a lifetime of love and happiness.' },
];

const Wishes = () => {
    const [wishes, setWishes] = useState(initialWishes);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && message) {
            setWishes([{ name, message }, ...wishes]);
            setName('');
            setMessage('');
        }
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Wishes</h2>

            <div className={styles.container}>
                <motion.div
                    className={styles.formCard}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className={styles.subheading}>Send us your wishes</h3>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className={styles.input}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea
                                placeholder="Your Message"
                                className={styles.textarea}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.button}>
                            <Send size={16} /> Send Wish
                        </button>
                    </form>
                </motion.div>

                <div className={styles.list}>
                    {wishes.map((wish, i) => (
                        <motion.div
                            key={i}
                            className={styles.wishCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className={styles.wishHeader}>
                                <MessageSquare size={16} className={styles.wishIcon} />
                                <span className={styles.wishName}>{wish.name}</span>
                            </div>
                            <p className={styles.wishMessage}>{wish.message}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <footer className={styles.footer}>
                <p>Made with ❤️ for Romeo & Juliet</p>
            </footer>
        </section>
    );
};

export default Wishes;
