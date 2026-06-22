interface Feature {
  icon: string
  title: string
  desc: string
}

const features: Feature[] = [
  {
    icon: '🔒',
    title: 'Persistent Sessions',
    desc: 'Sessions are serialized to disk. Your conversation history, file context, and agent memory survive reboots, network drops, and terminal crashes.',
  },
  {
    icon: '👥',
    title: 'Multi-Agent Team',
    desc: "Spawn specialized subagents per domain — Frontend, Backend, Database, DevOps, QA. Each holds deep expertise in its lane without polluting others' context.",
  },
  {
    icon: '⚡',
    title: 'Parallel Execution',
    desc: 'Run multiple agents simultaneously. While your Frontend agent writes components, your Backend agent scaffolds APIs — real parallel development, no waiting.',
  },
  {
    icon: '🧭',
    title: 'Token-Aware Routing',
    desc: "The orchestrator monitors every agent's token usage in real-time. Tasks are delegated before any agent approaches its limit — zero context resets, guaranteed.",
  },
  {
    icon: '🌳',
    title: 'Session Tree UI',
    desc: 'A visual hierarchy of all your agents, their active tasks, token headroom, and outputs. Full visibility into your AI workforce from one clean browser interface.',
  },
  {
    icon: '🔌',
    title: 'Works with Claude, Codex & Cursor',
    desc: 'Native support for Claude (Anthropic), OpenAI Codex, Cursor, GitHub Copilot, and any OpenAI-compatible API. Mix models — Claude for reasoning, Haiku for speed.',
  },
]

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="s-eyebrow">Features</div>
      <h2 className="s-title">Everything a vibe coder needs</h2>
      <p className="s-desc">
        Six core capabilities that eliminate the token-limit problem and supercharge your
        AI-assisted development workflow.
      </p>
      <div className="feat-grid">
        {features.map((feat) => (
          <div className="feat-card" key={feat.title}>
            <div className="feat-ico">{feat.icon}</div>
            <div className="feat-title">{feat.title}</div>
            <div className="feat-desc">{feat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
