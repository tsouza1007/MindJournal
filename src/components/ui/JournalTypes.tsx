"use client";

import React from "react";
import { Leaf, Moon, Heart, Target } from "lucide-react";

// Reusable Card component
const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md text-white rounded-xl shadow-lg p-6 w-full max-w-xs transition hover:scale-105 duration-300 border border-white/20">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

const JournalTypes = () => {
  const cardData = [
    {
      icon: <Leaf />,
      title: "Gratitude Journal",
      description: "Focus on daily appreciation and positive experiences",
    },
    {
      icon: <Moon />,
      title: "Dream Journal",
      description: "Record and analyze your dreams and their meanings",
    },
    {
      icon: <Heart />,
      title: "Emotional Journal",
      description: "Track your feelings and emotional patterns",
    },
    {
      icon: <Target />,
      title: "Goal Journal",
      description: "Plan and track your personal objectives",
    },
  ];

  return (
    <section className="py-12 bg-black text-center">
      <h2 className="text-3xl font-bold mb-8">Different Types of Journaling</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default JournalTypes;
