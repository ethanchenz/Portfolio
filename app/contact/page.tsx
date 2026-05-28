import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/siteData";

export default function ContactPage() {
  return (
    <PageShell>
      <Container>
        <div className="py-14">
          <h1 className="text-4xl font-bold text-zinc-900">Contact</h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600">
            The fastest way to reach me is email. I&apos;m happy to share additional project details or
            code samples.
          </p>

          <ul className="mt-10 space-y-4 text-lg">
            <li>
              <a href={`mailto:${site.email}`} className="no-underline hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.emailVT}`} className="no-underline hover:underline">
                {site.emailVT}
              </a>
            </li>
            <li>
              <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </Container>
    </PageShell>
  );
}
