"use client";
import React, { useState } from "react";

export default function QuickNotesPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          🖋️ JournalMind
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-xl">👤</span>
          <button className="text-white text-xl">⚙️</button>
        </div>
      </header>

      <div className="bg-gray-900 p-6 rounded-2xl shadow-md space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Quick Notes</h2>
          <span className="text-sm text-gray-400">
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            | {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>

        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={6}
          placeholder="What's on your mind?"
          className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 outline-none resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex space-x-4 text-gray-400 text-sm">
            <button className="hover:text-white">🏷 Add Tags</button>
            <button className="hover:text-white">🙂 Mood</button>
            <button className="hover:text-white">📎 Attach</button>
          </div>
          <div className="space-x-2 mt-4 md:mt-0">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl">
              Save as Draft
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold">
              Save Entry
            </button>
          </div>
        </div>
      </div>

      <section className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold">Quick Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TipCard icon="💡" tip="Keep it brief and focused on key thoughts" />
          <TipCard icon="⏱️" tip="Aim for 2–3 minutes per quick note" />
          <TipCard icon="📋" tip="Use bullet points for better organization" />
        </div>
      </section>
    </div>
  );
}

function TipCard({ icon, tip }: { icon: string; tip: string }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl flex items-start space-x-3 shadow-sm">
      <div className="text-xl">{icon}</div>
      <p className="text-sm text-gray-200">{tip}</p>
    </div>
  );
}
