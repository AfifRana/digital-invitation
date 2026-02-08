import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import styles from '../styles/Gift.module.css';

const Gift = () => {
    const [copied, setCopied] = useState(false);
    const bankAccount = "123-456-7890";

    const handleCopy = () => {
        navigator.clipboard.writeText(bankAccount);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.iconWrapper}>
                    <GiftIcon size={40} />
                </div>
                <h2 className={styles.heading}>Wedding Gift</h2>
                <p className={styles.text}>
                    Your presence at our wedding is the greatest gift of all.
                    However, if you wish to honor us with a gift, a cash gift would be very welcome.
                </p>

                <div className={styles.accountCard}>
                    <h3 className={styles.bankName}>Bank of Love</h3>
                    <p className={styles.accountName}>Romeo & Juliet</p>
                    <div className={styles.accountNumberWrapper}>
                        <span className={styles.accountNumber}>{bankAccount}</span>
                        <button className={styles.copyButton} onClick={handleCopy}>
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                        </button>
                    </div>
                    {copied && <span className={styles.copiedText}>Copied to clipboard!</span>}
                </div>
            </motion.div>

            <footer className={styles.footer}>
                <p>Made with ❤️ for Romeo & Juliet</p>
            </footer>
        </section>
    );
};

export default Gift;
