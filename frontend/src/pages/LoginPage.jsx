import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="relative flex flex-col justify-center items-center p-6 sm:p-12 overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/10 animate-float-particle"
              style={{
                width: `${8 + Math.random() * 20}px`,
                height: `${8 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${60 + Math.random() * 40}%`,
                "--delay": `${i * 0.5}s`,
                "--duration": `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Glassmorphism Form Card */}
        <div className="relative z-10 w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 space-y-8">
          {/* Logo */}
          <div className="text-center animate-slide-up" style={{ "--delay": "0.1s" }}>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                <MessageSquare className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control animate-slide-up" style={{ "--delay": "0.2s" }}>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200">
                  <Mail className="h-5 w-5 text-base-content/40 group-focus-within:text-primary transition-colors duration-200" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 transition-all duration-200 focus:shadow-lg focus:shadow-primary/10"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control animate-slide-up" style={{ "--delay": "0.35s" }}>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40 group-focus-within:text-primary transition-colors duration-200" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 transition-all duration-200 focus:shadow-lg focus:shadow-primary/10"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <div className="animate-slide-up" style={{ "--delay": "0.5s" }}>
              <button
                type="submit"
                className="btn btn-primary w-full animate-glow-pulse hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>

          <div className="text-center animate-slide-up" style={{ "--delay": "0.6s" }}>
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary font-medium hover:link-accent transition-colors duration-200">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Animated Pattern */}
      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />
    </div>
  );
};
export default LoginPage;
