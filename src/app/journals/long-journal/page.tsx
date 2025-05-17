"use client";

import { useState } from "react";

export default function JournalPage() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [tag, setTag] = useState("Personal");
  const [mood, setMood] = useState("Happy");

  const wordCount = entry.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🖊️ JournalMind</h1>
        <span className="text-sm text-gray-400">
          Last saved 2 minutes ago <span className="ml-2">🌙</span>
        </span>
      </header>

      {/* Journal Entry Box */}
      <div className="flex-grow bg-gray-900 rounded-xl p-6 max-w-4xl mx-auto w-full">
        <input
          type="text"
          placeholder="Give your entry a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-semibold bg-transparent border-b border-gray-700 mb-4 focus:outline-none placeholder-gray-500"
        />
        <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
          <div>📅 {new Date().toLocaleDateString()}</div>
          <div>⏰ {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>

        <textarea
          placeholder="Start writing your thoughts..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full h-96 resize-none bg-transparent focus:outline-none placeholder-gray-500"
        ></textarea>
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center bg-gray-950 mt-6 p-4 rounded-xl flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300 transition">
            💾 Save
          </button>

          <select
            className="bg-gray-800 text-white px-3 py-2 rounded"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option>Personal</option>
            <option>Work</option>
            <option>Health</option>
          </select>

          <select
            className="bg-gray-800 text-white px-3 py-2 rounded"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option>😊 Happy</option>
            <option>😔 Sad</option>
            <option>😠 Angry</option>
            <option>😌 Calm</option>
          </select>
        </div>

        <div className="text-sm text-gray-400">Words: {wordCount}</div>
      </div>
    </div>
  );
}
