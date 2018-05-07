import React from "react";
import { translate } from "react-i18next";
import { observer } from "mobx-react";

const WatermarkSVG = ({ store, t, x, y }) => {
  let ratioT = t(store.ratio);
  if (store.ratio === "custom") ratioT = `${t("ratios")}(${store.ratios})`;

  let ratioDetail = `
    - ${t("xheight")} ${store.xHeight}mm
    - ${t("guideangle")} ${store.guideline.angle}°
  `;

  return (
    <text x={x} y={y} fontSize={3} fill={store.watermarkColor}>
      https://kylev.github.io/pen/ {ratioT} {ratioDetail}
    </text>
  );
};

export default translate()(observer(WatermarkSVG));
