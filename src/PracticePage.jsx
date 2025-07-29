import React from "react";
import { times } from "lodash";
import { observer } from "mobx-react-lite";

import LineSet from "./LineSet";
import WatermarkSVG from "./WatermarkSVG";

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
    heights,
    lineSet,
    lineSetHeight,
    halfLineSet,
    dimensions: { width, height }
  } = store;

  const workHeight = lineSetHeight - gap;
  const count = Math.floor((height + gap) / lineSetHeight);
  const xOffset = heights[0] + heights[1];

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
        <g key="X">
          {times(count, i => (
            <text
              key={`x-${i}`}
              x={1}
              y={i * lineSetHeight + xOffset + 1}
              fontSize={heights[1] * 2}
              fill={store.xColor}
            >
              x
            </text>
          ))}
        </g>
        {times(count, i => (
          <g key={`lineset-${i}`}>
            <rect {...gapRect} y={1 + lineSetHeight * i + workHeight} />
            <LineSet
              key={`core-lines-${i}`}
              lineSet={shiftedLineSet(lineSet, 1 + lineSetHeight * i)}
            />
            <LineSet
              key={`half-lines-${i}`}
              lineSet={shiftedLineSet(halfLineSet, 1 + lineSetHeight * i)}
            />
          </g>
        ))}
        <LineSet lineSet={store.guideLineSet} key="guidelines" />

        <WatermarkSVG x={1} y={height - 1} store={store} />
      </svg>
    </div>
  );
};

const MobxPracticePage = observer(PracticePage);
export default MobxPracticePage;
