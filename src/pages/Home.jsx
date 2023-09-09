import {
  Hero,
  CustomerReviews,
  PopularProducts,
  SuperQuality,
  Services,
  Subscribe,
  SpecialOffers,
} from "../sections";

const Home = () => {
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </>
  );
};

export default Home;