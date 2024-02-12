import { useContext, useState } from "react";
import { MovieContext } from "../CONTEXT";
import moon from "../assets/icons/moon.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shopingCard from "../assets/shopping-cart.svg";
import CardDetailsIcon from "./MOVIE/CardDetailsIcon";
export default function MovieHeder() {
  const [showCardModal, setShowCardModal] = useState(false);
  const { cardData } = useContext(MovieContext);
  console.log(cardData);
  useContext(MovieContext);
  return (
    <>
      <header>
        {showCardModal && <CardDetailsIcon onClose={() => setShowCardModal(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setShowCardModal(true)}
              >
                <img src={shopingCard} width="24" height="24" alt="" />
              </a>
              {cardData.length > 0 && (
                <span className="rounded-full absolute top-[12px]  bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cardData.length}
                </span>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
