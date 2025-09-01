import React from "react";

import { ReactComponent as Arraw } from "../../assets/svgs/arraw.svg";
import { HEADLINE_TITLES } from "../../constans/headlineTitles";
import { IBrowsingBlock } from "./BrowsingBlock.types";

import "./BrowsingBlock.scss";

export const BrowsingBlock = ({
  activeItemTitle,
  onChangeActiveItem,
}: IBrowsingBlock) => {
  const handleChangeActiveItem = (action: string) => {
    switch (action) {
      case "prev":
        onChangeActiveItem((prev) => HEADLINE_TITLES[prev.id - 1]);
        break;
      case "next":
        onChangeActiveItem((prev) => HEADLINE_TITLES[prev.id + 1]);
        break;
      default:
        console.log("Неизвестный действик");
    }
  };

  return (
    <section className="conteiner">
      <div className="browsing">
        <div className="browsing--slider">{`0${activeItemTitle.id + 1}/0${
          HEADLINE_TITLES.length
        }`}</div>
        <div className="browsing--arraws">
          <button
            className={`browsing--arraws-item ${
              activeItemTitle.id === 0 ? "disabled" : ""
            }`}
            disabled={activeItemTitle.id === 0}
            onClick={() => {
              activeItemTitle.id !== 0 && handleChangeActiveItem("prev");
            }}
          >
            <Arraw className=" browsing--arraws-item-left" />
          </button>
          <button
            className={`browsing--arraws-item ${
              activeItemTitle.id === HEADLINE_TITLES.length - 1
                ? "disabled"
                : ""
            }`}
            disabled={activeItemTitle.id === HEADLINE_TITLES.length - 1}
            onClick={() => {
              activeItemTitle.id !== HEADLINE_TITLES.length - 1 &&
                handleChangeActiveItem("next");
            }}
          >
            <Arraw className=" browsing--arraws-item-right" />
          </button>
        </div>
      </div>
    </section>
  );
};
