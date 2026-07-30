import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    costForTwo,
    sla,
    cuisines,
    avgRating,
    promoted,
  } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  const ratingColor =
    avgRating >= 4.5
      ? "#22c55e"
      : avgRating >= 4.0
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="rf-card">
      {/* Image */}
      <div className="rf-card-img-wrap">
        <img
          className="rf-card-img"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
          onError={(e) => {
            e.target.src =
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400";
          }}
        />
        {/* Rating badge */}
        <div
          className="rf-card-rating"
          style={{ borderColor: `${ratingColor}55`, color: ratingColor }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill={ratingColor}
            stroke="none"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {avgRating}
        </div>

        {/* Promoted badge */}
        {promoted && (
          <div className="rf-card-promoted">Promoted</div>
        )}
      </div>

      {/* Body */}
      <div className="rf-card-body">
        <h4 className="rf-card-name" title={name}>
          {name}
        </h4>
        <p className="rf-card-cuisines" title={cuisines?.join(", ")}>
          {cuisines?.join(" · ")}
        </p>

        <div className="rf-card-meta">
          <div className="rf-card-meta-item">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {sla?.slaString}
          </div>
          <div className="rf-card-meta-item">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            {costForTwo}
          </div>
        </div>
      </div>
    </div>
  );
};

// Higher-order component — adds a "Promoted" ribbon
export const withPromotedLabel = (WrappedCard) => {
  return (props) => (
    <div style={{ position: "relative" }}>
      <WrappedCard {...props} />
    </div>
  );
};

export default RestaurantCard;
