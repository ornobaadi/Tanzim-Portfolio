import Lottie from "lottie-react";
import waving from "/public/waving hand.json";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-[800px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src="https://i.ibb.co.com/B4G0VY9/Untitled-design-2.png"
            className="rounded-lg "
          />
        </div>
        <div className="text-base-content">
          <h1 className="text-3xl lg:text-5xl font-bold flex items-center">
            Hey!
            <Lottie className="w-12" animationData={waving} loop={true} />
            I’m Tanzim
          </h1>
          <p className="py-6">
            I’m a dropshipping expert with a proven track record of creating
            high-converting product campaigns and social media marketing
            strategies. I specialize in helping businesses grow through
            engaging, viral ad content and precision targeting.
          </p>
          <button className="btn btn-outline hover:btn-neutral">
            Hire me now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
