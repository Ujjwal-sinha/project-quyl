import { format } from 'date-fns';
import type { Student } from '@/types/student';
import { StudentAvatar } from './StudentAvatar';
import { StudentCourseTag } from './StudentCourseTag';
import { StudentStatusBadge } from './StudentStatusBadge';
import { StudentActions } from './StudentActions';

interface StudentTableRowProps {
  student: Student;
}

export const StudentTableRow = ({ student }: StudentTableRowProps) => (
  <tr className="border-b border-gray-200">
    <td className="px-6 py-4">
      <div className="flex items-center">
        <StudentAvatar name={student.name} />
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {student.name}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-sm text-gray-500">{student.cohort}</td>
    <td className="px-6 py-4">
      <div className="flex flex-wrap gap-2">
        {student.courses.map((course, index) => (
          <StudentCourseTag key={index} courseName={course} />
        ))}
      </div>
    </td>
    <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-500">
      {format(new Date(student.joinedAt), 'dd MMM yyyy')}
    </td>
    <td className="hidden lg:table-cell px-6 py-4 text-sm text-gray-500">
      {format(new Date(student.lastLogin), 'dd MMM yyyy h:mm a')}
    </td>
    <td className="px-6 py-4">
      <StudentStatusBadge isActive={student.status} />
    </td>
    <td className="px-6 py-4">
      <StudentActions studentId={student.id} />
    </td>
  </tr>
);