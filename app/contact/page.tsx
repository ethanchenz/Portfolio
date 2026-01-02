import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { site } from "@/lib/siteData";

function IconLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm no-underline hover:border-zinc-300"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <Container>
        <Section
          id="contact"
          title="Contact"
          subtitle="The fastest way to reach me is email. I'm happy to share additional project details or code samples."
        >
          <Card>
            <div className="flex flex-wrap gap-3">
              <IconLink href={`mailto:${site.email}`} label={site.email} />
              <IconLink href={`mailto:${site.emailVT}`} label={site.emailVT} />
              <IconLink href={`tel:${site.phone.replace(/\D/g, "")}`} label={site.phone} />
              <IconLink href={site.links.linkedin} label="LinkedIn" />
              <IconLink href={site.links.github} label="GitHub" />
            </div>
            <p className="mt-6 text-sm text-zinc-600">
              © {new Date().getFullYear()} {site.name}. Built with Next.js + Tailwind.
            </p>
          </Card>
        </Section>

        <div className="pb-14" />
      </Container>
    </main>
  );
}

