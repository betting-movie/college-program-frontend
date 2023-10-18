import { useEffect, useMemo, useState } from "react";

export function useMobile() {
  // Initialize state with undefined width/height so server and client renders match
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      if (window.innerWidth <= 480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return useMemo(() => isMobile, [isMobile]);
}
