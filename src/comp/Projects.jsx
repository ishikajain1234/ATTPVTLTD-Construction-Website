import React from "react";
import Project from "./Project";
import modernhouse from "../assets/modern-house.png";
import cafe from "../assets/cafe.png";
import mixertruck from "../assets/mixer-truck (1).png";
import constructionsite from "../assets/construction-site.png";
import wrekingball from "../assets/wrecking-ball.png";

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 py-16">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12 tracking-wide">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <Project
          imgSrc={modernhouse}
          title="Townhome Revitalization"
          description="Revitalized 3 townhomes on Sector 22, Block C, Gurgaon with modern kitchens, stylish bathrooms, and updated interiors."
        />
        <Project
          imgSrc={cafe}
          title="Cafe Transformation"
          description="Converted a vacant space into a vibrant cafe on MG Road, near Trinity Circle, Bangalore with a new kitchen and a welcoming atmosphere."
        />
        <Project
          imgSrc={mixertruck}
          title="Concrete Driveway"
          description="Installed a durable concrete driveway at a residence on Juhu Tara Road, near JW Marriott Hotel, Juhu, Mumbai, enhancing property aesthetics and functionality."
        />
        <Project
          imgSrc={constructionsite}
          title="Site Preparation for 'The Heights'"
          description="Prepared the site for 'The Heights' residential complex in Sector 50, Noida, near Amity University, including grading, excavation, and utility installation."
        />
        <Project
          imgSrc={wrekingball}
          title="Demolition of 'The Old Mill'"
          description="Safely demolished 'The Old Mill' on Mount Road, near Guindy Railway Station, Chennai, clearing the way for a new mixed-use development."
        />
      </div>
    </div>
  );
};

export default Projects;
