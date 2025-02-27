import React from "react";
import { Download } from "lucide-react";
import img from "../assets/image-JWRT0BEh.png";
import resume from "../assets/Jeyaraman_Resume.pdf";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={img}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr rounded-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Hi, I'm Jeyaraman
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with expertise in building
                modern web applications. With a strong foundation in computer
                science and a keen eye for design, I create solutions that are
                both technically robust and user-friendly.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing my knowledge
                through technical writing and mentoring.
              </p>
              <a
                href={resume}
                download
                className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
