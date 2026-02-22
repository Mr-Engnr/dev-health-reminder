# Dev Health Reminder

Smart break reminders for developers — eye care, posture, movement. **Fully offline, zero telemetry.**

## Why?

Long coding sessions hurt your eyes, back, and body. Dev Health Reminder nudges you to take micro, medium, and long breaks — right inside VS Code.

## Features

- **Three break tiers** — micro (20 min), medium (60 min), long (120 min)
- **Randomized exercises** — eye care, stretches, movement
- **Three message tones**
  - `genz` — fun, emoji-heavy, meme-style
  - `professional` — clean, formal, no emoji
  - `mixed` — balanced with light humor
- **Idle detection** — timers pause when you stop typing for 5 minutes
- **Fully configurable** — adjust intervals and tone in VS Code settings

## Privacy First

- 100% offline
- No telemetry
- No external API calls
- No data collection
- Works entirely inside VS Code

## Settings

Open **Settings** (`Ctrl+,`) and search for `devHealth`:

| Setting                   | Default | Description                    |
| ------------------------- | ------- | ------------------------------ |
| `devHealth.microInterval`  | `20`    | Micro break interval (minutes) |
| `devHealth.mediumInterval` | `60`    | Medium break interval (minutes)|
| `devHealth.longInterval`   | `120`   | Long break interval (minutes)  |
| `devHealth.tone`           | `mixed` | Message tone: genz, professional, mixed |

## Usage

1. Install the extension
2. It activates automatically when VS Code starts
3. Break reminders appear as info notifications
4. Customize intervals and tone in settings

## License

MIT
