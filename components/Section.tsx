import type { ReactNode } from "react";
import Link from "next/link";

export function Section({
  id,
  title,
  children,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-zinc-600">{subtitle}</p> : null}
        </div>
        <Link className="no-underline text-sm text-zinc-600 hover:text-zinc-900" href="/">
          Back to home ↑
        </Link>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
