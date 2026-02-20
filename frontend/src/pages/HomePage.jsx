import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200 aurora-bg overflow-hidden">
      <div className="relative z-10 flex flex-col h-screen pt-20 px-4 pb-4">
        <div className="bg-base-100 w-full max-w-6xl mx-auto flex-1 min-h-0 rounded-2xl overflow-hidden shadow-xl neon-glow">
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
