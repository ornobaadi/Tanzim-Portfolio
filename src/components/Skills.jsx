const Skills = () => {
    const skills = [
        {
            category: "Dropshipping Expertise",
            items: [
                "Product Research & Trend Analysis",
                "Supplier Sourcing (AliExpress, Alibaba, etc.)",
                "Store Setup & Optimization (Shopify, WooCommerce)",
                "Order Fulfillment & Inventory Management",
            ],
            icon: "https://i.ibb.co.com/jTQWVXd/3dicons-gift-box-dynamic-premium.png",
        },
        {
            category: "Digital Marketing",
            items: [
                "Social Media Advertising (Facebook, Instagram, TikTok)",
                "Google Ads & PPC Campaigns",
                "Email Marketing Automation",
                "Conversion Rate Optimization",
            ],
            icon: "https://i.ibb.co.com/bQ5JCCt/3dicons-megaphone-dynamic-premium.png",
        },
        {
            category: "Content Creation",
            items: [
                "Video Ad Production & Editing",
                "Ad Copywriting",
                "Thumbnail Design & A/B Testing",
            ],
            icon: "https://i.ibb.co.com/pLV3cgS/3dicons-video-cam-dynamic-premium.png",
        },
        {
            category: "Technical Skills",
            items: [
                "Shopify Development",
                "Data Analysis with Google Analytics",
                "SEO Basics for E-commerce",
                "Tools: Canva, Adobe Premiere Pro, Meta Ads Manager",
            ],
            icon: "https://i.ibb.co.com/r3K50qV/3dicons-computer-dynamic-premium.png",
        },
    ];

    return (
        <section className="bg-base-100 py-12" id="skills">
            <div className="container mx-auto text-center mb-12">
                <h4 className="btn pointer-events-none text-orange-500 uppercase text-sm font-bold my-5">
                    Top Skills
                </h4>
                <h2 className="text-3xl lg:text-5xl font-bold text-base-content">
                    See my expertise
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
                {skills.map((skill, index) => (
                    <div key={index} className="card shadow-xl bg-base-200 hover:scale-105 transition-all">
                        <div className="card-body text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-base-300 rounded-full flex items-center justify-center shadow-md">
                                    <img src={skill.icon} alt={skill.category} className="h-10 w-10 object-contain" decoding="async" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-base-content mb-4">{skill.category}</h3>
                            <ul className="mt-4 text-base-content text-opacity-60 text-sm space-y-2 text-left">
                                {skill.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-baseline gap-2 leading-relaxed">
                                        <span className="w-1 h-1 bg-orange-500 rounded-full flex-shrink-0 mt-1"></span>
                                        <span className="break-words">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
