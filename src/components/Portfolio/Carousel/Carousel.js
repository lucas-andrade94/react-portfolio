import React, { Children, cloneElement, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import {
  DivCarousel,
  DivInner,
  DivItem,
  Indicators,
  NormalButton,
} from "./style";

export const CarouselItem = ({ children, width }) => {
  return <DivItem style={{ width: width }}>{children}</DivItem>;
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <DivCarousel
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <DivInner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {Children.map(children, (child, index) => {
          return cloneElement(child, { width: "100%" });
        })}
      </DivInner>
      <Indicators>
        <NormalButton
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </NormalButton>
        {Children.map(children, (child, index) => {
          return (
            <NormalButton
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </NormalButton>
          );
        })}
        <NormalButton
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </NormalButton>
      </Indicators>
    </DivCarousel>
  );
};
