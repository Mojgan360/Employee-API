import React from 'react'

import { GridViewWrapper } from './gridView-style'
import { GridCard } from '../../layout'

const GridView = ({ data: employees }) => {
  return (
    <GridViewWrapper data-aos='slide-right' data-aos-duration='2000'>
      <div className='products-container'>
        {employees &&
          employees.map((employee) => {
            return (
              <article key={employee.email}>
                <GridCard
                  data-testid='all'
                  key={employee.email}
                  {...employee}
                />
              </article>
            )
          })}
      </div>
    </GridViewWrapper>
  )
}

export default GridView
