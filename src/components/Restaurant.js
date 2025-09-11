import React , {useContext} from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    sla,
    totalRatingsString,
    cuisines,
  } = resData?.info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] bg-slate-100 rounded-lg hover:cursor-pointer, hover:bg-slate-300">
      <img
        className="rounded-lg"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4
        className="text-lg font-bold py-3"
        style={{ textTransform: "capitalize", margin: "0px" }}
      >
        {name}
      </h4>
      <h4
        className="re-cuisines"
        style={{
          textTransform: "capitalize",
          fontWeight: "lighter",
          margin: "0px",
        }}
      >
        {cuisines.join(" , ")}
      </h4>
      <div className="res-info">
        <ul>
          <li >{totalRatingsString}</li>
          <li>{sla?.slaString}</li>
          <li>{costForTwo}</li>
        </ul>
        <ul>User: {loggedInUser}</ul>
      </div>
    </div>
  );
};

//Higher order component - HOC - is a function that takes a component as an argument and returns a new component with some enhancements

//input will be restaurantCard => output will be restaurantCardPromted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
     <div>
      <label className="absolute bg-black text-white m-2 p-2">Promoted</label>
      <RestaurantCard {...props}/>
     </div>
    )
  }
}


export default RestaurantCard;
