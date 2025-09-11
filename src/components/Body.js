import React, { useEffect } from "react";
import RestaurantCard ,{withPromotedLabel} from "./Restaurant";
import KFCobjrestaurantslist from "../utils/mockData";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../Hooks/useOnlinestatus";
import UserOffline from "./UserOffline";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredSearchlist, setfilteredSearchlist] = useState([]);
  const [searchText, setSearchText] = useState("");
 //fOR using HOC - promoted label
 const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optional chaining
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // set restaurants list in filteredSearchlist initially as it has empty array in usestate first
    setfilteredSearchlist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering

  const onlinestatus = useOnlinestatus();
  if(!onlinestatus){
    return <UserOffline/>
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="m-2 p-2 text-center">
        <input
          type="text"
          className="border-2 w-1/2 border-gray-500 bg-white h-10 pr-8 pl-8 px-5 py-2 rounded-lg text-sm focus:outline-none"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-2 pr-5 pl-5 justify-between bg-orange-300 rounded-md hover:bg-orange-400"
          onClick={() => {
            const filteredSearchlist = listOfRestaurants.filter((resList) =>
              resList?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setfilteredSearchlist(filteredSearchlist);
          }}
        >
          Search
        </button>
      </div>
      <div className="text-center">
        <button
          className="p-2 m-2 w-1/3 bg-orange-300 rounded-md hover:bg-orange-400"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (resList) => resList?.info?.avgRating > 4.3
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className=" flex flex-wrap">
        {/* loop through the array and returning the restaurant card */}
        {filteredSearchlist?.map((restaurantList) => (
          <Link to={"/restaurants/" + restaurantList.info.id} key={restaurantList.info.id}> 
          {/*conditional rendering*/}
          {/* if promoted is true then return RestaurantCardPromoted */}
          {restaurantList.info.promoted ? <RestaurantCardPromoted resData={restaurantList}/>:
          <RestaurantCard
            key={restaurantList.info.id}
            resData={restaurantList}
          />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
