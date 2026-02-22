import * as vscode from "vscode";
import { TimerManager } from "./timerManager";
import { exercises } from "./exercises";
import { formatMessage } from "./toneManager";
import { getSettings } from "./settings";

let timerManager: TimerManager;
let idleTimer: NodeJS.Timeout | undefined;

const IDLE_TIMEOUT_MS = 300_000;

function resetIdleTimer() {
  if (idleTimer) {
    clearTimeout(idleTimer);
  }

  if (!timerManager.isRunning()) {
    timerManager.start();
  }

  idleTimer = setTimeout(() => {
    timerManager.stop();
  }, IDLE_TIMEOUT_MS);
}

export function activate(context: vscode.ExtensionContext) {
  const settings = getSettings();

  const pick = (list: string[]) => list[Math.floor(Math.random() * list.length)];

  timerManager = new TimerManager(
    {
      onMicroBreak: () => {
        vscode.window.showInformationMessage(formatMessage(pick(exercises.micro), settings.tone));
      },
      onMediumBreak: () => {
        vscode.window.showInformationMessage(formatMessage(pick(exercises.medium), settings.tone));
      },
      onLongBreak: () => {
        vscode.window.showInformationMessage(formatMessage(pick(exercises.long), settings.tone));
      },
    },
    {
      microIntervalMin: settings.microInterval,
      mediumIntervalMin: settings.mediumInterval,
      longIntervalMin: settings.longInterval,
    }
  );

  timerManager.start();
  resetIdleTimer();

  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument(() => resetIdleTimer()),
    vscode.window.onDidChangeTextEditorSelection(() => resetIdleTimer()),
    { dispose: () => {
      timerManager.dispose();
      if (idleTimer) {
        clearTimeout(idleTimer);
      }
    }}
  );
}

export function deactivate() {
  timerManager?.dispose();
  if (idleTimer) {
    clearTimeout(idleTimer);
    idleTimer = undefined;
  }
}
