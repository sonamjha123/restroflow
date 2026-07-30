import React, { useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./Restaurant";
import { Link } from "react-router-dom";

const SearchComponent = ({ topRatedrestaurants, searchRestaurants }) => {
  const [searchText, setSearchText] = useState("");
  const [searchlistOfRestaurants, setsearchlistOfRestaurants] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const handleTopRated = () => {
    setSearchText("");
    setsearchlistOfRestaurants([]);
    setShowTopRated(true);
  };

  const handleShowAll = () => {
    setSearchText("");
    setsearchlistOfRestaurants([]);
    setShowTopRated(false);
  };

  const handleSearch = () => {
    const filtered = searchRestaurants.filter((r) =>
      r?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setsearchlistOfRestaurants(filtered);
    setShowTopRated(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  let restaurantsToShow = searchRestaurants;
  if (searchText && searchlistOfRestaurants.length > 0) {
    restaurantsToShow = searchlistOfRestaurants;
  } else if (showTopRated) {
    restaurantsToShow = topRatedrestaurants;
  } else if (searchText && searchlistOfRestaurants.length === 0) {
    restaurantsToShow = [];
  }

  const totalCount = restaurantsToShow?.length ?? 0;

  return (
    <>
      {/* ── Floating Search Bar ── */}
      <div className="rf-search-wrap">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#888"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="rf-search-input"
          placeholder="Search restaurants, cuisines…"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="rf-search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* ── Filter Bar ── */}
      <div className="rf-filter-bar">
        <span className="rf-filter-label">Filter</span>
        <button
          className={`rf-filter-chip ${!showTopRated ? "active" : ""}`}
          onClick={handleShowAll}
        >
          All Restaurants
        </button>
        <button
          className={`rf-filter-chip ${showTopRated ? "active" : ""}`}
          onClick={handleTopRated}
        >
          ⭐ Top Rated (4.4+)
        </button>
      </div>

      {/* ── Section Heading ── */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "28px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <h2 className="rf-section-heading" style={{ margin: 0 }}>
          {showTopRated ? (
            <>
              Top Rated <span>Picks</span>
            </>
          ) : searchText && searchlistOfRestaurants.length > 0 ? (
            <>
              Results for <span>"{searchText}"</span>
            </>
          ) : (
            <>
              Restaurants <span>Near You</span>
            </>
          )}
        </h2>
        <span
          style={{
            fontSize: "0.8rem",
            color: "var(--muted)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {totalCount} {totalCount === 1 ? "place" : "places"}
        </span>
      </div>

      {/* ── Restaurant Grid ── */}
      <div className="rf-grid">
        {restaurantsToShow && restaurantsToShow.length > 0 ? (
          restaurantsToShow.map((restaurant, idx) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
              style={{
                textDecoration: "none",
                animationDelay: `${Math.min(idx * 0.04, 0.6)}s`,
              }}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <div className="rf-empty">
            <div className="rf-empty-icon">🍽️</div>
            <p className="rf-empty-title">No restaurants found</p>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)" }}>
              Try a different search term or browse all restaurants.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
