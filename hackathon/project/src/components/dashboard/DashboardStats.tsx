import { Activity, Users, BarChart3, CheckCircle } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string | number;
    positive: boolean;
  };
}

const StatCard = ({ title, value, icon, change }: StatCardProps) => {
  return (
    <Card className="flex-1">
      <CardBody className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
          {change && (
            <p className={`mt-2 text-sm font-medium ${change.positive ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}`}>
              {change.positive ? '↑' : '↓'} {change.value}
            </p>
          )}
        </div>
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300">
          {icon}
        </div>
      </CardBody>
    </Card>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Users"
        value="1,234"
        icon={<Users size={24} />}
        change={{ value: "12%", positive: true }}
      />
      <StatCard
        title="Active Projects"
        value="23"
        icon={<Activity size={24} />}
        change={{ value: "5%", positive: true }}
      />
      <StatCard
        title="Completion Rate"
        value="78%"
        icon={<CheckCircle size={24} />}
        change={{ value: "3%", positive: false }}
      />
      <StatCard
        title="Total Revenue"
        value="$34,567"
        icon={<BarChart3 size={24} />}
        change={{ value: "8%", positive: true }}
      />
    </div>
  );
};

export default DashboardStats;