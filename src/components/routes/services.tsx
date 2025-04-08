import React from "react";

const services = [
  { title: "Resume Building", description: "Get a professionally crafted resume to stand out in job applications." },
  { title: "Career Coaching", description: "Receive expert guidance to navigate your career path successfully." },
  { title: "Interview Preparation", description: "Practice with AI-driven mock interviews and receive real-time feedback." },
  { title: "AI Cover Letter", description: "Generate personalized cover letters using AI to make a great first impression." }
];

const Service: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold text-center text-black mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-300">
            <h2 className="text-2xl font-semibold text-black mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
