import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { projects } from "@/lib/siteData";

export default function ProjectsPage() {
  return (
    <PageShell>
      <Container>
        <div className="py-14">
          <h1 className="text-4xl font-bold uppercase tracking-wide text-zinc-900">Projects</h1>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectGridCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mt-16 space-y-16">
            {projects.map((p) => (
              <article key={p.slug} id={p.slug} className="scroll-mt-24 border-t border-zinc-200 pt-12">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900">{p.title}</h2>
                    <p className="mt-1 text-sm text-zinc-600">
                      {p.category} · {p.dates}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>

                <ul className="mt-6 list-disc space-y-2 pl-5 text-zinc-700">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {p.link ? (
                  <p className="mt-4">
                    <a href={p.link} target="_blank" rel="noreferrer">
                      View project →
                    </a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
