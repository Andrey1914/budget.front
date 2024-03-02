import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import Header from 'components/Header/Header';
// import { AppBar } from './AppBar/AppBar';
// import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <div>
      {/* <AppBar /> */}
      <Header />
      <Suspense fallback={null}>
        <Outlet />
        {/* <Footer /> */}
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
