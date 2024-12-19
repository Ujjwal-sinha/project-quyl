import { BookOpen } from 'lucide-react';

interface StudentCourseTagProps {
  courseName: string;
}

export const StudentCourseTag = ({ courseName }: StudentCourseTagProps) => (
  <div className="flex items-center px-2 py-1 rounded bg-gray-100">
    <BookOpen className="w-4 h-4 mr-1" />
    <span className="text-sm text-gray-600">{courseName}</span>
  </div>
);