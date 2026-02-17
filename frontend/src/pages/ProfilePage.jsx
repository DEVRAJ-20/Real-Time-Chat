import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Calendar, Shield } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="h-screen pt-20 aurora-bg" style={{ background: "var(--bg-deep)" }}>
      <div className="relative z-10 max-w-2xl mx-auto p-4 py-8">
        <div className="glass-card rounded-2xl p-8 space-y-8 animate-slide-up" style={{ "--delay": "0.1s" }}>
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold gradient-text">Profile</h1>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
              Your profile information
            </p>
          </div>

          {/* Avatar upload */}
          <div className="flex flex-col items-center gap-4 animate-slide-up" style={{ "--delay": "0.2s" }}>
            <div className="relative group">
              <div
                className="p-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal), var(--aurora-purple))",
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 4s ease infinite",
                }}
              >
                <img
                  src={selectedImg || authUser.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="size-32 rounded-full object-cover"
                  style={{ border: "3px solid var(--bg-surface)" }}
                />
              </div>
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-1 right-1 hover:scale-110
                  p-2.5 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
                style={{
                  background: "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal))",
                  boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)",
                }}
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* Info fields */}
          <div className="space-y-4 animate-slide-up" style={{ "--delay": "0.3s" }}>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                <User className="w-4 h-4" />
                Full Name
              </div>
              <div
                className="px-4 py-3 rounded-xl text-sm"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid rgba(34, 211, 238, 0.06)",
                  color: "var(--text-primary)",
                }}
              >
                {authUser?.fullName}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <div
                className="px-4 py-3 rounded-xl text-sm"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid rgba(34, 211, 238, 0.06)",
                  color: "var(--text-primary)",
                }}
              >
                {authUser?.email}
              </div>
            </div>
          </div>

          {/* Account info */}
          <div
            className="rounded-xl p-5 animate-slide-up"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid rgba(34, 211, 238, 0.06)",
              "--delay": "0.4s",
            }}
          >
            <h2 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
              Account Information
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(34, 211, 238, 0.04)" }}>
                <span className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                  <Calendar className="w-4 h-4" />
                  Member Since
                </span>
                <span style={{ color: "var(--text-primary)" }}>
                  {authUser.createdAt?.split("T")[0]}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                  <Shield className="w-4 h-4" />
                  Account Status
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(52, 211, 153, 0.1)", color: "var(--aurora-green)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--aurora-green)" }} />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
