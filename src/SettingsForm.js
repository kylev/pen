import React from "react";
import { Collapse, Icon } from "antd";

import PaperSettings from "./PaperSettings";

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
    </Collapse>
  );
};

//export default observer(SettingsForm);
export default SettingsForm;
