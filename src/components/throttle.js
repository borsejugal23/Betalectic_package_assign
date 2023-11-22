import { useEffect, useState } from "react";

export function useThrottle(query) {
  const [throttle, setThrottle] = useState();

  useEffect(() => {
    fetch(`https://api.npms.io/v2/search?q=${query}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setThrottle(data.results);
          // console.log("1");
        }, 400); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  // console.log(throttle);
  return throttle;
}
