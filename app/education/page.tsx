import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { education } from "@/lib/siteData";

export default function EducationPage() {
  return (
    <main>
      <Navbar />

      <Container>
        <Section id="education" title="Education">
          <div className="grid gap-4">
            {education.map((e) => (
              <Card key={e.school}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight">{e.school}</h3>
                  <p className="text-zinc-700">{e.degree}</p>
                  <p className="text-sm text-zinc-600">
                    {e.location} • {e.graduation} • GPA {e.gpa}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-zinc-600">Relevant coursework</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <Badge key={c}>{c}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <div className="pb-14" />
      </Container>
    </main>
  );
}

