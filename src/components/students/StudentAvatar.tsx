interface StudentAvatarProps {
  name: string;
}

export const StudentAvatar = ({ name }: StudentAvatarProps) => (
  <div className="h-10 w-10 flex-shrink-0">
    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
      {name.charAt(0)}
    </div>
  </div>
);