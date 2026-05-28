import { Container } from "@/components/Container";
import { ExperienceCard } from "@/components/ExperienceCard";
import { PageShell } from "@/components/PageShell";
import { experience } from "@/lib/siteData";

export default function ExperiencePage() {
  return (
    <PageShell>
      <Container>
        <div className="py-14">
          <h1 className="text-4xl font-bold text-zinc-900">Experience</h1>
          <div className="mt-10">
            {experience.map((exp) => (
              <div key={exp.slug} id={exp.slug} className="scroll-mt-24">
                <ExperienceCard exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
