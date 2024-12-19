import type { Student } from '@/types/student';
import { StudentTableHeader } from './StudentTableHeader';
import { StudentTableRow } from './StudentTableRow';

interface StudentTableProps {
  students: Student[];
}

const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead>
          <StudentTableHeader />
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentTableRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;