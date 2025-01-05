import { API_BASE_URL } from '../utils/constants';

function getApiUrl(path) {
  if (!API_BASE_URL) throw new Error('NEXT_PUBLIC_API_URL is not defined!');
  return `${API_BASE_URL}/${path}`;
}

const API_ENDPOINTS = {
  allMealCategories: 'api/json/v1/1/categories.php',
  filterMeal: 'api/json/v1/1/filter.php',
  singleMeal: 'api/json/v1/1/lookup.php',
  searchMeal: 'api/json/v1/1/search.php',
};

async function fetchApi(url, params = {}) {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const fullUrl = queryParams ? `${url}?${queryParams}` : url;

    const response = await fetch(fullUrl);

    if (!response.ok) {
      console.error(`Failed to fetch: ${response.status}`);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Handle empty response data
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    return data;
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
      if (!data || Object.keys(data).length === 0) {
        return data;
      } else {
        const categories = data.categories;
        const filteredCategories = categories.filter(
          (category) => !remove.includes(category.strCategory)
        );
        return filteredCategories;
      }
    } catch (error) {
      console.error('Error fetching meal categories:', error);
      throw error;
    }
  }

  // Fetch by filter --Vegetarian
  static async fetchFilter(params) {
    const url = getApiUrl(API_ENDPOINTS.filterMeal);
    try {
      const data = await fetchApi(url, params);
      return data?.meals;
    } catch (error) {
      console.error('Error fetching meal filter:', error);
    }
  }

  static async fetchSingleMeal(params) {
    const url = getApiUrl(API_ENDPOINTS.singleMeal);
    try {
      const data = fetchApi(url, params);
      return data;
    } catch (error) {
      console.error('Error fetching single meal: ', error);
    }
  }

  static async fetchSearchMeal(params) {
    const url = getApiUrl(API_ENDPOINTS.searchMeal);
    try {
      const data = fetchApi(url, params);
      return data;
    } catch (error) {
      console.error('Error fetching search meal: ', error);
    }
  }
}
export default ApiServices;
