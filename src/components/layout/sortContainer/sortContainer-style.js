import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SortContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid gray;
  hr {
    margin: 30px 0;
  }
`
export const SortWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    margin-right: 10px;
    width: 60px;
    color: var(--primary-blue-500);
  }
  option {
    height: 20px;
  }
  select {
    height: 30px;
    width: 150px;
    background-color: var(--clr-primary-10);
    color: var(--clr-primary-1);
    font-size: 15px;
    letter-spacing: 2px;
  }
`
export const CreateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary-1);

  height: 50px;
  width: 220px;
  letter-spacing: 2px;
  font-size: 16px;
  cursor: pointer;
`

export const LinkCreateBook = styled(Link)`
  color: var(--clr-primary-10);
`
