import Link from 'next/link';
import { DynamicImage } from '../server/DynamicImage';
import { CATEGORIES } from '@/app/utils/data';

export function ActionCard({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return <h1>No data available</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((ele) => (
        <div
          key={ele.idCategory}
          className="w-full rounded overflow-hidden shadow-lg"
        >
          <Link href={`meal-${ele.strCategory.toLowerCase()}`}>
            <DynamicImage
              className="w-full"
              url={ele.strCategoryThumb}
              alt={ele.label}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ele.strCategory}</div>
              <p className="text-content/60 text-base line-clamp-4">
                {ele.strCategoryDescription}
              </p>
            </div>
          </Link>
          {/* <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div> */}
        </div>
      ))}
    </div>
  );
}
