import React, { useEffect, useState, useContext } from 'react'

import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

import { PaginationContainer, NumberWrapper } from './Pagination-style'
import FilterContext from '../../../context/filter/filterContext'
import EmployeesContext from '../../../context/employees/employeesContext'
import { GridView, ListView } from '../../layout'

const Pagination = () => {
  const filterContext = useContext(FilterContext)
  const employeesContext = useContext(EmployeesContext)
  const {
    filtered_employees: data,
    grid_view,
    currentpage,
    itemsPerPage,
    pageNumberLimit,
    handleCurrenPage,
    handleNextPage,
    handlePrevPage,
  } = filterContext
  const { employees_loading: isLoading } = employeesContext

  const [employees, setEmployees] = useState([])
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(6)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
  useEffect(() => {
    if (isLoading) return
    setEmployees(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentpage, data])

  const pages = []
  for (let i = 1; i <= Math.ceil(data && data.length / itemsPerPage); i++) {
    pages.push(i)
  }
  const renderPageNumbers =
    pages &&
    pages.map((number, index) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <div className='btn-container' key={index}>
            <button
              id={number}
              onClick={(e) => {
                handleCurrenPage(+e.target.id)
              }}
              className={currentpage === number ? 'active pageBtn ' : 'pageBtn'}
            >
              {number}
            </button>
          </div>
        )
      } else {
        return null
      }
    })

  const paginate = (employees) => {
    const indexOfLastItem = currentpage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems =
      employees && employees.slice(indexOfFirstItem, indexOfLastItem)
    return currentItems
  }

  const handleNextbtn = () => {
    handleNextPage()

    if (currentpage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrevbtn = () => {
    handlePrevPage()
    //pageNumberLimit
    if ((currentpage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <div className='btn-container'>
        <button className='prev-btn' onClick={handleNextbtn}>
          &hellip;
        </button>
      </div>
    )
  }

  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <div className='btn-container'>
        <button className='prev-btn' onClick={handlePrevbtn}>
          &hellip;
        </button>
      </div>
    )
  }

  return (
    <PaginationContainer>
      {grid_view ? (
        <GridView data={paginate(employees)} />
      ) : (
        <ListView data-testid='list-view' data={paginate(employees)} />
      )}

      <NumberWrapper>
        <div className='btn-container'>
          <button
            className='prev-btn'
            onClick={handlePrevbtn}
            disabled={currentpage === pages[0] ? true : false}
          >
            <HiChevronDoubleLeft />
          </button>
        </div>

        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <div className='paginate-btn-container'>
          <button
            className='next-btn'
            onClick={handleNextbtn}
            disabled={currentpage === pages[pages.length - 1] ? true : false}
          >
            <HiChevronDoubleRight />
          </button>
        </div>
      </NumberWrapper>
    </PaginationContainer>
  )
}

export default Pagination
