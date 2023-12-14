import { Link } from "react-router-dom";
import ImageHome from "../assets/home/banner-home.png";

export default function BannerImageHome() {
  return (
    <div>
      <div className="relative">
        <img className="w-full min-h-screen" src={ImageHome} />
        <div className="absolute top-[553px] left-1/2 -translate-y-1/2 bg-color_home w-[643px]">
          <div className="flex flex-col gap-4 mx-10 my-10">
            <p className="font-semibold">New Arrival</p>
            <h1 className="text-5xl w-96 font-bold text-color1_selected">
              Discover Our New Collection
            </h1>
            <p className="w-[500px] font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <Link to="/shop">
              <button className="bg-color1_selected w-[222px] h-20 mt-10 text-white rounded-md shadow-lg hover:bg-color_home hover:text-black">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
