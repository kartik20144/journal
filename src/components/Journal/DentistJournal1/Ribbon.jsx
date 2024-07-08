// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// const Ribbon = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const tabNames = [
//     { name: "Journal Overview", link: "#overview" },
//     { name: "Editorial Board", link: "#editorial-board" },
//     { name: "Guidelines", link: "#guidelines" },
//     { name: "All Issues", link: "#all-issues" },
//   ];

//   return (
//     <div className="relative">
//       {/* Horizontal tabs for larger screens */}
//       <div className="hidden md:flex justify-around items-center bg-green-500 text-white py-4">
//         {tabNames.map((tab, index) => (
//           <a
//             key={index}
//             href={tab.link}
//             className="hover:bg-blue-900 p-2 hover:rounded hover:text-gray-300"
//           >
//             {tab.name}
//           </a>
//         ))}
//       </div>

//       {/* Sidebar toggle button for small screens */}
//       <div className="md:hidden flex justify-end p-4 bg-green-500 text-white h-14 relative">
//         <button
//           onClick={toggleSidebar}
//           className="focus:outline-none absolute left-5"
//         >
//           <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
//         </button>
//       </div>

//       {/* Sidebar for small screens */}
//       <div
//         className={`fixed inset-y-0 left-0 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 md:hidden`}
//       >
//         <div className="p-4">
//           {tabNames.map((tab, index) => (
//             <a
//               key={index}
//               href={tab.link}
//               className="block px-4 py-2 hover:bg-gray-700"
//             >
//               {tab.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ribbon;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Ribbon = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const tabNames = [
    { name: "Journal Overview", link: "#overview" },
    { name: "Editorial Board", link: "#editorial-board" },
    { name: "Guidelines", link: "#guidelines" },
    { 
      name: "All Issues", 
      link: "#all-issues",
      subMenu: [
        { name: "Article in press", link: "#issue1" },
        { name: "Current issue", link: "#issue2" },
        { name: "Past issue", link: "#issue3" },
        { name: "Special issue", link: "#issue3" },
      ]
    },
  ];

  return (
    <div className="relative">
      {/* Horizontal tabs for larger screens */}
      <div className="hidden md:flex justify-around items-center bg-green-500 text-white py-4">
        {tabNames.map((tab, index) => (
          <div key={index} className="relative group">
            <a
              href={tab.link}
              className="hover:bg-blue-900 p-2 hover:rounded hover:text-gray-300"
            >
              {tab.name}
              {tab.subMenu && (
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
              )}
            </a>
            {tab.subMenu && (
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-white rounded shadow-lg">
                {tab.subMenu.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.link}
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sidebar toggle button for small screens */}
      <div className="md:hidden flex justify-end p-4 bg-green-500 text-white h-14 relative">
        <button
          onClick={toggleSidebar}
          className="focus:outline-none absolute left-5"
        >
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 md:hidden`}
      >
        <div className="p-4">
          {tabNames.map((tab, index) => (
            <div key={index} className="relative">
              <a
                href={tab.link}
                className="block px-4 py-2 hover:bg-gray-700"
                onClick={tab.subMenu ? toggleDropdown : null}
              >
                {tab.name}
              </a>
              {tab.subMenu && isDropdownOpen && (
                <div className="ml-4 mt-2 bg-gray-700 text-white rounded shadow-lg">
                  {tab.subMenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
