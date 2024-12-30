import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  BookOpen,
  Users,
  Home,
  LogOut,
} from "lucide-react";
import { useAuthStore } from "../../store/authStore";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-cyan-600 text-white">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-evenly">
          <Link to="/" className="text-xl font-bold">
            AwareMe
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/Home"
              className="flex items-center space-x-1 hover:text-cyan-200"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link
              to="/Store"
              className="flex items-center space-x-1 hover:text-cyan-200"
            >
              <ShoppingBag size={18} />
              <span>Store</span>
            </Link>
            <Link
              to="/learn"
              className="flex items-center space-x-1 hover:text-cyan-200"
            >
              <BookOpen size={18} />
              <span>Learn</span>
            </Link>
            <Link
              to="/community"
              className="flex items-center space-x-1 hover:text-cyan-200"
            >
              <Users size={18} />
              <span>Community</span>
            </Link>

            {user && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-cyan-200"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/dashboard" className="block py-2 hover:text-cyan-200">
              Dashboard
            </Link>
            <Link to="/Store" className="block py-2 hover:text-cyan-200">
              Store
            </Link>
            <Link to="/learn" className="block py-2 hover:text-cyan-200">
              Learn
            </Link>
            <Link to="/community" className="block py-2 hover:text-cyan-200">
              Community
            </Link>
            {user && (
              <>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-2 hover:text-cyan-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
