import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { IYearsText } from "./YearText.types";

import "./YearText.scss";

export const YearText = ({ activeItemTitle }: IYearsText) => {
  const yearsRef = useRef(null);
  useEffect(() => {
    const itemFirst = document.querySelectorAll(".data-years-first");
    gsap.from(itemFirst, {
      textContent: activeItemTitle.yearStart,
      duration: 0.5,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: 1,
    });

    const itemSecond = document.querySelectorAll(".data-years-second");
    gsap.from(itemSecond, {
      textContent: activeItemTitle.yearEnd,
      duration: 0.5,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: 1,
    });
  }, []);

  useEffect(() => {
    if (yearsRef.current) {
      const itemFirst = yearsRef.current.querySelectorAll(".data-years-first");

      gsap.from(itemFirst, {
        textContent: activeItemTitle.yearStart - 10,
        duration: 0.5,
        ease: "power1.in",
        snap: { textContent: 1 },
        stagger: 1,
      });

      const itemSecond =
        yearsRef.current.querySelectorAll(".data-years-second");

      gsap.from(itemSecond, {
        textContent: activeItemTitle.yearEnd - 10,
        duration: 0.5,
        ease: "power1.in",
        snap: { textContent: 1 },
        stagger: 1,
      });
    }
  }, [activeItemTitle]);

  return (
    <div className="years" ref={yearsRef}>
      <div className="years--conteiner years--first">
        <div className="data-years-first">{activeItemTitle.yearStart}</div>
      </div>
      <div className="years--second">
        <div className="data-years-second">{activeItemTitle.yearEnd}</div>
      </div>
    </div>
  );
};
