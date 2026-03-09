import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Dashboard() {

  const [conversationId, setConversationId] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshSidebar = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="flex h-screen bg-black text-white">

      <Sidebar
        setConversationId={setConversationId}
        refreshKey={refreshKey}
      />

      <ChatWindow
        conversationId={conversationId}
        refreshSidebar={refreshSidebar}
      />

    </div>
  );
}