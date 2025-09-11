import React from "react";
import UserProfileclass from "./UserProfileclass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          Logged In User is
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-1xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <p className="text-1xl font-bold">This is Food Ordering App</p>
        {/* <UserProfile name="John- function" location="New York" contact="1234567890" /> */}
        <UserProfileclass />
      </div>
    );
  }
}

export default About;
