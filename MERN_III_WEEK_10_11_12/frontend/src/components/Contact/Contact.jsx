// import React from 'react';
// import { FaPaperPlane, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
// import { FaSquareXTwitter } from "react-icons/fa6";

// const Contact = () => {
//   return (
//     <div className='w-full h-screen -mt-11 flex flex-col justify-center items-start'>
//       <div className='relative left-6 top-20 w-[97.5%]'>
//         <p className='text-3xl font-semibold'>
//           <span className='text-[#E79600]'>Reach</span> Out
//         </p>
//         <div className="relative top-1 right-0 w-14 h-0.5 bg-white rounded-b-lg"></div>

//         <div className='flex flex-col items-center justify-center mt-12'>

//           {/* Form Section */}
//           <div className='w-[75%] bg-purple-700 p-6 rounded-2xl shadow-md'>
//             <form className='space-y-4 text-white'>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="text"
//                   placeholder='Full Name'
//                   className='w-full sm:w-1/2 p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
//                 />
//                 <input
//                   type="email"
//                   placeholder='E-mail'
//                   className='w-full sm:w-1/2 p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder='Subject'
//                 className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
//               />
//               <textarea
//                 rows="5"
//                 placeholder='Your Message'
//                 className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
//               ></textarea>
//               <div className='flex justify-end'>
//                 <button
//                   type='submit'
//                   className='flex items-center gap-2 bg-[#E79600] hover:bg-yellow-500 text-black px-5 py-2 rounded-md shadow-lg font-semibold'
//                 >
//                   <FaPaperPlane /> Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Social Links Section */}
//           <div className='w-[75%] mt-8 text-white text-lg flex flex-col sm:flex-row sm:items-center gap-4'>
//             <p className='text-2xl'>
//               or <span className='text-[#E79600]'>contact me</span> with...
//             </p>
//             <div className='flex gap-8 text-2xl'>
//               <a href="#" aria-label="Twitter"><FaSquareXTwitter size={40} className='text-black hover:scale-110 transition-transform' /></a>
//               <a href="#" aria-label="LinkedIn"><FaLinkedin size={40} className='text-[#0A66C2] bg-white rounded-full hover:scale-110 transition-transform' /></a>
//               <a href="#" aria-label="GitHub"><FaGithub size={40} className='bg-black rounded-full hover:scale-110 transition-transform' /></a>
//               <a href="#" aria-label="Facebook"><FaFacebook size={40} className='text-[#0A66C2] bg-white rounded-full hover:scale-110 transition-transform' /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = "Full Name is required!";
    if (!form.email) newErrors.email = "E-mail is required!";
    if (!form.subject) newErrors.subject = "Subject is required!";
    if (!form.message) newErrors.message = "Message is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Message sent successfully!");
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className='w-full h-screen -mt-11 flex flex-col justify-center items-start'>
      <div className='relative left-6 top-20 w-[97.5%]'>
        <p className='text-3xl font-semibold'>
          <span className='text-[#E79600]'>Reach</span> Out
        </p>
        <div className="relative top-1 right-0 w-14 h-0.5 bg-white rounded-b-lg"></div>

        <div className='flex flex-col items-center justify-center mt-12'>
          {/* Form Section */}
          <div className='w-[75%] bg-purple-700 p-6 rounded-2xl shadow-md'>
            <form onSubmit={handleSubmit} className='space-y-4 text-white'>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className='w-full sm:w-1/2'>
                  <input
                    type="text"
                    name="name"
                    placeholder='Full Name'
                    value={form.name}
                    required
                    className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                  />
                </div>
                <div className='w-full sm:w-1/2'>
                  <input
                    type="email"
                    name="email"
                    placeholder='E-mail'
                    value={form.email}
                    required
                    className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder='Subject'
                  value={form.subject}
                  required
                  className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder='Your Message'
                  value={form.message}
                  required
                  className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                ></textarea>
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='flex items-center gap-2 bg-[#E79600] hover:bg-yellow-500 text-black px-5 py-2 rounded-md shadow-lg font-semibold'
                >
                  <FaPaperPlane /> Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Social Links Section */}
          <div className='w-[75%] mt-8 text-white text-lg flex flex-col sm:flex-row sm:items-center gap-4'>
            <p className='text-2xl'>
              or <span className='text-[#E79600]'>contact me</span> with...
            </p>
            <div className='flex gap-8 text-2xl'>
              <a href="#" aria-label="Twitter"><FaSquareXTwitter size={40} className='text-black hover:scale-110 transition-transform' /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={40} className='text-[#0A66C2] bg-white hover:scale-110 transition-transform' /></a>
              <a href="#" aria-label="GitHub"><FaGithub size={40} className='bg-black rounded-full hover:scale-110 transition-transform' /></a>
              <a href="#" aria-label="Facebook"><FaFacebook size={40} className='text-[#0A66C2] bg-white rounded-full hover:scale-110 transition-transform' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
