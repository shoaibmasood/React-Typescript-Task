import { useMemo } from "react";
import { useFormContext } from "../../context/FormContext";
import Cell from "../Cell/Cell";

export const ViewPortGrid = () => {
  const { columns, rows } = useFormContext();

  const gridItems = useMemo(
    () =>
      Array<number>(rows * columns)
        .fill(0)
        .map((_, idx) => <Cell key={idx} />),
    [rows, columns]
  );

  return (
    <div
      className="grid-container"
      style={{
        gridTemplateColumns: `repeat(${columns},1fr)`,
        gridTemplateRows: `repeat(${rows},1fr)`,
      }}
    >
      {gridItems}
    </div>
  );
};
