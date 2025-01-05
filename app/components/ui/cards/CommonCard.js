import { DynamicImage } from '../server/DynamicImage';
import { Typography } from '../../common/Typography';
import Transition from '../../animations/Transition';
import Link from 'next/link';

export function CommonCard({ data, ingredient = false }) {
  if (!data || Object.keys(data).length === 0) {
    return <h1>No data available</h1>;
  }

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 ${ingredient ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}
    >
      {data?.map((ele) => (
        <Link key={ele.idMeal} href={`/meal/${ele.idMeal}`}>
          <div className="flex flex-col w-full">
            <div className="md:h-60 w-full items-center">
              <DynamicImage
                url={ele.strMealThumb}
                alt={ele.strMeal}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <Transition>
              <div className="mt-3 pl-2">
                <Typography
                  as="p"
                  variant="body"
                  className="font-semibold leading-snug transition-colors duration-300"
                >
                  {ele.strMeal}
                </Typography>
              </div>
            </Transition>
          </div>
        </Link>
      ))}
    </div>
  );
}
