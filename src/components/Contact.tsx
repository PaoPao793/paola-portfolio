import Image from "next/image";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col">
      <section
        id="contact"
        className="text-black flex-grow py-16 md:py-40"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <p className="text-chesnut-dark font-bold italic text-center text-xl sm:text-2xl tracking-wider font-serif">
                Contact
            </p>

          <h2 className="text-trueBlue-dark text-center text-2xl sm:text-4xl font-bold mb-8 tracking-wider">
            LET’S CONNECT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                src: "/contact_icons/location-icon.png",
                alt: "Location Icon",
                label: "Based in:",
                text: "College Park, MD",
              },
              {
                src: "/contact_icons/mail-icon.png",
                alt: "Email Icon",
                label: "Email me at:",
                text: (
                  <a
                    href="mailto:paola.ha.2021"
                    className="underline hover:text-gray-500"
                  >
                    paola.ha.2021@gmail.com
                  </a>
                ),
              },
              {
                src: "/contact_icons/linkedin-icon.png",
                alt: "LinkedIn Icon",
                label: "Let’s Connect:",
                text: (
                  <a
                    href="https://www.linkedin.com/in/paola-hernandez-aguirre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-500"
                  >
                    See Profile
                  </a>
                ),
              },
              {
                src: "/contact_icons/instagram-icon.png",
                alt: "Instagram Icon",
                label: "Find me as:",
                text: "@paola._.aloap",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={70}
                  height={70}
                  className="mb-4"
                />
                <p className="text-lg font-semibold">{item.label}</p>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>  
        </div>
      </section>
      <Footer />
    </div>
  );
}