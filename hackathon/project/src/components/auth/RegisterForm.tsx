import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Alert from '../ui/Alert';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register: registerUser, isLoading } = useAuthStore();
  const [registerError, setRegisterError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const password = watch('password');

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setRegisterError(null);
      await registerUser(data.name, data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      setRegisterError((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
      <div className="space-y-4">
        {registerError && (
          <Alert 
            variant="error" 
            dismissible 
            onDismiss={() => setRegisterError(null)}
          >
            {registerError}
          </Alert>
        )}
        
        <Input
          id="name"
          type="text"
          label="Full Name"
          fullWidth
          placeholder="John Doe"
          leftIcon={<User size={18} />}
          error={errors.name?.message}
          {...register('name', {
            required: 'Full name is required',
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
          id="password"
          type="password"
          label="Password"
          fullWidth
          placeholder="••••••••"
          leftIcon={<Lock size={18} />}
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        
        <Input
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          fullWidth
          placeholder="••••••••"
          leftIcon={<Lock size={18} />}
          error={errors.confirmPassword?.message}
          {...register('confirmPassword', {
            validate: (value) => value === password || 'Passwords do not match',
            required: 'Please confirm your password',
          })}
        />
      </div>
      
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
          I agree to the{' '}
          <Link
            to="/terms"
            className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            to="/privacy"
            className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Privacy Policy
          </Link>
        </label>
      </div>
      
      <Button 
        type="submit"
        fullWidth
        isLoading={isLoading}
        leftIcon={<UserPlus size={18} />}
      >
        Create Account
      </Button>
      
      <div className="mt-4 text-center text-sm">
        <span className="text-gray-600 dark:text-gray-400">Already have an account? </span>
        <Link
          to="/login"
          className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;