import { useEffect, useState } from 'react';

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timoout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout, onTimeout]);

  //need useEffect as this would create an infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}

export default QuestionTimer;
