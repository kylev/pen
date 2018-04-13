import React from "react";
import { observer } from "mobx-react";

import LineSet from "./LineSet";
import GuideLines from "./GuideLines";

const shiftedLineSet = (lineSet, offset) =>
  lineSet.map(l => ({
    ...l,
    y1: l.y1 + offset,
    y2: l.y2 + offset
  }));

const PracticePage = ({ store }) => {
  const { gap, lineSet, dimensions: { width, height } } = store;

  const setHeight = gap + lineSet[lineSet.length - 1].y1;
  const count = Math.round(height / setHeight);

  return (
    <div className="Body-printable">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${width}mm`}
        height={`${height}mm`}
        viewBox={`0 0 ${width} ${height}`}
        style={{ backgroundColor: "white" }}
      >
        <circle cx={40} cy={40} r={20} fill={"lightblue"} />
        {Array.from(Array(count)).map((_, i) => (
          <LineSet
            lineSet={shiftedLineSet(lineSet, 1 + setHeight * i)}
            key={i}
          />
        ))}
        <GuideLines guideline={store.guideline} />
      </svg>
    </div>
  );
};

export default observer(PracticePage);
