import React from "react";
import { observer } from "mobx-react";
import { Row, Col } from "antd";

const showFields = [
  "x1",
  "y1",
  "x2",
  "y2",
  "stroke",
  "strokeDasharray",
  "strokeWidth"
];

const LineItem = ({ line }) => {
  return (
    <div>
      <Row key="name">
        <Col span={24}>Line: {line.key}</Col>
      </Row>
      {showFields.map(key => (
        <Row key={key}>
          <Col span={14}>{key}</Col>
          <Col span={10}>{line[key]}</Col>
        </Row>
      ))}
    </div>
  );
};

const LineSetDebug = ({ lineSet }) => {
  return <div>{lineSet.map(l => <LineItem key={l.key} line={l} />)}</div>;
};

export default observer(LineSetDebug);
