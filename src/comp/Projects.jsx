import React from "react";
import Project from "./Project";
import modernhouse from "../project icons/modern-house.png";
import cafe from "../project icons/cafe.png";
import mixertruck from "../project icons/mixer-truck (1).png";
import constructionsite from "../project icons/construction-site.png";
import wrekingball from "../project icons/wrecking-ball.png";

const Projects = () => {
  return (
    <div
      className="text-white p-4 py-16"
      style={{
        background:
          "linear-gradient(90deg, rgba(69, 61, 17, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(69, 61, 17, 1) 100%)",
      }}
    >
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12 tracking-wide ">
        P  r  o  j  e  c  t  s
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
