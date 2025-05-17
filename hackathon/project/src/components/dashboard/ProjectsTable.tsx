import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { formatDistance } from 'date-fns';
import { Edit, Trash2, ExternalLink } from 'lucide-react';
import Badge from '../ui/Badge';
import { Card, CardHeader, CardBody } from '../ui/Card';
import Button from '../ui/Button';

interface ProjectsTableProps {
  projects: Project[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const ProjectsTable = ({ projects, onEdit, onDelete }: ProjectsTableProps) => {
  const getStatusBadgeVariant = (status: Project['status']) => {
    switch (status) {
      case 'planning':
        return 'warning';
      case 'in-progress':
        return 'primary';
      case 'completed':
        return 'success';
      default:
        return 'default';
    }
  };

  const formatDateFromNow = (dateString: string) => {
    return formatDistance(new Date(dateString), new Date(), { addSuffix: true });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h2>
          <Link to="/projects/new">
            <Button size="sm">New Project</Button>
          </Link>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Project
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Updated
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Team
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{project.title}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                          {project.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getStatusBadgeVariant(project.status)}>
                      {project.status === 'in-progress' ? 'In Progress' : 
                        project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          project.status === 'completed' 
                            ? 'bg-success-500' 
                            : project.progress > 50 
                              ? 'bg-primary-500' 
                              : 'bg-warning-500'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {project.progress}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {formatDateFromNow(project.updatedAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex -space-x-2">
                      {project.members.slice(0, 3).map((member, i) => (
                        <div 
                          key={i} 
                          className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs"
                          title={`Team member ${i + 1}`}
                        >
                          {member.charAt(0).toUpperCase()}
                        </div>
                      ))}
                      {project.members.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs">
                          +{project.members.length - 3}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      <ExternalLink size={18} />
                    </Link>
                    {onEdit && (
                      <button 
                        onClick={() => onEdit(project.id)}
                        className="text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <Edit size={18} />
                      </button>
                    )}
                    {onDelete && (
                      <button 
                        onClick={() => onDelete(project.id)}
                        className="text-error-600 hover:text-error-800 dark:text-error-400 dark:hover:text-error-300"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectsTable;