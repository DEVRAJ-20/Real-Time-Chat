import { MessageSquare, Image, Heart, Send, Smile, Sparkles } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  const floatingIcons = [
    { Icon: MessageSquare, x: "15%", y: "20%", delay: "0s", duration: "5s", size: "w-8 h-8" },
    { Icon: Image, x: "75%", y: "15%", delay: "1s", duration: "6s", size: "w-7 h-7" },
    { Icon: Heart, x: "85%", y: "60%", delay: "2s", duration: "4.5s", size: "w-6 h-6" },
    { Icon: Send, x: "20%", y: "70%", delay: "0.5s", duration: "5.5s", size: "w-7 h-7" },
    { Icon: Smile, x: "50%", y: "80%", delay: "1.5s", duration: "4s", size: "w-8 h-8" },
    { Icon: Sparkles, x: "60%", y: "30%", delay: "2.5s", duration: "6.5s", size: "w-6 h-6" },
  ];

  return (
    <div
      className="hidden lg:flex relative items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(16, 185, 129, 0.06), rgba(34, 211, 238, 0.06), rgba(167, 139, 250, 0.04), rgba(244, 114, 182, 0.03))",
        backgroundSize: "300% 300%",
        animation: "aurora-flow 15s ease infinite",
      }}
    >
      {/* Aurora glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: "var(--aurora-emerald)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-8"
          style={{ background: "var(--aurora-teal)" }} />
        <div className="absolute top-1/2 right-1/3 w-56 h-56 rounded-full blur-3xl opacity-5"
          style={{ background: "var(--aurora-purple)" }} />
      </div>

      {/* Animated ripple rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full animate-ripple-ring"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              border: "1px solid rgba(34, 211, 238, 0.12)",
              "--delay": `${i * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Slowly rotating decorative circle */}
      <div className="absolute w-[500px] h-[500px] animate-slow-spin opacity-10">
        <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full" style={{ background: "var(--aurora-emerald)" }} />
        <div className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full" style={{ background: "var(--aurora-purple)" }} />
        <div className="absolute left-0 top-1/2 w-3 h-3 -translate-y-1/2 rounded-full" style={{ background: "var(--aurora-teal)" }} />
        <div className="absolute right-0 top-1/2 w-3 h-3 -translate-y-1/2 rounded-full" style={{ background: "var(--aurora-pink)" }} />
      </div>

      {/* Floating chat icons */}
      {floatingIcons.map(({ Icon, x, y, delay, duration, size }, i) => (
        <div
          key={`icon-${i}`}
          className="absolute animate-float-up"
          style={{ left: x, top: y, "--delay": delay, "--duration": duration }}
        >
          <div
            className="p-3 rounded-2xl backdrop-blur-sm"
            style={{
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(34, 211, 238, 0.1)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Icon className={`${size}`} style={{ color: "rgba(34, 211, 238, 0.5)" }} />
          </div>
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10 max-w-md text-center p-8">
        <div className="mb-8 space-y-3">
          <div className="animate-slide-up flex justify-start" style={{ "--delay": "0.2s" }}>
            <div
              className="rounded-2xl rounded-bl-md px-5 py-3 max-w-[200px]"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid rgba(34, 211, 238, 0.08)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <p className="text-sm" style={{ color: "var(--text-primary)", opacity: 0.8 }}>Hey! 👋 Welcome</p>
            </div>
          </div>
          <div className="animate-slide-up flex justify-end" style={{ "--delay": "0.5s" }}>
            <div className="msg-sent px-5 py-3 max-w-[200px]" style={{ boxShadow: "0 4px 20px rgba(16, 185, 129, 0.2)" }}>
              <p className="text-sm">Thanks! 🎉</p>
            </div>
          </div>
          <div className="animate-slide-up flex justify-start" style={{ "--delay": "0.8s" }}>
            <div
              className="rounded-2xl rounded-bl-md px-5 py-3"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid rgba(34, 211, 238, 0.08)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-center gap-1 py-1">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className="w-2 h-2 rounded-full animate-typing-bounce"
                    style={{ background: "var(--text-muted)", "--delay": `${dot * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-3 animate-slide-up gradient-text" style={{ "--delay": "1s" }}>
          {title}
        </h2>
        <p className="animate-slide-up leading-relaxed text-sm" style={{ color: "var(--text-muted)", "--delay": "1.2s" }}>
          {subtitle}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, rgba(5, 10, 14, 0.4), transparent)" }}
      />
    </div>
  );
};

export default AuthImagePattern;
