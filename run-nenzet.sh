#!/usr/bin/env bash
# Runs the nenzet.com Next.js dev server inside a dedicated tmux session.
set -euo pipefail

SESSION="nenzet"
PORT="${PORT:-3000}"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$PROJECT_DIR"

# Install dependencies on first run.
if [ ! -d node_modules ]; then
  echo "Installing dependencies (npm install)..."
  npm install
fi

# Recreate the tmux session cleanly.
if tmux has-session -t "$SESSION" 2>/dev/null; then
  echo "Killing existing tmux session '$SESSION'..."
  tmux kill-session -t "$SESSION"
fi

echo "Starting '$SESSION' on http://localhost:$PORT ..."
tmux new-session -d -s "$SESSION" -c "$PROJECT_DIR" \
  "npm run dev -- --port $PORT --hostname 0.0.0.0"

echo
echo "Dev server launched in tmux session '$SESSION'."
echo "  Attach:  tmux attach -t $SESSION"
echo "  Logs:    tmux capture-pane -pt $SESSION"
echo "  Stop:    tmux kill-session -t $SESSION"
echo "  URL:     http://localhost:$PORT"
