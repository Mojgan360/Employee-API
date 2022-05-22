export const getUniqueValues = (data, type) => {
  let unique = data && data.map((item) => item[type])
  if (type !== null) {
    unique = unique && unique.flat()
  }
  unique = unique && unique.filter((item) => item !== null)

  return ['all', ...new Set(unique)]
}
