import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { projects } from "@/lib/siteData";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <Container>
        <Section id="projects" title="Projects">
          <div className="grid gap-4">
            {projects.map((p) => (
              <Card key={p.title}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{p.dates}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
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
                ) : (
                  <p className="mt-4 text-sm text-zinc-600">
                    Tip: Add a repo/demo link in <code className="rounded bg-zinc-100 px-1">lib/siteData.ts</code>.
                  </p>
                )}
              </Card>
            ))}
          </div>
        </Section>

        <div className="pb-14" />
      </Container>
    </main>
  );
}

