import { MessageSquare, Sparkles, Image, Heart, Send, Smile } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">
      {/* Decorative spinning rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-base-content/5 animate-slow-spin" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[350px] h-[350px] rounded-full border border-base-content/5"
          style={{ animation: "slow-spin 25s linear infinite reverse" }}
        />
      </div>

      {/* Circular radiation ripples */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[200px] h-[200px] rounded-full border-2 border-primary/10 animate-ripple-ring"
          style={{ "--delay": "0s" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[200px] h-[200px] rounded-full border-2 border-secondary/10 animate-ripple-ring"
          style={{ "--delay": "1s" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[200px] h-[200px] rounded-full border-2 border-accent/10 animate-ripple-ring"
          style={{ "--delay": "2s" }}
        />
      </div>

      {/* Floating icons */}
      <div
        className="absolute top-16 left-12 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float-particle"
        style={{ "--duration": "7s", "--delay": "0s" }}
      >
        <MessageSquare className="w-6 h-6 text-primary/60" />
      </div>

      <div
        className="absolute top-24 right-16 w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center animate-float-particle"
        style={{ "--duration": "8s", "--delay": "1s" }}
      >
        <Sparkles className="w-5 h-5 text-secondary/60" />
      </div>

      <div
        className="absolute top-12 right-32 w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float-particle"
        style={{ "--duration": "6s", "--delay": "0.5s" }}
      >
        <Image className="w-6 h-6 text-accent/60" />
      </div>

      <div
        className="absolute bottom-32 right-12 w-12 h-12 rounded-full bg-error/10 border border-error/20 flex items-center justify-center animate-float-particle"
        style={{ "--duration": "9s", "--delay": "2s" }}
      >
        <Heart className="w-5 h-5 text-error/40" />
      </div>

      <div
        className="absolute bottom-20 left-16 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center animate-float-particle"
        style={{ "--duration": "7s", "--delay": "1.5s" }}
      >
        <Send className="w-5 h-5 text-primary/50" />
      </div>

      <div
        className="absolute bottom-40 right-28 w-14 h-14 rounded-full bg-warning/10 border border-warning/20 flex items-center justify-center animate-float-particle"
        style={{ "--duration": "8s", "--delay": "3s" }}
      >
        <Smile className="w-6 h-6 text-warning/50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-md text-center space-y-6">
        {/* Mock chat bubbles */}
        <div className="space-y-3">
          {/* Received bubble */}
          <div className="flex items-start gap-2 animate-float-up" style={{ "--duration": "12s", "--delay": "0s" }}>
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4 text-primary/60" />
            </div>
            <div className="bg-base-300/60 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-2.5 border border-base-content/5">
              <p className="text-sm text-base-content/70">Hey! 👋 Welcome</p>
            </div>
          </div>

          {/* Sent bubble */}
          <div className="flex items-start gap-2 justify-end animate-float-up" style={{ "--duration": "12s", "--delay": "1s" }}>
            <div className="bg-primary/80 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
              <p className="text-sm text-primary-content">Thanks! 🎉</p>
            </div>
          </div>

          {/* Typing indicator */}
          <div className="flex items-center gap-2 animate-float-up" style={{ "--duration": "12s", "--delay": "2s" }}>
            <div className="bg-base-300/40 backdrop-blur-sm rounded-2xl px-4 py-3 border border-base-content/5">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-base-content/30 animate-typing-bounce" style={{ "--delay": "0s" }} />
                <span className="w-2 h-2 rounded-full bg-base-content/30 animate-typing-bounce" style={{ "--delay": "0.15s" }} />
                <span className="w-2 h-2 rounded-full bg-base-content/30 animate-typing-bounce" style={{ "--delay": "0.3s" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Title & subtitle */}
        <div className="pt-4">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-base-content/60 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;
