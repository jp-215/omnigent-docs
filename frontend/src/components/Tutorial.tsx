import { useState } from 'react'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import python from 'highlight.js/lib/languages/python'
import 'highlight.js/styles/atom-one-dark.css'

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('python', python)

// ── CodeBlock ──────────────────────────────────────────────────────────────

interface CodeBlockProps {
  lang: 'bash' | 'python'
  code: string
}

function CodeBlock({ lang, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const highlighted = hljs.highlight(code, { language: lang })

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="code-wrap">
      <div className="code-head">
        <span className="code-lang">{lang}</span>
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code
          className={`hljs language-${lang}`}
          dangerouslySetInnerHTML={{ __html: highlighted.value }}
        />
      </pre>
    </div>
  )
}

// ── Code strings ─────────────────────────────────────────────────────────────

const CODE_STEP1 = `pip install omnigent

# Verify the install
omnigent --version
# omnigent v1.4.0`

const CODE_STEP2 = `# Start with Claude (recommended)
omnigent claude

# Or with OpenAI
omnigent openai --model gpt-4o

# Or a local model via Ollama
omnigent openai --base-url http://localhost:11434/v1 --model llama3.1`

const CODE_STEP3 = `# Open manually if the browser didn't auto-launch
open http://127.0.0.1:6767

# Or check the server status via curl
curl http://127.0.0.1:6767/api/status
# {"status":"running","session":"my-app","agents":1,"version":"1.4.0"}`

const CODE_STEP4 = `from omnigent import Session

session = Session.connect("my-app")

frontend = session.spawn_agent(
    name="frontend",
    role="Senior React/TypeScript Engineer",
    context_files=["src/components/", "src/hooks/", "src/store/"],
    model="claude-sonnet-4-6",
)

backend = session.spawn_agent(
    name="backend",
    role="Backend Engineer, FastAPI + PostgreSQL expert",
    context_files=["api/", "models/", "migrations/"],
    model="claude-sonnet-4-6",
)

devops = session.spawn_agent(
    name="devops",
    role="DevOps Engineer, Docker + Railway specialist",
    context_files=["Dockerfile", "docker-compose.yml", ".github/"],
    model="claude-haiku-4-5",  # cheaper model for simpler tasks
)

print([a.name for a in session.agents])
# ['orchestrator', 'frontend', 'backend', 'devops']`

const CODE_STEP5 = `import asyncio
from omnigent import Session

session = Session.connect("my-app")

async def main():
    results = await asyncio.gather(
        session.agent("frontend").task(
            "Build UserProfileCard with avatar, name, role, and edit button. "
            "Use design tokens from src/tokens.ts — no hardcoded values."
        ),
        session.agent("backend").task(
            "Add PATCH /api/users/{id} endpoint. "
            "Validate with Pydantic, persist to PostgreSQL, return updated user."
        ),
        session.agent("devops").task(
            "Add GitHub Actions: run pytest on every PR, "
            "deploy to Railway on merge to main."
        ),
    )

    for r in results:
        print(f"[{r.agent}] ✓ {r.summary}")
        print(f"  Files: {r.files_modified}")
        print(f"  Tokens: {r.tokens_used:,}\\n")

asyncio.run(main())

# [frontend] ✓ UserProfileCard component created with full TypeScript types
#   Files: ['src/components/UserProfileCard.tsx', '...test.tsx']
#   Tokens: 8,432

# [backend] ✓ PATCH endpoint with Pydantic validation and optimistic update
#   Files: ['api/routes/users.py', 'api/schemas/user.py', 'tests/test_users.py']
#   Tokens: 11,204

# [devops] ✓ CI/CD pipeline configured for Railway auto-deploy
#   Files: ['.github/workflows/ci.yml', '.github/workflows/deploy.yml']
#   Tokens: 4,891`

// ── Step nav labels ───────────────────────────────────────────────────────────

const STEP_LABELS = [
  'Install Omnigent',
  'Launch a Session',
  'Open in Browser',
  'Spawn Subagents',
  'Delegate & Run',
]

// ── Tutorial component ────────────────────────────────────────────────────────

export default function Tutorial() {
  const [activeStep, setActiveStep] = useState(0)

  const navItemClass = (idx: number) => {
    if (idx === activeStep) return 'tut-item on'
    if (idx < activeStep) return 'tut-item done'
    return 'tut-item'
  }

  return (
    <section className="section section-alt" id="tutorial">
      <div className="s-eyebrow">Tutorial</div>
      <h2 className="s-title">Get up and running in 5 minutes</h2>
      <p className="s-desc">
        Follow these steps to launch your first Omnigent session and spawn your first multi-agent
        team.
      </p>

      <div className="tut-shell">
        {/* Step nav */}
        <div className="tut-nav">
          <div className="tut-nav-head">Steps</div>
          {STEP_LABELS.map((label, idx) => (
            <div key={label} className={navItemClass(idx)} onClick={() => setActiveStep(idx)}>
              <div className="tut-num">{idx + 1}</div>
              {label}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="tut-body">
          {/* ── Step 1 ── */}
          <div className={`tut-step${activeStep === 0 ? ' on' : ''}`}>
            <div className="step-hd">
              <span className="step-badge">STEP 1</span>
              <h3 className="step-title">Install Omnigent</h3>
            </div>
            <p className="step-desc">
              Omnigent is available on PyPI. Install it globally with pip. Python 3.9 or later is
              required.
            </p>
            <CodeBlock lang="bash" code={CODE_STEP1} />
            <p className="step-desc" style={{ marginBottom: 0, marginTop: '14px' }}>
              Prefer isolated installs? Use <span className="ic">pipx install omnigent</span> to
              keep it sandboxed from project dependencies.
            </p>
            <div className="step-note">
              <strong>Note:</strong> Behind a corporate proxy? Set{' '}
              <span className="ic">HTTPS_PROXY</span> before running pip. Conda users:{' '}
              <span className="ic">conda install -c conda-forge omnigent</span>
            </div>
            <div className="step-btns">
              <button className="btn btn-primary" onClick={() => setActiveStep(1)}>
                Next Step →
              </button>
            </div>
          </div>

          {/* ── Step 2 ── */}
          <div className={`tut-step${activeStep === 1 ? ' on' : ''}`}>
            <div className="step-hd">
              <span className="step-badge">STEP 2</span>
              <h3 className="step-title">Launch a Session</h3>
            </div>
            <p className="step-desc">
              Start Omnigent with your preferred AI provider. On first run it prompts for an API key
              and stores it securely in your config.
            </p>
            <CodeBlock lang="bash" code={CODE_STEP2} />
            <div className="step-note">
              <strong>Tip:</strong> Use{' '}
              <span className="ic">omnigent claude --session my-app</span> to name your session.
              Named sessions persist between restarts — rerun the same command to resume exactly
              where you left off.
            </div>
            <div className="step-btns">
              <button className="btn btn-back btn" onClick={() => setActiveStep(0)}>
                ← Back
              </button>
              <button className="btn btn-primary" onClick={() => setActiveStep(2)}>
                Next Step →
              </button>
            </div>
          </div>

          {/* ── Step 3 ── */}
          <div className={`tut-step${activeStep === 2 ? ' on' : ''}`}>
            <div className="step-hd">
              <span className="step-badge">STEP 3</span>
              <h3 className="step-title">Open in Browser</h3>
            </div>
            <p className="step-desc">
              Omnigent serves a local web UI at{' '}
              <span className="ic">http://127.0.0.1:6767</span>. It opens automatically, but you
              can navigate there anytime to see your session tree and agent outputs.
            </p>
            <CodeBlock lang="bash" code={CODE_STEP3} />
            <div
              className="callout"
              style={{ marginTop: '14px' }}
            >
              <div className="callout-ico">🌐</div>
              <div>
                <h4>Remote Server?</h4>
                <p>
                  Run <span className="ic">omnigent claude --host 0.0.0.0</span> on the server,
                  then SSH tunnel:{' '}
                  <span className="ic">ssh -L 6767:localhost:6767 user@your-server</span>
                </p>
              </div>
            </div>
            <div className="step-btns">
              <button className="btn btn-back btn" onClick={() => setActiveStep(1)}>
                ← Back
              </button>
              <button className="btn btn-primary" onClick={() => setActiveStep(3)}>
                Next Step →
              </button>
            </div>
          </div>

          {/* ── Step 4 ── */}
          <div className={`tut-step${activeStep === 3 ? ' on' : ''}`}>
            <div className="step-hd">
              <span className="step-badge">STEP 4</span>
              <h3 className="step-title">Spawn Your First Subagent Team</h3>
            </div>
            <p className="step-desc">
              From the UI or the Python SDK, spawn specialized agents for each domain. Each agent
              gets its own context window, system prompt, and tool access.
            </p>
            <CodeBlock lang="python" code={CODE_STEP4} />
            <div className="step-note">
              <strong>Tip:</strong> Pass <span className="ic">context_files</span> carefully — each
              agent only loads what it needs. Tight context = more token headroom = sharper outputs.
            </div>
            <div className="step-btns">
              <button className="btn btn-back btn" onClick={() => setActiveStep(2)}>
                ← Back
              </button>
              <button className="btn btn-primary" onClick={() => setActiveStep(4)}>
                Next Step →
              </button>
            </div>
          </div>

          {/* ── Step 5 ── */}
          <div className={`tut-step${activeStep === 4 ? ' on' : ''}`}>
            <div className="step-hd">
              <span className="step-badge">STEP 5</span>
              <h3 className="step-title">Delegate Tasks &amp; Watch Them Run</h3>
            </div>
            <p className="step-desc">
              Delegate tasks to specialized agents or let the orchestrator auto-route. Everything
              runs in parallel — three agents shipping three features simultaneously.
            </p>
            <CodeBlock lang="python" code={CODE_STEP5} />
            <div
              className="callout"
              style={{
                marginTop: '14px',
                background: 'rgba(76,175,80,.06)',
                borderColor: 'rgba(76,175,80,.2)',
              }}
            >
              <div className="callout-ico">🎉</div>
              <div>
                <h4 style={{ color: '#4CAF50' }}>
                  You're done. Welcome to the future of vibe coding.
                </h4>
                <p>
                  Three agents just shipped three features in the time it would've taken you to
                  re-paste context into a single chat window. Token limits? Never heard of them.
                </p>
              </div>
            </div>
            <div className="step-btns">
              <button className="btn btn-back btn" onClick={() => setActiveStep(3)}>
                ← Back
              </button>
              <a href="#features" className="btn btn-primary">
                Explore All Features →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
