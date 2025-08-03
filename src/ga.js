import debounce from "lodash-es/debounce";
import { reaction } from "mobx";

export const gtagEvent = (action, params) => {
  if (window.gtag) {
    window.gtag("event", action, {
      ...params,
    });
  } else {
    console.warn("gtag not available, event not sent", action, params);
  }
};

// Legacy style naming?
export const trackEvent = (action, label) => {
  gtagEvent(action, { eventLabel: label });
};

export const presetChange = (label) => trackEvent("select_preset", label);

export const ratiosChange = (label) => trackEvent("change_ratios", label);

export const xHeightChange = (label) => trackEvent("change_x_height", label);

export const outputAttempt = (label) => trackEvent("output_attempt", label);

export const gaLangChange = (lng) => {
  gtagEvent("language_change", { language: lng });
};

const reactioRatio = (ratio) => {
  presetChange(ratio);
};

const reactioRatios = (args) => {
  const [ratio, ...ratios] = args;
  if (ratio === "custom") ratiosChange(ratios.join(":"));
};

const reactioXHeight = (height) => {
  xHeightChange(height);
};

export const gaWatchStore = (store) => {
  reaction(() => store.ratio, reactioRatio);
  reaction(() => [store.ratio, ...store.ratios], debounce(reactioRatios, 500));
  reaction(() => store.xHeight, debounce(reactioXHeight, 500));
};

export const gaErrorReport = (e) => {
  console.error(e);
  window.gtag && window.gtag("exception", { description: e.message });
};
