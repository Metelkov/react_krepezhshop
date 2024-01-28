import React, { Component } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Layout } from  './layout/layout';
import { MainPage } from './Pages/Main/mainPage';
import { router } from './router/router'

function App() {
  return (
    <RouterProvider router={router} />
  );
};

export default App;





//старая запись
// function App() {
//   return (
//      <>
//     <Routes>
//         <Route path="/" element={<Layout />} >
//           <Route index element={<MainPage />} />


//           {/* <Route path="about" element={<About />} /> */}

//        </Route>
//     </Routes>
//      </>
//   );
// };

// export default App;

