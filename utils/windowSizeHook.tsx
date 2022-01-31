import { useState, useEffect } from "react";
import {breakpoints } from "utils/theme"
// Define general type for useWindowSize that gets the current screen size
// This can be used when we want to access the current size using js rather than css

// Hook
function useWindowSize(): Array<String> {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState([]);
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
       if(parseFloat(breakpoints["sm"])>window.innerWidth){
        if(windowSize!==["sm"]) setWindowSize(["sm"]);
        // TODO deal with all the sizes
       } else if (parseFloat(breakpoints["md"])>window.innerWidth) {
        if (windowSize!==["sm","md"]) setWindowSize(["sm","md"]);
       }
       else if (parseFloat(breakpoints["lg"])>window.innerWidth) {
        if ( windowSize!==["sm", "md", "lg"]) setWindowSize(["sm", "md", "lg"]);
       }
       else if (parseFloat(breakpoints["xl"])>window.innerWidth) {
        if ( windowSize!==["sm", "md", "lg","xl"]) setWindowSize(["sm", "md", "lg", "xl"]);
       }
       else if (windowSize!==["sm", "md", "lg","xl", "2xl"]) {
            setWindowSize(["sm", "md", "lg", "xl", "2xl"]);
       }
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  export default useWindowSize;