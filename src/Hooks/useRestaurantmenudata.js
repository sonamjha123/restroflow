import { useEffect, useState } from "react";
import { MENU_API_URL, IMG_CDN_URL } from "../utils/constants";
const useRestaurantmenudata=(resId)=>{
 // fetchData
    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchData();
      }, []);// empty array means useEffect will be called only once
    
      const fetchData = async () => {
        const data = await fetch(
          MENU_API_URL + resId
        );
        const json = await data.json();
        //Optional chaining
        setresInfo(json?.data);
      };

    return resInfo;
}


export default useRestaurantmenudata