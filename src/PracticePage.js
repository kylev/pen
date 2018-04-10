import React from "react";
import { observer } from "mobx-react";

import LineSet from "./LineSet";

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
      <LineSet lineSet={store.lineSet} />
    </svg>
  );
};

export default observer(PracticePage);
