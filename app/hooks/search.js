import ApiServices from '@/app/api/apiServices';

export async function getSearchResults(query) {
  let categories = [];
  try {
    categories = await ApiServices.fetchSearchMeal({ s: query || 'a' });
    categories = categories?.meals;
  } catch (error) {
    console.error('Error fetching filter:', error);
  }

  return categories;
}
