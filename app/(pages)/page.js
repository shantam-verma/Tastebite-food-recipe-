import { Typography } from '../components/common/Typography';
import { Hero } from '../components/pages/home/Hero';
import SubscribeFrom from '../components/forms/SubscribeFrom';
import { MealCategories } from '../components/pages/home/MealCategories';
import { TrendingNow } from '../components/pages/home/TrendingNow';
import { BrowseByCountry } from '../components/pages/home/BrowseByCountry';

export const metadata = {
  title: 'Welcome to TasteBite – Your Recipe Hub for Every Meal',
  description:
    'Discover a world of flavors with TasteBite! Explore simple, delicious recipes for every occasion. From quick meals to indulgent treats, we’ve got something for every taste and skill level. Start cooking with us today and make every bite count!',
};

export default function Home() {
  return (
    <article>
      <section>
        <Hero />
      </section>
      <section className="mt-10">
        <BrowseByCountry />
      </section>
      <section className="mt-10">
        <TrendingNow />
      </section>
      <section className="mt-10 bg-accent-1 text-center py-10 md:p-20">
        <Typography
          as="h2"
          variant="h1"
          className="font-serif text-[clamp(32px,4.5vw,68px)]"
        >
          Deliciousness <span className="block">to your inbox</span>
        </Typography>
        <Typography as="p" variant="h5" className="font-normal">
          Enjoy weekly hand picked recipes and
          <span className="block">recommendations</span>
        </Typography>
        <SubscribeFrom />
      </section>
      <section className="mt-10">
        <MealCategories />
      </section>
    </article>
  );
}
