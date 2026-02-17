import { MessageSquare, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div
      className="w-full flex flex-1 flex-col items-center justify-center p-16 relative overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      {/* Aurora particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const colors = [
            "rgba(16, 185, 129, 0.08)",
            "rgba(34, 211, 238, 0.08)",
            "rgba(167, 139, 250, 0.06)",
            "rgba(244, 114, 182, 0.06)",
          ];
          return (
            <div
              key={i}
              className="absolute rounded-full animate-float-particle"
              style={{
                width: `${6 + Math.random() * 16}px`,
                height: `${6 + Math.random() * 16}px`,
                left: `${Math.random() * 100}%`,
                top: `${40 + Math.random() * 60}%`,
                background: colors[i % colors.length],
                "--delay": `${i * 0.6}s`,
                "--duration": `${4 + Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* Subtle aurora glow behind icon */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle at center, var(--aurora-teal), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-md text-center space-y-6">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center animate-glow-pulse"
              style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(34, 211, 238, 0.12))",
                border: "1px solid rgba(34, 211, 238, 0.15)",
              }}
            >
              <MessageSquare className="w-10 h-10" style={{ color: "var(--aurora-teal)" }} />
            </div>
            <div
              className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal))" }}
            >
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold gradient-text">Welcome to DC Sync!</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
