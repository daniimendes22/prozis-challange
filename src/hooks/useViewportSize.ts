import { useState, useEffect } from "react";

interface Dimensions {
  width: number;
  height: number;
}

function getViewportDimensions(): Dimensions {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export function useViewportSize(): Dimensions {
  const [viewportSize, setViewportSize] = useState<Dimensions>(
    getViewportDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setViewportSize(getViewportDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportSize;
}
