import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  category: string;
  dates: string;
};

export function ProjectGridCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects#${project.slug}`}
      className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white no-underline shadow-sm transition hover:border-zinc-300 hover:shadow-md"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200">
        <span className="text-sm font-medium text-zinc-400">Project image</span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-zinc-900 group-hover:text-zinc-600">{project.title}</h3>
        <p className="mt-1 text-sm text-zinc-500">{project.category}</p>
      </div>
    </Link>
  );
}
