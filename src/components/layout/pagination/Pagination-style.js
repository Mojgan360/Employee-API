import styled from 'styled-components'

export const PaginationContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const NumberWrapper = styled.section`
  width: 100%;
  height: 6rem;
  margin: 2rem 3rem 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: end;

  flex-wrap: wrap;
  gap: 0.3rem;
  .paginate-btn-container {
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background-color: transparent;
    border-color: transparent;
    width: 30px;
    height: 30px;
    font-weight: 700;
    font-size: 0.7rem;
    color: var(--primary-blue-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .active {
    background-color: var(--primary-green-500);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    width: 30px;
    height: 30px;
    background-color: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-blue-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    cursor: pointer;
    transition: var(--transition);
  }

  .prev-btn:hover,
  .next-btn:hover {
    background-color: var(--primary-500);
    color: var(--primary-green-500);
  }
  .prev-btn:disabled,
  .next-btn:disabled {
    pointer-events: none;
  }
`
