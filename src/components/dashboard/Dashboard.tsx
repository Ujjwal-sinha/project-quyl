import { Users, GraduationCap, BookOpen, Clock } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { StatsCard } from './StatsCard';
import { RecentActivity } from './RecentActivity';
import { CourseDistribution } from './CourseDistribution';

export const Dashboard = () => {
  const { students } = useSelector((state: RootState) => state.students);
  
  const stats = [
    {
      title: 'Total Students',
      value: students.length,
      icon: Users,
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Active Students',
      value: students.filter(s => s.status).length,
      icon: GraduationCap,
      trend: { value: 8, isPositive: true }
    },
    {
      title: 'Total Courses',
      value: Array.from(new Set(students.flatMap(s => s.courses))).length,
      icon: BookOpen,
      trend: { value: 5, isPositive: true }
    },
    {
      title: 'Average Session',
      value: '45m',
      icon: Clock,
      trend: { value: 3, isPositive: false }
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-500">Overview of your student management system</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <CourseDistribution />
      </div>
    </div>
  );
};