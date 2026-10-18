import wanderlustImg from "../assets/wanderlust.png";
import portfolioImg from "../assets/portfolio.png";
import { ArrowUpRight } from "lucide-react";
import StackIcon from "tech-stack-icons";
import Reveal from "../Reveal";
export default function Projects(){
    const projectDiv = "bg-neutral-100 mt-10 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-10 p-6 md:p-10";
    const imgDiv = "w-full lg:w-1/2";
    const skillStyle = "px-3 py-1.5 text-xs font-semibold border border-neutral-300 rounded-full";
    return(
        <section id="projects" className="scroll-mt-20 px-6 md:px-12 lg:px-24 mt-10 py-12">
            <Reveal direction="left">
                <div className="mx-auto max-w-8xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-2px]">
                        Projects I've worked on
                    </h2>
                </div>  
            </Reveal>

            
            <div className="mt-14 space-y-12">
                <Reveal direction="right">
                <div className={projectDiv}>
                    <div className={imgDiv}>
                        <img
                            src={wanderlustImg}
                            alt="wanderlust project"
                        />
                    </div>
                    <div>
                        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-2px]">
                            Wanderlust
                        </h2>
                        <p className="mt-3 text-lg font-medium text-neutral-500">
                            Full Stack Travel Accommodation Platform
                        </p>
                        <p className="mt-3 text-sm font-medium text-neutral-500">
                            Users can explore, create, and manage travel listings, with features like reviews, image uploads, and interactive maps.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className={skillStyle}>
                                Node.js
                            </span>
                            <span className={skillStyle}>
                                Express.js
                            </span>
                            <span className={skillStyle}>
                                MongoDB
                            </span>
                            <span className={skillStyle}>
                                Cloudinary
                            </span>
                            <span className={skillStyle}>
                                Geoapify
                            </span>
                        </div>
                         <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://wanderlust-project-owtc.onrender.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 bg-black text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-neutral-800 transition duration-300"
                            >
                                Live Demo <ArrowUpRight/>
                            </a>
                            <a
                                href="https://github.com/roshanikhan0409/Wanderlust"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 border border-black px-5 py-3 rounded-md text-sm font-semibold hover:bg-black hover:text-white transition duration-300"
                            >
                                <StackIcon name="github" className="w-6 h-6 mr-2"/>GitHub
                            </a>
                        </div>
                    </div>
                </div>
                </Reveal>
                
                <Reveal direction="left">
                <div className={`${projectDiv} lg:flex-row-reverse`}>
                    <div className={imgDiv}>
                        <img
                            src={portfolioImg}
                            alt="portfolio project"
                        />
                    </div>
                    <div>
                        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[-2px]">
                            Portfolio Website
                        </h2>
                        <p className="mt-3 text-sm font-medium text-neutral-600">
                            A modern, responsive developer portfolio built with React and Tailwind CSS. <br/>Showcasing skills, projects, and experience.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            <span className={skillStyle}>
                                React.js
                            </span>
                            <span className={skillStyle}>
                                CSS
                            </span>
                            <span className={skillStyle}>
                                Tailwind 
                            </span>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="https://roshaniiiportfolio.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 bg-black text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-neutral-800 transition duration-300"
                            >
                                Live Demo <ArrowUpRight/>
                            </a>
                            <a
                                href="https://github.com/roshanikhan0409/Portfolio-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 border border-black px-5 py-3 rounded-md text-sm font-semibold hover:bg-black hover:text-white transition duration-300"
                            >
                                <StackIcon name="github" className="w-6 h-6 mr-2"/>GitHub
                            </a>
                        </div>
                    </div>
                </div>
                </Reveal>
            </div>
            

        </section>
    )
}