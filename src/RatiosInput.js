import React from "react";
import { InputNumber } from "antd";
import { observer } from "mobx-react";

const RatiosInput = ({ store }) => {
  return store.ratios.map((r, i) => (
    <InputNumber
      min={0}
      max={10}
      value={r}
      parser={Number}
      onChange={v => {
        store.ratioPreset("custom");
        store.ratios[i] = v;
      }}
      style={{ marginRight: 10 }}
      key={i}
    />
  ));
};

export default observer(RatiosInput);
