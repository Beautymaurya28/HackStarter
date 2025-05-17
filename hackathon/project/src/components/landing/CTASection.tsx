import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary-600 dark:bg-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mb-8">
            Join thousands of developers who are building amazing projects with our hackathon starter template.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button 
                variant="secondary" 
                size="lg"
              >
                Get Started for Free
              </Button>
            </Link>
            <Link to="/docs">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;