// // // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import "boxicons/css/boxicons.min.css";
// // import "./Testimonial.css";

// // const Testimonial = () => {
// //   const testimonials = [
// //     {
// //       name: "John Doe",
// //       occupation: "Web Developer",
// //       content:
// //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
// //       stars: 5,
// //       image: "/image1.jpg",
// //     },
// //     {
// //       name: "Jane Smith",
// //       occupation: "Designer",
// //       content:
// //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
// //       stars: 5,
// //       image: "/image1.jpg",
// //     },
// //     {
// //       name: "Jane Smith",
// //       occupation: "Designer",
// //       content:
// //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
// //       stars: 5,
// //       image: "/image1.jpg",
// //     },
// //     {
// //       name: "Jane Smith",
// //       occupation: "Designer",
// //       content:
// //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias rem architecto, a qui esse quibusdam nisi harum numquam iste in! Rem ea aliquam aut excepturi, itaque similique fugiat alias natus voluptatum veritatis!",
// //       stars: 5,
// //       image: "/image1.jpg",
// //     },
// //     // Add more testimonials as needed
// //   ];
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 2,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 5000,
// //     arrows: true,
// //     responsive: [
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           arrows: false,
// //           slidesToShow: 1,
// //         },
// //       },
// //     ],
// //   };
// //   return (
// //     <div className="bg-gray-100 py-16 ">
// //       <div className="mx-auto my-12 px-4 w-[90%] ">
// //         <div className="mb-12 text-center">
// //           <h2 className="text-4xl font-semibold capitalize">
// //             What our clients say
// //           </h2>
// //         </div>
// //         <Slider {...settings}>
// //           {testimonials.map((testimonial, index) => (
// //             <div key={index} className="bg-gray-300 p-8 rounded-xl" >
// //               <div className="flex items-center" >
// //                 <img
// //                   src={testimonial.image}
// //                   alt=""
// //                   className="max-w-12 h-auto rounded-full mr-5"
// //                 />
// //                 <div>
// //                   <h3 className="text-3xl font-semibold capitalize">
// //                     {testimonial.name}
// //                   </h3>
// //                   <span className="text-gray-400 capitalize">
// //                     {testimonial.occupation}
// //                   </span>
// //                 </div>
// //               </div>
// //               <p className="mt-5">{testimonial.content}</p>
// //               <div className="mt-4">
// //                 {[...Array(testimonial.stars)].map((_, i) => (
// //                   <i key={i} className="bx bxs-star text-yellow-500"></i>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Testimonial;


// // import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "boxicons/css/boxicons.min.css";
// import "./Testimonial.css";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       occupation: "Web Developer",
//       title: "Fast and Efficient Publication Process",
//       content:
//         "This journal excels in providing a streamlined publication process. The peer review was thorough and constructive, ensuring high-quality feedback that improved my article. The turnaround time from submission to publication was impressively short. Highly recommend for researchers looking for timely publication.",
//       stars: 5,
//       image: "/image1.jpg",
//     },
//     {
//       name: "Jane Smith",
//       occupation: "Designer",
//       title:"Quick and Rigorous Peer Review",
//       content:
//         "I was impressed with the journal's commitment to a fast publication timeline without compromising the quality of peer review. The reviewers offered detailed and insightful feedback, helping to enhance my manuscript. The entire process was smooth and efficient.",
//       stars: 4.5,
//       image: "/image1.jpg",
//     },
//     {
//       name: "Jane Smith",
//       occupation: "Designer",
//       title: "Exceptional Support and Speedy Publication",
//       content:
//         "The journal provides excellent support throughout the submission process. The peer review was comprehensive, and the editors ensured a quick publication. This balance of speed and rigor makes it an ideal choice for authors seeking rapid dissemination of their research.",
//       stars: 5,
//       image: "/image1.jpg",
//     },
//     {
//       name: "Jane Smith",
//       occupation: "Designer",
//       title: "Timely and High-Quality Reviews",
//       content:
//         "I appreciated the journal’s focus on timely publication while maintaining a rigorous peer review process. The feedback was detailed and constructive, contributing significantly to the quality of my article. The publication timeline was impressive, facilitating quick dissemination of findings.",
//       stars: 4,
//       image: "/image1.jpg",
//     },
//     // Add more testimonials as needed
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-gray-100 py-16 overflow-hidden mx-auto justify-center items-center max-w-screen-2xl">
//       <div className="mx-auto my-12 px-4 w-[80%] ">
//         <div className="mb-12 text-center">
//           <h2 className="text-4xl font-semibold capitalize overflow-hidden">
//             What our clients say
//           </h2>
//         </div>
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-gray-300 p-8 rounded-xl overflow-hidden">
//               <div className="flex items-center">
//                 <img
//                   src={testimonial.image}
//                   alt=""
//                   className="max-w-12 h-auto rounded-full mr-5"
//                 />
//                 <div>
//                   <h3 className="text-3xl font-semibold capitalize">
//                     {testimonial.name}
//                   </h3>
//                   <h2 className="text-3xl font-semibold capitalize">
//                     {testimonial.title}
//                   </h2>
//                   <span className="text-gray-400 capitalize">
//                     {testimonial.occupation}
//                   </span>
//                 </div>
//               </div>
//               <p className="mt-5">{testimonial.content}</p>
//               <div className="mt-4">
//                 {[...Array(testimonial.stars)].map((_, i) => (
//                   <i key={i} className="bx bxs-star text-yellow-500"></i>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons/css/boxicons.min.css";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Kartik Agarwal",
      occupation: "Web Developer",
      title: "Fast and Efficient Publication Process",
      content:
        "This journal excels in providing a streamlined publication process. The peer review was thorough and constructive, ensuring high-quality feedback that improved my article. The turnaround time from submission to publication was impressively short. Highly recommend for researchers looking for timely publication.",
      stars: 5,
      image: "/image1.jpg",
    },
    {
      name: "Sahil Sharma",
      occupation: "Designer",
      title: "Quick and Rigorous Peer Review",
      content:
        "I was impressed with the journal's commitment to a fast publication timeline without compromising the quality of peer review. The reviewers offered detailed and insightful feedback, helping to enhance my manuscript. The entire process was smooth and efficient.",
      stars: 4,
      image: "/image2.jpg",
    },
    {
      name: "Taniya Bansal",
      occupation: "Researcher",
      title: "Exceptional Support and Speedy Publication",
      content:
        "The journal provides excellent support throughout the submission process. The peer review was comprehensive, and the editors ensured a quick publication. This balance of speed and rigor makes it an ideal choice for authors seeking rapid dissemination of their research.",
      stars: 5,
      image: "/image3.jpg",
    },
    {
      name: "Ayush Tyagi",
      occupation: "Scientist",
      title: "Timely and High-Quality Reviews",
      content:
        "I appreciated the journal’s focus on timely publication while maintaining a rigorous peer review process. The feedback was detailed and constructive, contributing significantly to the quality of my article. The publication timeline was impressive, facilitating quick dissemination of findings.",
      stars: 4,
      image: "/image4.jpg",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16 overflow-hidden mx-auto justify-center items-center max-w-screen-2xl">
      <div className="mx-auto my-12 px-4 w-[80%] ">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold capitalize overflow-hidden">
            What our clients say
          </h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-300 p-8 rounded-xl overflow-hidden">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt=""
                  className="max-w-12 h-auto rounded-full mr-5"
                />
                <div>
                  <h3 className="text-3xl font-semibold capitalize">
                    {testimonial.name}
                  </h3>
                  
                  <span className="text-gray-400 capitalize">
                    {testimonial.occupation}
                  </span>
                  
                </div>
              </div>
              <h4 className="text-2xl font-semibold capitalize">
                    {testimonial.title}
                  </h4>
              <p className="mt-5">{testimonial.content}</p>
              <div className="mt-4">
                {[...Array(Math.round(testimonial.stars))].map((_, i) => (
                  <i key={i} className="bx bxs-star text-yellow-500"></i>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
