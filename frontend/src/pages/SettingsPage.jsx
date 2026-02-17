import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen pt-20 aurora-bg" style={{ background: "var(--bg-deep)" }}>
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3 animate-slide-up" style={{ "--delay": "0.1s" }}>
            <div
              className="p-2.5 rounded-xl"
              style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(34, 211, 238, 0.12))" }}
            >
              <Palette className="w-5 h-5" style={{ color: "var(--aurora-teal)" }} />
            </div>
            <div>
              <h2 className="text-lg font-bold gradient-text">Theme</h2>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Choose a theme for your chat interface
              </p>
            </div>
          </div>

          {/* Theme grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 animate-slide-up" style={{ "--delay": "0.2s" }}>
            {THEMES.map((t) => (
              <button
                key={t}
                className="group flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-200"
                style={{
                  background: theme === t ? "var(--bg-elevated)" : "transparent",
                  border: theme === t ? "1px solid var(--aurora-teal)" : "1px solid transparent",
                  boxShadow: theme === t ? "0 0 15px rgba(34, 211, 238, 0.12)" : "none",
                }}
                onClick={() => setTheme(t)}
                onMouseEnter={(e) => {
                  if (theme !== t) {
                    e.currentTarget.style.background = "var(--bg-elevated)";
                    e.currentTarget.style.borderColor = "rgba(34, 211, 238, 0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (theme !== t) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                  }
                }}
              >
                <div className="relative h-8 w-full rounded-lg overflow-hidden" data-theme={t}>
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span
                  className="text-[10px] font-medium truncate w-full text-center"
                  style={{ color: theme === t ? "var(--aurora-teal)" : "var(--text-muted)" }}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="animate-slide-up" style={{ "--delay": "0.3s" }}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-primary)" }}>Preview</h3>
            <div className="rounded-2xl overflow-hidden neon-glow" style={{ background: "var(--bg-surface)" }}>
              <div className="p-4">
                <div className="max-w-lg mx-auto">
                  <div className="rounded-xl overflow-hidden" style={{ background: "var(--bg-deep)", border: "1px solid rgba(34, 211, 238, 0.08)" }}>
                    {/* Mock header */}
                    <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(34, 211, 238, 0.06)", background: "var(--bg-surface)" }}>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium text-white"
                          style={{ background: "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal))" }}
                        >
                          J
                        </div>
                        <div>
                          <h3 className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>John Doe</h3>
                          <p className="text-xs" style={{ color: "var(--aurora-green)" }}>Online</p>
                        </div>
                      </div>
                    </div>

                    {/* Mock messages */}
                    <div className="p-4 space-y-3 min-h-[200px] max-h-[200px]" style={{ background: "var(--bg-deep)" }}>
                      {PREVIEW_MESSAGES.map((message) => (
                        <div key={message.id} className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}>
                          <div className={`max-w-[80%] p-3 ${message.isSent ? "msg-sent" : "msg-received"}`}>
                            <p className="text-sm">{message.content}</p>
                            <p className="text-[10px] mt-1.5" style={{ opacity: 0.5 }}>12:00 PM</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mock input */}
                    <div className="p-3" style={{ borderTop: "1px solid rgba(34, 211, 238, 0.06)", background: "var(--bg-surface)" }}>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="flex-1 text-sm rounded-xl px-4 py-2 dark-input outline-none"
                          placeholder="Type a message..."
                          value="This is a preview"
                          readOnly
                        />
                        <button
                          className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal))" }}
                        >
                          <Send size={16} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
