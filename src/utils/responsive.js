import { css } from 'styled-components'

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 550px) {
      ${props}
    }
  `
}
export const mobileLandscape = (props) => {
  return css`
    @media only screen and (min-width: 992px) {
      ${props}
    }
  `
}
export const tablet = (props) => {
  //green
  return css`
    @media only screen and (min-width: 1170px) {
      ${props}
    }
  `
}
