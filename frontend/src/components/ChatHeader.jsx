import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div
      className="p-3"
      style={{
        background: "rgba(10, 17, 24, 0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(34, 211, 238, 0.06)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="size-10 rounded-full object-cover"
              style={{ border: "2px solid rgba(34, 211, 238, 0.15)" }}
            />
            {onlineUsers.includes(selectedUser._id) && (
              <span
                className="absolute bottom-0 right-0 size-2.5 rounded-full animate-pulse-online"
                style={{
                  background: "var(--aurora-green)",
                  border: "2px solid var(--bg-surface)",
                }}
              />
            )}
          </div>

          <div>
            <h3 className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
              {selectedUser.fullName}
            </h3>
            <p className="text-xs" style={{ color: onlineUsers.includes(selectedUser._id) ? "var(--aurora-green)" : "var(--text-muted)" }}>
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded-lg transition-all duration-200"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(244, 114, 182, 0.08)"; e.currentTarget.style.color = "var(--aurora-pink)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--text-muted)"; }}
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
