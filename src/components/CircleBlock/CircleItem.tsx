import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import { BIG_CIRCLE, SMALL_CIRCLE } from "../../constans/animationCircle";
import { HEADLINE_TITLES } from "../../constans/headlineTitles";
import { ICircleTitleItem } from "./Circle.types";

export const CircleItem = ({
  itemTitle,
  activeItemTitle,
  onChangeActiveItem,
}: ICircleTitleItem) => {
  const [isHoveredItem, setIsHoveredItem] = useState<boolean>(false);
  const itemRef = useRef(null);

  useEffect(() => {
    if (itemTitle.id === activeItemTitle.id && itemRef) {
      gsap.to(itemRef.current, BIG_CIRCLE);
    } else if (itemTitle.id !== activeItemTitle.id) {
      gsap.to(itemRef.current, SMALL_CIRCLE);
    }
  }, [itemTitle, activeItemTitle, itemRef]);

  const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    setIsHoveredItem(true);
    if (itemTitle.id !== activeItemTitle.id) {
      gsap.to(currentTarget, BIG_CIRCLE);
    }
  };

  const onLeave = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    setIsHoveredItem(false);
    if (itemTitle.id !== activeItemTitle.id) {
      gsap.to(currentTarget, SMALL_CIRCLE);
    }
  };
  return (
    <div
      ref={itemRef}
      className={`item item-circle-${itemTitle.id} ${
        activeItemTitle.id === itemTitle.id && "item--active"
      }`}
      style={{
        transform: `rotate(calc(${
          itemTitle.id * HEADLINE_TITLES.length * 10
        }deg - ${HEADLINE_TITLES.length * 10}deg)) translate(25vh)
    rotate(calc(-1 * ${itemTitle.id * HEADLINE_TITLES.length * 10}deg + ${
          HEADLINE_TITLES.length * 10
        }deg))`,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={() => onChangeActiveItem(itemTitle)}
    >
      {
        <div
          className="text"
          data-circle-text-animate
          style={{
            opacity:
              isHoveredItem || activeItemTitle.id === itemTitle.id ? 1 : 0,
          }}
        >
          {itemTitle.id + 1}
        </div>
      }
    </div>
  );
};
