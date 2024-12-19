import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '@/store/slices/studentsSlice';

interface StudentActionsProps {
  studentId: string;
}

export const StudentActions = ({ studentId }: StudentActionsProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2">
      <Button
        variant="destructive"
        size="sm"
        onClick={() => dispatch(deleteStudent(studentId))}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};