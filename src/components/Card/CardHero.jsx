import imageHero from "../../assets/hero.png";
import Rating from "../Rating";

function CardHero() {
  return (
    <div className="flex px-3 py-3 items-center gap-x-2 rounded-2xl backdrop-blur-sm bg-white/70 sm:w-96 sm:gap-x-5 sm:px-5">
      <div>
        <img src={imageHero} alt="imageHero" width={53} />
      </div>
      <div className="grid sm:p-1 gap-y-0.5">
        <p className="text-sm sm:text-xl font-medium">Green Salad Tomato</p>
        <p className="text-xs sm:text-base font-light opacity-70">Tomato</p>
        <Rating star={4} />
      </div>
    </div>
  );
}
export default CardHero;
