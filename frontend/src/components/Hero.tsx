export default function Hero() {
  return (
    <section
      className="section"
      id="hero"
      style={{ padding: '92px 60px 76px', background: 'var(--dark)', borderBottom: 'none' }}
    >
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="pulse" />
          Now in Public Beta — v1.4.0
        </div>
        <h1 className="hero-h1">
          Stop Losing Your
          <br />
          Flow to <span className="grad-text">Token Limits.</span>
        </h1>
        <p className="hero-sub">
          <strong>Omnigent</strong> is the multi-agent orchestration platform built for vibe coders.
          Keep sessions alive forever, spawn specialized subagents, and maintain full project context
          — no matter how deep the rabbit hole goes.
        </p>
        <div className="hero-actions">
          <a href="#tutorial" className="btn btn-primary btn-lg">
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Get Started Free
          </a>
          <a href="#what-is" className="btn btn-ghost btn-lg">
            Read the Docs
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-val">∞</div>
            <div className="stat-lbl">Effective context window</div>
          </div>
          <div>
            <div className="stat-val">
              6<em>+</em>
            </div>
            <div className="stat-lbl">AI providers supported</div>
          </div>
          <div>
            <div className="stat-val">
              10<em>×</em>
            </div>
            <div className="stat-lbl">Faster than re-prompting</div>
          </div>
          <div>
            <div className="stat-val">0</div>
            <div className="stat-lbl">Context resets needed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
