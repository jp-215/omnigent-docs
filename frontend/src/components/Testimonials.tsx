interface Testimonial {
  quote: string
  initials: string
  name: string
  role: string
  avatarGradient: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I used to lose 45 minutes every single day re-explaining my project to the AI after a context reset. With Omnigent, that's completely gone. I spawn a fresh backend agent, the orchestrator briefs it automatically, and I'm back in flow within seconds. It's genuinely changed how I build things.",
    initials: 'AK',
    name: 'Arjun K.',
    role: 'Full-Stack Dev · Solo Founder, Buildfast.app',
    avatarGradient: 'linear-gradient(135deg,#667eea,#764ba2)',
  },
  {
    quote:
      "The parallel execution is insane. My frontend agent built React components while my backend agent simultaneously wrote the API routes. Both finished in the time one would've taken. We shipped our entire MVP in a weekend. Omnigent is basically free senior engineers.",
    initials: 'SL',
    name: 'Sarah L.',
    role: 'CTO · YC S24 Startup',
    avatarGradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
  },
  {
    quote:
      "I'm a designer who codes. My biggest fear was the AI losing context halfway through and breaking the design system we'd built together. Omnigent's persistent sessions mean my frontend agent remembers every token, every color, every spacing rule — across multiple sessions. This is the tool.",
    initials: 'MR',
    name: 'Marcus R.',
    role: 'Design Engineer · Freelance',
    avatarGradient: 'linear-gradient(135deg,#4facfe,#00f2fe)',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="s-eyebrow">Community</div>
      <h2 className="s-title">Vibe coders are shipping faster than ever</h2>
      <p className="s-desc">
        From solo hackers to startup CTOs — here's what happens when you stop fighting token limits
        and start building.
      </p>
      <div className="testi-grid">
        {testimonials.map((t) => (
          <div className="testi-card" key={t.name}>
            <div className="stars">★★★★★</div>
            <p className="testi-q">{t.quote}</p>
            <div className="testi-author">
              <div className="avatar" style={{ background: t.avatarGradient }}>
                {t.initials}
              </div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
