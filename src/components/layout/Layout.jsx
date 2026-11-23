import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * Main application layout wrapping navigation, route content, and footer.
 */
export function Layout() {
  const { pathname } = useLocation();

  // Scroll to top upon navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-brand-platinum">
      <Navbar />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
