import { Container } from "@/components/Container";
import { site } from "@/lib/siteData";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        {/* Navigation Bar */}
        <nav className="flex justify-center pt-8 pb-12">
          <div className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-4 py-2">
            <Link
              href="/projects"
              className="rounded-full px-4 py-2 text-sm text-zinc-700 no-underline hover:bg-white hover:text-zinc-900"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-sm text-zinc-700 no-underline hover:bg-white hover:text-zinc-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-white no-underline hover:bg-zinc-900"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Profile Picture */}
        <div className="flex justify-center pb-8">
          <div className="h-32 w-32 overflow-hidden rounded-full bg-zinc-200">
            {/* Placeholder for profile picture - user can add their image here */}
            <div className="flex h-full w-full items-center justify-center text-4xl text-zinc-400">
              EC
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="flex justify-center pb-6">
          <h1 className="max-w-4xl text-center text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
            Computer Engineering student focusing on embedded systems and digital design
          </h1>
        </div>

        {/* Description */}
        <div className="flex justify-center pb-12">
          <p className="max-w-3xl text-center text-base leading-relaxed text-zinc-700 sm:text-lg">
            Computer Engineering student (B.S., expected May 2028) focused on embedded systems, digital design, and practical software engineering. Hands-on experience shipping features in a production iOS app, building and maintaining a research web dashboard + wiki, and prototyping sensor/test setups with Arduino/Raspberry Pi. Undergraduate Research Assistant at Virginia Tech's LEWAS Lab, contributing to environmental research through software development and sensor integration.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 pb-16">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-zinc-800 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href="/Resume-Ethan-Chen.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-zinc-800 px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-zinc-900"
          >
            Resume
          </a>
        </div>
      </Container>
    </main>
  );
}
