import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { IYearsText } from "./YearText.types";

import "./YearText.scss";

export const YearText = ({ activeItemTitle }: IYearsText) => {
  const yearsRef = useRef(null);
  useEffect(() => {
    if (yearsRef.current) {
      gsap.fromTo(
        yearsRef.current,
        { y: "25%", opacity: 0 },
        { y: "0", opacity: 1, duration: 1 }
      );
    }
  }, [activeItemTitle]);

  return (
    <div className="years" ref={yearsRef}>
      <div className="years--first">{activeItemTitle.yearStart}</div>
      <div className="years--second">{activeItemTitle.yearEnd}</div>
    </div>
  );
};
