import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cover from './components/Cover';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';

// Lazy load components below the fold for performance
const QuranSection = lazy(() => import('./components/QuranSection'));
const BrideGroom = lazy(() => import('./components/BrideGroom'));
const SaveTheDate = lazy(() => import('./components/SaveTheDate'));
const Location = lazy(() => import('./components/Location'));
const Journey = lazy(() => import('./components/Journey'));
const Gift = lazy(() => import('./components/Gift'));
const Wishes = lazy(() => import('./components/Wishes'));

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <MusicPlayer startPlaying={isOpen} />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <Cover onOpen={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <main>
              <Hero />
              <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
                <QuranSection />
                <BrideGroom />
                <SaveTheDate />
                <Location />
                <Journey />
                <Gift />
                <Wishes />
              </Suspense>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
