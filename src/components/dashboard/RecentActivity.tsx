import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { RootState } from '@/store/store';
import type { Student } from '@/types/student';

const RecentActivityItem = ({ student }: { student: Student }) => (
  <div className="flex items-center justify-between border-b last:border-0 pb-4">
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-sm font-medium">
        {student.name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{student.name}</p>
        <p className="text-xs text-gray-500">
          Last active {format(new Date(student.lastLogin), 'MMM d, h:mm a')}
        </p>
      </div>
    </div>
    <span className={`text-xs px-2 py-1 rounded-full ${
      student.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    }`}>
      {student.status ? 'Active' : 'Inactive'}
    </span>
  </div>
);

export const RecentActivity = () => {
  const { students } = useSelector((state: RootState) => state.students);
  
  // Sort students by last login time and get the 5 most recent
  const recentStudents = [...students]
    .sort((a, b) => new Date(b.lastLogin).getTime() - new Date(a.lastLogin).getTime())
    .slice(0, 5);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {recentStudents.map((student) => (
          <RecentActivityItem key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};