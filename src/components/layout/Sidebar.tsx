import { GraduationCap, Users, BookOpen, HelpCircle, BarChart2, Settings } from 'lucide-react';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  onNavigate: (view: 'dashboard' | 'students') => void;
}

export const Sidebar = ({ onNavigate }: SidebarProps) => {
  const menuItems = [
    { icon: Users, label: 'Dashboard', active: true, onClick: () => onNavigate('dashboard') },
    { icon: GraduationCap, label: 'Students', active: false, onClick: () => onNavigate('students') },
    { icon: BookOpen, label: 'Chapter', active: false },
    { icon: HelpCircle, label: 'Help', active: false },
    { icon: BarChart2, label: 'Reports', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600">Quyl.</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
};