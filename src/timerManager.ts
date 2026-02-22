const MIN = 60 * 1000;

interface TimerCallbacks {
  onMicroBreak: () => void;
  onMediumBreak: () => void;
  onLongBreak: () => void;
}

interface TimerConfig {
  microIntervalMin: number;
  mediumIntervalMin: number;
  longIntervalMin: number;
}

const DEFAULT_CONFIG: TimerConfig = {
  microIntervalMin: 20,
  mediumIntervalMin: 60,
  longIntervalMin: 120,
};

export class TimerManager {
  private microTimer: NodeJS.Timeout | undefined;
  private mediumTimer: NodeJS.Timeout | undefined;
  private longTimer: NodeJS.Timeout | undefined;
  private running = false;

  private callbacks: TimerCallbacks;
  private config: TimerConfig;

  constructor(callbacks: TimerCallbacks, config: Partial<TimerConfig> = {}) {
    this.callbacks = callbacks;
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  isRunning(): boolean {
    return this.running;
  }

  start(): void {
    if (this.running) {
      return;
    }
    this.stop();

    this.microTimer = setInterval(
      this.callbacks.onMicroBreak,
      this.config.microIntervalMin * MIN
    );

    this.mediumTimer = setInterval(
      this.callbacks.onMediumBreak,
      this.config.mediumIntervalMin * MIN
    );

    this.longTimer = setInterval(
      this.callbacks.onLongBreak,
      this.config.longIntervalMin * MIN
    );

    this.running = true;
  }

  stop(): void {
    this.running = false;
    if (this.microTimer) {
      clearInterval(this.microTimer);
      this.microTimer = undefined;
    }
    if (this.mediumTimer) {
      clearInterval(this.mediumTimer);
      this.mediumTimer = undefined;
    }
    if (this.longTimer) {
      clearInterval(this.longTimer);
      this.longTimer = undefined;
    }
  }

  restart(): void {
    this.start();
  }

  dispose(): void {
    this.stop();
  }
}
