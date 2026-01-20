import { Card, Container, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Policies",
  description: "Privacy and website policies (demo).",
};

export default function PoliciesPage() {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Policies</h1>
        <p className="mt-3 text-muted-foreground">
          Demo policies — replace with official school-approved policy text.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <SectionTitle title="Privacy" />
            <p className="text-sm text-muted-foreground leading-6">
              This website may collect basic contact information if you email the school.
              No student private information is published without consent.
            </p>
          </Card>

          <Card>
            <SectionTitle title="Content & Updates" />
            <p className="text-sm text-muted-foreground leading-6">
              Announcements and information are published by the school office. Demo content will
              be replaced with official information upon approval.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
