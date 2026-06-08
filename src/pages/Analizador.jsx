import { motion } from 'framer-motion';
import Analyzer from '../components/Analyzer';

export default function Analizador() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Analyzer />
    </motion.div>
  );
}
