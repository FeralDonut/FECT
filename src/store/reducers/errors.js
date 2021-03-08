export default (state = { loadListings: null }, action) => {
  switch(action.type) {
    case 'ERROR_LOADING_LISTINGS':
      return {
        ...state,
        loadListings: action.message
      };
    default: 
      return state;
  }
};