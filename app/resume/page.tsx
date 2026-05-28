import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/siteData";

export default function ResumePage() {
  return (
    <PageShell>
      <Container>
        <div className="py-14">
          <h1 className="text-4xl font-bold text-zinc-900">Resume</h1>
          <p className="mt-4 text-zinc-600">
            <a href={site.resumePath} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            {" · "}
            <a href={site.resumePath} download>
              Download
            </a>
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200">
            <iframe
              title="Resume"
              src={site.resumePath}
              className="h-[min(85vh,800px)] w-full bg-white"
            />
          </div>
        </div>
      </Container>
    </PageShell>
  );
}
