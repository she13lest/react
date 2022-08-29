import React, { useEffect } from "react";

const Dimensions = () => {
  const [demensions, setDemensions] = useState({
    width: null,
    heigth: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeigth } = window;
    setDemensions({ width: innerWidth, heigth: innerHeigth });
  });

  const { width, heigth } = demensions;

  return <div className="dimensions">{`${width}px - ${heigth}px`}</div>;
};

export default Dimensions;
