export default (state = [], action) => {
  switch(action.type) {
    case 'SET_LISTINGS':
      return [...action.value];
    default: 
      return state;
  }
};