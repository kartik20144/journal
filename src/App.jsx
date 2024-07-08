// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Custm from "./components/Home/Custm";
// import Hero from "./components/Home/Hero";
// import Journal from "./components/Journal/Journal";
// import SubHeader from "./components/Journal/SubHeader";
// import Author from "./components/Journal/AuthorGuidelines/Author";
// import Reviewer from "./components/Journal/ReviewerGuidelines/Reviewer";
// import Editor from "./components/Journal/EditorGuidelines/Editor"
// import Heroimage from "./components/Journal/Heroimage";
// import ReHero from "./components/Journal/ReHero";
// import Submitbtn from "./components/Submitbtn";
// import Register from "./components/Register";
// import Testimonial from "./components/Testimonial";
// import JoinUsBox from "./components/Home/JoinUsBox";
// import JournalGrid from "./components/Home/JournalGrid";
// import SubmitManuscript from "./components/SubmitManuscript";

// // import Custm from "./Components/Home/Custm";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <Header />
//           <Hero />
//           <Custm />
//           <JoinUsBox />
//           <JournalGrid />
//           <Testimonial />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/journal",
//       element: (
//         <>
//           <Header />
//           <ReHero />
//           <SubHeader />
//           <Journal />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/journal/author",
//       element: (
//         <>
//           <Header />
//           <ReHero />
//           <Author />
//           <Submitbtn />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/journal/reviewer",
//       element: (
//         <>
//           <Header />
//           <ReHero />
//           <Reviewer />
//           <Submitbtn />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/journal/editor",
//       element: (
//         <>
//           <Header />
//           <ReHero />
//           <Editor />
//           <Submitbtn />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/register",
//       element: (
//         <>
//           <Header />
//           <Register />
//           <Footer />
//         </>
//       ),
//     },
//     {
//       path: "/submitManuscript",
//       element: (
//         <>
//           <Header />
//           <SubmitManuscript />
//           <Footer />
//         </>
//       ),
//     },
    
//   ],
//  // { basename: '/journal' }
// );
//   return (
//     <>
//     <RouterProvider router={router} />
//       {/* <Header />
//       <Hero />
//       <Custm />
//       <Journal />
//       <Footer /> */}
//       {/* <Custm /> */}
//     </>
//   );
// }

// export default App;
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Custm from "./components/Home/Custm";
import Hero from "./components/Home/Hero";
import Journal from "./components/Journal/Journal";
import SubHeader from "./components/Journal/SubHeader";
import Author from "./components/Journal/AuthorGuidelines/Author";
import Reviewer from "./components/Journal/ReviewerGuidelines/Reviewer";
import Editor from "./components/Journal/EditorGuidelines/Editor"
import Heroimage from "./components/Journal/Heroimage";
import ReHero from "./components/Journal/ReHero";
import Submitbtn from "./components/Submitbtn";
import Register from "./components/Register";
import Testimonial from "./components/Testimonial";
import JoinUsBox from "./components/Home/JoinUsBox";
import JournalGrid from "./components/Home/JournalGrid";
import SubmitManuscript from "./components/SubmitManuscript";
import DentistJournal from "./components/Journal/DentistJournal1/DentistJournal";
import Ribbon from "./components/Journal/DentistJournal1/Ribbon";
import Journal2 from "./components/Journal/Journal2/Journal2";
import Journal3 from "./components/Journal/Journal3/Journal3";
import Journal4 from "./components/Journal/Journal4/Journal4";

// import Custm from "./Components/Home/Custm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Hero />
          <Custm />
          <JoinUsBox />
          <JournalGrid />
          <Testimonial />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal",
      element: (
        <>
          <Header />
          <ReHero />
          <SubHeader />
          <Journal />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal/author",
      element: (
        <>
          <Header />
          <ReHero />
          <Author />
          <Submitbtn />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal/reviewer",
      element: (
        <>
          <Header />
          <ReHero />
          <Reviewer />
          <Submitbtn />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal/editor",
      element: (
        <>
          <Header />
          <ReHero />
          <Editor />
          <Submitbtn />
          <Footer />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Header />
          <Register />
          <Footer />
        </>
      ),
    },
    {
      path: "/submitManuscript",
      element: (
        <>
          <Header />
          <SubmitManuscript />
          <Footer />
        </>
      ),
    },
    {
      path: "/dentistJournal",
      element: (
        <>
          <Header />
          <ReHero />
          <Ribbon />
          <DentistJournal />
          <Footer />
        </>
      ),
    },
    {
      path: "/advance_in_astronomy&physics",
      element: (
        <>
          <Header />
          <ReHero />
          <Ribbon />
          <Journal2 />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal_of_pets&related_medicine",
      element: (
        <>
          <Header />
          <ReHero />
          <Ribbon />
          <Journal3 />
          <Footer />
        </>
      ),
    },
    {
      path: "/journal_of_skin&reconstructive_surgery",
      element: (
        <>
          <Header />
          <ReHero />
          <Ribbon />
          <Journal4 />
          <Footer />
        </>
      ),
    },
  ],
 // { basename: '/journal' }
);
  return (
    <>
    <RouterProvider router={router} />
      {/* <Header />
      <Hero />
      <Custm />
      <Journal />
      <Footer /> */}
      {/* <Custm /> */}
    </>
  );
}

export default App;
