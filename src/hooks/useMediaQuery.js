import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (breakpoint) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    // typeof window !== "undefined" 👉no need to check for this because of useEffect only runs client-side
    const mediaWatcher = window.matchMedia(breakpoint);
    setTargetReached(mediaWatcher.matches);

    mediaWatcher.addEventListener("change", updateTarget);
    return () => mediaWatcher.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default useMediaQuery;

/* 
// backwards compatibility
if (mediaWatcher.addEventListener) {
    mediaWatcher.addEventListener("change", updateTarget);
    return () => mediaWatcher.removeEventListener("change", updateTarget);
  } else {
      mediaWatcher.addListener(updateTarget)
      return function cleanup() {mediaWatcher.removeListener(updateTarget)} 
}
*/
