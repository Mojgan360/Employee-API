import styled from 'styled-components'
import { mobile, mobileLandscape, tablet } from '../../../utils/responsive'

export const SearchViewContainer = styled.div`
  overflow: hidden;
  .form-wrapper {
    width: 100vw;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .office-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
  }
  .office-wrapper {
    padding-top: 10px;
    width: calc(
      (70px + (10px * 2)) * 4
    ); // item width + padding on either side times number of items */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    ${mobile({
      ' width': 'calc( (100px + (10px * 2)) * 4)',
    })};

    ${mobileLandscape({
      ' width': 'calc( (150px + (10px * 2)) * 4)',
    })};

    ${tablet({
      ' width': 'calc( (150px + (10px * 2)) * 4)',
    })};
    .active {
      width: 100px;
      height: 40px;
      flex-grow: 1;
      margin: 10px;
      letter-spacing: 1px;
      opacity: 1;
      background-color: var(--primary-green-500);
      color: var(--primary-blue-500);
      cursor: pointer;
      outline: none;
      border: none;
      font-weight: 500;
      font-size: 0.9rem;
    }
    .item {
      width: 100px;
      height: 40px;
      flex-grow: 1;
      margin: 10px;
      letter-spacing: 1px;
      background-color: var(--primary-blue-500);
      color: var(--primary-green-500);
      cursor: pointer;
      outline: none;
      border: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: var(--transition);

      ${mobile({
        width: '120px',
      })};

      ${mobileLandscape({
        width: '120px',
      })};

      ${tablet({
        width: '120px',
      })};
    }
    .item:hover {
      transform: scale(1.1);
    }
  }

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .search-wrapper {
      margin: 15px 0;
      padding: 0 20px 0 20px;
      border-right: 1.5px solid var(--primary-blue-500);
      input {
        height: 40px;
        width: 200px;
      }
      input::placeholder {
        text-transform: capitalize;
        letter-spacing: 2px;
      }
    }
    .clear-button {
      background-color: var(--red-dark);
      color: var(--blue-light-100);
      height: 40px;
      width: 150px;
      margin: 15px 0 15px 20px;
      padding: 0 20px 0 20px;
      outline: none;
      border: none;
      border-radius: 5px;
      letter-spacing: 2px;
      text-transform: capitalize;
      transition: var(--transition);

      button {
        cursor: pointer;
        font-weight: 500;
        text-transform: capitalize;
      }
    }
    .clear-button:hover {
      transform: scale(1.1);
    }
  }
`

export const ViewWrapper = styled.div`
  background-color: var(--blue-dark--800);
  color: var(--blue-light-100);
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;

  justify-content: center;
  align-items: center;

  .view {
    width: calc(
      (100px + (10px * 2)) * 4
    ); // item width + padding on either side times number of items */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    p {
      font-size: 0.8rem;
    }
    hr {
      width: 80px;
      border: 1px solid var(--blue-light-100);
    }
    button {
      background: transparent;
      background-color: var(--blue-light-100);
      color: var(--blue-dark--800);

      width: 1.5rem;
      height: 1.5rem;
      margin: 0 0.5rem;
      border-radius: var(--radius);

      cursor: pointer;
      outline: none;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--primary-green-500);
      color: var(--primary-blue-500);
      transform: scale(1.2);
    }
  }
`
