import React from 'react';

const JournalPage = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <a href="/" className="text-blue-600 font-bold text-lg">
          Journal Logo
        </a>
        <nav className="space-x-4">
          <a href="#journals" className="text-gray-700 hover:text-gray-900">Journals</a>
          <a href="#join-us" className="text-gray-700 hover:text-gray-900">Join us</a>
          <a href="#our-policies" className="text-gray-700 hover:text-gray-900">Our Policies</a>
          <a href="#submit-manuscript" className="text-gray-700 hover:text-gray-900">Submit Manuscript</a>
        </nav>
      </header>

      {/* Ribbon */}
      <div className="bg-gray-200 p-2 flex justify-around">
        <a href="#journal-overview" className="text-gray-700 hover:text-gray-900">Journal Overview</a>
        <a href="#editorial-board" className="text-gray-700 hover:text-gray-900">Editorial Board</a>
        <a href="#guidelines" className="text-gray-700 hover:text-gray-900">Guidelines</a>
        <div className="relative group">
          <button className="text-gray-700 hover:text-gray-900">All Issues</button>
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg border border-gray-200">
            <a href="#article-in-press" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Article in press</a>
            <a href="#current-issue" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Current issue</a>
            <a href="#past-issue" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Past issue</a>
            <a href="#special-issue" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Special Issue</a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-4">
        <div className="flex flex-col items-center">
          <img src="path/to/related-photo.jpg" alt="Dentistry related" className="w-full h-auto object-cover" />
          <h1 className="text-2xl font-bold mt-4">Journal Name</h1>
          <img src="path/to/editor-photo.jpg" alt="Editor-in-chief" className="w-32 h-32 rounded-full mt-4" />
          <p className="text-lg mt-2">Editor-in-chief Name, Designation</p>
        </div>

        {/* About the Journal */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">About the journal</h2>
          <p className="text-gray-700">
            Dentist’s Journal is a peer-reviewed, Open Access journal that publishes original research articles and review articles in all areas of dentistry...
          </p>
        </section>

        {/* Journal Metrics */}
        <section className="mt-8 border p-4">
          <h3 className="text-lg font-semibold">Journal metrics:</h3>
          <ul className="list-disc list-inside">
            <li>Acceptance rate: </li>
            <li>Submission to final decision: </li>
            <li>Acceptance to publication: </li>
            <li>CiteScore: </li>
            <li>Journal Citation Indicator: </li>
            <li>Impact Factor: </li>
          </ul>
        </section>

        {/* Recently Published Articles */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Recently published articles</h3>
          <div className="mt-4">
            {/* Articles will be listed here */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 mt-8">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul>
              <li><a href="#home" className="text-gray-700 hover:text-gray-900">Home</a></li>
              <li><a href="#other-journals" className="text-gray-700 hover:text-gray-900">Our other Journals</a></li>
              <li><a href="#submit-manuscript" className="text-gray-700 hover:text-gray-900">Submit Manuscript</a></li>
              <li><a href="#publication-guidelines" className="text-gray-700 hover:text-gray-900">Publication Guidelines</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Reach Us</h4>
            <p>Company address</p>
            <p>Call: Our contact number</p>
            <p>E-Mail: Our mail id</p>
            <h4 className="font-semibold mt-4">Follow Us</h4>
            <div className="flex space-x-2">
              <a href="#facebook" className="text-gray-700 hover:text-gray-900">Facebook</a>
              <a href="#twitter" className="text-gray-700 hover:text-gray-900">Twitter</a>
              <a href="#linkedin" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JournalPage;
