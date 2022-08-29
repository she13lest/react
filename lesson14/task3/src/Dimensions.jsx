import React, { useEffect, useState } from "react";

const Dimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, heigth: innerHeight });

    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, heigth: innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      debugger;
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const { width, heigth } = demensions;

  return <div className="dimensions">{`${width}px - ${heigth}px`}</div>;
};

export default Dimensions;
