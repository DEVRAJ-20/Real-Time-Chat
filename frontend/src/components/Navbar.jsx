import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed w-full top-0 z-40 border-b"
      style={{
        background: "rgba(5, 10, 14, 0.8)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderColor: "rgba(34, 211, 238, 0.08)",
      }}
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div
                className="size-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal))",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.25)",
                }}
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold gradient-text">DC Sync</h1>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Link
              to="/settings"
              className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(34, 211, 238, 0.06)"; e.currentTarget.style.color = "var(--aurora-teal)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(34, 211, 238, 0.06)"; e.currentTarget.style.color = "var(--aurora-teal)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  <User className="size-4" />
                  <span className="hidden sm:inline text-sm">Profile</span>
                </Link>

                <button
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onClick={logout}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(244, 114, 182, 0.08)"; e.currentTarget.style.color = "var(--aurora-pink)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline text-sm">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
