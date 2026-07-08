"use client";

import { useState } from "react";

interface Game {
  id: number;
  name: string;
  icon: string;
  description: string;
  featured?: boolean;
}

// Static Data
const games: Game[] = [
  {
    id: 1,
    name: "Lottery",
    icon: "🎰",
    description:
      "Play exciting lottery games with fast results and daily winning opportunities.",
    featured: true,
  },
  {
    id: 2,
    name: "Slots",
    icon: "🎲",
    description:
      "Enjoy hundreds of premium slot games with smooth graphics and huge jackpots.",
  },
  {
    id: 3,
    name: "Casino",
    icon: "♠️",
    description:
      "Experience live casino games including Blackjack, Baccarat, and Roulette.",
  },
  {
    id: 4,
    name: "Sports",
    icon: "⚽",
    description:
      "Bet on your favorite sports with live odds and exciting rewards.",
  },
  {
    id: 5,
    name: "Fishing",
    icon: "🐟",
    description: "Catch exciting rewards in fun multiplayer fishing games.",
  },
  {
    id: 6,
    name: "Mini Games",
    icon: "🎮",
    description: "Play casual mini games anytime and earn amazing bonuses.",
  },
];

export function GamesSection() {
  const [selectedGame, setSelectedGame] = useState<Game>(games[0]);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className={`mb-16 text-center transition-all duration-500 `}>
          <h2 className="section-title mb-4 text-4xl md:text-5xl">OUR GAMES</h2>

          <p
            className={`mx-auto max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg `}
          >
            We&apos;re a leading force in digital entertainment. Our platform
            offers premium gaming experiences with lottery, casino, slots,
            sports betting, fishing games, and more.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Selected Game */}
          <div className={`lg:col-span-1 `}>
            <div className="card-premium flex h-full flex-col justify-center rounded-2xl border-2 border-blue-200 p-8">
              <h3 className="mb-6 text-center text-3xl font-bold gradient-text">
                {selectedGame.name}
              </h3>

              <p className="text-center leading-relaxed text-gray-700">
                {selectedGame.description}
              </p>
            </div>
          </div>

          {/* Games Grid */}
          <div className={`lg:col-span-2 `}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  className={`rounded-xl border-2 p-6 transition-all duration-300 ${
                    selectedGame.id === game.id
                      ? "border-blue-600 bg-blue-50 shadow-lg"
                      : "border-blue-200 hover:border-blue-400"
                  }`}
                >
                  <p className="text-center font-semibold text-blue-900">
                    {game.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
