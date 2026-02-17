import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside
      className="h-full w-20 lg:w-72 flex flex-col transition-all duration-200"
      style={{
        background: "var(--bg-surface)",
        borderRight: "1px solid rgba(34, 211, 238, 0.06)",
      }}
    >
      {/* Header */}
      <div className="p-5" style={{ borderBottom: "1px solid rgba(34, 211, 238, 0.06)" }}>
        <div className="flex items-center gap-2">
          <div
            className="p-2 rounded-lg"
            style={{ background: "rgba(16, 185, 129, 0.1)" }}
          >
            <Users className="size-5" style={{ color: "var(--aurora-emerald)" }} />
          </div>
          <span className="font-semibold hidden lg:block" style={{ color: "var(--text-primary)" }}>
            Contacts
          </span>
        </div>

        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-xs"
              style={{ borderColor: "var(--aurora-teal)", accentColor: "var(--aurora-teal)" }}
            />
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Show online only
            </span>
          </label>
          <span className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
            ({onlineUsers.length - 1} online)
          </span>
        </div>
      </div>

      {/* Users list */}
      <div className="overflow-y-auto w-full py-2 flex-1">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className="w-full p-3 flex items-center gap-3 transition-all duration-200"
            style={{
              background:
                selectedUser?._id === user._id
                  ? "linear-gradient(90deg, rgba(16, 185, 129, 0.1), rgba(34, 211, 238, 0.05))"
                  : "transparent",
              borderLeft:
                selectedUser?._id === user._id
                  ? "3px solid var(--aurora-emerald)"
                  : "3px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (selectedUser?._id !== user._id)
                e.currentTarget.style.background = "rgba(34, 211, 238, 0.03)";
            }}
            onMouseLeave={(e) => {
              if (selectedUser?._id !== user._id)
                e.currentTarget.style.background = "transparent";
            }}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-11 object-cover rounded-full transition-all duration-200 hover:scale-105"
                style={{
                  border: selectedUser?._id === user._id
                    ? "2px solid var(--aurora-teal)"
                    : "2px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: selectedUser?._id === user._id
                    ? "0 0 12px rgba(34, 211, 238, 0.2)"
                    : "none",
                }}
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 rounded-full animate-pulse-online"
                  style={{
                    background: "var(--aurora-green)",
                    border: "2px solid var(--bg-surface)",
                  }}
                />
              )}
            </div>

            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate text-sm" style={{ color: "var(--text-primary)" }}>
                {user.fullName}
              </div>
              <div className="text-xs" style={{ color: onlineUsers.includes(user._id) ? "var(--aurora-green)" : "var(--text-muted)" }}>
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center py-8 px-4" style={{ color: "var(--text-muted)" }}>
            <Users className="w-8 h-8 mx-auto mb-2 opacity-40" />
            <p className="text-sm">No online users</p>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
