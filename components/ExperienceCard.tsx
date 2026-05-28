import Link from "next/link";

type Experience = {
  slug: string;
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
};

export function ExperienceCard({ exp, compact = false }: { exp: Experience; compact?: boolean }) {
  const summary = exp.bullets[0];

  return (
    <article className="flex gap-5 border-b border-zinc-100 py-8 last:border-b-0">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-xs font-bold text-zinc-500">
        {exp.org.slice(0, 2).toUpperCase()}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-zinc-500">{exp.dates}</p>
        <p className="text-sm text-zinc-600">{exp.location}</p>
        <h3 className="mt-2 text-lg font-semibold text-zinc-900">
          {exp.org} — {exp.role}
        </h3>
        <p className="mt-2 leading-relaxed text-zinc-700">{summary}</p>

        {compact ? (
          <p className="mt-3">
            <Link
              href={`/experience#${exp.slug}`}
              className="text-sm font-semibold no-underline text-zinc-900 hover:text-zinc-600"
            >
              Read More
            </Link>
          </p>
        ) : (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
            {exp.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
