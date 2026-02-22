export type Tone = "genz" | "professional" | "mixed";

const pick = <T>(list: T[]): T => list[Math.floor(Math.random() * list.length)];

const genzPrefixes = [
  "yo bestie,",
  "hey king/queen,",
  "bestie wake up,",
  "real talk:",
  "not me forgetting to",
];

const genzSuffixes = [
  "no cap 🔥",
  "touch grass, bro! 🌱",
  "your eyes are fried 🍳",
  "slay 💅",
  "fr fr 💀",
  "before you turn into a fossil 👀",
  "main character energy 🎉",
  "it's giving burnout 😭",
];

const mixedPrefixes = [
  "Quick reminder:",
  "Hey, time to",
  "Friendly nudge:",
  "Don't forget to",
  "Break time —",
];

const mixedSuffixes = [
  "💪",
  "✨",
  "— you got this!",
  "— your body will thank you 👍",
  "🙂",
];

export function formatMessage(exercise: string, tone: Tone): string {
  switch (tone) {
    case "genz":
      return `${pick(genzPrefixes)} ${exercise.toLowerCase()} — ${pick(genzSuffixes)}`.slice(0, 120);
    case "professional":
      return `Reminder: ${exercise}.`;
    case "mixed":
      return `${pick(mixedPrefixes)} ${exercise.toLowerCase()} ${pick(mixedSuffixes)}`.slice(0, 120);
  }
}
