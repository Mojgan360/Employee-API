import React from 'react'

import {
  EmployeesContainer,
  SearchContainer,
  SortContainer,
} from '../../layout'

const Dashboard = () => {
  return (
    <>
      <SortContainer />
      <SearchContainer />
      <EmployeesContainer />
    </>
  )
}

export default Dashboard
