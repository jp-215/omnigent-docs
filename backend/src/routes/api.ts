import { Router, Request, Response } from 'express';

const router = Router();

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface TutorialStep {
  step: number;
  title: string;
  description: string;
  code: string;
  language: string;
}

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

const features: Feature[] = [
  {
    id: 'persistent-sessions',
    title: 'Persistent Sessions',
    description:
      'Sessions never die. Context is always available across restarts, reconnects, and long coding marathons. Your AI never forgets your codebase.',
    icon: '🔒',
  },
  {
    id: 'multi-agent-team',
    title: 'Multi-Agent Team',
    description:
      'Spawn specialized agents per domain — frontend, backend, database, DevOps. Each expert owns their slice without polluting the others.',
    icon: '🤝',
  },
  {
    id: 'parallel-execution',
    title: 'Parallel Execution',
    description:
      'Run multiple agents simultaneously. While one writes the API, another builds the UI. Ship in hours, not days.',
    icon: '⚡',
  },
  {
    id: 'token-aware-routing',
    title: 'Token-Aware Routing',
    description:
      'Smart delegation keeps each agent within its context limit. Heavy tasks are split and routed to the right specialist automatically.',
    icon: '🧭',
  },
  {
    id: 'session-tree',
    title: 'Session Tree',
    description:
      'Visual hierarchy of all your agents and their work. See who is doing what, interrupt, resume, or fork any session at any time.',
    icon: '🌳',
  },
  {
    id: 'multi-runtime',
    title: 'Works with Claude, Codex & Cursor',
    description:
      'Not locked to one AI. Mix Claude, Codex, and Cursor agents in the same session tree. Use the best model for each job.',
    icon: '🔌',
  },
];

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya K.',
    role: 'Indie hacker, building in public',
    quote:
      "I used to dread the 'context reset' moment — explaining my whole stack from scratch every session. With Omnigent my agents just know. I shipped my SaaS MVP in a weekend.",
    avatar: 'PK',
  },
  {
    id: '2',
    name: 'Marcus T.',
    role: 'Solo fullstack developer',
    quote:
      "The parallel agents feature alone paid for itself. My frontend and backend agents run simultaneously. What used to take 3 hours now takes 40 minutes.",
    avatar: 'MT',
  },
  {
    id: '3',
    name: 'Aisha R.',
    role: 'CS student & vibe coder',
    quote:
      "I'm a student building real projects. Token limits were killing my flow constantly. Omnigent completely changed how I code with AI — it feels like having a real dev team.",
    avatar: 'AR',
  },
];

const tutorialSteps: TutorialStep[] = [
  {
    step: 1,
    title: 'Install Omnigent',
    description:
      'Install the Omnigent CLI via pip. Requires Python 3.9+ and a supported AI provider configured.',
    code: 'pip install omnigent',
    language: 'bash',
  },
  {
    step: 2,
    title: 'Launch Claude in Omnigent',
    description:
      'Start a Claude Code session managed by Omnigent. The CLI spins up the local server and opens a persistent session.',
    code: 'omnigent claude',
    language: 'bash',
  },
  {
    step: 3,
    title: 'Open the Dashboard',
    description:
      'Navigate to the local Omnigent server in your browser. You will see your active session in the session tree.',
    code: 'open http://127.0.0.1:6767',
    language: 'bash',
  },
  {
    step: 4,
    title: 'Spawn Your Agent Team',
    description:
      'From inside Claude, create specialized child sessions for each domain of your project.',
    code: `# Claude will call sys_session_create for each agent
# Frontend Engineer → React, TypeScript, Vite
# Backend Engineer  → Express, API design
# DevOps Engineer   → Docker, CI/CD
# QA Engineer       → Testing, review`,
    language: 'bash',
  },
  {
    step: 5,
    title: 'Delegate and Ship in Parallel',
    description:
      'Send tasks to each agent simultaneously. They run in parallel, report back to the inbox, and you orchestrate from the top.',
    code: `# Dispatch to multiple agents at once
omnigent attach conv_frontend_id
omnigent attach conv_backend_id`,
    language: 'bash',
  },
];

router.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.get('/features', (_req: Request, res: Response) => {
  res.json(features);
});

router.get('/testimonials', (_req: Request, res: Response) => {
  res.json(testimonials);
});

router.get('/tutorial-steps', (_req: Request, res: Response) => {
  res.json(tutorialSteps);
});

router.post('/contact', (req: Request<object, object, ContactBody>, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({
      success: false,
      error: 'All fields are required: name, email, message',
    });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ success: false, error: 'Invalid email address' });
    return;
  }

  res.json({ success: true, message: "Thanks! We'll be in touch soon." });
});

export default router;
