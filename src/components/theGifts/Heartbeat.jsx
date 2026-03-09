import { motion } from "framer-motion";

export default function Heartbeat() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        fontSize: "80px",
        marginBottom: "20px",
        textAlign: "center",
        filter: "drop-shadow(0 0 10px #ff4d6d)"
      }}
    >
      ❤️
    </motion.div>
  );
}