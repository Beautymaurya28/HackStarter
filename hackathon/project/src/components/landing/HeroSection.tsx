import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in">
              Build Amazing Apps for Your Next{' '}
              <span className="text-primary-600 dark:text-primary-400">Hackathon</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A versatile starter template with everything you need to jumpstart your next project. Perfect for hackathons, MVPs, and rapid prototyping.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/register">
                <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                  Get Started
                </Button>
              </Link>
              
              <Link to="/#features">
                <Button variant="outline" size="lg">
                  Explore Features
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Trusted by developers from
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="text-gray-400 dark:text-gray-600 font-medium">Google</div>
                <div className="text-gray-400 dark:text-gray-600 font-medium">Microsoft</div>
                <div className="text-gray-400 dark:text-gray-600 font-medium">Amazon</div>
                <div className="text-gray-400 dark:text-gray-600 font-medium">Meta</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white dark:bg-gray-800 shadow-smooth-lg rounded-xl overflow-hidden">
              <div className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 space-x-2">
                <div className="h-3 w-3 rounded-full bg-error-500"></div>
                <div className="h-3 w-3 rounded-full bg-warning-500"></div>
                <div className="h-3 w-3 rounded-full bg-success-500"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Dashboard</span>
              </div>
              <div className="p-4">
                <img 
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dashboard preview" 
                  className="rounded-lg shadow-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;