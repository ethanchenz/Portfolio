import { site } from "@/lib/siteData";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-6 px-6 py-8 text-sm">
        <Link href="/projects" className="font-medium no-underline text-zinc-700 hover:text-zinc-900">
          Projects
        </Link>
        <Link href="/resume" className="font-medium no-underline text-zinc-700 hover:text-zinc-900">
          Resume
        </Link>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-medium no-underline text-zinc-700 hover:text-zinc-900"
        >
          LinkedIn
        </a>
        <a href={`mailto:${site.email}`} className="font-medium no-underline text-zinc-700 hover:text-zinc-900">
          {site.email}
        </a>
      </div>
      <p className="pb-8 text-center text-xs text-zinc-500">
        Copyright © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
