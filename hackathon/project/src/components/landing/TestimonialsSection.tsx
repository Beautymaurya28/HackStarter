const testimonials = [
  {
    content: "This template saved our team hours during our last hackathon. The modular architecture made it easy to adapt to our specific needs.",
    author: "Alex Chen",
    role: "Software Engineer",
    company: "TechCorp",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    content: "The authentication system and dashboard components were exactly what we needed. We were able to focus on our unique features instead of boilerplate code.",
    author: "Sarah Johnson",
    role: "Full Stack Developer",
    company: "Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e"
  },
  {
    content: "I've used many starter templates, but this one stands out for its clean code, comprehensive features, and excellent documentation.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "StartupX",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Trusted by developers from startups to enterprises
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-smooth relative"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <svg 
                  width="45" 
                  height="36" 
                  className="opacity-20"
                  viewBox="0 0 45 36" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 0C6.04688 0 0 6.04688 0 13.5C0 20.9531 6.04688 27 13.5 27C15.4688 27 17.2969 26.5312 18.9844 25.7812C17.9062 30.0938 14.0625 33.4688 9.42188 33.9375C9.14062 33.9375 8.85938 34.0781 8.71875 34.3594C8.57812 34.6406 8.57812 34.9219 8.71875 35.2031C8.85938 35.4844 9.14062 35.625 9.42188 35.625C15.3281 35.0156 20.0625 30.2812 20.9531 24.1875C20.9531 24.0469 20.9531 23.9062 20.9531 23.7656C20.9531 23.625 20.9531 23.4844 20.9531 23.2031C20.9531 23.0625 20.9531 22.9219 20.9531 22.7812C20.9531 22.6406 20.9531 22.5 20.8125 22.3594C19.4531 9.98438 9.14062 0.28125 13.5 0ZM37.125 0C29.8125 0 23.625 6.04688 23.625 13.5C23.625 20.9531 29.6719 27 37.125 27C39.0938 27 40.9219 26.5312 42.6094 25.7812C41.5312 30.0938 37.6875 33.4688 33.0469 33.9375C32.7656 33.9375 32.4844 34.0781 32.3438 34.3594C32.2031 34.6406 32.2031 34.9219 32.3438 35.2031C32.4844 35.4844 32.7656 35.625 33.0469 35.625C38.9531 35.0156 43.6875 30.2812 44.5781 24.1875C44.5781 24.0469 44.5781 23.9062 44.5781 23.7656C44.5781 23.625 44.5781 23.4844 44.5781 23.2031C44.5781 23.0625 44.5781 22.9219 44.5781 22.7812C44.5781 22.6406 44.5781 22.5 44.4375 22.3594C43.0781 9.98438 32.7656 0.28125 37.125 0Z"/>
                </svg>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;