"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ThemeContext } from "@/app/layout"; // Import ThemeContext

export default function SettingsPage() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use theme and toggleTheme from context
  const [notifications, setNotifications] = useState({
    daily: false,
    weekly: false,
    monthly: false,
  });
  const [notificationTime, setNotificationTime] = useState("09:00");

  return (
    <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}> {/* Apply theme classes */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">⚙️ Settings</h1>
        <div className="text-2xl">👤</div>
      </header>

      {/* Appearance Section */}
      <section className="bg-gray-900 p-4 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
        <div className="flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <span>🌙</span>
            <span>Theme Mode</span>
          </span>
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={theme === "dark"}
            onChange={() => toggleTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>
      </section>

      {/* Notifications Section */}
      <section className="bg-gray-900 p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <span>📅</span>
              <span>Daily Updates</span>
            </span>
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={notifications.daily}
              onChange={() =>
                setNotifications((prev) => ({ ...prev, daily: !prev.daily }))
              }
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <span>🗓️</span>
              <span>Weekly Summary</span>
            </span>
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={notifications.weekly}
              onChange={() =>
                setNotifications((prev) => ({ ...prev, weekly: !prev.weekly }))
              }
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="flex items-center space-x-2">
              <span>📊</span>
              <span>Monthly Report</span>
            </span>
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={notifications.monthly}
              onChange={() =>
                setNotifications((prev) => ({ ...prev, monthly: !prev.monthly }))
              }
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2">Notification Time</label>
            <input
              type="time"
              className="bg-gray-800 text-white p-2 rounded w-full"
              value={notificationTime}
              onChange={(e) => setNotificationTime(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="mt-8">
        <Button className="bg-white text-black hover:bg-gray-300 transition">
          Save Settings
        </Button>
      </div>
    </div>
  );
}
