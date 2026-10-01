import StackIcon from "tech-stack-icons";
import {MdLocalPhone, MdOutlineMail, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
export default function Footer(){
    return(
        <footer id="footer" className="mt-24 bg-black text-white px-6 md:px-12 lg:px-24"
>
            <div className="mx-auto py-12 flex flex-col lg:flex-row gap-10 items-center justify-between">
                <div className="max-w-3xl">
                    <p className="text-lg font-bold uppercase tracking-[0.2em] text-gray-400">
                        Let's connect
                    </p>
                    <p className="mt-4 max-w-xl text-gray-400 leading-7">
                        I'm always open to new opportunities,
                        collaborations, and exciting projects.
                        <br/>
                        Feel free to reach out!
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://github.com/roshanikhan0409"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-500 px-5 py-3 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition duration-300"
                        >
                            <FaGithub size={17} />
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/roshani-khan-308447342/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-500 px-5 py-3 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition duration-300"
                        >
                            <FaLinkedinIn size={17} />
                            Linkedin
                        </a>
                    </div>
                </div>
                <div className="mx-auto text-gray-400  flex flex-col gap-4">
                    <p className="flex items-center gap-2 text-sm">
                        <MdLocalPhone size={17} />
                        +91 9165902788
                    </p>

                    <p className="flex items-center gap-2 text-sm">
                        <MdOutlineMail size={17} />
                        roshanikhan492007@gmail.com
                    </p>

                    <p className="flex items-center gap-2 text-sm">
                        <MdLocationOn size={17} />
                        Indore, India
                    </p>
                </div>
            </div>

        </footer>
    )
}