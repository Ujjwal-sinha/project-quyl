import { GraduationCap, Users, BookOpen, HelpCircle, BarChart2, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Users, label: 'Dashboard', active: false },
    { icon: GraduationCap, label: 'Students', active: true },
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
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center px-4 py-3 mb-2 rounded-lg ${
              item.active
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;