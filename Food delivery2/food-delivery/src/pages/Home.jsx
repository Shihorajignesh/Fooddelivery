import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularFoods from "../components/PopularFoods";
import OfferSection from "../components/OfferSection";
import Testimonials from "../components/Testimonials";
import Searchsection from "../components/Searchsection";


function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularFoods />
      <OfferSection/>
      <Testimonials/>
      <Searchsection/>
      
      
    </>
  );
}

export default Home;