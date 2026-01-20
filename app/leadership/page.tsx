import Image from "next/image";
import { school } from "@/content/school";
import { Card, Container, SectionTitle, Button } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

function Avatar({ label }: { label: string }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-brand-soft text-xs font-semibold text-brand">
      {label}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Leadership</h1>
            <p className="mt-3 text-muted-foreground">{school.leadership.intro}</p>
          </div>
          <Button href="/contacts" variant="solid">Contact →</Button>
        </div>

        {/* Principal message highlight */}
        <div className="mt-10">
          <Card>
            <SectionTitle title={school.principal.title} subtitle="A welcoming message for parents and learners." />
            <div className="mt-4 flex items-start gap-4">
  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border">
    <Image
      src="/images/principal.jpeg"
      alt="Principal (demo placeholder)"
      fill
      className="object-cover"
    />
  </div>
  <div>
    <div className="text-sm font-semibold">Principal (Demo)</div>
    <div className="text-sm text-muted-foreground">
      Photo and official name will be updated after confirmation.
    </div>
  </div>
</div>

            <p className="text-sm text-muted-foreground leading-6">
              {school.principal.message}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/cbc-transition" variant="outline">CBE Transition →</Button>
              <Button href="/admissions" variant="outline">Admissions →</Button>
              <Button href="/contacts" variant="solid">Contact Office →</Button>
            </div>
          </Card>
        </div>

        {/* Team cards */}
        <section className="mt-14">
          <SectionTitle
            title="Leadership Team"
            subtitle="Demo profiles with roles — names/photos will be updated after official confirmation."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {school.leadership.team.map((p) => (
              <Card key={p.id}>
                <div className="flex items-start gap-4">
                  <Avatar label={p.role.split(" ")[0]} />
                  <div>
                    <div className="text-xs uppercase tracking-wide text-brand">
                      {p.role}
                    </div>
                    <div className="mt-1 text-sm font-semibold">{p.name}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-6">
                      {p.bio}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Governance note */}
        <section className="mt-14">
          <Card>
            <SectionTitle
              title="School Community"
              subtitle="Strong learning outcomes depend on partnership."
            />
            <p className="text-sm text-muted-foreground leading-6">
              The school works closely with parents/guardians and relevant education stakeholders to
              support discipline, academic progress, learner wellbeing, and a smooth CBE transition.
              (Demo note — details can be expanded once official information is provided.)
            </p>
          </Card>
        </section>

        {/* Image strip (optional visual) */}
        <section className="mt-14">
          <SectionTitle title="Learning Environment" subtitle="A consistent culture of focus and growth." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { src: "/images/classroom.jpeg", cap: "Teaching & learning" },
              { src: "/images/science-lab.jpeg", cap: "Practical learning" },
              { src: "/images/students-learning.jpeg", cap: "Learner support" },
            ].map((i) => (
              <Card key={i.src}>
                <div className="relative h-40 overflow-hidden rounded-xl">
                  <Image src={i.src} alt={i.cap} fill className="object-cover" />
                </div>
                <div className="mt-3 text-sm font-semibold">{i.cap}</div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
