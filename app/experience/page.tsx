import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { experience } from "@/lib/siteData";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Container>
        {/* Title */}
        <div className="flex justify-center pt-16 pb-12">
          <h1 className="text-5xl font-bold text-black">Experience</h1>
        </div>

        {/* Experience Cards */}
        <div className="mx-auto max-w-3xl space-y-4 pb-16">
          {experience.map((exp) => (
            <div
              key={`${exp.org}-${exp.role}`}
              className="rounded-lg bg-zinc-100 p-6"
            >
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-zinc-800">{exp.org}</p>
                <p className="text-base font-normal text-zinc-700">{exp.role}</p>
                <p className="text-sm font-normal text-zinc-600">
                  {exp.location} | {exp.dates}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

