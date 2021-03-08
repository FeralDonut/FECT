export default (state=0, action) => {
  switch(action.type) {
    case 'SET_SEARCH_TOTAL':
      return action.value;
    default:
      return state;
  }
}