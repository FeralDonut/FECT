export default (state = {
  limit: 25,
  
}, action) => {
  switch(action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        [action.name]: action.value,
      }
    case 'RESET_FILTERS':
      return {
        limit: 25,
      };
    default:
      return state;
  }
};
