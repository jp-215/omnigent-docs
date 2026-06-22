export default function CTABanner() {
  return (
    <section className="section section-dark" id="cta" style={{ borderBottom: 'none' }}>
      <div className="hero-badge" style={{ justifyContent: 'center', margin: '0 auto 22px', display: 'inline-flex' }}>
        <span className="pulse" />
        Free to start · No credit card required
      </div>
      <h2
        className="s-title inv"
        style={{
          textAlign: 'center',
          maxWidth: '540px',
          margin: '0 auto 14px',
          fontSize: 'clamp(26px, 3.5vw, 44px)',
        }}
      >
        Ready to stop fighting token limits?
      </h2>
      <p
        className="s-desc inv"
        style={{ textAlign: 'center', margin: '0 auto 34px' }}
      >
        Install Omnigent in 30 seconds and ship your next feature without a single context reset.
      </p>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#tutorial" className="btn btn-primary btn-lg">
          pip install omnigent →
        </a>
        <a href="#what-is" className="btn btn-ghost btn-lg">
          Read the Docs
        </a>
      </div>
    </section>
  )
}
