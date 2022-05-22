import React, { useContext } from 'react'

import {
  SortContainer,
  SortWrapper,
  FormContainer,
} from './sortContainer-style'

import FilterContext from '../../../context/filter/filterContext'

const Sort = () => {
  const filterContext = useContext(FilterContext)

  const { sort, updateSort } = filterContext
  return (
    <SortContainer>
      <hr />
      <SortWrapper>
        <FormContainer>
          <label htmlFor='sort'>Sort By: </label>
          <select name='sort' id='sort' value={sort} onChange={updateSort}>
            <option value='name-a'>name (a-z)</option>
            <option value='name-z'>name (z-a)</option>
            <option value='office-a'>office (a-z)</option>
            <option value='office-z'>office (z-a)</option>
          </select>
        </FormContainer>
      </SortWrapper>
    </SortContainer>
  )
}

export default Sort
