import * as vscode from "vscode";
import { Tone } from "./toneManager";

export interface ExtensionSettings {
  microInterval: number;
  mediumInterval: number;
  longInterval: number;
  tone: Tone;
}

export function getSettings(): ExtensionSettings {
  const config = vscode.workspace.getConfiguration("devHealth");
  return {
    microInterval: config.get<number>("microInterval", 20),
    mediumInterval: config.get<number>("mediumInterval", 60),
    longInterval: config.get<number>("longInterval", 120),
    tone: config.get<Tone>("tone", "mixed"),
  };
}
