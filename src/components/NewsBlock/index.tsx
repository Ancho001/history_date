import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as Arraw } from "../../assets/svgs/arraw.svg";
import { INewsBlock } from "./NewsBlock.types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./NewsBlock.scss";

export const NewsBlock = ({ activeItemTitle, isDesktop }: INewsBlock) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      gsap.fromTo(
        swiperRef.current,
        { opacity: 0, y: "15%" },
        { opacity: 1, y: 0, duration: 2 }
      );
    }
  }, [activeItemTitle]);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="news">
      <div className="news--slider">
        {isDesktop && (
          <div className="custom-navigation">
            <button
              className={`nav-button prev-button ${
                isBeginning ? "disabled" : ""
              }`}
              onClick={handlePrev}
              disabled={isBeginning}
            >
              <Arraw style={{ height: "0.52vw" }} />
            </button>

            <button
              className={`nav-button next-button ${isEnd ? "disabled" : ""}`}
              onClick={handleNext}
              disabled={isEnd}
            >
              <Arraw
                style={{ transform: "rotate(180deg)", height: "0.52vw" }}
              />
            </button>
          </div>
        )}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          pagination={
            isDesktop
              ? false
              : {
                  el: ".swiper-pagination",
                  clickable: true,
                  type: "bullets",
                }
          }
          spaceBetween={0}
          slidesPerView={isDesktop ? 3 : 1.5}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="mySwiper"
        >
          {activeItemTitle.news.map((slide) => (
            <SwiperSlide key={slide.year}>
              <div
                className="news--slider-item"
                style={{ paddingRight: "2.1vw" }}
              >
                <h3 className="news--slider-item-header">{slide.year}</h3>
                <p className="news--slider-item-content">{slide.content}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};
