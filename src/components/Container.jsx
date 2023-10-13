import { mediaQuery } from '@/constants';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;

  padding-left: 12px;
  padding-right: 12px;

  @media ${mediaQuery.smUp} {
    max-width: 540px;
    padding-left: 12px;
    padding-right: 12px;
  }
  @media ${mediaQuery.mdUp} {
    max-width: 720px;
    padding-left: 12px;
    padding-right: 12px;
  }
  @media ${mediaQuery.lgUp} {
    max-width: 960px;
    padding-left: 12px;
    padding-right: 12px;
  }
  @media ${mediaQuery.xlUp} {
    max-width: 1140px;
    padding-left: 12px;
    padding-right: 12px;
  }
  @media ${mediaQuery.xxlUp} {
    max-width: 1320px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export default function Container({ children, className }) {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
};
