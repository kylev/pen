import React from "react";
import Paper from "material-ui/Paper";

import PaperSettings from "./PaperSettings";
import LineSettings from "./LineSettings";
import LineSetDebug from "./LineSetDebug";

const SettingsForm = ({ active, store }) => {
  return (
    <Paper>
      {active === "paper" && <PaperSettings store={store} />}
      {active === "lines" && <LineSettings store={store} />}
      {active === "debug" && <LineSetDebug lineSet={store.lineSet} />}
    </Paper>
  );
};

//export default observer(SettingsForm);
export default SettingsForm;
