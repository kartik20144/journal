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

const DentistJournal = () => {
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
          <p>Dentist’s Journal is a peer-reviewed, Open Access journal that publishes original research articles and review articles in all areas of dentistry, including periodontal diseases, dental implants, oral pathology, as well as oral and maxillofacial surgery. Topics covered include the management of dental disease, periodontology, endodontology, operative dentistry, fixed and removable prosthodontics, dental biomaterials science, long-term clinical trials including epidemiology and oral health, technology transfer of new scientific instrumentation or procedures, as well as clinically relevant oral biology and translational research.</p>
          <p>Dentist’s Journal will publish original scientific research papers including short communications. It is also interested in publishing review articles and leaders in themed areas which will be linked to new scientific research. Conference proceedings and case reports are also welcome.</p>
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

export default DentistJournal
