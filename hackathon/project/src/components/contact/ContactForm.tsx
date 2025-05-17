import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, User, Send, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../../types';
import { submitContactForm } from '../../services/contactService';
import Button from '../ui/Button';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Alert from '../ui/Alert';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);
    
    try {
      const response = await submitContactForm(data);
      setSubmitSuccess(response.message);
      reset();
    } catch (error) {
      setSubmitError((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
      {submitSuccess && (
        <Alert 
          variant="success" 
          dismissible 
          onDismiss={() => setSubmitSuccess(null)}
        >
          {submitSuccess}
        </Alert>
      )}
      
      {submitError && (
        <Alert 
          variant="error" 
          dismissible 
          onDismiss={() => setSubmitError(null)}
        >
          {submitError}
        </Alert>
      )}
      
      <div className="space-y-4">
        <Input
          id="name"
          type="text"
          label="Name"
          fullWidth
          placeholder="Your name"
          leftIcon={<User size={18} />}
          error={errors.name?.message}
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
          })}
        />
        
        <Input
          id="email"
          type="email"
          label="Email"
          fullWidth
          placeholder="your@email.com"
          leftIcon={<Mail size={18} />}
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          })}
        />
        
        <Input
          id="subject"
          type="text"
          label="Subject"
          fullWidth
          placeholder="What's this about?"
          error={errors.subject?.message}
          {...register('subject', {
            required: 'Subject is required',
            minLength: {
              value: 4,
              message: 'Subject must be at least 4 characters',
            },
          })}
        />
        
        <TextArea
          id="message"
          label="Message"
          fullWidth
          rows={5}
          placeholder="Your message here..."
          error={errors.message?.message}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
        />
      </div>
      
      <Button 
        type="submit"
        fullWidth
        isLoading={isSubmitting}
        leftIcon={<Send size={18} />}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;