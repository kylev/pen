import React from "react";
import { observer } from "mobx-react";

import LineSet from "./LineSet";

const shiftedLineSet = (lineSet, offset) =>
  lineSet.map(l => ({
    ...l,
    y1: l.y1 + offset,
    y2: l.y2 + offset
  }));

const PracticePage = ({ store }) => {
  const { width, height } = store.dimensions;

  return (
    <svg
      width={`${width}mm`}
      height={`${height}mm`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ backgroundColor: "white" }}
    >
      <circle cx={40} cy={40} r={20} fill={"lightblue"} />
      {[1, 39, 77, 115, 153].map(o => (
        <LineSet lineSet={shiftedLineSet(store.lineSet, o)} key={o} />
      ))}
    </svg>
  );
};

export default observer(PracticePage);
