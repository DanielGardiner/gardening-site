import { mediaQuery } from "@/constants"
import styled, { css } from 'styled-components';

const defaults = {
  height: '0',
  backgroundColor: 'transparent',
  styles: '',
}

function Spacer({
  xs = null,
  sm = null,
  md = null,
  lg = null,
  xl = null,
  xxl = null,
  fluid = false,
  ...rest
}) {


  const allBreakpointData = {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  }

  let newBreakpointData = {}

  Object.keys(allBreakpointData).forEach((breakpointData, i) => {
    // If a string is provided, assume it's the height
    if (typeof allBreakpointData[breakpointData] === 'string') {
      allBreakpointData[breakpointData] = {
        ...defaults,
        height: allBreakpointData[breakpointData],
      }
    }

    if (i === 0) {
      // If no breakpoint data is provided, use the default
      newBreakpointData[breakpointData] = {
        ...defaults,
        ...allBreakpointData[breakpointData],
      }
    } else {
      // If no breakpoint data is provided, use the previous breakpoint data
      newBreakpointData[breakpointData] = {
        ...newBreakpointData[Object.keys(newBreakpointData)[i - 1]],
        ...allBreakpointData[breakpointData],
      }
    }
  })

  return (
    <StyledSpacer newBreakpointData={newBreakpointData} fluid={fluid} />
  )

}

export default Spacer;

const StyledSpacer = styled.div`
  height: ${({ newBreakpointData }) => newBreakpointData.xs.height};
  background-color: ${({ newBreakpointData }) => newBreakpointData.xs.backgroundColor};
  ${({ newBreakpointData }) => newBreakpointData.xs.styles};
  
  @media ${mediaQuery.smUp} {
    height: ${({ newBreakpointData }) => newBreakpointData.sm.height};
    background-color: ${({ newBreakpointData }) => newBreakpointData.sm.backgroundColor};
    ${({ newBreakpointData }) => newBreakpointData.sm.styles};
  }

  @media ${mediaQuery.mdUp} {
    height: ${({ newBreakpointData }) => newBreakpointData.md.height};
    background-color: ${({ newBreakpointData }) => newBreakpointData.md.backgroundColor};
    ${({ newBreakpointData }) => newBreakpointData.md.styles};
  }

  @media ${mediaQuery.lgUp} {
    height: ${({ newBreakpointData }) => newBreakpointData.lg.height};
    background-color: ${({ newBreakpointData }) => newBreakpointData.lg.backgroundColor};
    ${({ newBreakpointData }) => newBreakpointData.lg.styles};
  }

  @media ${mediaQuery.xlUp} {
    height: ${({ newBreakpointData }) => newBreakpointData.xl.height};
    background-color: ${({ newBreakpointData }) => newBreakpointData.xl.backgroundColor};
    ${({ newBreakpointData }) => newBreakpointData.xl.styles};
  }

  @media ${mediaQuery.xxlUp} {
    height: ${({ newBreakpointData }) => newBreakpointData.xxl.height};
    background-color: ${({ newBreakpointData }) => newBreakpointData.xxl.backgroundColor};
    ${({ newBreakpointData }) => newBreakpointData.xxl.styles};
  }

  ${({ fluid }) => fluid && css`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
  `}
`

