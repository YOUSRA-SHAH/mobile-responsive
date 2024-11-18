
import HeroSection from "./Components/HeroSection";
import FeaturedProducts from "./Components/FeaturedProducts"
export default function Home() {
  return (
  <div className="bg-purple-500  md:bg-pink-400 lg:bg-yellow-400 font-bold">
    <HeroSection/> 
    <FeaturedProducts />
  </div>
  );
}
