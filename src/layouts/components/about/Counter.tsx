import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = ({
  end,
  duration,
  title,
}: {
  end: number;
  duration: number;
  title: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="counter">
      {inView && <CountUp end={end} duration={duration} />}
      <h1>{title}</h1>
    </div>
  );
};

export default Counter;
