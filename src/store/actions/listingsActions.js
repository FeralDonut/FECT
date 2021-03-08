export const setListings = (value) => ({
  type: 'SET_LISTINGS',
  value,
});

export const errorLoadingListings = (message) => ({
  type: 'ERROR_LOADING_LISTINGS',
  message,
})