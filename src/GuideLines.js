import React from "react";
import { observer } from "mobx-react";
import { times } from "lodash";

const RAD_RATIO = Math.PI / 180;

const GuideLines = ({ guideline }) => {
  const { angle, color, spacing } = guideline;
  const ratio = Math.tan(angle * RAD_RATIO);
  const count = 10;

  return (
    <g>
      {times(count, i => (
        <line
          key={i}
          x1={0}
          y1={ratio * i * spacing}
          x2={i * spacing}
          y2={0}
          stroke={color}
          strokeWidth={0.1}
        />
      ))}
    </g>
  );
};

export default observer(GuideLines);
