import React from "react";
import { observer } from "mobx-react";

const SettingsForm = ({ store }) => {
  return (
    <div>
      <form>
        <select
          onChange={e => (store.pageSize = e.target.value)}
          value={store.pageSize}
        >
          <option value="letter">Letter</option>
          <option value="a4">A4</option>
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
