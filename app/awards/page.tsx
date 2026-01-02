import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { awards } from "@/lib/siteData";

export default function AwardsPage() {
  return (
    <main>
      <Navbar />

      <Container>
        <Section id="awards" title="Awards & Certifications">
          <Card>
            <ul className="list-disc space-y-2 pl-5 text-zinc-700">
              {awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Card>
        </Section>

        <div className="pb-14" />
      </Container>
    </main>
  );
}

