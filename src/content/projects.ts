import type { Project } from '@/types/content'

export const projects: Project[] = [
  {
    slug: 'enterprise-ai-knowledge-platform',
    name: 'Enterprise AI Knowledge Platform',
    tagline: 'Full-stack RAG platform for secure, cited enterprise document Q&A',
    description:
      'A Retrieval-Augmented Generation platform that lets teams query enterprise documents and get answers with source citations, backed by JWT authentication, role-based access control, and a full audit trail.',
    date: 'Jul 2026',
    status: 'shipped',
    featured: true,
    techStack: [
      { category: 'Backend', items: ['FastAPI', 'SQLAlchemy', 'Alembic'] },
      { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Data', items: ['PostgreSQL 16', 'pgvector'] },
      { category: 'AI / RAG', items: ['Ollama (local)', 'nomic-embed-text', 'Llama 3.2', 'Gemini (cloud)'] },
      { category: 'Auth & Governance', items: ['JWT', 'bcrypt', 'Role-based access control', 'Audit logging'] },
      { category: 'Infra', items: ['Docker', 'Render', 'Vercel'] },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/antima1202/nexus-enterprise-knowledge-platform' },
    ],
    detail: {
      problem:
        'Enterprise teams need to query large, sensitive document sets in natural language, but generic LLM chat has no source traceability, no access control, and no audit trail - non-starters for enterprise governance.',
      architecture: [
        'Ingestion: PDF and DOCX documents are parsed and split into semantic chunks',
        'Embedding: chunks are embedded with nomic-embed-text and stored in PostgreSQL via pgvector',
        'Retrieval: incoming queries are embedded and matched via cosine similarity search to pull the top-5 most relevant chunks',
        'Generation: retrieved chunks are passed as context to Llama 3.2 (via Ollama, fully local) or Gemini (deployed version) to synthesize a cited answer',
        'Governance: JWT + bcrypt authentication and role-based access control are enforced at both the API and vector-query level, with every query logged to an audit trail alongside sources, similarity scores, and user identity',
      ],
      challenges: [
        'Why pgvector over a dedicated vector DB like Pinecone: zero additional infrastructure for an MVP, and retrieval is abstracted behind a service interface so the backing store is a one-class swap, not a rewrite',
        'Why Ollama over a hosted-only model: fully local deployment means documents never leave the machine, which is a real requirement for regulated industries - Gemini is used only for the public demo, gated by free-tier rate limits',
      ],
      lessons: [
        'Skipped LangChain deliberately - the RAG pipeline is roughly 100 lines of Python, and writing it from scratch means every component (chunking, embedding, retrieval, generation) is explainable and independently replaceable',
        'RBAC has to be enforced at the retrieval layer, not just the API layer, or a permitted query can still surface chunks from documents a user shouldn’t see',
      ],
    },
  },
  {
    slug: 'student-wellbeing-dashboard',
    name: 'Student Wellbeing Project',
    tagline: 'Role-based dashboards for tracking student attendance, performance, and wellbeing',
    description:
      'A team project (built with a fellow Warwick MSc classmate) giving students, tutors, module admins, and wellbeing staff role-specific dashboards to track attendance, assignments, and wellbeing survey responses - including flagging high-risk students by stress and sleep patterns.',
    date: 'Nov 2025',
    status: 'shipped',
    featured: false,
    techStack: [
      { category: 'Backend', items: ['Flask (Python)'] },
      { category: 'Database', items: ['SQLite'] },
      { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Jinja2'] },
      { category: 'Visualization', items: ['Chart.js'] },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/AkankshCaimi/PAI-Student-Wellbeing-Project' },
    ],
    detail: {
      problem:
        'Attendance, assignment performance, and wellbeing data for a student cohort typically live in separate places, making it hard for tutors and wellbeing staff to spot students who need support before it becomes urgent.',
      architecture: [
        'Role-based dashboards for Students, Tutors, Module Admins, and Wellbeing Staff, each with a distinct view',
        'Tutors and admins upload attendance and assignment records via CSV; the app parses and stores them in SQLite',
        'Students submit wellbeing surveys directly; wellbeing staff view aggregated stress and sleep-pattern analytics to identify high-risk students',
        'Interactive charts (Chart.js) summarize attendance and performance per student and per cohort',
      ],
      challenges: [],
      lessons: [],
    },
  },
  {
    slug: 'supermarket-basket-analysis',
    name: 'Supermarket Basket Analysis',
    tagline: 'Co-purchase graph and recommendation engine built with TDD',
    description:
      'An undirected weighted co-occurrence graph over supermarket transaction data, with algorithms for item recommendation and bundle (pair/triplet) analysis - built test-first, with a separate experiments branch comparing algorithm choices head to head.',
    date: 'Dec 2025',
    status: 'shipped',
    featured: false,
    techStack: [
      { category: 'Core', items: ['Python', 'pandas', 'NetworkX', 'Matplotlib'] },
      { category: 'Testing', items: ['unittest', 'TDD'] },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/antima1202/Supermarket-Basket-Analysis' },
    ],
    detail: {
      problem:
        'Given raw supermarket transaction data, identify which items are commonly bought together, in a way that supports both single-item recommendations and multi-item basket analysis.',
      architecture: [
        'Transactions are loaded from CSV and used to build an undirected, weighted adjacency-list graph where edge weight is co-purchase frequency',
        'A BFS-based recommendation engine suggests top-K items likely to be purchased with a given item or itemset',
        'Bundle analysis mines the graph for top product pairs and triplets (graph triangles)',
        'An experiments branch benchmarks alternative implementations - BFS vs DFS, Timsort vs bubble sort, adjacency list vs adjacency matrix - to make the algorithmic trade-offs explicit rather than assumed',
      ],
      challenges: [
        'Kept the core implementation and the experimental/alternative algorithms in separate branches so the main branch stays a clean reference implementation while still preserving the comparison work',
      ],
      lessons: [
        'Writing tests first for graph operations (recommendations, bundle mining) made it much easier to trust the BFS vs DFS and sorting comparisons, since both sides were checked against the same test suite',
      ],
    },
  },
  {
    slug: 'vtap',
    name: 'VTap',
    tagline: 'AI-powered payment routing concept - Top 4 finalist, Google London',
    statusNote: 'Concept / pitch',
    description:
      'A product pitch for an app that automatically selects the best card for a payment, pools balances across cards, and enforces spending limits before a transaction is made - built as a concept with a working prototype design, not a shipped product. Selected as a Top 4 finalist out of 26 teams and presented to judges from Google and NatWest.',
    date: 'Mar 2026',
    status: 'in-progress',
    featured: false,
    techStack: [
      { category: 'Concept', items: ['Rule-based linear optimizer', 'Deep Q-Network (proposed)', 'Open Banking APIs'] },
    ],
    links: [
      { label: 'Prototype (Figma)', url: 'https://bone-bobbin-14163220.figma.site/' },
    ],
    detail: {
      problem:
        'Managing multiple cards is complex: payments fail because the wrong card is used, balances are split across accounts, and overspending is only visible after the fact. UK Finance data cited in the pitch put declined transactions at roughly 250M+ annually at a 12-15% decline rate.',
      architecture: [
        'A rule-based linear optimizer picks the best card per transaction from user-set constraints (simple, interpretable, and the proposed first version)',
        'A Deep Q-Network was proposed as a longer-term direction, learning from spending patterns to optimize card choice for long-term reward rather than a single transaction',
        'The plan relied on UK Open Banking APIs (evaluated TrueLayer, Yapily, Plaid, Salt Edge) for account access, with a phased regulatory path from an initial partner-based model up to full AISP/PISP authorisation',
      ],
      challenges: [
        'This stayed a pitch, not a build: the team scoped the product, the AI approach, the security model, competitive positioning against Revolut/Curve/Emma, and a funding/regulatory plan, but did not implement the optimizer or integrate real banking APIs',
      ],
      lessons: [
        'Presenting to judges from Google and NatWest meant the pitch had to hold up on both the technical approach and the regulatory/business case (FCA authorisation paths, unit economics) - not just the AI idea',
      ],
    },
  },
  {
    slug: 'xai-supply-chain-return-analysis',
    name: 'XAI Supply Chain Return Analysis',
    tagline: 'Explainable AI for product-return root-cause analysis in fashion e-commerce',
    statusNote: 'MSc dissertation: in progress',
    description:
      'MSc dissertation project: a framework that analyses confirmed product returns in a fashion e-commerce supply chain to classify why a return happened and route actionable recommendations to the responsible operational team - combining transactional data, customer review text (NLP), and explainable ML (SHAP) rather than just predicting whether a return will happen.',
    date: '',
    status: 'in-progress',
    featured: false,
    techStack: [
      { category: 'ML / NLP', items: ['Root-cause classification', 'NLP customer feedback analysis'] },
      { category: 'Explainability', items: ['SHAP'] },
      { category: 'Planned', items: ['Recommendation engine', 'Linear programming (operational optimisation)', 'Decision support dashboard'] },
    ],
    links: [],
    detail: {
      problem:
        'Traditional return-prediction systems try to forecast whether a customer will return an item. This framework operates post-return instead: given a confirmed return, classify why it happened and generate targeted, stakeholder-specific supply chain recommendations.',
      architecture: [
        'Data collection and integration of transactional and customer feedback data',
        'NLP analysis of customer feedback text',
        'ML-based root cause classification of returns',
        'Explainable AI layer using SHAP to make classifications interpretable',
        'Root cause analysis and risk assessment layers',
        'Planned: a recommendation engine, operational optimisation via linear programming, a stakeholder decision-support dashboard, and a continuous feedback loop',
      ],
      challenges: [],
      lessons: [],
    },
  },
]

export const featuredProject = projects.find((p) => p.featured)!
