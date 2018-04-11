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
          {store.pageSizes.map(p => (
            <option value={p.key} key={p.key}>
              {p.name}
            </option>
          ))}
          <option value="a4">A4</option>
        </select>
        <select
          onChange={e => (store.orientation = e.target.value)}
          value={store.orientation}
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
        <input
          type="number"
          value={store.margin}
          onChange={e => (store.margin = e.target.value)}
        />
      </form>
    </div>
  );
};

export default observer(SettingsForm);
