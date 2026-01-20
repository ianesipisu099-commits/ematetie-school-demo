import Link from "next/link";
import { school } from "@/content/school";
import { Container } from "@/components/ui";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="font-semibold">{school.name}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Motto: {school.motto}
              </div>
            </div>

            <div className="text-sm">
              <div className="font-semibold">Contact</div>
              <div className="mt-2 text-muted-foreground">
                <div>
                  Email:{" "}
                  <a className="underline" href={`mailto:${school.email}`}>
                    {school.email}
                  </a>
                </div>
                <div className="mt-1">{school.addressLine}</div>
              </div>
            </div>

            <div className="text-sm">
              <div className="font-semibold">Quick Links</div>
              <div className="mt-2 flex flex-col gap-2">
                <Link className="underline" href="/cbc-transition">
                  CBE Transition
                </Link>
                <Link className="underline" href="/admissions">
                  Admissions
                </Link>
                <Link className="underline" href="/contacts">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </div>
        </div>
      </Container>
      <div className="mt-6 border-t pt-4 text-center text-xs text-muted-foreground">
  Powered by{" "}
  <a
    href="https://ime-solutions.com"
    target="_blank"
    rel="noreferrer"
    className="font-medium text-brand hover:underline"
  >
    IME Solutions
  </a>
</div>

    </footer>
  );
}
