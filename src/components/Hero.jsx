import heroImage from "../assets/hero_image.png";
import Reveal from "../Reveal";
export default function Hero() {
  return (
    
    <section id="home" className="min-h-screen px-6 md:px-12 lg:px-30 pt-16">
      <div className="mx-auto max-w-8xl min-h-[calc(100vh-6rem)] grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <Reveal direction="left">
        <div className="min-h-[400px] flex flex-col justify-center lg:pr-10">
          <p className="text-sm md:text-lg font-semibold">Hello, I'm</p>
          <h1 className="text-6xl md:text-7xl lg:text-7xl tracking-[-4px] leading-[0.9] font-extrabold">
            Roshani Khan
          </h1>
          <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight tracking-tight">
            Full Stack Developer
          </h3>
          <p className="mt-4 text-gray-700 max-w-lg text-sm">
            I build modern and responsive web applications using Express.js, Node.js, React and MongoDB with a focus on clean
            code, scalable systems and great user experiences.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#projects"
              className="bg-black text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-neutral-800 transition duration-300"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="border border-black px-5 py-3 rounded-md text-sm font-semibold hover:bg-black hover:text-white transition duration-300"
            >
             Resume
            </a>
          </div>
        </div>
        </Reveal>

        <Reveal direction="right">
        <div className="flex items-center justify-center lg:justify-end">
            <div  className="relative w-[280px] h-[360px] md:w-[380px] md:h-[480px]">
            <img
                src={heroImage}
                alt="Professional woman"
                className="w-full h-full object-contain"
            />
            </div>
        </div>
        </Reveal>
      </div>
    </section>
    
  );
}
