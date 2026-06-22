interface PainPoint {
  icon: string
  title: string
  body: string
}

const painPoints: PainPoint[] = [
  {
    icon: '💥',
    title: 'Context Window Fills Up',
    body: 'The AI loses everything it knew. File structures, design decisions, variable names — gone in an instant.',
  },
  {
    icon: '🔄',
    title: 'You Re-Explain from Scratch',
    body: '30 minutes of copy-pasting context, writing summaries, re-onboarding the AI to your own codebase.',
  },
  {
    icon: '🧠',
    title: 'Flow State is Destroyed',
    body: "Deep work doesn't survive interruption. Context switching kills momentum and your best ideas die in the reset.",
  },
  {
    icon: '📉',
    title: 'Quality Regresses',
    body: 'A fresh AI session makes dumb mistakes — inconsistent naming, forgotten patterns, code that contradicts earlier decisions.',
  },
]

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="s-eyebrow">The Problem</div>
      <div className="problem-grid">
        <div>
          <h2 className="s-title">
            You're in the zone.
            <br />
            Then the AI forgets everything.
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--muted-light)', lineHeight: 1.7, marginBottom: '4px' }}>
            Every vibe coder knows the feeling. You're three hours deep, the AI finally understands
            your architecture, your conventions, your entire vision — and then it hits: the token
            limit.
          </p>
          <ul className="pain-list">
            {painPoints.map((point) => (
              <li className="pain-item" key={point.title}>
                <div className="pain-icon">{point.icon}</div>
                <div>
                  <div className="pain-title">{point.title}</div>
                  <div className="pain-body">{point.body}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="chat-box">
            <div className="chat-bar">
              <div className="dots">
                <div className="dot d-r" />
                <div className="dot d-y" />
                <div className="dot d-g" />
              </div>
              <span className="chat-title">claude — my-app session</span>
            </div>
            <div className="chat-body">
              <div className="msg">
                <div className="msg-role u">YOU</div>
                <div className="msg-text">
                  Now add the useUserStore hook to ProfileCard — same pattern we used for
                  DashboardHeader.
                </div>
              </div>
              <div className="msg">
                <div className="msg-role a">CLAUDE</div>
                <div className="msg-text">
                  On it. I'll use the shallow selector from /store/selectors.ts like we agreed.
                  Should I also wire up the optimistic update for the avatar change?
                </div>
              </div>
              <div className="msg">
                <div className="msg-role u">YOU</div>
                <div className="msg-text">
                  Yes! And remember — use the design tokens from src/tokens.ts, not hardcoded
                  values.
                </div>
              </div>
              <div className="error-bar">⚠ Context window limit reached. Starting new conversation…</div>
              <div className="msg">
                <div className="msg-role e">CLAUDE</div>
                <div className="msg-text bad">
                  Hello! I'd be happy to help with React. Could you share the component you're
                  working on and give me some background on your project structure? I'll need context
                  before I can assist.
                </div>
              </div>
              <div className="msg">
                <div className="msg-role u">YOU</div>
                <div className="msg-text" style={{ color: '#E06C75' }}>
                  ...you've got to be kidding me.
                </div>
              </div>
            </div>
          </div>
          <p className="chat-cap">The AI that knew your entire project — gone in an instant.</p>
        </div>
      </div>
    </section>
  )
}
