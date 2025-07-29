import React from "react";

function LineSet({ lineSet }) {
  return <g>{lineSet.map(({ key, ...l }) => <line key={key} {...l} />)}</g>;
}

export default LineSet;
