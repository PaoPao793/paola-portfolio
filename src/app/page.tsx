import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div> 
        <div className="font-sans flex-grow">
        <NavBar />
        <section 
          id="home" 
          className="flex flex-col items-center justify-center text-left w-full h-screen bg-cover bg-center" 
          style={{ backgroundImage: 'url(/background.jpg)' }}
        >
          <div className="absolute top-1/4 left-5 md:left-20 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Paola Hernandez Aguirre</h1>
            <p className="text-md md:text-lg mt-4 font-sans text-white">Recent CS grad @ UMD</p>
          </div>
        </section>
      </div>

      <About />

      <Projects />

      <Contact />

    </div>

  );
}
