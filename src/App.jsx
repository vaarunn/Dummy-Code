import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import Stats from './components/Stats';
import AllJobs from './components/AllJobs';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage/LandingPage';

import Register from './components/LandingPage/Register';
import { AuthProvider } from './context/AuthContext';
const App = () => {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<SharedLayout />}>
    //         <Route index element={<Stats />}></Route>
    //         <Route path='/jobs' element={<AllJobs />}></Route>
    //         <Route path='/profile' element={<Profile />}></Route>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<SharedLayout />}>
            <Route index element={<Stats />}></Route>
            <Route path='/dashboard/jobs' element={<AllJobs />}></Route>
            <Route path='/dashboard/profile' element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
