import type { ReactNode } from "react";

export function HomeSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <h2 className="text-2xl font-bold uppercase tracking-wide text-zinc-900">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
