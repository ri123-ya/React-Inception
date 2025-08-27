import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState(resList);

  return (
    <div className="body">
      <div className="body-bar">
        
        <div className="search">Search</div>

        <div className="filter-btn">
          <button
            onClick={() => {
              const filteredList = listOfResturants.filter(
                (res) => res.avgRating > 4.5
              );
              setListOfResturants(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
        </div>

      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
