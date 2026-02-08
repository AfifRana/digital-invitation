import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import styles from '../styles/Location.module.css';

const Location = () => {
    return (
        <section className={styles.section}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.heading}>The Venue</h2>
                <div className={styles.card}>
                    <div className={styles.info}>
                        <MapPin className={styles.icon} size={32} />
                        <h3 className={styles.venueName}>Grand Plaza Hotel</h3>
                        <p className={styles.address}>123 Wedding Avenue, New York, NY 10001</p>
                        <p className={styles.time}>Ceremony starts at 4:00 PM</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.button}>
                            View on Google Maps
                        </a>
                    </div>
                    <div className={styles.map}>
                        {/* Placeholder for iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Location;
