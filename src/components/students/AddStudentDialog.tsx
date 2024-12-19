import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDispatch } from 'react-redux';
import { addStudent } from '@/store/slices/studentsSlice';
import { PlusCircle } from 'lucide-react';

export const AddStudentDialog = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    cohort: 'AY 2024-25',
    courses: ['CBSE 9 Science', 'CBSE 9 Math']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addStudent({
      ...formData,
      id: crypto.randomUUID(),
      joinedAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      status: true
    }));
    setOpen(false);
    setFormData({ name: '', cohort: 'AY 2024-25', courses: ['CBSE 9 Science', 'CBSE 9 Math'] });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add new Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cohort">Cohort</Label>
            <Select
              value={formData.cohort}
              onValueChange={(value) => setFormData({ ...formData, cohort: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select cohort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                <SelectItem value="AY 2025-26">AY 2025-26</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Add Student</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};