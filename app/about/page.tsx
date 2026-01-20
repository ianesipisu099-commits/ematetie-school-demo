import { school } from "@/content/school";
import { Card, Container, SectionTitle, Button } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

export default function AboutPage() {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">About the School</h1>
        <p className="mt-3 text-muted-foreground">
          A brief overview of our identity, values, and direction.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <SectionTitle title="Overview" />
            <p className="text-sm text-muted-foreground leading-6">
              {school.about.overview}
            </p>

            <div className="mt-6 rounded-2xl border bg-brand-soft p-4">
              <div className="text-xs uppercase tracking-wide text-brand">
                Motto
              </div>
              <div className="mt-1 text-sm font-semibold">{school.motto}</div>
            </div>
          </Card>

          <Card>
            <SectionTitle title="Vision" />
            <p className="text-sm text-muted-foreground leading-6">{school.vision}</p>

            <div className="mt-6">
              <SectionTitle title="Mission" />
              <p className="text-sm text-muted-foreground leading-6">{school.mission}</p>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <SectionTitle title="Core Values" />
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {school.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <SectionTitle title="School Highlights" />
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {school.about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Card>

          <Card>
            <SectionTitle title="Heritage & Direction" />
            <p className="text-sm text-muted-foreground leading-6">
              {school.about.heritageNote}
            </p>

            <div className="mt-6">
              <Button href="/cbc-transition" variant="outline">
                View CBE Transition Hub →
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <Card>
            <SectionTitle title="Leadership Message (Demo)" />
            <p className="text-sm text-muted-foreground leading-6">
              {school.principal.message}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/contacts" variant="solid">
                Contact the School Office
              </Button>
              <Button href="/admissions" variant="outline">
                Admissions Information
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
