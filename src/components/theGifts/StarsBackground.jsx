// StarsBackground.jsx
import Particles from "react-tsparticles";

export default function StarsBackground() {
  return (
    <Particles
      options={{
        background: { color: "#0f172a" },
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { speed: 0.3 },
          opacity: { value: 0.8 },
        }
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0
      }}
    />
  );
}