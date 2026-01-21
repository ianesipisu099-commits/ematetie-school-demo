import Link from "next/link";
import { ComponentProps } from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">{children}</div>
  );
}

type ButtonProps =
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href">)
  | ({ onClick?: () => void } & React.ButtonHTMLAttributes<HTMLButtonElement>);

export function Button(props: ButtonProps & { variant?: "solid" | "outline" }) {
  const variant = props.variant ?? "solid";
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";

  const solid =
  "bg-brand text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--brand))]/40";
 const outline =
  "border border-brand text-brand bg-white hover:bg-brand-soft";

  const cls = `${base} ${variant === "solid" ? solid : outline}`;

  if ("href" in props) {
    const { href, children, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold tracking-tight text-brand">
  {title}
</h2>
      {subtitle ? (
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
