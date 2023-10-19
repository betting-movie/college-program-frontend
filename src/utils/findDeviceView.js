import { useEffect, useMemo, useState } from "react";

export function useDevice() {
  // Initialize state with undefined width/height so server and client renders match

  //desktop 1 , mobile 2 tab 3
  const [device, setDevice] = useState(1);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      console.log(
        "window.innerWidth",
        window.innerWidth > 480 && window.innerWidth <= 1024
      );
      // Set window width/height to state
      if (window.innerWidth <= 480) {
        setDevice(2);
      } else if (window.innerWidth > 480 && window.innerWidth <= 1024) {
        setDevice(3);
      } else {
        setDevice(1);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return useMemo(() => device, [device]);
}
