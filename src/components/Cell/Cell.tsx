import { useRef, useState, useEffect, useCallback } from "react";

function Cell() {
  const cellRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const trackDimension = useCallback(() => {
    const cellElement = cellRef.current;
    if (!cellElement) return;

    const { width, height } = cellElement.getBoundingClientRect();
    setSize({ width, height });
  }, []);

  useEffect(() => {
    if (!cellRef.current) return;

    const resizeObserver = new ResizeObserver(trackDimension);

    resizeObserver.observe(cellRef?.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={cellRef} className="cell-container">
      <p>{Math.round(size.width)}</p>
      <p data-testid="cell">X</p>
      <p>{Math.round(size.height)}</p>
    </div>
  );
}

export default Cell;
