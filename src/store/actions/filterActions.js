export const setFilters = (name, value) => ({
  type: 'SET_FILTERS',
  name,
  value,
})

export const resetFilters = () => ({
  type: 'RESET_FILTERS'
});