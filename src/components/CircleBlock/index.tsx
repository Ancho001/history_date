import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { HEADLINE_TITLES } from "../../constans/headlineTitles";
import { CircleItem } from "./CircleItem";
import { ICircleTitle } from "./Circle.types";

import "./Circle.scss";
import "../../cssVariables.scss";

export const CircleBlock = ({
  activeItemTitle,
  onChangeActiveItem,
}: ICircleTitle) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (activeItemTitle && circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: -activeItemTitle.id * HEADLINE_TITLES.length * 10,
        duration: 1,
      });

      const elements = circleRef.current.querySelectorAll(
        "[data-circle-text-animate]"
      );

      gsap.to(elements, {
        rotation: activeItemTitle.id * HEADLINE_TITLES.length * 10,
        duration: 1,
      });
    }
  }, [activeItemTitle]);

  return (
    <section className="circle-container" id="circleContainer" ref={circleRef}>
      {HEADLINE_TITLES.map((itemTitle) => {
        return (
          <CircleItem
            key={itemTitle.id}
            itemTitle={itemTitle}
            activeItemTitle={activeItemTitle}
            onChangeActiveItem={onChangeActiveItem}
          />
        );
      })}
    </section>
  );
};
