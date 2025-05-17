import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Code, Coffee, GitBranch, Globe, Zap } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - HackStarter';
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative overflow-hidden py-24 bg-primary-50 dark:bg-primary-900">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots-xl text-primary-100 dark:text-primary-800 opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About HackStarter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're building the tools and resources that empower developers to create amazing 
              projects faster and with less effort.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                HackStarter was created to solve a simple but important problem: 
                developers spend too much time building the same foundation over and over 
                for each new project, especially during hackathons and rapid prototyping.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our mission is to provide a robust, versatile starter template that can be 
                adapted to any domain, allowing developers to focus on building unique features 
                and solving domain-specific problems instead of reinventing the wheel.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Values section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              These core beliefs guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-smooth">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 inline-block mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in working smarter, not harder. Our tools are designed to eliminate 
                repetitive tasks and streamline development workflows.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-smooth">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 inline-block mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We never compromise on code quality. Our templates follow best practices and are built 
                with maintainability, security, and performance in mind.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-smooth">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 inline-block mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe technology should be accessible to everyone. Our templates are designed 
                to be inclusive and adaptable for all users.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-smooth">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 inline-block mb-4">
                <GitBranch size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We're constantly exploring new technologies and approaches to improve our templates 
                and stay ahead of industry trends.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-smooth">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 inline-block mb-4">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We value the developer community and foster collaboration, knowledge sharing, and 
                continuous learning among our users.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-smooth">
              <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 inline-block mb-4">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Adaptability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We design our solutions to be flexible and adaptable, so they can evolve with 
                changing requirements and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to build faster?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of developers who are using HackStarter to accelerate their projects 
              and win hackathons.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;