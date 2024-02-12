/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../../CONTEXT";
import { getImgURL } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import MovieStar from "./MovieStar";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selection, setSelection] = useState(null);
  const { cardData, setCardData } = useContext(MovieContext);

  const handleAddToCard = (e, movie) => {
    e.stopPropagation();
    const found = cardData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCardData([...cardData, movie]);
    } else {
      console.log(`alredy found ${cardData.length}`);
    }
  };
  const handleClose = () => {
    setSelection(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelection(movie);
    setShowModal(true);
  };
  return (
    <>
      {showModal && <MovieDetailsModal onClose={handleClose} movie={selection} onCartAdd={handleAddToCard} />}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <button href="#" onClick={() => handleMovieSelection(movie)}>
          <img className="w-full object-cover" src={getImgURL(movie.cover)} alt="" />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <MovieStar value={movie.rating} />
            </div>

            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCard(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$ {movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </button>
      </figure>
    </>
  );
}
