import React from "react";
import Card from "./Card";
import house from "../assets/house.png";
import hook from "../assets/hook.png";
import building from "../assets/building.png";
import project from "../assets/project.png";
import sketch from "../assets/sketch.png";
import renovation from "../assets/renovation.png";
import cement from "../assets/cement.png";
import engineers from "../assets/engineers.png";

const OurServices = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">Our Services</h2>
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          <Card
            title="Residential Construction"
            description="We build custom homes, handle renovations, and manage property developments, delivering high-quality results on time and within budget."
            iconSrc={house}
          />

          <Card
            title="Commercial Construction"
            description="From office buildings to retail spaces, we create functional and durable commercial properties tailored to your business needs."
            iconSrc={hook}
          />

          <Card
            title="Project Management"
            description="Our team ensures your project runs smoothly by managing budgets, schedules, and quality control from start to finish."
            iconSrc={project}
          />

          <Card
            title="Design, Build"
            description="We offer integrated design and build services, streamlining the process from concept to completion for quicker, cost-effective results."
            iconSrc={sketch}
          />

          <Card
            title="Civil Engineering"
            description="We provide site preparation, road construction, and drainage solutions to ensure the stability and functionality of your property."
            iconSrc={engineers}
          />

          <Card
            title="Renovations, Remodeling"
            description="We transform your existing space with expert remodeling services, including kitchens, bathrooms, and structural changes."
            iconSrc={renovation}
          />

          <Card
            title="Demolition Services"
            description="We safely manage residential and commercial demolitions, ensuring efficient site clearance for new construction projects."
            iconSrc={building}
          />

          <Card
            title="Concrete Services"
            description="Our concrete services include foundation pouring, repairs, and custom concrete work for both residential and commercial properties."
            iconSrc={cement}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
