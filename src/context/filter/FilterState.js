import React, { useReducer, useContext, useEffect } from 'react'
import FilterContext from './filterContext'
import filterReducer from './filterReducer'
import EmployeesContext from '../employees/employeesContext'

import {
  SET_GRIDVIEW,
  SET_LISTVIEW,
  LOAD_EMPLOYEES,
  SORT_EMPLOYEES,
  UPDATE_SORT,
  FILTER_EMPLOYEES,
  UPDATE_FILTERS,
  GET_CURRENT_PAGE,
  GET_NEXT_PAGE,
  GET_PREV_PAGE,
  CLEAR_FILTERS,
} from '../../actions'

const initialState = {
  filtered_employees: [],
  all_employees: [],
  grid_view: true,
  sort: 'all-employees',
  filters: {
    text: '',
    office: 'all',
  },
  currentpage: 1,
  itemsPerPage: 8,
  pageNumberLimit: 6,
}
const FilterState = ({ children }) => {
  const employeesContext = useContext(EmployeesContext)
  const { employees } = employeesContext

  const [state, dispatch] = useReducer(filterReducer, initialState)
  useEffect(() => {
    dispatch({ type: LOAD_EMPLOYEES, payload: employees })
  }, [employees])

  //Filter
  useEffect(() => {
    dispatch({ type: FILTER_EMPLOYEES })
    dispatch({ type: SORT_EMPLOYEES })
  }, [employees, state.sort, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'office') {
      value = e.target.textContent
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const updateSort = (e) => {
    //const name = e.target.name
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }
  const handleCurrenPage = (e) => {
    dispatch({ type: GET_CURRENT_PAGE, payload: e })
  }
  const handleNextPage = (e) => {
    dispatch({ type: GET_NEXT_PAGE })
  }
  const handlePrevPage = (e) => {
    dispatch({ type: GET_PREV_PAGE })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        setGridView,
        setListView,
        clearFilters,
        updateSort,
        handleCurrenPage,
        handleNextPage,
        handlePrevPage,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)

export default FilterState
