import "regenerator-runtime/runtime";
import { errorLoadingListings } from '../store/actions/listingsActions'

const getListings = async ({
  dispatch,
  bathrooms = 0,
  bedrooms = 0,
  limit = 25,
  offset = 0,
  price,
}) => {
  const limitParams = `?limit=${limit}`;
  const offSetParams = `&offset=${offset}`;
  const bathroomParams = bathrooms ? `&bathrooms=${bathrooms}` : "";
  const bedroomParams = bedrooms ? `&bedrooms=${bedrooms}` : "";
  const priceParams = price ? `&price=${price}` : "";

  const url = `api/listings${limitParams}${bathroomParams}${bedroomParams}${offSetParams}${priceParams}`;

  return await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText)
      }
    })
    .then((res) => ({
      searchTotal: res.searchTotal,
      data: res.data.map((d) =>
          res.fields.reduce(
            (acc, curr, index) => ({...acc, [curr]: d[index]}), {})
        ).sort((a, b) => (a.bedrooms > b.bedrooms ? 1 : -1))
    }))
    .catch((error) => {
      console.log(error);
      dispatch(errorLoadingListings(error.message))
    });
};

export default getListings;
