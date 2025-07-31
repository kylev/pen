import { debounce, partial } from "lodash";
import { reaction } from "mobx";

export const trackEvent = (action, label) => {
  window.gtag("event", action, {
    eventLabel: label
  });
};

export const presetChange = partial(trackEvent, "select_preset");

export const ratiosChange = partial(trackEvent, "change_ratios");

export const xHeightChange = partial(trackEvent, "change_x_height");

export const outputAttempt = partial(trackEvent, "output_attempt");

const reactRatio = ratio => {
  presetChange(ratio);
};

const reactRatios = args => {
  const [ratio, ...ratios] = args;
  if (ratio === "custom") ratiosChange(ratios.join(":"));
};

const reactXHeight = height => {
  xHeightChange(height);
};

export const gaWatchStore = store => {
  reaction(() => store.ratio, reactRatio);
  reaction(() => [store.ratio, ...store.ratios], debounce(reactRatios, 500));
  reaction(() => store.xHeight, debounce(reactXHeight, 500));
};

export const gaErrorReport = e => {
  console.error(e);
  window.gtag && window.gtag("exception", { description: e.message });
};
