import { useState, useEffect } from "react";

function CountdownTimer() {
  // Total countdown duration (in seconds) — yahan 3 din = 3*24*60*60
  const COUNTDOWN_DURATION = 3 * 24 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset kar do jab timer khatam ho jaye
          return COUNTDOWN_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Time ko days / hours / minutes / seconds me convert karo
  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
    <div className="flex items-center justify-center gap-3 text-red-400 font-semibold text-lg">
      <span className="text-2xl">⏳</span>
      <span>
        Enrollment window close ho rahi hai{" "}
        {days > 0 && `${days} din `}
        {hours} ghante {minutes} minute {seconds} second me
      </span>
    </div>
  );
}

export default CountdownTimer;
