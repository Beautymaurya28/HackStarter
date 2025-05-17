import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useThemeStore } from '../../store/themeStore';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { isAuthenticated, user, logout } = useAuthStore();
  const { mode, toggleTheme } = useThemeStore();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center text-xl font-bold text-primary-600 dark:text-primary-400"
            >
              <span className="mr-2 text-primary-600 dark:text-primary-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
              HackStarter
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex md:items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                      pathname === link.path
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            >
              {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Auth buttons */}
            <div className="hidden md:flex md:items-center ml-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    to="/dashboard" 
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Dashboard
                  </Link>
                  <div className="relative group">
                    <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      <User size={18} />
                      <span>{user?.name}</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Profile
                      </Link>
                      <Link 
                        to="/settings" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Settings
                      </Link>
                      <button 
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/login">
                    <Button variant="outline" size="sm">Sign In</Button>
                  </Link>
                  <Link to="/register">
                    <Button size="sm">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-4 space-y-1 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 text-base font-medium ${
                pathname === link.path
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                onClick={closeMenu}
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                onClick={closeMenu}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="block w-full text-left py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Sign out
              </button>
            </>
          ) : (
            <div className="mt-4 flex flex-col space-y-2">
              <Link to="/login" onClick={closeMenu}>
                <Button fullWidth>Sign In</Button>
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <Button variant="outline" fullWidth>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;