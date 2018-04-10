import React from "react";
import { observer } from "mobx-react";

import ThreeLine from "./ThreeLine";

const PracticePage = ({ store }) => {
  const { width, height, margin } = store.dimensions;

  return (
    <svg
      width={`${width}mm`}
      height={`${height}mm`}
      viewBox={`0 0 ${width} ${height}`}
      style={{ backgroundColor: "white" }}
    >
      <circle cx={40} cy={40} r={20} fill={"lightblue"} />
      <ThreeLine x={margin} y={margin} width={width - 2 * margin} />
    </svg>
  );
};

export default observer(PracticePage);
