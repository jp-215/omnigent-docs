interface OverviewStep {
  num: string
  title: string
  desc: string
}

const overviewSteps: OverviewStep[] = [
  {
    num: '1',
    title: 'Sessions That Never Die',
    desc: 'Session state is persisted to disk. Close your terminal, reboot, take a break — pick up exactly where you left off.',
  },
  {
    num: '2',
    title: 'Specialized Subagents',
    desc: 'Spawn dedicated agents for Frontend, Backend, DB, DevOps — each expert in their domain with scoped context.',
  },
  {
    num: '3',
    title: 'Token-Aware Routing',
    desc: 'The orchestrator monitors token usage in real-time and delegates tasks to fresh agents before any limit is reached.',
  },
]

export default function WhatIsOmnigent() {
  return (
    <section className="section section-alt" id="what-is">
      <div className="s-eyebrow">Solution</div>
      <div className="overview-grid">
        <div>
          <h2 className="s-title">Meet Omnigent — Your Persistent AI Dev Team</h2>
          <p
            style={{
              fontSize: '15px',
              color: 'var(--muted-light)',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}
          >
            Omnigent is a multi-agent orchestration platform that keeps your AI sessions alive
            indefinitely. Instead of one overwhelmed AI trying to hold everything, you get a{' '}
            <strong>team of specialized agents</strong> — each focused, each within limits, each
            reporting to an orchestrator that remembers everything.
          </p>

          <div className="step-list">
            {overviewSteps.map((step) => (
              <div className="step-row" key={step.num}>
                <div className="step-num">{step.num}</div>
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="callout">
            <div className="callout-ico">💡</div>
            <div>
              <h4>Think Kubernetes for AI agents</h4>
              <p>
                Omnigent schedules, monitors, and orchestrates your AI workforce — so you can focus
                on building, not managing context windows.
              </p>
            </div>
          </div>
        </div>

        <div className="agent-visual">
          <div className="av-head">Live Session Tree</div>
          <div className="tree">
            <div className="node node-root">🧠 Omnigent Orchestrator</div>
            <div className="vline" />
            <div className="hrow">
              <div className="hcol">
                <div className="node node-child">
                  <div className="dot-live" />
                  ⚛️ Frontend
                </div>
              </div>
              <div style={{ width: '48px' }} />
              <div className="hcol">
                <div className="node node-child">
                  <div className="dot-busy" />
                  ⚙️ Backend
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '52px', justifyContent: 'center' }}>
              <div className="vline" />
              <div className="vline" />
            </div>
            <div className="hrow" style={{ gap: '9px' }}>
              <div className="node node-child" style={{ fontSize: '11px', padding: '7px 12px' }}>
                <div className="dot-live" />
                🗄️ DB Agent
              </div>
              <div className="node node-child" style={{ fontSize: '11px', padding: '7px 12px' }}>
                <div className="dot-live" />
                🚀 DevOps
              </div>
              <div className="node node-child" style={{ fontSize: '11px', padding: '7px 12px' }}>
                <div className="dot-busy" />
                🔍 QA
              </div>
            </div>
          </div>
          <div className="av-stats">
            <div style={{ textAlign: 'center' }}>
              <div className="av-stat-val">5</div>
              <div className="av-stat-lbl">Active Agents</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="av-stat-val" style={{ color: '#4CAF50' }}>
                73%
              </div>
              <div className="av-stat-lbl">Token Headroom</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="av-stat-val" style={{ color: 'var(--red)' }}>
                0
              </div>
              <div className="av-stat-lbl">Context Resets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
