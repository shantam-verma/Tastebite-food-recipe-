import ApiServices from '../api/apiServices';

export async function getFilterResults(params) {
  let filter = [];
  try {
    filter = await ApiServices.fetchFilter(params);
  } catch (error) {
    console.error('Error fetching filter:', error);
  }
  return filter;
}
