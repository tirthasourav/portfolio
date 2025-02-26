'use client';

import React from "react";
import Head from "next/head";
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTools,
  FaCertificate,
  FaCode,
  FaDatabase,
  FaCloud,
  FaWrench,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";
import projects from "../constants/data/projects";
import experiences from "../constants/data/experiences";
import skills from "../constants/data/skills";
import techStack from "../constants/data/techstack";
import certifications from "../constants/data/certifications";
import contributions from "../constants/data/contributions";
import languages from "../constants/data/languages";
import frameworks from "../constants/data/frameworks";
import databases from "../constants/data/databases";
import cloudTools from "../constants/data/cloudTools";
import devTools from "../constants/data/devTools";

import profileImage from '../assets/images/sourav.png';
import defaultValues from "@/constants/defaultValues";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sourav Dey | Portfolio</title>
      </Head>
      <main className="bg-gray-900 text-white min-h-screen p-4 md:p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Sidebar */}
          <aside className="col-span-1 bg-gradient-to-b from-gray-900 to-gray-700 p-6 rounded-lg shadow-lg text-center relative border border-gray-600 backdrop-blur-lg">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full overflow-hidden shadow-md border-4 border-gray-700">
              <Image src={profileImage} alt="Profile" width={400} height={300}/>
            </div>
            <div className="mt-20">
              <h1 className="text-2xl md:text-3xl font-extrabold text-neon">Sourav Dey</h1>
              <p className="text-sm md:text-md text-gray-300 mt-2">Software Engineer | React Native | MERN Stack</p>
              <div className="mt-4 flex justify-center gap-4 animate-bounce">
                <a href={defaultValues.github} target="_blank" className="text-gray-300 hover:text-neon">
                  <FaGithub size={24} />
                </a>
                <a href={defaultValues.linkedin} target="_blank" className="text-gray-300 hover:text-neon">
                  <FaLinkedin size={24} />
                </a>
                <a href={`mailto:${defaultValues.email}`} className="text-gray-300 hover:text-neon">
                  <FaEnvelope size={24} />
                </a>
              </div>
              <p className="text-gray-300 mt-4 flex items-center justify-center gap-2">
                <FaMapMarkerAlt size={16} /> Jersey City, NJ
              </p>
            </div>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-inner">
              <h2 className="text-lg font-bold border-b border-gray-600 pb-1">Skills</h2>
              <div className="mt-3 space-y-3">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold text-gray-300 flex justify-between">
                      {skill.name} <span>{skill.rating * 20}%</span>
                    </p>
                    <div className="w-full bg-gray-600 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${Math.max(skill.rating * 20, 5)}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-inner">
              <h2 className="text-lg font-bold border-b border-gray-600 pb-1">Certifications</h2>
              <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-inner">
              <h2 className="text-lg font-bold border-b border-gray-600 pb-1">Open Source Contributions</h2>
              <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                {contributions.map((contribution, index) => (
                  <li key={index}>
                    <a href={contribution.link} target="_blank" className="text-blue-400 hover:underline">
                      {contribution.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <section className="col-span-1 md:col-span-3">
            <div className="mb-6">
              <h2 className="text-lg md:text-2xl font-bold border-b border-gray-600 pb-1 flex items-center gap-2"><FaBriefcase /> Experience</h2>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                {experiences.map((experience, index) => (
                  <div key={index} className="bg-gray-800 p-3 rounded-lg shadow-lg text-sm md:text-base">
                    <h3 className="text-md md:text-lg font-semibold">{experience.role} - {experience.company}</h3>
                    <p className="text-gray-400 text-xs md:text-sm mt-1">{experience.duration}</p>
                    <p className="text-gray-300 mt-2 text-xs md:text-sm">{experience.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg md:text-2xl font-bold border-b border-gray-600 pb-1 flex items-center gap-2"><FaProjectDiagram /> Projects</h2>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-800 p-3 rounded-lg shadow-lg text-sm md:text-base">
                    {project.thumbnail && (
                      <img src={project.thumbnail} alt={project.name} className="w-full h-32 object-cover rounded-md mb-2" />
                    )}
                    <h3 className="text-md md:text-lg font-semibold">{project.name}</h3>
                    <p className="text-gray-400 text-xs md:text-sm mt-2">{project.description}</p>
                    <a
                      href={project.link}
                      className="text-blue-400 hover:underline mt-2 inline-block"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
