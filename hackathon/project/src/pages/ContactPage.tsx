import { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import { Card, CardBody } from '../components/ui/Card';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - HackStarter';
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact information */}
          <div className="w-full lg:w-1/3 space-y-6">
            <Card>
              <CardBody className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our friendly team is here to help.
                    </p>
                    <a 
                      href="mailto:hello@hackstarter.com" 
                      className="mt-2 inline-block text-primary-600 dark:text-primary-400 font-medium"
                    >
                      hello@hackstarter.com
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Come say hello at our office.
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">
                      123 Innovation Street<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Mon-Fri from 8am to 5pm.
                    </p>
                    <a 
                      href="tel:+1(555)000-0000" 
                      className="mt-2 inline-block text-primary-600 dark:text-primary-400 font-medium"
                    >
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          
          {/* Contact form */}
          <div className="w-full lg:w-2/3">
            <Card>
              <CardBody className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;