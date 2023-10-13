import { mediaQuery } from '@/constants';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  column-gap: 0;

  @media ${mediaQuery.smUp} {
    column-gap: 0;
  }
  @media ${mediaQuery.mdUp} {
    column-gap: 0;
  }
  @media ${mediaQuery.lgUp} {
    column-gap: 0;
  }
  @media ${mediaQuery.xlUp} {
    column-gap: 0;
  }
  @media ${mediaQuery.xxlUp} {
    column-gap: 0;
  }
`;

export default StyledRow;
