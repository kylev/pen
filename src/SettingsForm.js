import React from "react";
import { observer } from "mobx-react";

const SettingsForm = ({ store }) => {
  return (
    <div>
      <form>
        <select>
          <option value="letter">Letter</option>
        </select>
        <select
          onChange={e => (store.orientation = e.target.value)}
          value={store.orientation}
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
      </form>
    </div>
  );
};

export default observer(SettingsForm);
