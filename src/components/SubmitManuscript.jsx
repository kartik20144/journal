// import React, { useState } from 'react';
// import './SubmitManuscript.css';

// const SubmitManuscript = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     alternateEmail: '',
//     phoneNumber: '',
//     region: '',
//     title: '',
//     articleType: '',
//     issueType: '',
//     specialIssueTitle: '',
//     classification: '',
//     suggestClassification: '',
//     abstract: '',
//     keywords: '',
//     file: null,
//     reviewProcessType: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <div className="section">
//         <h2>Author Details:</h2>
//         <input name="firstName" placeholder="Author First Name" value={formData.firstName} onChange={handleChange} required />
//         <input name="lastName" placeholder="Author Last Name" value={formData.lastName} onChange={handleChange} required />
//         <input name="email" placeholder="Author Email" type="email" value={formData.email} onChange={handleChange} required />
//         <input name="alternateEmail" placeholder="Alternate Email" type="email" value={formData.alternateEmail} onChange={handleChange} />
//         <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
//         <select name="region" value={formData.region} onChange={handleChange} required>
//           <option value="">--Choose your Region--</option>
//           <option value="region1">Region 1</option>
//           <option value="region2">Region 2</option>
//         </select>
//       </div>

//       <div className="section">
//         <h2>Manuscript Details:</h2>
//         <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
//         <select name="articleType" value={formData.articleType} onChange={handleChange} required>
//           <option value="">--Select Article Type--</option>
//           <option value="type1">Type 1</option>
//           <option value="type2">Type 2</option>
//         </select>
//         <select name="issueType" value={formData.issueType} onChange={handleChange} required>
//           <option value="">--Select Issue Type--</option>
//           <option value="issue1">Issue 1</option>
//           <option value="issue2">Issue 2</option>
//         </select>
//         <input name="specialIssueTitle" placeholder="Special Issue Title" value={formData.specialIssueTitle} onChange={handleChange} />
//         <select name="classification" value={formData.classification} onChange={handleChange} required>
//           <option value="">--Select Classification--</option>
//           <option value="classification1">Classification 1</option>
//           <option value="classification2">Classification 2</option>
//         </select>
//         <input name="suggestClassification" placeholder="Suggest Classification" value={formData.suggestClassification} onChange={handleChange} />
//         <textarea name="abstract" placeholder="Abstract" value={formData.abstract} onChange={handleChange} required />
//         <textarea name="keywords" placeholder="Keywords" value={formData.keywords} onChange={handleChange} />
//       </div>

//       <div className="section">
//         <input type="file" name="file" onChange={handleChange} required />
//         <select name="reviewProcessType" value={formData.reviewProcessType} onChange={handleChange} required>
//           <option value="">--Review Process Type--</option>
//           <option value="process1">Process 1</option>
//           <option value="process2">Process 2</option>
//         </select>
//         <div className="captcha">
//           <input type="checkbox" required /> I'm not a robot
//         </div>
//         <button type="submit">Submit Manuscript</button>
//       </div>
//     </form>
//   );
// };

// export default SubmitManuscript;

import React, { useState } from 'react';
import './SubmitManuscript.css';

const SubmitManuscript = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    alternateEmail: '',
    phoneNumber: '',
    region: '',
    title: '',
    articleType: '',
    issueType: '',
    specialIssueTitle: '',
    classification: '',
    suggestClassification: '',
    abstract: '',
    keywords: '',
    file: null,
    reviewProcessType: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="section">
        <h2 className='text-blue-600 font-semibold'><i className="bx bxs-user"></i> Author Details:</h2>
        <div className="form-group">
          <div>
          <h5>Author First Name <span className='text-red-600'>*</span> </h5>
            <input name="firstName"  value={formData.firstName} onChange={handleChange} required />
          </div>
          <div>
          <h5>Author Last Name <span className='text-red-600'>*</span> </h5>
            <input name="lastName"  value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <div>
          <h5>Author Email <span className='text-red-600'>*</span> </h5>
            <input name="email"  type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
          <h5>Alternative Email </h5>
            <input name="alternateEmail"  type="email" value={formData.alternateEmail} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div>
          <h5>Phone Number <span className='text-red-600'>*</span> </h5>
            <input name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div>
          <h5>Choose Your Region <span className='text-red-600'>*</span> </h5>
            <select name="region" value={formData.region} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="region1">Region 1</option>
              <option value="region2">Region 2</option>
            </select>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className='text-blue-600 font-semibold'><i className="bx bxs-file"></i> Manuscript Details:</h2>
        <div className="form-group">
          <div>
          <h5>Title <span className='text-red-600'>*</span> </h5>
            <input name="title"  value={formData.title} onChange={handleChange} required />
          </div>
          <div>
          <h5>Article Type <span className='text-red-600'>*</span> </h5>
            <select name="articleType" value={formData.articleType} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div>
          <h5>Issue Type <span className='text-red-600'>*</span> </h5>
            <select name="issueType" value={formData.issueType} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="issue1">Issue 1</option>
              <option value="issue2">Issue 2</option>
            </select>
          </div>
          <div>
          <h5>Special Issue Title </h5>
            <input name="specialIssueTitle"  value={formData.specialIssueTitle} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div>
          <h5>Classification <span className='text-red-600'>*</span> </h5>
            <select name="classification" value={formData.classification} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="classification1">Classification 1</option>
              <option value="classification2">Classification 2</option>
            </select>
          </div>
          <div>
          <h5>Suggest Classification <span className='text-red-600'>*</span> </h5>
            <input name="suggestClassification"  value={formData.suggestClassification} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div>
          <h5>Abstract <span className='text-red-600'>*</span> </h5>
            <textarea name="abstract"  value={formData.abstract} onChange={handleChange} required />
          </div>
          <div>
          <h5>Keywords <span className='text-red-600'>*</span> </h5>
            <textarea name="keywords"  value={formData.keywords} onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="form-group">
        <div>
          <h5>Review Process Type <span className='text-red-600'>*</span> </h5>
            <select name="reviewProcessType" value={formData.reviewProcessType} onChange={handleChange} required>
              <option value="">--Select--</option>
              <option value="process1">Process 1</option>
              <option value="process2">Process 2</option>
            </select>
          </div>
          <div>
          <h5>Attach our file <span className='text-red-600'>*</span> </h5>
            <input type="file" name="file" onChange={handleChange} required />
          </div>
          
        </div>
        {/* <div className="captcha">
          <input type="checkbox" required /> I'm not a robot
        </div> */}
        <div className="flex  mt-6">
           
          <button className="px-6 py-3 font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all max-w-60 ">
           Submit Manuscript
          </button>
            
        </div>
      </div>
    </form>
  );
};

export default SubmitManuscript;
