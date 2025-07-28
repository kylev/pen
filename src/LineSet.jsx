import React from "react";

const LineSet = ({ lineSet }) => {
  return <g>{lineSet.map(l => <line {...l} />)}</g>;
};

export default LineSet;
