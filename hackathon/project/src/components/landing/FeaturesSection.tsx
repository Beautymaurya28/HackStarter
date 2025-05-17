import { Users, Database, Lock, Gift, BarChart2, Zap, Layers, Smartphone } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="h-full hover:-translate-y-1 transition-transform duration-300" hover>
      <CardBody>
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 inline-block mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardBody>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: 'User Authentication',
      description: 'Secure authentication system with JWT, role-based access control, and account management.',
      icon: <Users size={24} />,
    },
    {
      title: 'Data Management',
      description: 'Robust data handling with RESTful API endpoints and complete CRUD operations.',
      icon: <Database size={24} />,
    },
    {
      title: 'Security First',
      description: 'Built with security best practices including input validation, CSRF protection, and more.',
      icon: <Lock size={24} />,
    },
    {
      title: 'Theme Support',
      description: 'Light and dark mode with persistent preferences and automatic system detection.',
      icon: <Gift size={24} />,
    },
    {
      title: 'Analytics Ready',
      description: 'Built-in dashboard with charts, statistics, and data visualization components.',
      icon: <BarChart2 size={24} />,
    },
    {
      title: 'Performance Optimized',
      description: 'Optimized for speed and efficiency with code splitting and lazy loading.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Modular Architecture',
      description: 'Well-organized codebase with reusable components and clean separation of concerns.',
      icon: <Layers size={24} />,
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first approach ensures a great experience on all devices from mobile to desktop.',
      icon: <Smartphone size={24} />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Key Features</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to build your next project quickly and efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;