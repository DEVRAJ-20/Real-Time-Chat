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
    <div className="hidden lg:flex relative items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift">
      {/* Animated ripple rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border-2 border-primary/20 animate-ripple-ring"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              "--delay": `${i * 1}s`,
            }}
          />
        ))}
      </div>

      {/* Slowly rotating decorative circle */}
      <div className="absolute w-[500px] h-[500px] animate-slow-spin opacity-10">
        <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary" />
        <div className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-secondary" />
        <div className="absolute left-0 top-1/2 w-3 h-3 -translate-y-1/2 rounded-full bg-accent" />
        <div className="absolute right-0 top-1/2 w-3 h-3 -translate-y-1/2 rounded-full bg-primary" />
      </div>

      {/* Floating chat icons */}
      {floatingIcons.map(({ Icon, x, y, delay, duration, size }, i) => (
        <div
          key={`icon-${i}`}
          className="absolute animate-float-up"
          style={{
            left: x,
            top: y,
            "--delay": delay,
            "--duration": duration,
          }}
        >
          <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 shadow-lg">
            <Icon className={`${size} text-primary/70`} />
          </div>
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10 max-w-md text-center p-8">
        {/* Chat bubble mockup */}
        <div className="mb-8 space-y-3">
          <div className="animate-slide-up flex justify-start" style={{ "--delay": "0.2s" }}>
            <div className="bg-base-100/80 backdrop-blur-sm rounded-2xl rounded-bl-md px-5 py-3 shadow-lg max-w-[200px]">
              <p className="text-sm text-base-content/80">Hey! 👋 Welcome</p>
            </div>
          </div>
          <div className="animate-slide-up flex justify-end" style={{ "--delay": "0.5s" }}>
            <div className="bg-primary text-primary-content rounded-2xl rounded-br-md px-5 py-3 shadow-lg max-w-[200px]">
              <p className="text-sm">Thanks! 🎉</p>
            </div>
          </div>
          <div className="animate-slide-up flex justify-start" style={{ "--delay": "0.8s" }}>
            <div className="bg-base-100/80 backdrop-blur-sm rounded-2xl rounded-bl-md px-5 py-3 shadow-lg">
              {/* Typing indicator */}
              <div className="flex items-center gap-1 py-1">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className="w-2 h-2 rounded-full bg-base-content/40 animate-typing-bounce"
                    style={{ "--delay": `${dot * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-3xl font-bold mb-3 animate-slide-up bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer"
          style={{ "--delay": "1s" }}
        >
          {title}
        </h2>
        <p
          className="text-base-content/60 animate-slide-up leading-relaxed"
          style={{ "--delay": "1.2s" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100/30 to-transparent" />
    </div>
  );
};

export default AuthImagePattern;
