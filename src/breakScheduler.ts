export type BreakType = "eye" | "posture" | "movement";

export class BreakScheduler {
  getNextBreak(): BreakType {
    return "eye";
  }

  reset(): void {}
}
