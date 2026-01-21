"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Button } from "@/components/ui";
import { school } from "@/content/school";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/departments", label: "Academics" },
  { href: "/cbc-transition", label: "CBE Transition" },
  { href: "/leadership", label: "Leadership" },
  { href: "/student-life", label: "Student Life" },
  { href: "/gallery", label: "Gallery" },
  { href: "/info", label: "FAQs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contacts", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      {/* Skip link (accessibility) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <Container>
        <div className="flex items-center justify-between py-3 text-xs text-muted-foreground">
          <div>
            Email:{" "}
            <a className="underline" href={`mailto:${school.email}`}>
              {school.email}
            </a>
          </div>

          <div className="hidden gap-2 sm:flex">
            <Button href="/admissions" variant="outline">
              Admissions
            </Button>
            <Button href="/contacts" variant="outline">
              Contact
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-tight"
          >
            <Image
              src="/images/logo.png"
              alt={`${school.name} logo`}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="hidden sm:inline">{school.name}</span>
            <span className="sm:hidden">Ematetie</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
  ... 
  </nav>
            {navLinks.map((l) => (
              <Link key={l.href} className="hover:underline" href={l.href}>
                {l.label}
              </Link>
            ))}
          <button
  type="button"
  aria-label="Open menu"
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
  className="md:hidden rounded-xl border bg-white px-3 py-2 text-sm font-medium"
>
  {open ? "Close" : "Menu"}
</button>
        </div>

        {/* Mobile drawer */}
        {open ? (
          <div className="md:hidden">
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <div className="grid gap-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                <Button href="/admissions" variant="solid">
                  Admissions
                </Button>
                <Button href="/contacts" variant="outline">
                  Contact
                </Button>
              </div>
            </div>
            <div className="h-4" />
          </div>
        ) : null}
      </Container>
    </header>
  );
}
