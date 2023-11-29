import { useEffect, useState } from "react";
import "./progress-bar.styles.css";
let timePassed = 0;
export const ProgressBar = ({ cycle, timeout }) => {
  const gap = timeout / cycle;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      timePassed += 1000;
      setProgress((timePassed / timeout) * 100);
      console.log(timePassed);
      if (timePassed >= timeout) {
        clearTimeout(timer);
      }
    }, gap);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
      <div>
          
      <p>Progress: {progress}% </p>
      <div className="progress-body">
        <div
          className="progress-fill"
          style={{
            transform: `translateX(${progress - 100}%)`,
          }}
        ></div>
      </div>
    </div>
  );
};
