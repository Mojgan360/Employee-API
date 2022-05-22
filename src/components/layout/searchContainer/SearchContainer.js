import React, { useContext } from 'react'
import { BsFillGridFill, BsList } from 'react-icons/bs'

import { SearchViewContainer, ViewWrapper } from './SearchContainer-style'
import FilterContext from '../../../context/filter/filterContext'
import { getUniqueValues } from '../../../utils/helpers'

const SearchContainer = () => {
  const filterContext = useContext(FilterContext)

  const {
    filters: { text, office },
    updateFilters,
    clearFilters,
    all_employees,
    setGridView,
    setListView,
    grid_view,
    filtered_employees,
  } = filterContext

  const offices = getUniqueValues(all_employees, 'office')

  return (
    <SearchViewContainer>
      <form className='form-wrapper' onSubmit={(e) => e.preventDefault()}>
        <div className='office-container'>
          <div className='office-wrapper '>
            {offices &&
              offices.map((o, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='office'
                    className={`${office === o ? 'active' : 'item'}`}
                  >
                    {o}
                  </button>
                )
              })}
          </div>
        </div>

        <div className='footer-container'>
          <div className='search-wrapper'>
            <input
              type='text'
              name='text'
              placeholder='Search For Employee'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>

          <button type='button' className='clear-button' onClick={clearFilters}>
            {' '}
            clear filters
          </button>
        </div>
      </form>
      <ViewWrapper>
        <div className='view'>
          <p data-testid='paragraf'>
            {filtered_employees.length > 1
              ? ` ${filtered_employees.length} Employees Found`
              : 'One Employee Found'}
          </p>
          <hr />
          <button
            type='button'
            className={`${grid_view ? 'active' : null}`}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            className={`${!grid_view ? 'active' : null}`}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
      </ViewWrapper>
    </SearchViewContainer>
  )
}

export default SearchContainer
