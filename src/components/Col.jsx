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
      <StyledOffsetCol data={newBreakpointData} />
      <StyledCol className={className} data={newBreakpointData}>
        {children}
      </StyledCol>
    </>
  );
}

export default Col;

const StyledCol = styled.div`
  grid-column: ${({ data }) => `span ${data.xs.span}`};

  @media ${mediaQuery.smUp} {
    grid-column: ${({ data }) => `span ${data.sm.span}`};
  }
  @media ${mediaQuery.mdUp} {
    grid-column: ${({ data }) => `span ${data.md.span}`};
  }
  @media ${mediaQuery.lgUp} {
    grid-column: ${({ data }) => `span ${data.lg.span}`};
  }
  @media ${mediaQuery.xlUp} {
    grid-column: ${({ data }) => `span ${data.xl.span}`};
  }
  @media ${mediaQuery.xxlUp} {
    grid-column: ${({ data }) => `span ${data.xxl.span}`};
  }
`;

const StyledOffsetCol = styled.div`
  display: ${({ data }) => (data.xs.offset ? 'block' : 'none')};
  grid-column: ${({ data }) => data.xs.offset && `span ${data.xxl.offset}`};

  @media ${mediaQuery.smUp} {
    display: ${({ data }) => (data.sm.offset ? 'block' : 'none')};
    grid-column: ${({ data }) => data.sm.offset && `span ${data.xxl.offset}`};
  }
  @media ${mediaQuery.mdUp} {
    display: ${({ data }) => (data.md.offset ? 'block' : 'none')};
    grid-column: ${({ data }) => data.md.offset && `span ${data.xxl.offset}`};
  }
  @media ${mediaQuery.lgUp} {
    display: ${({ data }) => (data.lg.offset ? 'block' : 'none')};
    grid-column: ${({ data }) => data.lg.offset && `span ${data.xxl.offset}`};
  }
  @media ${mediaQuery.xlUp} {
    display: ${({ data }) => (data.xl.offset ? 'block' : 'none')};
    grid-column: ${({ data }) => data.xl.offset && `span ${data.xxl.offset}`};
  }
  @media ${mediaQuery.xxlUp} {
    display: ${({ data }) => (data.xxl.offset ? 'block' : 'none')};
    grid-column: ${({ data }) => data.xxl.offset && `span ${data.xxl.offset}`};
  }
`;
