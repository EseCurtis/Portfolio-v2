const skillGroups: Array<{ label: string; skills: string[] }> = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "PHP", "Bash"] },
  {
    label: "Frontend",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "React Router"
    ]
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo", "Push / FCM", "OAuth 2.0"]
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Socket.IO",
      "RabbitMQ",
      "JWT Auth"
    ]
  },
  {
    label: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"]
  },
  {
    label: "AI & Automation",
    skills: ["OpenAI API", "LangChain", "AI Agents", "MCP Servers", "Puppeteer"]
  },
  {
    label: "Integrations",
    skills: [
      "WhatsApp API",
      "Instagram Graph",
      "TikTok API",
      "Twitter / X API",
      "Facebook API",
      "Telegram API",
      "Stripe"
    ]
  },
  {
    label: "Infra & DevOps",
    skills: [
      "Docker",
      "Kubernetes (k3s)",
      "MinIO / S3",
      "Cloudflare",
      "Git / GitHub",
      "Linux"
    ]
  },
  {
    label: "Security",
    skills: [
      "Penetration Testing",
      "Exploit / PoC Dev",
      "Vulnerability Analysis",
      "Security Auditing"
    ]
  }
];

export function CTASection(): React.JSX.Element {
  return (
    <section className="pb-12" id="skills">
      <h2 className="section-label section-heading">Skills</h2>
      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section className="py-6" key={group.label}>
            <h3 className="section-label text-[var(--accent)]">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  className="skill-pill text-xs text-[var(--muted)]"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
