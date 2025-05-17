import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Alert from '../ui/Alert';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuthStore();
  const [loginError, setLoginError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setLoginError(null);
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      setLoginError((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
      <div className="space-y-4">
        {loginError && (
          <Alert 
            variant="error" 
            dismissible 
            onDismiss={() => setLoginError(null)}
          >
            {loginError}
          </Alert>
        )}
        
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
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <Link
              to="/forgot-password"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
      
      <Button 
        type="submit"
        fullWidth
        isLoading={isLoading}
        leftIcon={<LogIn size={18} />}
      >
        Sign in
      </Button>
      
      <div className="mt-4 text-center text-sm">
        <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
        <Link
          to="/register"
          className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;