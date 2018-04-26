import { partial } from "lodash";

export const trackEvent = (action, label) => {
  window.gtag("event", action, {
    event_category: "Pen",
    event_label: label
  });
};

export const presetChange = partial(trackEvent, "select_preset");
