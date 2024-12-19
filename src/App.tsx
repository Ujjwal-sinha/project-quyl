import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './components/dashboard/Dashboard';
import { StudentsView } from './components/students/StudentsView';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'students'>('dashboard');
  const { loading, error } = useSelector((state: RootState) => state.students);

  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <StudentsView />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar onNavigate={(view) => setCurrentView(view)} />
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;