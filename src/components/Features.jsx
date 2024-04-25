// import React, { useContext } from 'react';
// import { ThemeContext } from '../ThemeContext';

// function Features() {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <section className={`p-6 flex flex-col items-center justify-center h-screen ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
//       <h1 className={`font-agbalumo text-4xl text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
//         Featured Content
//       </h1>
//       <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4">
//         <div className="flex justify-center items-center space-x-4">
//           <img src="demo3.png" alt="Capture1" className="w-full max-w-xs" />
//           <img src="demo1.png" alt="Capture2" className="w-full max-w-xs" />
//         </div>
//         <div className="flex justify-center items-center space-x-4">
//           <img src="demo2.png" alt="Capture3" className="w-full max-w-xs" />
//           {/* <img src="Capture (4).png" alt="Capture4" className="w-full max-w-xs" /> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Features;