import { site } from "@/lib/siteData";
import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="no-underline">
          <span className="font-semibold tracking-tight">{site.name}</span>
          <span className="ml-2 text-sm text-zinc-600">{site.domain}</span>
        </Link>

        <nav className="hidden gap-5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline text-sm text-zinc-600 hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm no-underline hover:border-zinc-300"
          href="/Resume-Ethan-Chen.pdf"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
