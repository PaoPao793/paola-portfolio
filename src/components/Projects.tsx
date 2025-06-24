import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectData = [
    {
      title: "Portfolio website",
      language: "Typescript",
      description: "Portfolio website built using Next.js and deployed using Vercel",
      image: "/projects/website.png",
      link: "./",              
    }, 
    {
      title: "Mini Shogi",
      language: "Java",
      description: "Modified version of Japanese shogi played on a 5x5 board on the command line.",
      image: "/projects/shogi_img.jpg",
      link: "https://github.com/PaoPao793/miniShogi",              
    }, 
    {
      title: "Activity Tracker",
      language: "JavaScript",
      description: "This project is an activity tracker. The user has two options, they can fill out the form and store an activity in the database (using MongoDB) or they can find more activities using the find button.",
      image: "/projects/activity_tracker.png",
      link: "https://github.com/PaoPao793/ActivityTracker",              
    }, 
    {
      title: "Zenith Habits",
      language: "Dart",
      description: "Cross-platform habit tracking app built using Flutter and Dart. Includes features like habit tracking, journaling, and mood tracking.",
      image: "/projects/zenith_habits_log_in.jpeg",
      link: "https://github.com/PaoPao793/Zenith-Habits",              
    },
    {
      title: "Budget App",
      language: "HTML/CSS",
      description: "This project is a prototype for a budgeting app that helps users manually manage their finances by setting budget and savings goals, tracking expenses and income, and reviewing financial trends.",
      image: "/projects/budget_app_home.png",
      link: "https://github.com/PaoPao793/budgetapp",              
    },
    {
      title: "Previous Hackthon Projects",
      language: "",
      description: "See my devpost where previous hackathon projects are displayed",
      image: "/projects/devpost_photo.png",
      link: "https://devpost.com/paola-ha-2021",              
    }, 
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section
        id="projects"
        className="bg-battleshipGray-light text-black flex-grow py-16 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <p className="text-chesnut-dark font-bold italic text-center text-xl sm:text-2xl tracking-wider font-serif">
                Projects
            </p>

          <h2 className="text-trueBlue-dark text-center text-2xl sm:text-4xl font-bold mb-8 tracking-wider">
            PREVIOUS WORK
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectData.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                language={project.language}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
