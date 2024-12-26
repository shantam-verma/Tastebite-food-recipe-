import { Typography } from '../components/common/Typography';
import { RoundedCard } from '../components/ui/cards/RoundedCard';
import { Hero } from '../components/home/Hero';
import { CommonCard } from '../components/ui/cards/CommonCard';
import { ActionCard } from '../components/ui/cards/ActionCard';
import SubscribeFrom from '../components/forms/SubscribeFrom';
import { MealCategories } from '../components/home/MealCategories';
import { TrendingNow } from '../components/home/TrendingNow';

export default function Home() {
  console.log('home');
  return (
    <article>
      <section>
        <Hero />
      </section>
      <section className="mt-10">
        <Typography as="h2" variant="h2">
          Popular Categories
        </Typography>
        <div className="mt-8">
          <RoundedCard />
        </div>
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
