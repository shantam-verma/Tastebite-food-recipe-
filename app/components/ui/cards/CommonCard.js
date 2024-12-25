import { DynamicImage } from '../server/DynamicImage';
import { Typography } from '../../common/Typography';
import { CATEGORIES } from '@/app/utils/data';
import Transition from '../../animations/Transition';

export function CommonCard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {CATEGORIES.map((ele) => (
        <div key={ele.id} className="flex flex-col w-full">
          <div className="md:h-60 w-full items-center">
            <DynamicImage
              url={ele.img}
              alt={ele.label}
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
                {ele.label}
              </Typography>
            </div>
          </Transition>
        </div>
      ))}
    </div>
  );
}
