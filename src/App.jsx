import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cover from './components/Cover';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Location from './components/Location';
import Wishes from './components/Wishes';
import Gift from './components/Gift';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
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
              <Journey />
              <Location />
              <Wishes />
              <Gift />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
