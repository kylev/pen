import { merge } from "lodash";

export const basicLine = (width, margin, offset) => {
  return {
    x1: margin,
    y1: offset,
    x2: width - margin * 2,
    y2: offset,
    stroke: "black",
    strokeWidth: 0.2
  };
};

export const color = color => {
  return { stroke: color };
};

export const thickness = x => {
  return { strokeWidth: x };
};

export const lineDash = name => {
  const xlate = {
    none: null,
    even1cm: [1, 1]
  };
  return { strokeDasharray: xlate[name] };
};

export const composeLine = spec => {
  return merge(
    basicLine(spec.width, spec.margin, spec.offset),
    color(spec.color),
    thickness(spec.thickness),
    spec.dash && lineDash(spec.dash)
  );
};

export const defaultLineSpec = (overrides = {}) => {
  return {
    offset: 0,
    color: "black",
    thickness: 0.2,
    dash: "none",
    ...overrides
  };
};
