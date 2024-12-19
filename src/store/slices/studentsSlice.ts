import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '@/lib/api/supabase';
import type { Student, StudentsState } from '@/types/student';
import { mockStudents } from '@/data/mockStudents';

const initialState: StudentsState = {
  students: mockStudents,
  loading: false,
  error: null,
};

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    const { data, error } = await supabase
      .from('students')
      .select('*');
    
    if (error) throw error;
    return data as Student[];
  }
);

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch students';
      });
  },
});

export const { addStudent, deleteStudent } = studentsSlice.actions;
export default studentsSlice.reducer;