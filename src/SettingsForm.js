import React from "react";
import { Collapse, Icon } from "antd";

import PaperSettings from "./PaperSettings";
import LineSettings from "./LineSettings";
import LineSetDebug from "./LineSetDebug";

const SettingsForm = ({ store }) => {
  return (
    <Collapse mode="inline" theme="dark">
      <Collapse.Panel
        key="paper"
        showArrow={false}
        header={
          <span>
            <Icon type="file" />
            <span>Paper</span>
          </span>
        }
      >
        <PaperSettings store={store} />
      </Collapse.Panel>
      <Collapse.Panel key="lines" showArrow={false} header={<span>Lines</span>}>
        <LineSettings store={store} />
      </Collapse.Panel>
      <Collapse.Panel key="debug" showArrow={false} header={<span>Debug</span>}>
        <LineSetDebug lineSet={store.lineSet} />
      </Collapse.Panel>
    </Collapse>
  );
};

//export default observer(SettingsForm);
export default SettingsForm;
