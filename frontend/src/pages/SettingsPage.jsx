import { Sparkles, Palette, Monitor } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 aurora-bg" style={{ background: "var(--bg-deep)" }}>
      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
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
              <h2 className="text-lg font-bold gradient-text">Settings</h2>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                App preferences and appearance
              </p>
            </div>
          </div>

          {/* Active Theme Card */}
          <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ "--delay": "0.2s" }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Active Theme</h3>
              <span
                className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                style={{ background: "rgba(52, 211, 153, 0.1)", color: "var(--aurora-green)" }}
              >
                Active
              </span>
            </div>

            {/* Aurora theme preview */}
            <div
              className="rounded-xl overflow-hidden neon-glow"
              style={{ background: "var(--bg-surface)" }}
            >
              {/* Theme info bar */}
              <div className="px-5 py-4 flex items-center gap-4" style={{ borderBottom: "1px solid rgba(34, 211, 238, 0.06)" }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--aurora-emerald), var(--aurora-teal), var(--aurora-purple))",
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>Aurora</h4>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Dark theme with Northern Lights inspired colors
                  </p>
                </div>
              </div>

              {/* Color palette display */}
              <div className="px-5 py-4">
                <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Color Palette</p>
                <div className="flex gap-3">
                  {[
                    { color: "var(--aurora-emerald)", name: "Emerald" },
                    { color: "var(--aurora-teal)", name: "Teal" },
                    { color: "var(--aurora-blue)", name: "Blue" },
                    { color: "var(--aurora-purple)", name: "Purple" },
                    { color: "var(--aurora-pink)", name: "Pink" },
                  ].map((c) => (
                    <div key={c.name} className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-10 h-10 rounded-lg transition-transform duration-200 hover:scale-110"
                        style={{
                          background: c.color,
                          boxShadow: `0 0 12px ${c.color}33`,
                        }}
                      />
                      <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Appearance Info Card */}
          <div className="glass-card rounded-2xl p-6 animate-slide-up" style={{ "--delay": "0.3s" }}>
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-4 h-4" style={{ color: "var(--aurora-teal)" }} />
              <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Appearance</h3>
            </div>
            <div className="space-y-3">
              <div
                className="flex items-center justify-between py-3 px-4 rounded-xl"
                style={{ background: "var(--bg-elevated)", border: "1px solid rgba(34, 211, 238, 0.06)" }}
              >
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>Dark Mode</span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(34, 211, 238, 0.1)", color: "var(--aurora-teal)" }}>
                  Always On
                </span>
              </div>
              <div
                className="flex items-center justify-between py-3 px-4 rounded-xl"
                style={{ background: "var(--bg-elevated)", border: "1px solid rgba(34, 211, 238, 0.06)" }}
              >
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>Animations</span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(52, 211, 153, 0.1)", color: "var(--aurora-green)" }}>
                  Enabled
                </span>
              </div>
              <div
                className="flex items-center justify-between py-3 px-4 rounded-xl"
                style={{ background: "var(--bg-elevated)", border: "1px solid rgba(34, 211, 238, 0.06)" }}
              >
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>Glass Effects</span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(52, 211, 153, 0.1)", color: "var(--aurora-green)" }}>
                  Enabled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
