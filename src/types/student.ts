export interface Student {
  id: string;
  name: string;
  cohort: string;
  courses: string[];
  joinedAt: string;
  lastLogin: string;
  status: boolean;
}

export interface StudentsState {
  students: Student[];
  loading: boolean;
  error: string | null;
}