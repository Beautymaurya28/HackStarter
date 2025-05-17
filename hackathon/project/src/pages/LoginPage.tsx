import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Sign In - HackStarter';
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="w-full max-w-md">
          <div className="text-center">
            <Link to="/" className="flex items-center justify-center text-xl font-bold text-primary-600 dark:text-primary-400 mb-6">
              <span className="mr-2 text-primary-600 dark:text-primary-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </span>
              HackStarter
            </Link>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to your account to continue
            </p>
          </div>
          
          <div className="mt-8">
            <LoginForm />
          </div>
        </div>
      </div>
      
      {/* Right: Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Login background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-800/70 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="max-w-xl text-white">
            <h3 className="text-3xl font-bold mb-4">Build your next amazing project</h3>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of developers who are creating innovative solutions with our hackathon starter template.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-white opacity-90">Ready-made components</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-white opacity-90">Fully responsive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;