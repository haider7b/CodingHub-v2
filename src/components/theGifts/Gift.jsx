import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import LoveCounter from "./LoveCounter";
import Heartbeat from "./Heartbeat";
import SecretMessage from "./SecretMessage";
import StarsBackground from "./StarsBackground";

function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            position: "fixed",
            fontSize: "22px",
            pointerEvents: "none"
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}

export default function Gift() {

    const [showConfetti, setShowConfetti] = useState(true);

    const [text] = useTypewriter({
    words: [
        "قبل 3 سنوات كتلج كلمه بسيطه",
        " احبج❤️",
        "بس هاي الكلمه غيرت حياتي بالكامل",
        "حياتي صارت احلا بوجودج",
        "صح هواي تضوجيني بسوالفج بس شسوي احبج",
        " خلصنه 3سنوات سوه واتمنه بعد نخلص العمره كله سوه",
        "احبج بتولتي الثوله❤️"
    ],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 15000,

    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        color:"black"
      }}
    >

      {/* الخلفية */}
      <StarsBackground />
      <FloatingHearts />

      {/* confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}

      {/* كرت الرسالة */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          maxWidth: "520px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          fontSize: "20px",
          position: "relative",
          zIndex: 2
        }}
      >

        <Heartbeat />

        <h2 style={{ marginBottom: "20px" }}>
          Happy 3rd Anniversary ❤️
        </h2>

        <p style={{ minHeight: "80px", lineHeight: "1.6" ,direction:"rtl"}}>
          {text}
          <Cursor />
        </p>

        <LoveCounter />

        <SecretMessage />

      </motion.div>

    </div>
  );
}