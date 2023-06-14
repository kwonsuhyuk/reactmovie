import { useState } from "react";
import Rating from "./Rating";
import "./RatingInput.css";

function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);

  const handleSelector = (nextValue) => onChange(name, nextValue);

  const handleMouseOut = () => setRating(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={handleSelector}
      onHover={setRating}
      onMouseOut={handleMouseOut}
    />
  );
}

export default RatingInput;
