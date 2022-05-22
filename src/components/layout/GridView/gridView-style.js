import styled from 'styled-components'
import { mobile, mobileLandscape, tablet } from '../../../utils/responsive'

export const GridViewWrapper = styled.section`
  img {
    width: 100%;
    height: auto;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    ${mobile({
      '  grid-template-columns': ' repeat(2, 1fr)',
    })};
    ${mobileLandscape({
      '  grid-template-columns': ' repeat(3, 1fr)',
    })};
    ${tablet({
      '  grid-template-columns': ' repeat(4, 1fr)',
    })};
  }
`
