import React from "react";
import { Collapse } from "antd";

import PaperSettings from "./PaperSettings";
import LineSettings from "./LineSettings";
import LineSetDebug from "./LineSetDebug";

const SettingsForm = ({ store }) => {
  return (
    <Collapse mode="inline" defaultActiveKey={"paper"}>
      <Collapse.Panel key="paper" header={<span>Paper</span>}>
        <PaperSettings store={store} />
      </Collapse.Panel>
      <Collapse.Panel key="lines" header={<span>Lines</span>}>
        <LineSettings store={store} />
      </Collapse.Panel>
      {false && (
        <Collapse.Panel
          key="debug"
          showArrow={false}
          header={<span>Debug</span>}
        >
          <LineSetDebug lineSet={store.lineSet} />
        </Collapse.Panel>
      )}
    </Collapse>
  );
};

//export default observer(SettingsForm);
export default SettingsForm;
