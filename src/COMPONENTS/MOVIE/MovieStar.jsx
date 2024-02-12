/* eslint-disable react/prop-types */
import star from "../../assets/star.svg";
export default function MovieStar({ value }) {
  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, index) => (
        <img src={star} key={index} width="14" height="14" />
      ))}
    </>
  );
}
