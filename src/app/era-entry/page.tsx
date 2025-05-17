'use client';

import { Button } from '@/components/ui/button';

export default function EraEntryPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold mb-1">New Journal Entry</h1>
        <p className="text-sm text-gray-300 mb-6">
          Using ERA (Experience, Reflection, Action) method
        </p>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>⭐</span>Experience
          </h2>
          <p className="text-sm mb-2">
            Describe a recent experience you want to reflect on
          </p>
          <textarea
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 resize-none"
            rows={4}
            placeholder="What happened? Tell your story..."
          />
        </section>

        {/* Reflection */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>🕒</span>Reflection
          </h2>
          <p className="text-sm mb-2">
            How did this experience make you feel and what did you learn?
          </p>
          <textarea
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 resize-none"
            rows={4}
            placeholder="What thoughts and feelings came up for you?"
          />
        </section>

        {/* Action */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>⏩</span>Action
          </h2>
          <p className="text-sm mb-2">
            What will you do differently next time?
          </p>
          <textarea
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 resize-none"
            rows={4}
            placeholder="What steps will you take moving forward?"
          />
        </section>

        <div className="flex justify-end gap-2">
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Save Draft
          </Button>
          <Button className="bg-white text-black hover:bg-white/80">
            Complete Entry
          </Button>
        </div>
      </div>
    </main>
  );
}
