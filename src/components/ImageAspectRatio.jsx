import Image from 'next/image';
import { mediaQuery } from '../constants';
import styled, { css } from 'styled-components';

const defaults = {
  aspectRatio: '8 / 6',
  maxHeight: '100%',
  styles: '',
  src: null,
  alt: '',
};

function ImageAspectRatio({
  xs = null,
  sm = null,
  md = null,
  lg = null,
  xl = null,
  xxl = null,
  styles = '',
  src,
  aspectRatio,
  maxHeight,
  alt,
}) {
  const allBreakpointData = {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  };

  let newBreakpointData = {};

  const breakpoints = Object.keys(allBreakpointData);

  breakpoints.forEach((breakpoint, i) => {
    const nextBreakpoint = breakpoints[i + 1];
    const previousBreakpoint = breakpoints[i - 1];

    if (typeof allBreakpointData[breakpoint] === 'string') {
      // If a string is provided, assume it's the aspect ratio
      allBreakpointData[breakpoint] = {
        ...defaults,
        aspectRatio: allBreakpointData[breakpoint],
      };
    }

    if (i === 0) {
      // If no breakpoint data is provided, use the default
      newBreakpointData[breakpoint] = {
        ...defaults,
        ...allBreakpointData[breakpoint],
      };
      if (src) {
        // If src is provided append it onto the xs breakpoint
        newBreakpointData[breakpoint].src = src;
      }
      if (aspectRatio) {
        // If aspectRatio is provided append it onto the xs breakpoint
        newBreakpointData[breakpoint].aspectRatio = aspectRatio;
      }
      if (maxHeight) {
        // If maxHeight is provided append it onto the xs breakpoint
        newBreakpointData[breakpoint].maxHeight = maxHeight;
      }
      if (alt) {
        // If alt is provided append it onto the xs breakpoint
        newBreakpointData[breakpoint].alt = alt;
      }
      newBreakpointData[breakpoint].displayImage = true;
    } else {
      newBreakpointData[breakpoint] = {
        // If no breakpoint data is provided, use the previous breakpoint data
        ...newBreakpointData[previousBreakpoint],
        ...allBreakpointData[breakpoint],
        // Determine if an image should be displayed at this breakpoint
        displayImage: allBreakpointData[breakpoint]?.src ? true : false,
      };
    }

    newBreakpointData[breakpoint].breakpointLabel = breakpoint;
  });

  // Append visibility classes to each breakpoint
  Object.values(newBreakpointData)
    .filter((data) => data.displayImage)
    .map((data, i, arr) => {
      const currentBreakpointLabel = arr[i].breakpointLabel;
      const nextBreakpointLabel = arr[i + 1]?.breakpointLabel;

      const isLastBreakpoint = i === arr.length - 1;
      const isFirstBreakpoint = i === 0;

      const breakpointsInRange = getBreakpointsInRange(
        currentBreakpointLabel,
        nextBreakpointLabel,
        Object.keys(allBreakpointData),
      );
      const displayBreakpointsInRange = breakpointsInRange
        .map((breakpoint) => `d-${breakpoint}-block`)
        .join(' ');

      if (isFirstBreakpoint) {
        console.log('%c [qq]: ... ', 'background: red; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;');
        console.log("🚀 [qq] ~ .map ~ currentBreakpointLabel:", currentBreakpointLabel)
        newBreakpointData[
          currentBreakpointLabel
        ].visibilityClasses = `${displayBreakpointsInRange} d-${nextBreakpointLabel}-none`;
        return;
      }
      if (isLastBreakpoint) {
        newBreakpointData[
          currentBreakpointLabel
        ].visibilityClasses = `d-none d-${currentBreakpointLabel}-block`;
        return;
      }

      newBreakpointData[
        currentBreakpointLabel
      ].visibilityClasses = `d-none ${displayBreakpointsInRange} d-${nextBreakpointLabel}-none`;
    });

  return (
    <StyledImageContainer
      $breakpointData={newBreakpointData}
      styles={styles}
    >
      {Object.values(newBreakpointData)?.map((data, i) => {
        if (!data.displayImage) return null;

        return (
          <Image
            key={i}
            src={data?.src}
            fill
            className={data.visibilityClasses}
            alt={data?.alt}
          />
        );
      })}
    </StyledImageContainer>
  );
}

export default ImageAspectRatio;

const getBreakpointsInRange = (current, next, breakpoints) => {
  const startIndex = breakpoints.indexOf(current);
  const endIndex = breakpoints.indexOf(next);

  if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
    return [];
  }

  return breakpoints.slice(startIndex, endIndex);
};

const StyledImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: ${({ $breakpointData }) => $breakpointData.xs.aspectRatio};
  max-height: ${({ $breakpointData }) => $breakpointData.xs.maxHeight};
  ${({ styles }) => styles}
  ${({ $breakpointData }) => $breakpointData.xs.styles}

  img {
    object-fit: cover;
  }

  @media ${mediaQuery.smUp} {
    aspect-ratio: ${({ $breakpointData }) => $breakpointData.sm.aspectRatio};
    max-height: ${({ $breakpointData }) => $breakpointData.sm.maxHeight};
    ${({ $breakpointData }) => $breakpointData.sm.styles}
  }

  @media ${mediaQuery.mdUp} {
    aspect-ratio: ${({ $breakpointData }) => $breakpointData.md.aspectRatio};
    max-height: ${({ $breakpointData }) => $breakpointData.md.maxHeight};
    ${({ $breakpointData }) => $breakpointData.md.styles}
  }

  @media ${mediaQuery.lgUp} {
    aspect-ratio: ${({ $breakpointData }) => $breakpointData.lg.aspectRatio};
    max-height: ${({ $breakpointData }) => $breakpointData.lg.maxHeight};
    ${({ $breakpointData }) => $breakpointData.lg.styles}
  }

  @media ${mediaQuery.xlUp} {
    aspect-ratio: ${({ $breakpointData }) => $breakpointData.xl.aspectRatio};
    max-height: ${({ $breakpointData }) => $breakpointData.xl.maxHeight};
    ${({ $breakpointData }) => $breakpointData.xl.styles}
  }

  @media ${mediaQuery.xxlUp} {
    aspect-ratio: ${({ $breakpointData }) => $breakpointData.xxl.aspectRatio};
    max-height: ${({ $breakpointData }) => $breakpointData.xxl.maxHeight};
    ${({ $breakpointData }) => $breakpointData.xxl.styles}
  }
`;
