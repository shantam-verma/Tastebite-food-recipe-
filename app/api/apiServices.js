function getApiUrl(path) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_BASE_URL) throw new Error('NEXT_PUBLIC_API_URL is not defined!');
  return `${API_BASE_URL}/${path}`;
}

const API_ENDPOINTS = {
  allMealCategories: 'api/json/v1/1/categories.php',
  filterMeal: 'api/json/v1/1/filter.php',
};

async function fetchApi(url, params = {}) {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = queryParams ? `${url}?${queryParams}` : url;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}
const remove = ['Beef', 'Chicken', 'Lamb', 'Pork', 'Seafood', 'Goat'];

class ApiServices {
  // Fetch all categories
  static async fetchAllMealCategories() {
    const url = getApiUrl(API_ENDPOINTS.allMealCategories);

    try {
      const data = await fetchApi(url);
      const categories = data.categories;
      const filteredCategories = categories.filter(
        (category) => !remove.includes(category.strCategory)
      );
      return filteredCategories;
    } catch (error) {
      console.error('Error fetching meal categories:', error);
      throw error;
    }
  }

  // Fetch by filter --Vegetarian
  static async fetchFilter() {
    const url = getApiUrl(API_ENDPOINTS.filterMeal);
    try {
      const data = await fetchApi(url, { c: 'Vegetarian' });
      return data?.meals;
    } catch (error) {
      console.error('Error fetching meal filter:', error);
    }
  }
}
export default ApiServices;
