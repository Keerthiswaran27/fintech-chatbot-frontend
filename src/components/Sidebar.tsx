import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Conversation {
  id: string;
  title: string;
}

export default function Sidebar({ setConversationId, refreshKey }: any) {

  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {

    const loadConversations = async () => {

      const { data } = await supabase.auth.getUser();
      const uid = data.user?.id;

      if (!uid) return;

      const res = await fetch(
        `http://127.0.0.1:8000/conversations?user_id=${uid}`
      );

      const dataConv = await res.json();

      setConversations(dataConv);

    };

    loadConversations();

  }, [refreshKey]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (

    <div className="w-64 bg-[#1A1A2E] border-r border-gray-800 flex flex-col justify-between text-white">

      {/* TOP SECTION */}
      <div className="p-4">

        {/* APP NAME */}
        <h2 className="text-xl font-bold text-purple-400 mb-6">
          FinPilot AI
        </h2>

        {/* NEW CHAT */}
        <button
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg mb-6 font-semibold"
          onClick={() => setConversationId(null)}
        >
          + New Chat
        </button>

        {/* CONVERSATIONS */}
        <div className="space-y-2">

          {conversations.map((conv) => (

            <div
              key={conv.id}
              className="p-3 bg-[#0F0F1B] border border-gray-800 rounded-lg cursor-pointer hover:border-purple-500 hover:bg-[#141427] transition"
              onClick={() => setConversationId(conv.id)}
            >
              {conv.title || "Conversation"}
            </div>

          ))}

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="p-4 border-t border-gray-800">

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>

      </div>

    </div>

  );
}