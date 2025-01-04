import React from "react";

interface ProjectCardProps {
  title: string;
  language: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, language, description, image, link }: ProjectCardProps) {
  return (
    <div className="bg-battleshipGray-dark p-6 rounded-lg shadow-lg">
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link to project: ${title}`} className="block">
        <p className="bg-trueBlue-dark text-white py-2 px-4 rounded mb-4 hover:bg-gray-600 transition text-center">
          {title}
        </p>
      </a>
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link to project: ${title}`} className="block">
        <div
          className="bg-gray-400 h-36 sm:h-48 mb-4 rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </a>
      <button className="bg-battleshipGray-light text-black font-semibold rounded-full w-fit px-4 py-1 mx-auto mb-4">
        {language}
      </button>
      <p className="text-black text-sm sm:text-base">{description}</p>
    </div>
  );
}
