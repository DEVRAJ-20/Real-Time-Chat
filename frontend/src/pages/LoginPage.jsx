import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 aurora-bg" style={{ background: "var(--bg-deep)" }}>
      {/* Left Side - Form */}
      <div className="relative flex flex-col justify-center items-center p-6 sm:p-12 overflow-hidden z-10">
        {/* Aurora particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => {
            const colors = [
              "rgba(16, 185, 129, 0.07)",
              "rgba(34, 211, 238, 0.07)",
              "rgba(167, 139, 250, 0.05)",
              "rgba(244, 114, 182, 0.05)",
            ];
            return (
              <div
                key={i}
                className="absolute rounded-full animate-float-particle"
                style={{
                  width: `${8 + Math.random() * 18}px`,
                  height: `${8 + Math.random() * 18}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${55 + Math.random() * 45}%`,
                  background: colors[i % colors.length],
                  "--delay": `${i * 0.5}s`,
                  "--duration": `${4 + Math.random() * 4}s`,
                }}
              />
            );
          })}
        </div>

        {/* Form Card */}
        <div className="relative z-10 w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 space-y-8">
          <div className="text-center animate-slide-up" style={{ "--delay": "0.1s" }}>
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(34, 211, 238, 0.12))",
                  border: "1px solid rgba(34, 211, 238, 0.15)",
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.15)",
                }}
              >
                <MessageSquare className="w-7 h-7" style={{ color: "var(--aurora-teal)" }} />
              </div>
              <h1 className="text-2xl font-bold mt-2" style={{ color: "var(--text-primary)" }}>Welcome Back</h1>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Sign in to your account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control animate-slide-up" style={{ "--delay": "0.2s" }}>
              <label className="mb-1.5">
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5" style={{ color: "var(--text-muted)" }} />
                </div>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl dark-input outline-none text-sm"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control animate-slide-up" style={{ "--delay": "0.35s" }}>
              <label className="mb-1.5">
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5" style={{ color: "var(--text-muted)" }} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl dark-input outline-none text-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" style={{ color: "var(--text-muted)" }} />
                  ) : (
                    <Eye className="h-5 w-5" style={{ color: "var(--text-muted)" }} />
                  )}
                </button>
              </div>
            </div>

            <div className="animate-slide-up" style={{ "--delay": "0.5s" }}>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl font-medium text-sm gradient-accent animate-glow-pulse"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </span>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>

          <div className="text-center animate-slide-up" style={{ "--delay": "0.6s" }}>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="font-medium gradient-text hover:opacity-80 transition-opacity">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <AuthImagePattern
        title="Welcome back!"
        subtitle="Sign in to continue your conversations and catch up with your messages."
      />
    </div>
  );
};
export default LoginPage;
