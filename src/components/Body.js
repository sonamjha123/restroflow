import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlinestatus from "../Hooks/useOnlinestatus";
import UserOffline from "./UserOffline";
import SearchComponent from "./SearchComponent";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredSearchlist, setfilteredSearchlist] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const getTopRatedRestaurants = () => {
    return listOfRestaurants.filter((resList) => resList?.info?.avgRating > 4.4);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setlistOfRestaurants(restaurants);
      setfilteredSearchlist(restaurants);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const onlinestatus = useOnlinestatus();
  if (!onlinestatus) return <UserOffline />;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-root">
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="hero-bg-overlay" />
        <div className="hero-grain" />

        <div className="hero-content">
          <span className="hero-eyebrow">Bengaluru's finest, delivered</span>
          <h1 className="hero-headline">
            Every craving,<br />
            <em>answered.</em>
          </h1>
          <p className="hero-sub">
            Handpicked restaurants. Real flavours. Right at your door.
          </p>
        </div>

        <img
          className="hero-img"
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="hero food"
        />
      </section>

      {/* ── SEARCH + CARDS ── */}
      <section className="search-section">
        <SearchComponent
          searchRestaurants={filteredSearchlist}
          topRatedrestaurants={getTopRatedRestaurants()}
        />
      </section>
    </div>
  );
};

export default Body;
