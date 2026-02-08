import { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../styles/MusicPlayer.module.css';
import music from '../assets/audio/music.mp3';

const MusicPlayer = ({ startPlaying }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    // Use import.meta.env.BASE_URL to handle deployment paths (e.g. /digital-invitation/)
    // const audioSrc = `${import.meta.env.BASE_URL}audio/music.mp3`;
    const audioSrc = music;

    const audioRef = useRef(null);

    // Try to play when startPlaying is true
    useEffect(() => {
        if (startPlaying && audioRef.current && !isPlaying) {
            audioRef.current.volume = 0.5; // Start at 50% volume

            const playPromise = audioRef.current.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    // Auto-play might still be prevented if not direct user interaction
                    console.log("Auto-play prevented:", error);
                    setIsPlaying(false);
                });
            }
        }
    }, [startPlaying]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles.container}>
            <audio ref={audioRef} loop>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <motion.button
                className={`${styles.button} ${isPlaying ? styles.playing : ''}`}
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? <Pause size={20} /> : <Music size={20} />}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
