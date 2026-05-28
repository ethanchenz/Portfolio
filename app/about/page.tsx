import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { education, site, skills } from "@/lib/siteData";

export default function AboutPage() {
  return (
    <PageShell>
      <Container>
        <div className="py-14">
          <h1 className="text-4xl font-bold text-zinc-900">About</h1>

          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-700">
            {site.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-zinc-900">Education</h2>
            {education.map((e) => (
              <div key={e.school} className="mt-6">
                <p className="font-semibold text-zinc-900">{e.school}</p>
                <p className="text-zinc-700">
                  {e.degree} · {e.location} · {e.graduation}
                </p>
                <p className="mt-1 text-sm text-zinc-600">GPA: {e.gpa}</p>
                <p className="mt-2 text-sm text-zinc-600">
                  Coursework: {e.coursework.join(", ")}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-zinc-900">Skills</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.group}>
                  <h3 className="font-semibold text-zinc-900">{group.group}</h3>
                  <p className="mt-2 text-zinc-700">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </PageShell>
  );
}
