const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

let mediaQuery = {};

Object.keys(breakpoints).forEach((breakpoint) => {
  mediaQuery[
    `${breakpoint}Up`
  ] = `screen and (min-width: ${breakpoints[breakpoint]}px)`;

  // Create "between" media queries
  const nextBreakpoint = Object.keys(breakpoints).find(
    (key) => breakpoints[key] > breakpoints[breakpoint]
  );

  if (nextBreakpoint) {
    mediaQuery[`${breakpoint}To${nextBreakpoint}`] = `screen and (min-width: ${
      breakpoints[breakpoint]
    }px) and (max-width: ${breakpoints[nextBreakpoint] - 1}px)`;
  }
});

export { breakpoints, mediaQuery };
