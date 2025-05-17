import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
  hideNav?: boolean;
}

const Layout = ({ children, hideNav = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      {!hideNav && <Header />}
      
      <main className={`flex-grow ${!hideNav ? 'pt-16' : ''}`}>
        {children || <Outlet />}
      </main>
      
      {!hideNav && <Footer />}
    </div>
  );
};

export default Layout;