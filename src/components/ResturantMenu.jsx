import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/hooks/useResturantMenu";

const ResturantMenu = () => {
  console.log("component rendred");

  const { resId } = useParams();
  console.log(resId);

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const resturantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info?.name
  );
  const { name, costForTwoMessage, cuisines } = resturantInfo?.card?.card?.info;

  const itemCards = resInfo.cards.find((c) => c?.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  // const{name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;
  // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} -- {costForTwoMessage}
      </p>

      <h2>Menu(Recommended)</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResturantMenu;
