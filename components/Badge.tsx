import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700">
      {children}
    </span>
  );
}
