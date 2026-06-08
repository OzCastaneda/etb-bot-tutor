import { motion } from 'framer-motion';
import Scripts from '../components/Scripts';

export default function Guiones() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Scripts />
    </motion.div>
  );
}
