
const Skills = () => {
    const skills = [
        {
            name: "Figma",
            percentage: 80,
            icon: "/Figma-logo-vector-01.svg",
        },
        {
            name: "Tailwind CSS",
            percentage: 90,
            icon: "/Tailwindcss-icon-vector-01.svg",
        },
        {
            name: "React",
            percentage: 90,
            icon: "/React-logo-vector-01.svg",
        },
        {
            name: "MongoDB",
            percentage: 70,
            icon: "/mongodb-icon-1-1.svg",
        },
        {
            name: "Firebase",
            percentage: 80,
            icon: "/Firebase-logo-vector-02.svg",
        },
        {
            name: "NextJS",
            percentage: 60,
            icon: "/Nextjs-icon-vector-01.svg",
        },
        
    ];

    return (
        <section className="bg-base-100 py-12" id="skills">
            <div className="container mx-auto text-center mb-12">
                <h4 className="btn pointer-events-none text-orange-500 uppercase text-sm font-bold mb-2">
                    Top Skills
                </h4>
                <h2 className="text-5xl font-bold text-gray-800">See my expertise</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 container mx-auto px-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-full shadow-lg p-6 text-center flex flex-col items-center justify-around transition-all hover:shadow-xl"
                        style={{
                            height: "400px",
                            width: "180px",
                            border: "1px solid #f2f2f2",
                        }}
                    >
                        <div
                            className="icon bg-gray-100 rounded-full flex items-center justify-center mb-4"
                            style={{
                                width: "80px",
                                height: "80px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="h-12 w-12"
                                decoding="async"
                            />
                        </div>
                        <div>
                            <div>
                                <span
                                    className="timer text-3xl font-bold text-gray-800"
                                    data-to={skill.percentage}
                                >
                                    {skill.percentage}
                                </span>
                                <span className="operator text-xl text-gray-500">%</span>
                            </div>
                            <span className="medium text-gray-700 font-medium mt-2">{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
