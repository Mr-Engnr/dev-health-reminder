export const exercises = {
  micro: [
    "Look 20 feet away for 20 seconds",
    "Blink rapidly for 10 seconds",
    "Focus near → far 5 times",
    "Close your eyes and breathe deeply for 15 seconds",
    "Trace a figure-8 with your eyes slowly",
  ],
  medium: [
    "Rotate neck slowly clockwise 5 times",
    "Roll shoulders backward 10 times",
    "Stretch wrists for 15 seconds",
    "Stand up and touch your toes",
    "Do a seated spinal twist on each side",
  ],
  long: [
    "Stand and walk for 5 minutes",
    "Drink a glass of water",
    "Do 10 bodyweight squats",
    "Step outside for fresh air",
    "Do a full-body stretch routine",
  ],
};

export type BreakCategory = keyof typeof exercises;

export function getRandomExercise(category: BreakCategory): string {
  const list = exercises[category];
  return list[Math.floor(Math.random() * list.length)];
}
