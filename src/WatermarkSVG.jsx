import React from "react";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

const WatermarkSVG = ({ store, x, y }) => {
  const { t } = useTranslation();
  let ratioT = t(store.ratio);

  if (store.ratio === "custom")
    ratioT = `${t("ratios")}(${store.ratios})`;

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

const MobxWatermarkSVG = observer(WatermarkSVG);
export default MobxWatermarkSVG;
