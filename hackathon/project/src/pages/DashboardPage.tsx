import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useDashboardStore } from '../store/dashboardStore';
import { Card, CardHeader, CardBody } from '../components/ui/Card';
import DashboardStats from '../components/dashboard/DashboardStats';
import ProjectsTable from '../components/dashboard/ProjectsTable';
import { Pie as PieChart } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { BarChart3, Clock, Calendar } from 'lucide-react';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthStore();
  const { projects, widgets, loadProjects, loadWidgets, isLoading } = useDashboardStore();

  useEffect(() => {
    document.title = 'Dashboard - HackStarter';
    
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    loadProjects();
    loadWidgets();
  }, [isAuthenticated, navigate, loadProjects, loadWidgets]);

  const chartData = {
    labels: ['Planning', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [3, 5, 2],
        backgroundColor: ['#f97316', '#0ea5e9', '#22c55e'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome, {user?.name || 'User'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Here's what's happening with your projects today.
          </p>
        </div>
        
        <DashboardStats />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Project Status</h2>
                  <BarChart3 size={20} className="text-gray-500 dark:text-gray-400" />
                </div>
              </CardHeader>
              <CardBody>
                <div className="h-64">
                  <PieChart data={chartData} options={chartOptions} />
                </div>
              </CardBody>
            </Card>
          </div>
          
          <div className="col-span-1">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
                  <Clock size={20} className="text-gray-500 dark:text-gray-400" />
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                        <span className="text-primary-600 dark:text-primary-400 text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {index === 0 && 'New team member joined'}
                          {index === 1 && 'Project deadline extended'}
                          {index === 2 && 'Weekly report published'}
                          {index === 3 && 'New feature deployed'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {index === 0 && '2 hours ago'}
                          {index === 1 && '5 hours ago'}
                          {index === 2 && 'Yesterday'}
                          {index === 3 && '3 days ago'}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
          
          <div className="col-span-1">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Upcoming Deadlines</h2>
                  <Calendar size={20} className="text-gray-500 dark:text-gray-400" />
                </div>
              </CardHeader>
              <CardBody>
                <ul className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {index === 0 && 'Frontend Milestone'}
                          {index === 1 && 'API Integration'}
                          {index === 2 && 'User Testing'}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {index === 0 && 'Healthcare Project'}
                          {index === 1 && 'Education Platform'}
                          {index === 2 && 'Climate Monitor'}
                        </p>
                      </div>
                      <div className={`text-sm font-medium px-2 py-1 rounded ${
                        index === 0 
                          ? 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-300' 
                          : index === 1 
                            ? 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {index === 0 && 'Tomorrow'}
                        {index === 1 && 'In 3 days'}
                        {index === 2 && 'Next week'}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
        
        <div className="mt-8">
          <ProjectsTable 
            projects={projects} 
            onEdit={(id) => navigate(`/projects/${id}/edit`)} 
            onDelete={(id) => console.log('Delete project', id)} 
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;