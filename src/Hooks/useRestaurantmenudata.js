import { useEffect, useState } from "react";
import { MENU_API_URL} from "../utils/constants";
const useRestaurantmenudata=(resId)=>{
 // fetchData
    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
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