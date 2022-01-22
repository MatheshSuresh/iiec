import React from "react";

const Rating = ({ rating, color, text }) => {
  return (
    <>
      <i
        style={{ color }}
        className={
          rating >= 1
            ? "fas fa-star"
            : rating >= 0.5
            ? "fas fa-star-half-alt"
            : ""
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 2
            ? "fas fa-star"
            : rating >= 1.5
            ? "fas fa-star-half-alt"
            : ""
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 3
            ? "fas fa-star"
            : rating >= 2.5
            ? "fas fa-star-half-alt"
            : ""
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 4
            ? "fas fa-star"
            : rating >= 3.5
            ? "fas fa-star-half-alt"
            : ""
        }
      ></i>
      <i
        style={{ color }}
        className={
          rating >= 5
            ? "fas fa-star"
            : rating >= 4.5
            ? "fas fa-star-half-alt"
            : ""
        }
      ></i>
      <span>
        {" "}
        {text} {text > 1 ? "reviews" : "review"}
      </span>
    </>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
