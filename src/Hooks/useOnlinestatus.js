import { useEffect, useState } from "react";
/*
Finalize the contract
1. check online status, return online status--> boolean value
--to chk online use online event EventLIsetner
2. check offline status
*/

const useOnlinestatus = () => {
  const [onlinestatus, setonlinestatus] = useState(true);
  useEffect(() => {
    //1. check online status, return online status--> boolean value
    window.addEventListener("offline", () => {
      setonlinestatus(false);
    });

    window.addEventListener("online", () => {
      setonlinestatus(true);
    });
  },[]);
  return onlinestatus;
};

export default useOnlinestatus;
