import ApiServices from '@/app/api/apiServices';
import { notFound } from 'next/navigation';

export async function getSearchResults(query) {
  let response = [];
  try {
    response = await ApiServices.fetchSearchMeal({ s: query || 'a' });
    response = response?.meals;
  } catch (error) {
    console.error('Error fetching filter:', error);
  }

  return response;
}
