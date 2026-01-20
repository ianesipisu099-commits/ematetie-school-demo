import { school } from "@/content/school";
import { Card, Container, SectionTitle } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

export default function AdmissionsPage() {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">
          {school.admissions.headline}
        </h1>
        <p className="mt-3 text-muted-foreground">{school.admissions.intro}</p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <SectionTitle title="How to apply (demo)" />
            <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
              {school.admissions.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </Card>

          <Card>
            <SectionTitle title="Enquiries" />
            <p className="text-sm text-muted-foreground leading-6">
              Email us at{" "}
              <a className="underline" href={`mailto:${school.email}`}>
                {school.email}
              </a>{" "}
              for admission guidance and reporting details.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              Address: {school.addressLine}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
