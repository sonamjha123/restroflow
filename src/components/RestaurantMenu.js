import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantmenudata from "../Hooks/useRestaurantmenudata";
import { 
  MENU_API_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  
 } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  
  const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const { resId } = useParams();
  const resInfo = useRestaurantmenudata(resId);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage , avgRating} =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  //trying to filter out all cards with categories into it
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
  c.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY);

  
  //conditional rendering
  return (
    <div className="text-center">
      <h1 className=" font-bold my-4 text-7xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      
      {/* building Accordions here for categories */}
      {categories.map((category, index) => (
        <RestaurantCategory 
        key={category?.card?.card?.title} 
        data={category?.card?.card}
        showItems={index === showIndex ? false : true}
        setShowIndex={() => setShowIndex(index)}
        />
      ))}
      </div>
      
      )
};

export default RestaurantMenu;
