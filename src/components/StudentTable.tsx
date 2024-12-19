import { format } from 'date-fns';
import { Student } from '@/types/student';
import { BookOpen } from 'lucide-react';

interface StudentTableProps {
  students: Student[];
}

const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Student Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Cohort
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Courses
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Date Joined
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Last Login
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b border-gray-200">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {student.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {student.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{student.cohort}</td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  {student.courses.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center px-2 py-1 rounded bg-gray-100"
                    >
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span className="text-sm text-gray-600">{course}</span>
                    </div>
                  ))}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {format(new Date(student.joinedAt), 'dd MMM yyyy')}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {format(new Date(student.lastLogin), 'dd MMM yyyy h:mm a')}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                    student.status
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {student.status ? 'Active' : 'Inactive'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;