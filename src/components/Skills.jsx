import StackIcon from "tech-stack-icons";
import Reveal from "../Reveal";
export default function Skills(){
    const frontendSkills = [
    {
        name: "HTML",
        icon: "html5",
    },
    {
        name: "CSS",
        icon: "css3",
    },
    {
        name: "JavaScript",
        icon: "nodejs",
    },
    {
        name: "React",
        icon: "react",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwindcss",
    },
];
const backendSkills = [
    {
        name: "GitHub",
        icon: "github",
    },
    {
        name: "Git",
        icon: "git",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
    },
    {
        name: "Express.js",
        icon: "expressjs",
    },
    {
        name: "Node.js",
        icon: "nodejs",
    }
];
    return(
        <section id="skills" className="scroll-mt-20 px-6 md:px-12 lg:px-24 py-12">
            <Reveal direction="right">
                <div className="text-center mx-auto max-w-8xl">
                    <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-[-2px]">
                        Technologies I work with
                    </h2>
                </div>
            </Reveal>
            
            {/* Frontend */}
            <div className="mt-14 overflow-hidden">
                 <div className="flex w-max animate-scroll-left">
                    <div className="mx-auto flex items-center gap-4 pr-4">
                        {frontendSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-6 py-4 border border-neutral-200 rounded-lg text-lg font-semibold whitespace-nowrap"
                            >
                                <StackIcon
                                    name={skill.icon}
                                    className="w-6 h-6 mr-2"
                                />
                                {skill.name}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 pr-4">
                        {frontendSkills.map((skill) => (
                            <div
                                key={`duplicate-${skill.name}`}
                                className="px-6 py-4 border border-neutral-200 rounded-lg text-sm font-semibold whitespace-nowrap"
                            >
                                <StackIcon
                                    name={skill.icon}
                                    className="w-6 h-6 mr-2"
                                />
                                {skill.name}
                            </div>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Backend */}
            <div className="mt-6 overflow-hidden">
                <div className="flex w-max animate-scroll-right">

                    <div className="flex items-center gap-4 pr-4">
                        {backendSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-6 py-4 border border-neutral-200 rounded-lg text-lg font-semibold whitespace-nowrap"
                            >
                                <StackIcon
                                    name={skill.icon}
                                    className="w-6 h-6 mr-2"
                                />
                                {skill.name}
                            </div>
                        ))}
                    </div>
                    
                    {/* <div className="flex items-center gap-4 pr-4">
                        {backendSkills.map((skill) => (
                            <div
                                key={`duplicate-${skill}`}
                                className="px-6 py-4 border border-neutral-200 rounded-lg text-sm font-semibold whitespace-nowrap"
                            >
                                {skill}
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
            
        </section>
    )
}