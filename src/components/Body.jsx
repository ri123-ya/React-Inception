import ResturantCard  from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       { resList.map((resturant) => (<ResturantCard key={resturant.id} resData={resturant}/>))};
       /*never use index as key  (it is anti-pattern)*/
       {/* { resList.map((resturant, index) => (<ResturantCard key={index} resData={resturant}/>))}; */}

      </div>
    </div>
  );
};

export default Body;