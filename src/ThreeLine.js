import React from "react";

const ThreeLine = ({ x, y, width }) => {
  const ascenderHeight = 7,
    xHeight = 7;

  const midlineY = y + ascenderHeight,
    baselineY = midlineY + xHeight;

  const lineStyle = { stroke: "black", strokeWidth: 0.2 };
  const midlineStyle = {
    ...lineStyle,
    strokeDasharray: [1, 1]
  };

  return (
    <g>
      <line key="ascender" x1={x} y1={y} x2={width} y2={y} style={lineStyle} />
      <line
        key="midline"
        x1={x}
        y1={midlineY}
        x2={width}
        y2={midlineY}
        style={midlineStyle}
      />
      <line
        key="baseline"
        x1={x}
        y1={baselineY}
        x2={width}
        y2={baselineY}
        style={lineStyle}
      />
    </g>
  );
};

export default ThreeLine;
