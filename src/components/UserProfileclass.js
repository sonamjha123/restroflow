import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name," Child Constructor");
   this.state={
     userInfo:{
       name: "Default",
       location: "Default",
       
     }
   }
  }
  // we make API call in componentDidMount 
  // because we need to make API call only once
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/sonamJha123")
    const json = await data.json();
    this.setState({
      userInfo: json
    })
    console.log(json);
  }
  render() {
   
  const { name,location,avatar_url} = this.state.userInfo;
  return (
      <div className="user-profile">
        <h4>Name:{name}</h4>
        <h4>Location:{location}</h4>
        <img className="avatar" src={avatar_url} alt="img" />
      </div>
    );
  }
}
export default UserProfile;
