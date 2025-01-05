import Lottie from "lottie-react";
import waving from '/public/waving hand.json'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="hero bg-base-100 min-h-[800px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img
                    // style={{backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')"}}
                        src="https://i.ibb.co.com/PWxhBsP/HD-wallpaper-the-batman-robert-pattinson-Photoroom.png"
                        className="" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold flex items-center">Hey! 
                    <Lottie className="w-12" animationData={waving} loop={true} />
                        I’m Tanzim</h1>
                    <p className="py-6 ">
                        Hi, I’m Habib Hasan Tanzim, a web designer and developer specializing in the MERN stack. With a strong foundation in modern web technologies and recent expertise in Next.js and TypeScript, I’m passionate about creating engaging, user-friendly digital experiences.
                    </p>
                    <button className="btn btn-outline btn-neutral">Hire me now <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;