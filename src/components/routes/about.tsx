import React from "react";

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">About AI Mock Interview</h1>
      <p className="text-gray-700 text-lg mb-4">
        The AI Mock Interview Application is designed to help job seekers and students 
        prepare for technical and behavioral interviews using AI-driven feedback. 
        Built with React for the frontend, Google Gemini AI for intelligent response analysis, 
        and Firebase for backend and database management, the application provides 
        real-time assessments and personalized interview coaching.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Key Features</h2>
      <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
        <li>AI-driven mock interviews with real-time feedback</li>
        <li>Comprehensive question sets covering technical and HR rounds</li>
        <li>Performance tracking and improvement suggestions</li>
        <li>Secure user authentication and progress storage</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Mission</h2>
      <p className="text-gray-700 text-lg">
        Our mission is to empower job seekers and students by providing a realistic interview 
        environment that enhances their confidence and readiness for real-world job opportunities. 
        With AI-driven insights, users can refine their responses, improve communication skills, 
        and increase their chances of landing their dream job.
      </p>
    </div>
  );
};

export default About;
