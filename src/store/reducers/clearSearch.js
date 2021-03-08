export default (state = false, action) => {
  switch(action.type) {
    case 'RESET_FILTERS':
      return !state;
    default:
      return state;
  }
};
