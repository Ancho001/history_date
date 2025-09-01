import React, { useCallback, useEffect, useState } from "react";
import { CircleBlock } from "./components/CircleBlock/index.tsx";

import { HeaderBlock } from "./components/HeaderBlock/index.tsx";
import { YearText } from "./components/YearText/index.tsx";
import { BrowsingBlock } from "./components/BrowsingBlock/index.tsx";
import { NewsBlock } from "./components/NewsBlock/index.tsx";
import { HEADLINE_TITLES, HeadlineTitle } from "./constans/headlineTitles.ts";
import { DESKTOP_BREAKPOINT } from "./constans/sizes.ts";

import "./app.scss";

const App = () => {
  const [activeItemTitle, setActiveItemTitle] = useState<HeadlineTitle>(
    HEADLINE_TITLES[0]
  );
  const [isDesktop, setIsDesktop] = useState(true);

  const handleChangeActiveItem = useCallback(
    (itemTitle: HeadlineTitle) => {
      setActiveItemTitle(itemTitle);
    },
    [activeItemTitle]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main">
      <div className="main--content">
        <HeaderBlock />
        <div className="main--content-main">
          <div className="main--content-circle">
            {isDesktop && (
              <CircleBlock
                activeItemTitle={activeItemTitle}
                onChangeActiveItem={handleChangeActiveItem}
              />
            )}
            <YearText activeItemTitle={activeItemTitle} />
            <div className="main--content-circle-bottom">
              <BrowsingBlock
                activeItemTitle={activeItemTitle}
                onChangeActiveItem={setActiveItemTitle}
              />
            </div>
          </div>
          <NewsBlock activeItemTitle={activeItemTitle} isDesktop={isDesktop} />
        </div>
      </div>
    </div>
  );
};

export default App;
