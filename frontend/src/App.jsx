import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Applications from './pages/Applications';
import Analytics from './pages/Analytics';
import Companies from './pages/Companies';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-white shadow-lg">
          <div className="flex flex-col h-full">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center h-16 px-6 border-b border-gray-200">
              <h1 className="text-xl font-bold text-indigo-600">JobTrack Pro</h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              <NavLink to="/applications" icon="📋">Applications</NavLink>
              <NavLink to="/analytics" icon="📊">Analytics</NavLink>
              <NavLink to="/companies" icon="🏢">Companies</NavLink>
            </nav>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Job Tracker v1.0</p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="h-full">
            <Routes>
              <Route path="/" element={<Applications />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/companies" element={<Companies />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

// Custom NavLink component with active state
function NavLink({ to, icon, children }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/applications' && location.pathname === '/');

  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
          ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }`}
    >
      <span className="mr-3 text-lg">{icon}</span>
      {children}
    </Link>
  );
}

export default App;
