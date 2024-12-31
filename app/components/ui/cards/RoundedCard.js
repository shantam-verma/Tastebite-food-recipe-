import { DynamicImage } from '../server/DynamicImage';
import { Typography } from '../../common/Typography';
import Transition from '../../animations/Transition';

export function RoundedCard({ data }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {data.map((ele) => (
        <div key={ele.id} className="flex flex-col items-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
            <DynamicImage
              url={ele.flag}
              alt={ele.strArea}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <Transition>
            <div className="text-center mt-3">
              <Typography
                as="p"
                variant="body"
                className="font-semibold leading-snug transition-colors duration-300"
              >
                {ele.strArea}
              </Typography>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
}
