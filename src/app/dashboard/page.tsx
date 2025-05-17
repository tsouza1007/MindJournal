//src/app/dashboard/page.tsx
"use client";

import { supabase } from "@/lib/supabaseClient";
import React, { useEffect, useState } from "react";

interface EntryType {
  id: string;
  title: string;
  preview: string;
  created_at: string;
}

interface CardProps {
  title: string;
  value?: string | number;
  description?: string;
  icon: string;
}

interface EntryProps {
  title: string;
  preview: string;
  date: string;
}

export default function JournalMindDashboard() {
  const [entries, setEntries] = useState<EntryType[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const { data, error } = await supabase.from("entries").select("*");
      if (error) {
        console.error("Error fetching entries:", error);
      } else {
        setEntries(data || []);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-6 space-y-10">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">🖋️ JournalMind</h1>
        <div className="flex items-center space-x-4">
          <span className="text-xl">👤</span>
          <button className="text-white">⚙️</button>
        </div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Current Streak" value="7 days" icon="🔥" />
        <Card title="Total Entries" value={entries.length} icon="📄" />
        <Card title="Time Spent" value="12.5 hrs" icon="🕒" />
        <Card title="Mood Average" value="4.2/5" icon="😊" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">New Entry</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Quick Notes" description="Capture quick thoughts and ideas" icon="📝" />
          <Card title="Prompted Journal" description="Write with guided prompts" icon="💬" />
          <Card title="Long Journal" description="Deep dive into your thoughts" icon="✍️" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Past Entries</h2>
        <div className="space-y-2">
          {entries.map((entry) => (
            <Entry
              key={entry.id}
              title={entry.title}
              preview={entry.preview}
              date={new Date(entry.created_at).toLocaleDateString()}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Card({ title, value, description, icon }: CardProps) {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow-md">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {value && <p className="text-xl font-bold">{value}</p>}
      {description && <p className="text-sm text-gray-400">{description}</p>}
    </div>
  );
}

function Entry({ title, preview, date }: EntryProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <div className="flex justify-between">
        <h4 className="font-semibold text-lg">{title}</h4>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <p className="text-sm text-gray-300 mt-1">{preview}</p>
    </div>
  );
}
