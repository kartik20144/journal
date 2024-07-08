import React from 'react'
import "boxicons/css/boxicons.min.css";
import MetricsCard from '../MetricsCard';

const JournalSection = ({ title, icon, children }) => (
    <div className="box1 mt-14">
      <h4 className="font-bold text-2xl text-green-500">
        <i className={`bx ${icon}`}></i> {title}
      </h4>
      <hr className="border-t-2 border-dotted border-black mb-4 mt-[0.5rem]" />
      {children}
    </div>
  );

const Journal3 = () => {
  return (
        <div className="grid md:grid-cols-[65%,30%] gap-[3.2rem] py-[3.25rem] px-[10%] grid-rows-auto">
          <div className="container">
            {/* Editor Section */}
            <JournalSection title="Editor-in-chief" icon="bxs-user">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1529665730773-4f3fda31a5f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Editor-in-chief" className="rounded-full max-w-[150px] mr-6"/>
                <div>
                  <h2 className="text-xl font-bold">Dr. [Name]</h2>
                  <p>[Designation]</p>
                </div>
              </div>
            </JournalSection>
    
            {/* About Section */}
            <JournalSection title="About the Journal" icon="bxs-book">
              <p>Journal of pets and related medicine is to advance veterinary medical knowledge and improve the lives of animals by publication of authoritative scientific articles of animal diseases. The Journal of pets and related medicine provides an international forum for communication and discussion of the latest developments in large and small animal internal medicine, cardiology, neurology, and oncology.</p>
              <p>The Journal of Pets and Related Medicine stands as a beacon in the field of veterinary medicine, driven by a profound mission: to propel the frontier of veterinary knowledge forward and to enrich the lives of animals through the dissemination of authoritative scientific research. At its core, this journal serves as a vital conduit, channelling groundbreaking discoveries and insights into the intricate realm of animal diseases.</p>
              <p>But the significance of the Journal of Pets and Related Medicine extends far beyond its role as a repository of knowledge. It serves as a dynamic hub, fostering an international community of veterinary professionals, scholars, and enthusiasts united by their passion for animal health. Through its global reach and influence, the journal transcends geographical boundaries, creating an inclusive space where ideas converge and dialogue flourishes.</p>
              <p>At the heart of this vibrant community lies a shared commitment to excellence and innovation in veterinary medicine. The journal provides a platform for collaboration and exchange, where experts from diverse backgrounds can come together to discuss the latest advancements and emerging trends in the field.</p>
              <p>In essence, the Journal of Pets and Related Medicine is a testament to the enduring spirit of collaboration and inquiry that defines the veterinary profession. It is a beacon of hope and inspiration for all those who are dedicated to the well-being of animals, guiding them on their quest to unlock the secrets of animal health and usher in a brighter future for generations to come.</p>
            </JournalSection>
    
            {/* Metrics Section */}
            <JournalSection title="Journal Metrics" icon="bxs-bar-chart-alt-2">
              <MetricsCard />
            </JournalSection>
    
            {/* Recently Published Articles */}
            <JournalSection title="Recently Published Articles" icon="bxs-news">
              {/* Placeholder for articles */}
            </JournalSection>
          </div>
    
          <div className="sidebar">
            <div className="container1 flex flex-col mt-14 shadow-2xl shadow-gray-400">
              <button className="flex items-center py-3 px-5 text-lg bg-sky-900 text-white hover:bg-sky-950">
                <i className="bx bx-upload mr-2"></i> Submit Article
              </button>
              <a href="#guidelines" className="flex items-center py-3 px-5 text-lg hover:bg-gray-200">
                <i className="bx bx-file mr-2"></i> Author Guidelines
              </a>
              <a href="#editorial-board" className="flex items-center py-3 px-5 text-lg hover:bg-gray-200">
                <i className="bx bx-group mr-2"></i> Editorial Board
              </a>
              <a href="#indexing" className="flex items-center py-3 px-5 text-lg hover:bg-gray-200">
                <i className="bx bxs-file-export mr-2"></i> Abstracting & Indexing
              </a>
              <button className="flex items-center py-3 px-5 text-lg text-white bg-green-500 hover:bg-green-600">
                <i className="bx bx-log-in mr-2"></i> Sign up for Content Alert
              </button>
            </div>
          </div>
        </div>
      );
    };

export default Journal3
