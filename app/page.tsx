import {
  contactsUrl,
  myProjects
} from "@/src/utils/shared/constants.util.shared";
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = myProjects.slice(0, 6);
const leadProject =
  myProjects.find((project) => project.title === "Tplex Brand") ?? myProjects[0];
const projectQueue = [
  leadProject,
  ...featuredProjects.filter((project) => project.title !== leadProject.title)
];
const supportingProjects = projectQueue.slice(1, 3);
const archiveProjects = projectQueue.slice(3);
const services = [
  [
    "01",
    "Product engineering",
    "Turning ambitious product ideas into fast, durable software."
  ],
  [
    "02",
    "Interface direction",
    "Designing the interaction, motion, and visual language that makes products feel inevitable."
  ],
  [
    "03",
    "AI systems",
    "Practical AI features, automations, and agents that remove friction from real workflows."
  ]
];

type Project = (typeof myProjects)[number];

type ProjectCardProps = {
  project: Project;
  projectNumber: number;
  variant: "compact" | "lead";
};

function ProjectCard({
  project,
  projectNumber,
  variant
}: ProjectCardProps): React.JSX.Element {
  const projectNumberLabel = String(projectNumber).padStart(2, "0");

  return (
    <a
      className={`project-card project-card--${variant}`}
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-image-wrap">
        <Image
          alt={project.title}
          className="project-image"
          fill
          sizes={
            variant === "lead"
              ? "(max-width: 700px) 100vw, 65vw"
              : "(max-width: 700px) 100vw, 35vw"
          }
          src={project.coverImageUrl}
        />
        <span className="project-image-label">
          {variant === "lead" ? "Featured project" : project.tagLine}
        </span>
        <span className="project-image-arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="project-card-caption">
        <div className="project-card-heading">
          <p className="project-index">{projectNumberLabel}</p>
          <h3>{project.title}</h3>
        </div>
        <p className="project-card-tag">{project.tagLine}</p>
        {variant === "lead" ? (
          <p className="project-card-description">{project.description}</p>
        ) : null}
        <span className="project-card-link">
          Visit live <MoveUpRight aria-hidden="true" size={16} />
        </span>
      </div>
    </a>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <main className="studio-page">
      <nav className="studio-nav" aria-label="Main navigation">
        <Link className="studio-mark" href="/" aria-label="Ese Curtis home">
          Ese.Szn
        </Link>
        <div className="studio-nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <Link href="/cv">Résumé</Link>
        </div>
        <a className="studio-contact" href={contactsUrl.email}>
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <section className="studio-hero !bg-transparent" aria-labelledby="hero-title">
        <Image
          alt="Ese Curtis in his studio"
          className="hero-bg opacity-10"
          fill
          priority
          sizes="100vw"
          src="/media/studio/ese-studio-wide.png"
        />
     
        <div className="hero-copy ">
          
          <h1 id="hero-title">
           
            <em className="hero-name">Ese Curtis</em>
            <br />
            Product engineer
            <br />
            <em>&amp; creative technologist.</em>
          </h1>
          <p className="hero-role">
            I design and build digital products, brand experiences, and AI
            systems.
          </p>
        </div>
        <div className="hero-bottomline">
          <p>Sharp, useful experiences for people and the teams behind them.</p>
          <a className="scroll-cue" href="#work">
            <span>Scroll to explore</span>
            <ArrowDownRight size={18} />
          </a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span>EC</span>
          <i />
        </div>
      </section>
      <section className="intro-strip" id="about">
        <p className="eyebrow">01 / The short version</p>
        <div className="intro-copy">
          <p className="intro-lead">
            I work where <span>design, engineering,</span> and a little bit of
            obsession meet.
          </p>
          <p className="intro-detail">
            From AI-native tools to mobile products and expressive brand sites,
            I help ideas become clear, clickable, and ready for the real world.
          </p>
        </div>
      </section>
      <section className="studio-image-break">
        <Image
          alt="Ese Curtis in his creative studio"
          fill
          sizes="100vw"
          src="/media/studio/ese-studio-wide.png"
        />
        <div>
          <div className="studio-break-copy"><b>02 / In the studio</b><span>Making space<br /><em>for good ideas.</em></span><p>Research, rough edges, and the quiet hours where a product starts to feel like itself.</p></div>
          <div className="studio-break-meta"><span>Lagos, NG</span><span>Working notes / 2026</span></div>
        </div>
      </section>
      <section className="work-section" id="work">
        <div className="section-topline">
          <p className="eyebrow">02 / Selected work</p>
          <span>06 projects / 2019 — 2026</span>
        </div>
        <div className="work-intro">
          <h2>
            Work with
            <br />
            <em>a point of view.</em>
          </h2>
          <p>
            A closer look at the products, brand systems, and digital
            experiences I have helped shape from first idea to live release.
          </p>
        </div>
        <div className="work-showcase">
          <ProjectCard project={leadProject} projectNumber={1} variant="lead" />
          <div className="project-support">
            {supportingProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                projectNumber={index + 2}
                variant="compact"
              />
            ))}
          </div>
        </div>
        <div className="project-archive">
          <div className="project-archive-heading">
            <span>More in the archive</span>
            <span>03 — 06</span>
          </div>
          <div className="project-index-list">
            {archiveProjects.map((project, index) => (
              <a
                className="project-index-row"
                href={project.liveUrl}
                key={project.title}
                rel="noreferrer"
                target="_blank"
              >
                <span className="project-index-row-number">
                  {String(index + 4).padStart(2, "0")}
                </span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.tagLine}</p>
                </div>
                <p className="project-index-row-description">
                  {project.description}
                </p>
                <MoveUpRight aria-hidden="true" size={18} />
              </a>
            ))}
          </div>
        </div>
        <Link className="text-link" href="/cv#projects">
          See the full résumé archive <ArrowUpRight size={16} />
        </Link>
      </section>
      <section className="process-section">
        <div className="section-topline">
          <p className="eyebrow">03 / How I work</p>
          <span>Clarity before complexity</span>
        </div>
        <div className="process-grid">
          <article>
            <span>01</span>
            <h2>Find the signal</h2>
            <p>
              Understand the people, the problem, and the one thing that should
              feel unmistakable.
            </p>
          </article>
          <article>
            <span>02</span>
            <h2>Make it tangible</h2>
            <p>
              Turn the direction into flows, screens, systems, and a point of
              view people can feel.
            </p>
          </article>
          <article>
            <span>03</span>
            <h2>Ship with care</h2>
            <p>
              Build the details that make the experience fast, expressive, and
              ready for real life.
            </p>
          </article>
        </div>
      </section>
      <section className="services-section">
        <div className="section-topline">
          <p className="eyebrow">03 / What I do</p>
          <span>Good work, thoughtfully made</span>
        </div>
        <div className="services-list">
          {services.map(([number, title, description]) => (
            <article className="service-row" key={number}>
              <span>{number}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <ArrowUpRight size={18} />
            </article>
          ))}
        </div>
      </section>
      <section className="skills-section">
        <div className="section-topline">
          <p className="eyebrow">04 / The toolkit</p>
          <span>Range is useful when it has a point of view</span>
        </div>
        <div className="skills-layout">
          <p className="skills-lead">
            The details change.
            <br />
            <em>The standard stays high.</em>
          </p>
          <div className="skills-groups">
            <div>
              <span>Build</span>
              <p>
                React · Next.js · TypeScript · Node.js · React Native ·
                PostgreSQL
              </p>
            </div>
            <div>
              <span>Shape</span>
              <p>
                Product thinking · UI systems · Motion · Prototyping · Figma ·
                Framer
              </p>
            </div>
            <div>
              <span>Extend</span>
              <p>
                AI agents · OpenAI APIs · Automation · Integrations · Cloud
                infrastructure
              </p>
            </div>
          </div>
        </div>
        <div className="skill-marquee" aria-hidden="true">
          <span>REACT</span>
          <i>✦</i>
          <span>AI SYSTEMS</span>
          <i>✦</i>
          <span>PRODUCT DESIGN</span>
          <i>✦</i>
          <span>NEXT.JS</span>
        </div>
      </section>
      <section className="studio-note">
        <div className="note-image">
          <Image
            alt="Ese Curtis in a close-up studio portrait"
            className="portrait-cycle portrait-cycle-a"
            fill
            sizes="(max-width: 700px) 100vw, 35vw"
            src="/media/studio/ese-closeup.png"
          />
          <Image
            alt="Ese Curtis wearing glasses in a close-up studio portrait"
            className="portrait-cycle portrait-cycle-b"
            fill
            sizes="(max-width: 700px) 100vw, 35vw"
            src="/media/studio/ese-closeup-glasses.png"
          />
        </div>
        <div className="note-copy">
          <p className="eyebrow">05 / A little more</p>
          <h2>
            Curious by default.
            <br />
            <em>Serious about the details.</em>
          </h2>
          <p>
            I like working close to the problem: asking better questions, making
            the invisible visible, and leaving the product sharper than I found
            it.
          </p>
          <div className="note-stats">
            <div>
              <strong>7+</strong>
              <span>years building</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>projects shipped</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>things to learn</span>
            </div>
          </div>
          <Link className="text-link" href="/cv">
            Read the full résumé <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="studio-cta">
        <p className="eyebrow">06 / Have something in mind?</p>
        <h2>
          Let&apos;s make
          <br />
          <em>something matter.</em>
        </h2>
        <a className="cta-button" href={contactsUrl.email}>
          Start a conversation <ArrowUpRight size={18} />
        </a>
      </section>
      <footer className="studio-footer">
        <span>
          Ese Curtis <b>©</b> {new Date().getFullYear()}
        </span>
        <span>Built with intention in Lagos</span>
        <div>
          <a href={contactsUrl.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contactsUrl.twitter} target="_blank" rel="noreferrer">
            X / Twitter
          </a>
          <a href={contactsUrl.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}
