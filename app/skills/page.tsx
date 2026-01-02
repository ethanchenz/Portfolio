import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { skills } from "@/lib/siteData";

export default function SkillsPage() {
  return (
    <main>
      <Navbar />

      <Container>
        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <Card key={s.group}>
                <h3 className="font-semibold tracking-tight">{s.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Badge key={i}>{i}</Badge>
                  ))}
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

