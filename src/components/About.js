import React from "react";
import UserProfileClass from "./UserProfileclass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <section className="max-w-3xl m-10  p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">
          About
        </h1>

        <div className="mb-4">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-900">Logged In User : </span>{" "}
                <span className="text-indigo-600 font-bold">
                  {loggedInUser || "Guest"}
                </span>
              </p>
            )}
          </UserContext.Consumer>
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Welcome to the <span className="font-semibold">Food Ordering App</span> – 
          your one-stop solution for discovering restaurants, browsing menus, and 
          placing orders effortlessly.
        </p>

        {/* Example profile component */}
        <div className="border-t pt-6">
          <UserProfileClass />
        </div>
      </section>
    );
  }
}

export default About;
