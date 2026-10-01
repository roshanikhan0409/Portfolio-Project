import aboutImage from "../assets/about_Img.png";
import Reveal from "../Reveal";
export default function About(){
    const cardDiv = "border border-gray-300 rounded-lg p-5  transition duration-300 hover:scale-[1.03] hover:border-black";
    const cardNum = "text-xs font-bold text-gray-500";
    const cardHeading = "mt-4 text-base font-bold";
    const cardPara = "mt-2 text-sm text-neutral-500 leading-6";
    return(
        <Reveal direction="up">
        <section id="about" className="scroll-mt-10 px-6 md:px-12 lg:px-24 py-12">
            <div className="mx-auto max-w-8xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-[280px] h-[280px] md:w-[500px] md:h-[500px]">
                            <img
                                src={aboutImage}
                                alt="Developer working on technology"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-2px]">
                            A little about me
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-8 text-gray-700">
                            I'm a Full Stack Web Developer who enjoys building modern, responsive web applications.
                            <br/>
                            I enjoy working across both frontend and backend development,
                            while focusing on clean code, usability, and scalable
                            solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                            <div className={cardDiv}>
                                <span className={cardNum}>
                                    01
                                </span>

                                <h3 className={cardHeading}>
                                    Frontend
                                </h3>

                                <p className={cardPara}>
                                    Building responsive and interactive web experiences.
                                </p>
                            </div>

                            <div className={cardDiv}>
                                <span className={cardNum}>
                                    02
                                </span>

                                <h3 className={cardHeading}>
                                    Backend
                                </h3>

                                <p className={cardPara}>
                                    Developing reliable APIs, server-side logic and databases.
                                </p>
                            </div>

                            <div className={cardDiv}>
                                <span className={cardNum}>
                                    03
                                </span>

                                <h3 className={cardHeading}>
                                    Problem Solving
                                </h3>

                                <p className={cardPara}>
                                    Turning ideas and challenges into practical solutions.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        </Reveal>
    )
}