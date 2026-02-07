---
name: Veritas - 100 Days of Responsible AI Engineering
description: Agent skill file for developing and maintaining the Veritas project - a Next.js 16 educational content series on Responsible AI Engineering.
---

# Veritas Project Skill

## Project Overview

**Veritas** is a technical educational content series called **"100 Days of Responsible AI Engineering"**. It's a Next.js 16 application that delivers daily content focusing on production-grade AI engineering practices, including reproducibility, safety, governance, and production deployment patterns.

### Core Value Proposition

- Senior-engineer focused technical content
- Daily unlocking mechanism (content releases based on 2026 calendar)
- MDX-based articles with code examples, math support (KaTeX), and interactive components
- Emphasis on preventing failure modes in AI systems

---

## Technology Stack

| Category           | Technology                        | Version          |
| ------------------ | --------------------------------- | ---------------- |
| **Framework**      | Next.js (App Router)              | 16.1.0           |
| **Runtime**        | React                             | 19.2.3           |
| **Language**       | TypeScript                        | ^5               |
| **Styling**        | Tailwind CSS                      | ^4               |
| **Content**        | MDX (next-mdx-remote)             | ^5.0.0           |
| **Math Rendering** | KaTeX (rehype-katex, remark-math) | ^0.16.27         |
| **Markdown**       | remark-gfm                        | ^4.0.1           |
| **Icons**          | lucide-react                      | ^0.562.0         |
| **Effects**        | react-parallax-tilt               | ^1.7.315         |
| **Data Fetching**  | @tanstack/react-query             | ^5.90.12         |
| **Analytics**      | @vercel/analytics                 | ^1.6.1           |
| **Linting**        | ESLint                            | ^9               |
| **Git Hooks**      | Husky + lint-staged               | ^9.1.7 / ^16.2.7 |
| **Deployment**     | Vercel                            | -                |

---

## Project Structure

```
veritas/
├── app/                          # Next.js App Router
│   ├── components/               # Shared React components
│   │   ├── CodeBlock.tsx         # Syntax-highlighted code blocks
│   │   ├── Footer.tsx            # Site footer
│   │   ├── LensTag.tsx           # Category/lens tag component
│   │   └── NavBar.tsx            # Navigation bar
│   ├── day/[id]/                 # Dynamic day article pages
│   │   ├── page.tsx              # Day content renderer
│   │   └── page.module.css       # Day-specific styles
│   ├── days/                     # Days listing/syllabus page
│   ├── about/                    # About page
│   ├── audit-log/                # Audit log page
│   ├── license/                  # License page
│   ├── methodology/              # Methodology page
│   ├── api/                      # API routes (e.g., OG image generation)
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── page.module.css           # Homepage styles
├── content/
│   └── days/                     # MDX content files (001.mdx - 050.mdx+)
├── lib/
│   ├── days-registry.ts          # Day metadata, unlocking logic, audit log generation
│   └── days.ts                   # File system utilities for reading day content
├── public/                       # Static assets
├── .husky/                       # Git hooks configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
└── eslint.config.mjs             # ESLint configuration
```

---

## Key Files & Their Purpose

### `lib/days-registry.ts`

The central registry for all 100 days. Contains:

- **`DayRegistryItem`**: Interface for day metadata (id, title, failure, lens, domain)
- **`daysRegistry`**: Array of all day definitions
- **`isDayUnlocked(id)`**: Checks if a day is accessible based on current date (2026 calendar)
- **`getDayOfYear2026()`**: Maps current date to day number
- **`getAuditLogEntries()`**: Generates audit log entries for all unlocked days

### `lib/days.ts`

File system utilities for MDX content:

- **`getDayData(id)`**: Reads and parses a single day's MDX file
- **`getAllDays()`**: Returns metadata for all available days

### `content/days/*.mdx`

MDX files with frontmatter structure:

```yaml
---
title: "Day Title"
failure: "Failure Mode Prevented"
lens: "Primary Lens (e.g., Governance, Safety, Ethics)"
domain: "Technical Domain (e.g., MLOps, LLMs, Data Infra)"
day: "042"
status: "locked" # or "done"
tags: ["Tag1", "Tag2", "Tag3"]
date: "2026-02-18"
---
```

---

## Common Development Tasks

### Adding a New Day

1. **Create the MDX file**: `content/days/XXX.mdx` (3-digit padded)
2. **Add entry to registry**: Update `lib/days-registry.ts` with new `DayRegistryItem`
3. **Update previous day's "Next Steps"**: Edit the preceding day's MDX to reference the new day

### Unlocking a Day

Days unlock automatically based on the 2026 calendar. The `isDayUnlocked()` function compares the day ID (as number) to the current day of the year.

### Running the Development Server

```bash
pnpm dev        # or npm run dev
```

Opens at: http://localhost:3000

### Building for Production

```bash
pnpm build      # or npm run build
```

### Linting

```bash
pnpm lint       # or npm run lint
```

---

## Content Guidelines

### MDX File Structure

Each day should follow this consistent structure:

1. **Abstract** - Brief overview of the topic
2. **Why This Topic Matters** - Business/engineering context
3. **Core Concepts & Mental Models** - Key frameworks
4. **Production-Grade Implementation** - Code examples
5. **Hands-On Project / Exercise** - Practical application
6. **Required Trade-offs to Surface** - Real-world considerations
7. **Ethical, Security & Safety Considerations** - Responsible AI aspects
8. **Business & Strategic Implications** - Value proposition
9. **Common Pitfalls & Misconceptions** - What to avoid
10. **Prerequisites & Next Steps** - Learning path continuity
11. **Further Reading & Resources** - External references

### Code Examples

- Use Python for ML/AI examples
- Include realistic, production-grade patterns
- Always show governance/safety considerations
- Use proper async patterns where applicable

### Lenses (Primary Focus Areas)

- **Reproducibility** - Deterministic pipelines, versioning
- **Safety** - Guardrails, failure prevention
- **Governance** - Compliance, auditability
- **Production** - Scalability, observability
- **Security** - Adversarial defense, data protection
- **Ethics** - Fairness, transparency
- **Human Factors** - Explainability, UX

---

## Styling Conventions

### CSS Modules

Each page/component uses `.module.css` files for scoped styling.

### Design System Variables (in `globals.css`)

- `--background` / `--background-secondary`
- `--foreground`
- `--text-secondary`
- `--accent-color`
- `--border-color`

### Responsive Design

- Max container width: typically 1200px
- Mobile-first approach with media queries

---

## API Routes

### `/api/og`

Generates Open Graph images dynamically for social sharing.

- Query param: `?day=XXX`
- Returns: Dynamic image with day title/metadata

---

## Deployment

The project is deployed on **Vercel**. Configuration is in `.vercel/` directory.

### Environment Variables

Located in `.env.local`:

- Contains API keys and configuration (not committed to git)

---

## Best Practices

1. **Always update both the registry AND create the MDX file** when adding new days
2. **Maintain continuity** - Update "Next Steps" sections to link days together
3. **Test MDX parsing** - Run dev server to catch any MDX syntax errors
4. **Use consistent frontmatter** - All fields are required for proper rendering
5. **Preserve the audit trail** - The audit log page reflects content releases
6. **Keep code examples realistic** - Focus on production patterns, not toy examples
7. **Consider the lens** - Each day should clearly address its primary responsibility lens

---

## Troubleshooting

### MDX Runtime Errors

- Check for unclosed HTML tags in MDX content
- Ensure all JSX expressions are properly escaped
- Verify frontmatter YAML syntax

### Day Not Showing

- Check if day ID is in `daysRegistry`
- Verify date-based unlocking logic (2026 calendar)
- Ensure MDX file exists with correct naming (3-digit padded)

### Styling Issues

- Check CSS module imports
- Verify Tailwind v4 compatibility
- Clear `.next` cache if styles aren't updating

---

## Related Documentation

- [Next.js 16 App Router](https://nextjs.org/docs/app)
- [MDX Remote](https://github.com/hashicorp/next-mdx-remote)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [KaTeX](https://katex.org/docs/supported.html)
- [Lucide Icons](https://lucide.dev/icons/)
