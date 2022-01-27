import { useState } from "react";
import { reviewData } from "../../data";
import Heading from "../heading/Heading";
import Rating from "./Rating";
import "./review.scss";

const Review = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <section className="review" id="review">
      <Heading title="Client's Review" />
      <div className="wrapper">
        <div
          style={{ display: slideIndex === -5 && "none" }}
          onClick={() => handleClick("left")}
          className="arrow left"
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        <div
          style={{ transform: `translateX(${320 * slideIndex}px)` }}
          className="slider"
        >
          {reviewData.map((item) => (
            <div key={item.id} className="slide-item">
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptates facilis neque totam architecto, aspernatur
                amet nam ipsum nihil eius qui odio sit exercitationem quam
                repellat minus sed molestiae quas.
              </p>
              <Rating rate={item.rating} />
            </div>
          ))}
        </div>
        <div
          style={{ display: slideIndex === 1 && "none" }}
          onClick={() => handleClick("right")}
          className="arrow right"
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Review;
