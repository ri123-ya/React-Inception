import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filterResturants, setfilterResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body Rendered");

  useEffect(() => {
    console.log("useEffect is called");
    const timer = setTimeout(() => {
      setListOfResturants(resList);
      setfilterResturants(resList);
    }, 2000);

    return () => clearTimeout(timer);
    // fetchData();
  }, []);

  // const fetchData = async ()=>{
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const json = data.json();
  //   setListOfResturants(json?.data?.cards[2]?.data?.data?.cards);
  // }
  
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return(
      <h1>No Network, 
        Please, 
        check your Internet Connection!!
      </h1>
    );
  };

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-bar">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for Resturant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterRes = listOfResturants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterResturants(filterRes);
            }}
          >
            Search
          </button>
        </div>

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
        {filterResturants.map((resturant) => (
          <Link to={"/resturant/"+resturant.id} key={resturant.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
