import { DynamicImage } from '../server/DynamicImage';
import { Typography } from '../../common/Typography';
import Transition from '../../animations/Transition';

export function CommonCard({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return <h1>No data available</h1>;
  }

  if (data.length === 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col w-full animate-pulse">
            <div className="md:h-60 w-full bg-gray-400 rounded-xl" />
            <div className="mt-3 pl-2 ">
              <div className="h-4 bg-gray-400 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((ele) => (
        <div key={ele.idMeal} className="flex flex-col w-full">
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
      ))}
    </div>
  );
}
