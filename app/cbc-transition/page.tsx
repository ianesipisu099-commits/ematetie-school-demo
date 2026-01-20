import { school } from "@/content/school";
import { Card, Container, SectionTitle } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

export default function CbeTransitionPage() {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">
          CBE Transition Hub
        </h1>
        <p className="mt-3 text-muted-foreground">{school.cbe.summary}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {school.cbe.cards.map((c) => (
            <Card key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-6">
                {c.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Card>
            <SectionTitle title="What the transition looks like (demo)" />
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>
                Clear communication to parents and learners (admissions,
                requirements, timelines).
              </li>
              <li>
                Strengthened guidance and counselling for pathway decisions and
                learner wellbeing.
              </li>
              <li>
                Continuous improvement of learning resources (ICT, labs, library)
                as capacity grows.
              </li>
              <li>
                Co-curricular programs supporting skills, leadership, and values.
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </div>
  );
}
