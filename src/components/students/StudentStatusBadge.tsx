interface StudentStatusBadgeProps {
  isActive: boolean;
}

export const StudentStatusBadge = ({ isActive }: StudentStatusBadgeProps) => (
  <span
    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
      isActive
        ? 'bg-green-100 text-green-800'
        : 'bg-red-100 text-red-800'
    }`}
  >
    {isActive ? 'Active' : 'Inactive'}
  </span>
);