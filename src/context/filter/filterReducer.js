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
const filter_reducer = (state, action) => {
  const { type, payload } = action

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }

  if (type === LOAD_EMPLOYEES) {
    return {
      ...state,
      filtered_employees: [...payload],
      all_employees: [...payload],
      filters: { ...state.filters },
    }
  }

  if (type === UPDATE_FILTERS) {
    const { name, value } = payload
    return {
      ...state,
      filters: { ...state.filters, [name]: value },
      currentpage: 1,
    }
  }

  if (type === FILTER_EMPLOYEES) {
    const { all_employees } = state
    const { text, office } = state.filters

    let tempEmployees = [...all_employees]
    //text
    if (text) {
      tempEmployees = tempEmployees.filter((emp) => {
        return emp.name.toLowerCase().startsWith(text)
      })
    }
    // Office
    if (office !== 'all') {
      tempEmployees = tempEmployees.filter((emp) => emp.office === office)
    }
    return { ...state, filtered_employees: tempEmployees }
  }
  //sort
  if (type === UPDATE_SORT) {
    return { ...state, sort: payload }
  }
  if (type === SORT_EMPLOYEES) {
    const { sort, filtered_employees } = state
    let tmpEmployees = [...filtered_employees]

    if (sort === 'name-a') {
      tmpEmployees = tmpEmployees.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sort === 'name-z') {
      tmpEmployees = tmpEmployees.sort((a, b) => b.name.localeCompare(a.name))
    }
    if (sort === 'office-a') {
      tmpEmployees = tmpEmployees.sort(
        (a, b) => a.office && a.office.localeCompare(b.office)
      )
    }

    if (sort === 'office-z') {
      tmpEmployees = tmpEmployees.sort(
        (a, b) => b.office && b.office.localeCompare(a.office)
      )
    }

    return { ...state, filtered_employees: tmpEmployees }
  }

  if (type === GET_CURRENT_PAGE) {
    return { ...state, currentpage: payload }
  }
  if (type === GET_NEXT_PAGE) {
    return { ...state, currentpage: state.currentpage + 1 }
  }
  if (type === GET_PREV_PAGE) {
    return { ...state, currentpage: state.currentpage - 1 }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        office: 'all',
      },
    }
  }
  return state
  // eslint-disable-next-line no-unreachable
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
