import { useState } from "react";
import { ArrowDownToLine, Menu, X  } from "lucide-react";
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const navLink = "relative text-sm font-medium transition-colors duration-300 hover:text-neutral-500 after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";
    return(
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
            <div className="max-w-8xl mx-auto px-4 md:px-10 lg:px-12 h-16 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-xl font-extrabold tracking-tight"
                >
                    Roshani
                </a>
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <a
                        href="#home"
                        className={navLink}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className={navLink}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className={navLink}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className={navLink}
                    >
                        Projects
                    </a>
                    <a
                        href="#footer"
                        className={navLink}
                    >
                        Contact
                    </a>
                </div>
                
                <a
                    href="/resume.pdf"
                    download
                    className="hidden md:flex gap-1 items-center bg-black text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-neutral-700 transition duration-300"        
                    // className="border border-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-black hover:text-white transition duration-300"
                    >
                    Resume <ArrowDownToLine size={16}/>
                </a>
                
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden p-2"
                    aria-label="Toggle menu"
                >
                    {!isOpen && <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 top-5 flex justify-between items-center border border-white/10 rounded-lg bg-white">
                    <div id="mobile-navigation" className="mr-6 right-0 top-full flex flex-col gap-4 px-4 py-2">
                        <a
                            href="#home"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium"
                        >
                            Contact
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="flex max-w-[100px] items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-md text-sm font-semibold"
                        >
                            Resume
                            <ArrowDownToLine size={16} />
                        </a>
                    </div>
                    <button
                        type="button"
                        onClick={() => {setIsOpen(false)}}
                        className="h-10 w-10 p-2 absolute right-0 top-1 block"
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                        aria-label="Toggle menu"
                        > 
                            <X size={24}/>
                    </button>
                </div>
            )}
        </nav>
    );
}