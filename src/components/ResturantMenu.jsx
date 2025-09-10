import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/hooks/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {

  const [showIndex, setShowIndex] = useState(null); 

  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const resturantInfo = resInfo?.cards?.find(
    (card) => card?.card?.card?.info?.name
  );
  const { name, costForTwoMessage, cuisines } = resturantInfo?.card?.card?.info;

  const itemCards = resInfo.cards.find((c) => c?.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  const categories = resInfo.cards
    .find((c) => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} -- {costForTwoMessage}
      </p>
      {/** categories Accordions  */}
      {categories.map((category,index) => (
        <ResturantCategory
          key={category.card.card.categoryId}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
}; 

export default ResturantMenu;
