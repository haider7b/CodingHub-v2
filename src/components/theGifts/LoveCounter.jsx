// LoveCounter.jsx
import { useEffect, useState } from "react";

export default function LoveCounter() {
  const startDate = new Date("2023-03-09"); // غير التاريخ إذا احتجت
  const [time, setTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;

      setTime({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{marginTop:20,fontSize:18,direction:"rtl"}}>
      ⏳ مر منذ ذلك اليوم:  
      <br />
      {time.days} يوم — {time.hours} ساعة — {time.minutes} دقيقة ❤️
    </div>
  );
}