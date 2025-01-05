import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Dropshipping Strategy',
        description: 'Tailored strategies to boost your store’s sales and performance.',
        icon: 'https://i.ibb.co.com/4KyL9WH/3dicons-rocket-dynamic-premium.png',
        link: '',
    },
    {
        title: 'Social Media Marketing',
        description: 'Boost engagement through Facebook, Instagram, and TikTok campaigns.',
        icon: 'https://i.ibb.co.com/QYVzQwJ/3dicons-hash-dynamic-premium.png',
        link: '',
    },
    {
        title: 'Video Ad Creation',
        description: 'Eye-catching, high-converting video ads tailored for TikTok, Reels, and Stories.',
        icon: 'https://i.ibb.co.com/k06HZQF/3dicons-play-dynamic-premium.png',
        link: '',
    },
    {
        title: 'Store Optimization',
        description: 'Streamline your dropshipping store for maximum efficiency and sales potential.',
        icon: 'https://i.ibb.co.com/7bvt97w/3dicons-chart-dynamic-premium.png',
        link: '',
    },
];

const Services = () => {
    return (
        <section className="bg-base-100 py-12" id="services">
            <div className="container mx-auto text-center mb-12">
                <h4 className="btn pointer-events-none text-orange-500 uppercase text-sm font-bold my-5">Services</h4>
                <h2 className="text-3xl lg:text-5xl font-bold text-base-content">My Quality Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-10 bg-base-200 shadow-md rounded-lg transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105 hover:border border-amber-700"
                    >
                        <div className="mb-4">
                            <img src={service.icon} alt={service.title} className="h-24 w-24" />
                        </div>
                        <h4 className="text-xl font-semibold text-base-content mb-2">{service.title}</h4>
                        <p className="text-base-content text-opacity-60 text-sm mb-4">{service.description}</p>
                        <Link to={service.link} className="flex items-center text-orange-500 font-medium">
                            <button className="btn hover:text-white hover:bg-orange-600">
                                Read More <FaArrowRight />
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
