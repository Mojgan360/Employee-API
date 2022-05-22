import React, { useContext } from 'react'
import FilterContext from '../../../context/filter/filterContext'
import EmployeesContext from '../../../context/employees/employeesContext'

import { Loading, Pagination } from '../../layout'

const EmployeesContainer = () => {
  const filterContext = useContext(FilterContext)
  const employeesContext = useContext(EmployeesContext)
  const { filtered_employees: employees } = filterContext
  const { employees_loading: isLoading } = employeesContext
  if (isLoading) {
    return <Loading />
  }

  if (employees.length === 0) {
    return (
      <div>
        <h2>No Employees to display...!</h2>
      </div>
    )
  }
  return (
    <>
      <Pagination />
    </>
  )
}

export default EmployeesContainer

// const Wrapper = styled.div`
//   width: 90vw;
//   max-width: 1100px;
//   overflow: hidden;
//   margin: 0 auto;

//   .employees {
//     overflow: hidden;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);

//     grid-gap: 20px;
//     align-items: stretch;
//   }
// `
