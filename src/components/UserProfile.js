
import {React, useState} from "react";
const UserProfile=(props)=>{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);
    return(
        <div className="user-profile">
            <h1>Count:{count}</h1>
            <h1>Count1:{count1}</h1>
            <h4>Name:{props.name}</h4>
            <h4>Location:{props.location}</h4>
            <h4>Contact:{props.contact}</h4>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UserProfile