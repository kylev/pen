import React from "react";

import PaperSettings from "./PaperSettings";

const SettingsForm = ({ store }) => {
  return (
    <div>
      <PaperSettings store={store} />
    </div>
  );
};

//export default observer(SettingsForm);
export default SettingsForm;
