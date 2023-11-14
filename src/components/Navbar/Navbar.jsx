import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Navigation from "./Navigation";

function Navbar() {
  return (
    <div className="bg-transparent container mx-auto py-5 sm:max-w-full sm:rounded-none  ">
      <div className="flex items-center justify-around">
        <Link to="/">
          <img src={logo} alt="Logo" width={150} />
        </Link>
        <div className="px-5">
          <Navigation />
        </div>
        <div className="flex gap-x-1 items-center">
          <button className="py-2 px-5 hidden text-md lg:inline-block">
            Masuk
          </button>
          <button className="py-2 px-4 rounded-full bg-primary text-white inline-block text-sm lg:text-md">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
