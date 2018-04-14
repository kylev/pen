import React from "react";
import { times } from "lodash";
import { observer } from "mobx-react";

import LineSet from "./LineSet";

const shiftedLineSet = (lineSet, offset) =>
  lineSet.map(l => ({
    ...l,
    y1: l.y1 + offset,
    y2: l.y2 + offset
  }));

const PracticePage = ({ store }) => {
  const {
    gap,
    gapRect,
    lineSet,
    lineSetHeight,
    dimensions: { width, height }
  } = store;

  const workHeight = lineSetHeight - gap;
  const count = Math.round(height / workHeight);

  return (
    <div className="Body-printable">
      <svg
        id="theSVG"
        xmlns="http://www.w3.org/2000/svg"
        width={`${width}mm`}
        height={`${height}mm`}
        viewBox={`0 0 ${width} ${height}`}
        style={{ backgroundColor: "white" }}
      >
        {false && <circle cx={40} cy={40} r={20} fill={"lightblue"} />}
        {times(count, i => (
          <g key={`lineset-${i}`}>
            <rect {...gapRect} y={1 + lineSetHeight * i + workHeight} />
            <LineSet
              lineSet={shiftedLineSet(lineSet, 1 + lineSetHeight * i)}
              key={i}
            />
          </g>
        ))}
        <LineSet lineSet={store.guideLineSet} key="guidelines" />
      </svg>
    </div>
  );
};

export default observer(PracticePage);
