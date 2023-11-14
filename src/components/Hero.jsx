import CardHero from "./Card/CardHero";
import bghero from "../assets/bg-hero.png";
import bgheromobile from "../assets/bg-hero-mobile.png";

function Hero() {
  return (
    <div className="grid justify-items-center px-5 my-14 sm:gap-x-20 sm:grid-cols-2 sm:p-20 ">
      <div className="grid justify-center gap-y-10 sm:flex sm:flex-col sm:gap-y-5">
        <h1 className="text-primary text-5xl font-medium sm:text-7xl">
          Good Food Us Good Mood
        </h1>
        <div className="flex sm:hidden">
          <div className="bg-no-repeat bg-center bg-auto bg-[url('../assets/hero-mobile.png')]">
            <img src={bgheromobile} alt="hero" width={250} />
          </div>
          <div className="absolute mt-44 ml-28">
            {/* absolute -mt-24 -ml-44  bg-[url('../assets/hero.png')*/}
            <CardHero />
          </div>
        </div>
        <p className="text-lg font-normal text-light1 leading-7">
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div className="flex gap-x-3 items-center">
          <button className="py-2 px-4 rounded-full bg-primary text-white inline-block text-md hover:shadow-button hover:shadow-purple-100 ">
            Daftar Sekarang
          </button>
          <button className="py-2 px-5 text-md inline-block rounded-full bg-gray-100 ">
            About Us
          </button>
        </div>
      </div>
      <div className="hidden sm:flex sm:static sm:visible">
        <div className="bg-no-repeat bg-center bg-auto bg-[url('../assets/hero.png')]">
          <img src={bghero} alt="hero" width={500} />
        </div>
        <div className="absolute mt-96 -ml-44">
          <CardHero />
        </div>
      </div>
    </div>
  );
}

export default Hero;
