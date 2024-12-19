import { StudentSearch } from './StudentSearch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StudentFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  cohort: string;
  onCohortChange: (value: string) => void;
}

export const StudentFilters = ({ 
  searchQuery, 
  onSearchChange,
  cohort,
  onCohortChange 
}: StudentFiltersProps) => (
  <div className="flex flex-col md:flex-row gap-4 mb-6">
    <StudentSearch value={searchQuery} onChange={onSearchChange} />
    <Select value={cohort} onValueChange={onCohortChange}>
      <SelectTrigger className="w-full md:w-[200px]">
        <SelectValue placeholder="Filter by cohort" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Cohorts</SelectItem>
        <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
        <SelectItem value="AY 2025-26">AY 2025-26</SelectItem>
      </SelectContent>
    </Select>
  </div>
);