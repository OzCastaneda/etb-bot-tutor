import { motion } from 'framer-motion';
import BotTutor from '../components/BotTutor';

export default function BotTutorPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <BotTutor />
    </motion.div>
  );
}
