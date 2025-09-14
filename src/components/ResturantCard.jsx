import {CDN_URL} from "../utils/constant";



const ResturantCard = (props) => {
  const { resData } = props;
  const{name,cuisines,avgRating,costForTwo, sla, slaString, cloudinaryImageId}= resData;
  console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f8f8f8" }}>
      <img
        className="res-logo"
        src={CDN_URL
          +
          resData.cloudinaryImageId
        }
        alt="Food Item"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

//HigherOrder components
 // input: ResturantCard ==> output : ResturantCardPromoted

export const withPromotedLabel = (ResturantCard) =>{
   return (props)=>{
        return (
          <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <ResturantCard{...props}/>
          </div>
        )
   }
};
 

export default ResturantCard;