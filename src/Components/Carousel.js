import React, { useState } from "react";
import "./Carousel.css";
import { content } from "../Helpers/CarouselData";

function Carousel() {
  const [x, setX] = useState(0);
  var buttonShift = -1 * content.length;

  const goLeft = () => {
    if (x === 0) {
      setX(-100 * (content.length - 1));
    } else {
      setX(x + 100);
    }
  };
  const goRight = () => {
    if (x === -100 * (content.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  function toTheSelected(item) {
    let button_id = item.target.id;
    setX(button_id * -100);
  }

  function renderAllButtons(countOfSlides) {
    let buttons = [];
    for (let i = 0; i < countOfSlides; i++) {
      buttons.push(
        <button
          className="selectSlideButton"
          id={i}
          onClick={toTheSelected}
        ></button>
      );
    }
    return [buttons];
  }

  return (
    <div id="slider" className="center">
      {content.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            <div className="slide-content">{item}</div>
            <div
              className="button_section"
              style={{ transform: `translateX(${buttonShift}%)` }}
            >
              {renderAllButtons(content.length)}
            </div>
          </div>
        );
      })}

      <button className="left" onClick={goLeft}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button className="right" onClick={goRight}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default Carousel;
