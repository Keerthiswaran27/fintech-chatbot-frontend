import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";
import ReactMarkdown from "react-markdown";

interface Message {
  role: string;
  content: string;
}

export default function ChatWindow({ conversationId, refreshSidebar }: any) {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUserId(data.user?.id || null);
    };

    getUser();
  }, []);

  useEffect(() => {

    if (!conversationId) {
      setMessages([]);
      return;
    }

    const fetchMessages = async () => {

      const res = await fetch(
        `http://127.0.0.1:8000/messages?conversation_id=${conversationId}`
      );

      const data = await res.json();

      const formatted = data.map((m: any) => ({
        role: m.role,
        content: m.content
      }));

      setMessages(formatted);

    };

    fetchMessages();

  }, [conversationId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async () => {

    if (!message.trim() || !userId || isLoading) return;

    const newMessages = [
      ...messages,
      { role: "user", content: message }
    ];

    setMessages(newMessages);
    setIsLoading(true);

    const res = await fetch("http://127.0.0.1:8000/chat-stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        message: message,
        conversation_id: conversationId
      })
    });

    if (!conversationId) {
      refreshSidebar();
    }

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    let aiMessage = "";

    setMessages([
      ...newMessages,
      { role: "assistant", content: "" }
    ]);

    while (true) {

      const { done, value } = await reader!.read();

      if (done) break;

      const chunk = decoder.decode(value);

      aiMessage += chunk;

      setMessages(prev => {

        const updated = [...prev];

        updated[updated.length - 1] = {
          role: "assistant",
          content: aiMessage
        };

        return updated;

      });

    }

    setIsLoading(false);
    setMessage("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#0F0F1B] text-white">

      {/* CHAT MESSAGES */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xl p-4 rounded-xl shadow ${
              msg.role === "user"
                ? "bg-purple-600 ml-auto"
                : "bg-[#1A1A2E] border border-gray-800"
            }`}
          >
            <div className="prose prose-invert max-w-none text-sm">
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}

        <div ref={bottomRef}></div>

      </div>

      {/* INPUT AREA */}
      <div className="border-t border-gray-800 p-4 flex gap-3 bg-[#1A1A2E]">

        <input
          className="flex-1 bg-[#0F0F1B] border border-gray-700 focus:border-purple-500 p-3 rounded-lg outline-none"
          placeholder="Ask FinPilot AI about stocks, SIP, finance..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={sendMessage}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 px-6 rounded-lg font-semibold disabled:opacity-50 transition"
        >
          Send
        </button>

      </div>

    </div>
  );
}