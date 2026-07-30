import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantmenudata = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(MENU_API_URL + resId);

      if (!res.ok) {
        console.warn("API returned non-OK status:", res.status);
        return loadLocalData(); // fallback to local data
      }

      const text = await res.text();

      if (!text) {
        console.warn("API returned empty response");
        return loadLocalData();
      }

      let json;
      try {
        json = JSON.parse(text);
      } catch (err) {
        console.warn("Invalid JSON from API, using local data...");
        return loadLocalData();
      }

      // If JSON data structure is missing or empty, fallback
      if (!json?.data) {
        console.warn("API JSON missing 'data', using local data...");
        return loadLocalData();
      }

      setResInfo(json.data);
    } catch (error) {
      console.error("Fetch error:", error);
      loadLocalData(); // fallback on fetch failure
    }
  };

  const loadLocalData = async () => {
    try {
      const localRes = await fetch("/data.json"); // make sure data.json is in your public/ folder
      const localJson = await localRes.json();
      setResInfo(localJson?.data || localJson);
    } catch (err) {
      console.error("Failed to load local data.json:", err);
    }
  };

  return resInfo;
};

export default useRestaurantmenudata;
