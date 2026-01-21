import Image from "next/image";
import { school } from "@/content/school";
import { Button, Card, Container, SectionTitle } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

function HeroVisual() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border shadow-sm md:aspect-[16/9]">
      <Image
        src="/images/school-gate.jpeg"
        alt="Ematetie Secondary School entrance"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-2 text-sm font-medium">
        School Entrance (Demo)
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="py-10">
      <Container>
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand bg-brand-soft px-3 py-1 text-xs text-brand shadow-sm">
              <span className="font-medium">{school.name}</span>
              <span aria-hidden="true">•</span>
              <span>Motto: {school.motto}</span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {school.cbe.headline}
            </h1>

            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              {school.cbe.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/admissions" variant="solid">
                Admissions (Grade 9 & 10)
              </Button>
              <Button href="/cbc-transition" variant="outline">
                CBE Transition Hub
              </Button>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              Email:{" "}
              <a className="underline" href={`mailto:${school.email}`}>
                {school.email}
              </a>
            </div>
          </div>

          <HeroVisual />
        </section>

        {/* Quick cards */}
        <section className="mt-14">
          <SectionTitle
            title="CBE Transition at a Glance"
            subtitle="A clear summary for parents, learners, and the community."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {school.cbe.cards.map((c, i) => (
              <Card key={c.title}>
                <div className="relative mb-3 h-40 overflow-hidden rounded-xl">
                  <Image
                    src={
                      i === 0
                        ? "/images/classroom.jpeg"
                        : i === 1
                        ? "/images/science-lab.jpeg"
                        : "/images/students-learning.jpeg"
                    }
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-sm font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact strip */}
        <section className="mt-14">
          <Card>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <div>
                    Email:{" "}
                    <a className="underline" href={`mailto:${school.email}`}>
                      {school.email}
                    </a>
                  </div>
                  <div className="mt-1">{school.addressLine}</div>
                </div>
              </div>
              <Button href="/contacts" variant="solid">
                Contact page →
              </Button>
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
}

