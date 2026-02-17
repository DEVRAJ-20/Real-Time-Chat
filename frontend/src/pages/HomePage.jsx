import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen aurora-bg" style={{ background: "var(--bg-deep)" }}>
      <div className="relative z-10 flex items-center justify-center pt-20 px-4">
        <div
          className="w-full max-w-6xl h-[calc(100vh-8rem)] rounded-2xl overflow-hidden neon-glow animate-border-glow-aurora"
          style={{ background: "var(--bg-surface)" }}
        >
          <div className="flex h-full overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
