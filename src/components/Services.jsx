import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Branding Design',
        description: 'Continue indulged speaking the was horrible for domestic position. Seeing get rather.',
        icon: 'https://i.ibb.co.com/4KyL9WH/3dicons-rocket-dynamic-premium.png',
        link: '',
    },
    {
        title: 'App Development',
        description: 'Continue indulged speaking the was horrible for domestic position. Seeing get rather.',
        icon: 'https://i.ibb.co.com/r3K50qV/3dicons-computer-dynamic-premium.png',
        link: '',
    },
    {
        title: 'UI/UX Design',
        description: 'Continue indulged speaking the was horrible for domestic position. Seeing get rather.',
        icon: 'https://i.ibb.co.com/DMDtQ8g/3dicons-figma-dynamic-premium.png',
        link: '',
    },
    {
        title: 'Web Design',
        description: 'Continue indulged speaking the was horrible for domestic position. Seeing get rather.',
        icon: 'https://i.ibb.co.com/GVzVx3G/3dicons-color-palette-dynamic-premium.png',
        link: '',
    },
];

const Services = () => {
    return (
        <section className="bg-base-100 py-12" id="services">
            <div className="container mx-auto text-center mb-12">
                <h4 className="btn pointer-events-none text-orange-500 uppercase text-sm font-bold mb-2">Services</h4>
                <h2 className="text-5xl font-bold text-gray-800">My Quality Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`p-10 bg-white shadow-md rounded-lg hover:shadow-lg transition hover:border border-amber-700`}
                    >
                        <div className="mb-4">
                            <img src={service.icon} alt={service.title} className="h-16 w-16" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h4>
                        <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                        <Link
                            to={service.link}
                            className="flex items-center text-orange-500 font-medium"
                        >
                            <button className='btn hover:text-white hover:bg-orange-600'>Read More <FaArrowRight></FaArrowRight></button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
