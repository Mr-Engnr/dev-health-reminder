import * as vscode from "vscode";
import { Tone } from "./toneManager";

export interface ExtensionSettings {
  microInterval: number;
  mediumInterval: number;
  longInterval: number;
  tone: Tone;
}

const VALID_TONES: Tone[] = ["genz", "professional", "mixed"];

function clampInterval(value: number, min: number, max: number, fallback: number): number {
  if (typeof value !== "number" || !isFinite(value) || value < min) {
    return fallback;
  }
  return Math.min(value, max);
}

export function getSettings(): ExtensionSettings {
  const config = vscode.workspace.getConfiguration("devHealth");
  const rawTone = config.get<string>("tone", "mixed");

  return {
    microInterval: clampInterval(config.get<number>("microInterval", 20), 1, 480, 20),
    mediumInterval: clampInterval(config.get<number>("mediumInterval", 60), 1, 480, 60),
    longInterval: clampInterval(config.get<number>("longInterval", 120), 1, 480, 120),
    tone: VALID_TONES.includes(rawTone as Tone) ? (rawTone as Tone) : "mixed",
  };
}
