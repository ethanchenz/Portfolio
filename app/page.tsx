import { Container } from "@/components/Container";
import { ExperienceCard } from "@/components/ExperienceCard";
import { HomeSection } from "@/components/HomeSection";
import { PageShell } from "@/components/PageShell";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { experience, projects, site } from "@/lib/siteData";
import Link from "next/link";

export default function Page() {
  return (
    <PageShell>
      <Container>
        <div className="py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            {site.portfolioTitle}
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            {site.name}
          </h1>
        </div>

        <div className="mb-8 flex aspect-[21/9] items-center justify-center rounded-xl bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 border border-zinc-200">
          <p className="text-sm text-zinc-400">Add a journey or banner image here</p>
        </div>

        <HomeSection id="summary" title="Summary">
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-700">{site.summary}</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Strengths:</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
                {site.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Weaknesses:</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
                {site.weaknesses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="experience" title="Experience">
          <div>
            {experience.map((exp) => (
              <ExperienceCard key={exp.slug} exp={exp} compact />
            ))}
          </div>
          <p className="mt-6">
            <Link href="/experience" className="font-semibold no-underline text-zinc-900">
              View all experience →
            </Link>
          </p>
        </HomeSection>

        <HomeSection id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectGridCard key={p.slug} project={p} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/projects" className="font-semibold no-underline text-zinc-900">
              Projects Page →
            </Link>
          </p>
        </HomeSection>
      </Container>
    </PageShell>
  );
}
