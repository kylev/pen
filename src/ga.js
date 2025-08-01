import { debounce, partial } from "lodash";
import { reaction } from "mobx";

export const gtagEvent = (action, params) => {
  if (window.gtag) {
    window.gtag("event", action, {
      app_name: "pen",
      ...params,
    });
  } else {
    console.warn("gtag not available, event not sent", action, params);
  }
};

export const trackEvent = (action, label) => {
  gtagEvent("event", action, {
    event_label: label,
  });
};

export const presetChange = partial(trackEvent, "select_preset");

export const ratiosChange = partial(trackEvent, "change_ratios");

export const xHeightChange = partial(trackEvent, "change_x_height");

export const outputAttempt = partial(trackEvent, "output_attempt");

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
