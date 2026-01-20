import Image from "next/image";
import { school } from "@/content/school";
import { Card, Container, SectionTitle, Button } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

const clubs = [
  { name: "Debate & Journalism", desc: "Communication, confidence, critical thinking." },
  { name: "Science & Innovation", desc: "Practical learning, experiments, curiosity." },
  { name: "ICT Club", desc: "Digital skills and responsible tech use." },
  { name: "Christian Union / Values Club", desc: "Character formation and peer support." },
  { name: "Environment Club", desc: "Clean campus, tree planting, community service." },
  { name: "Music & Drama", desc: "Talent development and teamwork." },
];

const sports = [
  "Football",
  "Volleyball",
  "Athletics",
  "Indoor games",
];

export default function StudentLifePage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Clubs & Student Life</h1>
            <p className="mt-3 text-muted-foreground">
              Beyond academics, we nurture leadership, talent, discipline, and learner wellbeing.
            </p>
          </div>
          <Button href="/admissions" variant="solid">Admissions</Button>
        </div>

        {/* Visual strip */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/classroom.jpeg"
                alt="Classroom learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-sm font-semibold">Learning Culture</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Strong teaching, discipline, and support for every learner.
            </p>
          </Card>

          <Card>
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/students-learning.jpeg"
                alt="Students learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-sm font-semibold">Leadership & Mentorship</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Learner leadership, mentorship, and values-based growth.
            </p>
          </Card>

          <Card>
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/science-lab.jpeg"
                alt="Science lab"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-sm font-semibold">Skills & Practical Learning</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Hands-on activities that build competence and confidence.
            </p>
          </Card>
        </div>

        {/* Clubs */}
        <section className="mt-14">
          <SectionTitle
            title="Clubs & Societies"
            subtitle="Opportunities for talent development, teamwork, and responsibility."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {clubs.map((c) => (
              <Card key={c.name}>
                <div className="text-sm font-semibold">{c.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Sports */}
        <section className="mt-14">
          <SectionTitle
            title="Sports & Co-curricular"
            subtitle="Healthy competition, discipline, resilience, and school pride."
          />
          <Card>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {sports.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Guidance */}
        <section className="mt-14">
          <SectionTitle
            title="Guidance & Counselling"
            subtitle="Learner wellbeing matters—especially during the transition."
          />
          <Card>
            <p className="text-sm text-muted-foreground leading-6">
              We support learners through mentorship, counselling, and parent collaboration to
              strengthen discipline, wellbeing, and academic focus. This is especially important as
              we align learning to the <span className="text-brand font-medium">CBE transition</span>.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/cbc-transition" variant="outline">CBE Transition Hub →</Button>
              <Button href="/contacts" variant="solid">Contact the School Office</Button>
            </div>
          </Card>
        </section>

        {/* Motto strip */}
        <section className="mt-14">
          <Card>
            <div className="text-xs uppercase tracking-wide text-brand">Motto</div>
            <div className="mt-1 text-lg font-semibold">{school.motto}</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Building learners who believe in growth, discipline, and possibility.
            </p>
          </Card>
        </section>
      </Container>
    </div>
  );
}
