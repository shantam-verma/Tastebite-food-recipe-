import ApiServices from '@/app/api/apiServices';

export async function getCategoriesResults() {
  let response = [];
  try {
    response = await ApiServices.fetchAllMealCategories();
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
  return response;
}
