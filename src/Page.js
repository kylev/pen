import React from "react";
import { observer } from "mobx-react";

import ThreeLine from "./ThreeLine";

const Page = ({ store }) => {
  const { width, height } = store.dimensions;

  return (
    <svg width={width} height={height}>
      <circle cx={40} cy={40} r={20} fill={store.fill} />
      <ThreeLine x={10} y={10} width={width} />
    </svg>
  );
};

export default observer(Page);
