import { Outlet, NavLink, useLocation } from "react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Poster and flyer are standalone documents with their own header bar,
  // so hide the app navigation on those routes to avoid a doubled header.
  const hideAppHeader = pathname === "/poster" || pathname === "/flyer";

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      {!hideAppHeader && (
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-700">Newbie App Graz</h1>
                <p className="text-xs text-neutral-600">Nachhaltig ankommen in Graz</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1">
              <NavLink
                to="/journey"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Customer Journey
              </NavLink>
              <NavLink
                to="/wireframes"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Wireframes
              </NavLink>
              <NavLink
                to="/dummy"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Klickdummy
              </NavLink>
              <NavLink
                to="/mobile"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Klickdummy Mobile
              </NavLink>
              <NavLink
                to="/poster"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Poster
              </NavLink>
              <NavLink
                to="/flyer"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Flyer
              </NavLink>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-1 border-t border-neutral-200">
              <NavLink
                to="/journey"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Customer Journey
              </NavLink>
              <NavLink
                to="/wireframes"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Wireframes
              </NavLink>
              <NavLink
                to="/dummy"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Klickdummy
              </NavLink>
              <NavLink
                to="/mobile"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Klickdummy Mobile
              </NavLink>
              <NavLink
                to="/poster"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Poster
              </NavLink>
              <NavLink
                to="/flyer"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`
                }
              >
                Flyer
              </NavLink>
            </nav>
          )}
        </div>
      </header>
      )}

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
