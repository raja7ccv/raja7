"use client";

import Image from "next/image";

interface GameFeatureSlide {
  id: number;
  title: string;
  description: string;
  highlightText?: string;
  image: string;
}

const featureSlides: GameFeatureSlide[] = [
  {
    id: 1,
    title: "AVIATOR PRO",
    highlightText: "20000X",
    description:
      "Aviator Pro is a new kind of social multiplayer game consisting of an increasing curve that can crash anytime.\n\nWhen round starts, a scale of multiplier starts growing. Player must cash out before lucky plane flies away.\n\nOriginated from video gaming industry, this format became popular in casinos, due to its simplicity and exciting experience.",
    image: "/images/screenshots/Aviator.png",
  },
  {
    id: 2,
    title: "DRAGON TIGER",
    highlightText: "HOT",
    description:
      "Dragon Tiger is a simple yet thrilling gambling game originating from Asia, popular among players worldwide.\n\nThe game is decided by two cards, representing the 'Dragon' and 'Tiger' sides. Players bet on either Dragon, Tiger, or a tie (when both cards have the same value).\n\nThe rules are straightforward: the dealer deals two cards, one for Dragon and one for Tiger, and the side with the higher card wins. Ace is the lowest card, while King is the highest.",
    image: "/images/screenshots/DragonTiger.png",
  },
  {
    id: 3,
    title: "7UP 7DOWN",
    highlightText: "FAST",
    description:
      "7Up 7Down is a simple and fun gambling game where players bet by predicting the outcome of dice rolls.\n\nThe core rule of the game is to bet on whether the sum of the dice will be '7Up' (greater than 7), '7Down' (less than 7), or exactly '7' (Lucky 7). The dealer rolls two dice, and if the sum is greater than 7, 7Up wins; if less than 7, 7Down wins; and if it is exactly 7, Lucky 7 wins.\n\nIts easy-to-understand rules and fast-paced gameplay make 7Up 7Down a popular choice among bettors.",
    image: "/images/screenshots/7Up7Down.png",
  },
  {
    id: 4,
    title: "ANDAR BAHAR",
    highlightText: "CLASSIC",
    description:
      "Andar Bahar is a traditional Indian gambling game known for its straightforward gameplay. Played with a standard deck of cards, the game begins with the dealer revealing a 'middle card' at the center.\n\nPlayers place bets on either 'Andar' or 'Bahar'. The dealer then alternates dealing cards to both sides until a card matching the 'middle card' in rank appears.\n\nIf the matching card is dealt on the Andar side, players who bet on Andar win; if it appears on the Bahar side, those who bet on Bahar win.",
    image: "/images/screenshots/AndarBahar.png",
  },
  {
    id: 5,
    title: "TEEN PATTI",
    highlightText: "POKER",
    description:
      "Teen Patti is a popular South Asian card game, often compared to 'Three Card Poker' or the 'Indian Poker.'\n\nPlayed with a standard deck, each player receives three cards, aiming to have the highest-ranking hand. Common hands include high card, pair, straight, and flush.\n\nPlayers can choose to play blind or see their cards before placing bets. Betting continues until players decide to show their hands, and the winner takes the pot.",
    image: "/images/screenshots/TeenPatti.png",
  },
  {
    id: 6,
    title: "3 PATTI",
    highlightText: "3-CARD",
    description:
      "3 Patti, also known as 'Three Card,' is a popular gambling game in South Asia, similar to Teen Patti.\n\nPlayed with a standard deck, each player receives three cards and bets based on their hand strength, aiming to achieve higher benefits.\n\nCommon hands include high card, pair, straight, and flush. Players can choose to play blind or see their cards, and the highest hand wins after the betting rounds.",
    image: "/images/screenshots/Patti.png",
  },
];

export function Screenshots() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center animate-slide-up">
          <h2 className="section-title">Featured Games</h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Enjoy premium casino experiences with stunning graphics, smooth
            gameplay, and exciting rewards.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featureSlides.map((slide) => (
            <div
              key={slide.id}
              className="card-premium hover-lift animate-scale overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-3xl bg-muted">
                {slide.highlightText && (
                  <div className="absolute left-4 top-4 z-20 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                    {slide.highlightText}
                  </div>
                )}

                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-bold text-primary">
                  {slide.title}
                </h3>

                <p className="whitespace-pre-line text-sm leading-7 text-muted-foreground">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
