import { mediaQuery } from '@/constants';
import styled from 'styled-components';

const defaults = {
  span: 1,
  offset: 0,
};

function Col({ children, className, xs, sm, md, lg, xl, xxl }) {
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
    const previousBreakpoint = breakpoints[i - 1];

    if (typeof allBreakpointData[breakpoint] === 'number') {
      // If a string is provided, assume it's the span
      allBreakpointData[breakpoint] = {
        ...defaults,
        span: allBreakpointData[breakpoint],
      };
    }

    if (i === 0) {
      // If no breakpoint data is provided, use the default
      newBreakpointData[breakpoint] = {
        ...defaults,
        ...allBreakpointData[breakpoint],
      };
    } else {
      newBreakpointData[breakpoint] = {
        // If no breakpoint data is provided, use the previous breakpoint data
        ...newBreakpointData[previousBreakpoint],
        ...allBreakpointData[breakpoint],
      };
    }
  });

  return (
    <>
      <StyledOffsetCol $breakpointData={newBreakpointData} />
      <StyledCol className={className} $breakpointData={newBreakpointData}>
        {children}
      </StyledCol>
    </>
  );
}

export default Col;

const StyledCol = styled.div`
  grid-column: ${({ $breakpointData }) => `span ${$breakpointData.xs.span}`};

  @media ${mediaQuery.smUp} {
    grid-column: ${({ $breakpointData }) => `span ${$breakpointData.sm.span}`};
  }
  @media ${mediaQuery.mdUp} {
    grid-column: ${({ $breakpointData }) => `span ${$breakpointData.md.span}`};
  }
  @media ${mediaQuery.lgUp} {
    grid-column: ${({ $breakpointData }) => `span ${$breakpointData.lg.span}`};
  }
  @media ${mediaQuery.xlUp} {
    grid-column: ${({ $breakpointData }) => `span ${$breakpointData.xl.span}`};
  }
  @media ${mediaQuery.xxlUp} {
    grid-column: ${({ $breakpointData }) => `span ${$breakpointData.xxl.span}`};
  }
`;

const StyledOffsetCol = styled.div`
  display: ${({ $breakpointData }) => ($breakpointData.xs.offset ? 'block' : 'none')};
  grid-column: ${({ $breakpointData }) => $breakpointData.xs.offset && `span ${$breakpointData.xxl.offset}`};

  @media ${mediaQuery.smUp} {
    display: ${({ $breakpointData }) => ($breakpointData.sm.offset ? 'block' : 'none')};
    grid-column: ${({ $breakpointData }) => $breakpointData.sm.offset && `span ${$breakpointData.xxl.offset}`};
  }
  @media ${mediaQuery.mdUp} {
    display: ${({ $breakpointData }) => ($breakpointData.md.offset ? 'block' : 'none')};
    grid-column: ${({ $breakpointData }) => $breakpointData.md.offset && `span ${$breakpointData.xxl.offset}`};
  }
  @media ${mediaQuery.lgUp} {
    display: ${({ $breakpointData }) => ($breakpointData.lg.offset ? 'block' : 'none')};
    grid-column: ${({ $breakpointData }) => $breakpointData.lg.offset && `span ${$breakpointData.xxl.offset}`};
  }
  @media ${mediaQuery.xlUp} {
    display: ${({ $breakpointData }) => ($breakpointData.xl.offset ? 'block' : 'none')};
    grid-column: ${({ $breakpointData }) => $breakpointData.xl.offset && `span ${$breakpointData.xxl.offset}`};
  }
  @media ${mediaQuery.xxlUp} {
    display: ${({ $breakpointData }) => ($breakpointData.xxl.offset ? 'block' : 'none')};
    grid-column: ${({ $breakpointData }) => $breakpointData.xxl.offset && `span ${$breakpointData.xxl.offset}`};
  }
`;
