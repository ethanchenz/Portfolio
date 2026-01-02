import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { site } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <Container>
        <Section id="about" title="About">
          <div className="grid gap-4">
            {site.about.map((p) => (
              <p key={p} className="max-w-3xl text-zinc-700">
                {p}
              </p>
            ))}
          </div>
        </Section>

        <div className="pb-14" />
      </Container>
    </main>
  );
}

