"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

import Cards from "@/components/Cards";
import Refresh from "@/components/Refresh";
import { createClient } from "@/lib/supabase/client";

const Inbox = () => {
  const supabase = createClient();
  const router = useRouter();

  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      // Get session
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;

      if (!user) {
        router.push("/");
        return;
      }

      // Fetch messages (RLS handles filtering)
      const { data: msgs, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setMessages(msgs || []);
      }

      setLoading(false);
    };

    loadMessages();
  }, []);

  if (loading)
    return (
      <div className="min-h-32 w-full flex items-center justify-center gap-4 text-4xl">
        Loading... <Loader size={42} className="animate-spin" />
      </div>
    );

  return (
    <>
      <p className="font-semibold text-lg text-muted-foreground px-1">
        Ryzz-o-Meter : {messages.length} 🔥
      </p>

      <Refresh />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 max-w-6xl py-3">
        {messages.map((message) => (
          <Cards
            key={message.id}
            messageId={message.id}
            seen={message.seen}
            message={message.content}
            sentAt={new Date(message.created_at).toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
            })}
          />
        ))}

        {messages.length === 0 && (
          <div className="text-center col-span-full p-2 mt-16 text-muted-foreground">
            No Messages found. Share Link above and start getting messages!!
          </div>
        )}
      </div>
    </>
  );
};

export default Inbox;