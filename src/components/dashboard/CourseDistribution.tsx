import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const CourseDistribution = () => {
  const { students } = useSelector((state: RootState) => state.students);
  
  // Get unique courses and count students in each
  const courseDistribution = Array.from(
    new Set(students.flatMap(s => s.courses))
  ).map(course => ({
    name: course,
    count: students.filter(s => s.courses.includes(course)).length
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Distribution</h3>
      <div className="space-y-4">
        {courseDistribution.map((course) => (
          <div key={course.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{course.name}</span>
              <span className="font-medium text-gray-900">
                {course.count} students
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full"
                style={{ 
                  width: `${(course.count / students.length) * 100}%` 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};