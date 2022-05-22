import styled from 'styled-components'

export const GridCardContainer = styled.article`
  position: relative;
  width: 260px;
  height: 341px;
  overflow: hidden;
  padding: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;

  header {
    width: 100%;
  }
  .image {
    width: 100%;
    display: block;
    object-fit: cover;
    object-fit: contain;
  }

  footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 86px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    opacity: 0.7;
    transition: var(--transition);
  }
  footer:hover {
    background-color: var(--primary-blue-500);
    opacity: 1;
    transform: scale(1.05);
  }
  .info {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;

    h5 {
      color: var(--blue-light-100);
    }
  }

  .info ul {
    width: 90px;
    height: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(7px, 1fr));
    grid-gap: 1rem;
  }
  .info ul li {
    cursor: pointer;
    z-index: 99;
    transition: var(--transition);

    &:hover {
      transform: scale(1.3);
    }
  }

  .office {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 15px;
    margin-top: 0;
    h5 {
      display: block;
      color: var(--blue-light-100);
    }
  }
`
