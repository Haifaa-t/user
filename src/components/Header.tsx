import { Link, useLocation } from 'react-router-dom';
import { Home, Users as UsersIcon } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isUsersPage = location.pathname.startsWith('/users');
  const isNotHome = location.pathname !== '/';

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      
        <div className="flex items-center gap-2">
          <UsersIcon className="w-6 h-6 text-red-600" />
          <h1 className="text-xl font-bold text-red-600">User System</h1>
        </div>

        <div className="flex items-center gap-6">
          {isNotHome && (
            <Link to="/" className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
          )}
          {isUsersPage && (
            <Link to="/users" className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition">
              <UsersIcon className="w-5 h-5" />
              <span>Users</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;