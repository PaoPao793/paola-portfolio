import Image from "next/image";
import Button from "./Button";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <section
                id="about"
                className="flex flex-col items-center justify-center w-full text-white py-16 md:py-24"
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-8">
                    <div className="mb-12 text-center">
                        <p className="text-orange-500 font-bold italic text-2xl sm:text-2xl text-center tracking-wide font-serif">
                            About
                        </p>
                        <h2 className="text-white text-2xl sm:text-4xl font-bold tracking-wider mt-4">
                            WHO I AM
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
                        <div className="md:mr-8 flex-shrink-0 text-center">
                            <Image
                                src="/prof_photo.jpg"
                                alt="Profile Picture"
                                width={200}
                                height={200}
                                className="rounded-full border border-orange-500 mb-4"
                            />
                            <Button text="Resume" link="/#projects" />
                        </div>

                        <div className="md:pl-6 flex-1 space-y-4">
                            <p className="text-lg sm:text-lg leading-relaxed underline">
                                About me:
                            </p>
                            <p className="text-lg sm:text-lg leading-relaxed">
                            Born and raised in the vibrant city of Guanajuato, Mexico, I moved to Maryland, USA, in 2011. 
                            I am now a senior at the University of Maryland, College Park, pursuing a degree in computer 
                            science with a minor in linguistics. My academic journey has fueled my passion for technology 
                            and language, blending the structure of code with the intricacies of human communication.
                            </p>

                            <p className="text-lg sm:text-lg leading-relaxed">
                            I am particularly drawn to front-end and full-stack development, where creativity meets 
                            functionality to create engaging and intuitive user experiences. Beyond coding, I enjoy 
                            exploring the world through books, scenic walks, and the challenge of solving intricate 
                            jigsaw puzzles—activities that keep my problem-solving skills sharp and my imagination alive.
                            </p>

                            <p className="text-lg sm:text-lg leading-relaxed">
                            Whether it is designing user-friendly interfaces, building scalable applications, or unraveling 
                            the beauty of languages, I am always eager to learn, create, and innovate. 
                            </p>

                            <p className="text-lg sm:text-lg leading-relaxed underline">
                            Relevant coursework in school: 
                            </p>

                            <p className="text-lg sm:text-lg leading-relaxed">
                            Object Oriented Programming, Data Structures & Algorithms, Web Application Development/Web Design, Programming Handheld Systems, Database Design, Networking and Security, Human Computer Interaction
                            </p>

                            


                        </div>

                    </div>

            
                </div>
            </section>
        </div>
    );
}