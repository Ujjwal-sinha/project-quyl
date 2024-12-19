import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { StudentFilters } from './StudentFilters';
import StudentTable from './StudentTable';
import { AddStudentDialog } from './AddStudentDialog';

export const StudentsView = () => {
  const { students } = useSelector((state: RootState) => state.students);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCohort, setSelectedCohort] = useState('all');

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCohort = selectedCohort === 'all' || student.cohort === selectedCohort;
    return matchesSearch && matchesCohort;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-500">Manage your students and their courses</p>
        </div>
        <AddStudentDialog />
      </div>

      <StudentFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cohort={selectedCohort}
        onCohortChange={setSelectedCohort}
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <StudentTable students={filteredStudents} />
        </div>
      </div>
    </div>
  );
};