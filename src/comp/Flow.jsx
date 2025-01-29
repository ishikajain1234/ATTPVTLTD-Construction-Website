import React from "react";
import {
  FaRegFileAlt,
  FaHardHat,
  FaDraftingCompass,
  FaTruck,
  FaHome,
} from "react-icons/fa";

const Workflow = () => {
  const steps = [
    {
      icon: <FaRegFileAlt size={30} />,
      title: "Project Initiation",
      description: "Defining scope & requirements",
    },
    {
      icon: <FaDraftingCompass size={30} />,
      title: "Design & Planning",
      description: "Blueprints & material selection",
    },
    {
      icon: <FaHardHat size={30} />,
      title: "Construction Phase",
      description: "Execution of the project",
    },
    {
      icon: <FaTruck size={30} />,
      title: "Material Supply",
      description: "Logistics & on-time delivery",
    },
    {
      icon: <FaHome size={30} />,
      title: "Final Inspection",
      description: "Quality check & handover",
    },
  ];

  return (
    <div
      className="text-white p-4 py-16"
      style={{
        background:
          "linear-gradient(90deg, rgba(69,61,17,1) 0%, rgba(0,0,0,1) 50%, rgba(69,61,17,1) 100%)",
      }}
    >
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12 tracking-wide">
        C  o  n  s  t  r  u  c  t  i  o  n - W  o  r  k  f  l  o  w
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-48 transform transition-all duration-300 hover:scale-110"
          >
            <div className="bg-yellow-500 p-5 rounded-full shadow-lg shadow-yellow-500/50">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.description}</p>
            {index !== steps.length && (
              <div className="h-1 w-16 bg-yellow-400 mt-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
