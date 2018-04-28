import { join, partial } from "lodash";
import { reaction } from "mobx";

export const trackEvent = (action, label) => {
  window.gtag("event", action, {
    event_category: "Pen",
    event_label: label
  });
};

export const presetChange = partial(trackEvent, "select_preset");

export const ratiosChange = partial(trackEvent, "change_ratios");

export const xHeightChange = partial(trackEvent, "change_x_height");

export const outputAttempt = partial(trackEvent, "output_attempt");

const reactRatio = ratio => {
  if (ratio !== "custom") presetChange(ratio);
};

const reactRatios = args => {
  const [ratio, ...ratios] = args;
  if (ratio === "custom") ratiosChange(join(ratios, ":"));
};

const reactXHeight = height => {
  xHeightChange(height);
};

export const gaWatchStore = store => {
  reaction(() => store.ratio, reactRatio);
  reaction(() => [store.ratio, ...store.ratios], reactRatios);
  reaction(() => store.xHeight, reactXHeight);
};
