import { Card, Container, SectionTitle, Button } from "@/components/ui";

export const metadata = {
  title: "Downloads",
  description: "School documents and calendars (demo).",
};

export default function DownloadsPage() {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Downloads</h1>
        <p className="mt-3 text-muted-foreground">
          Documents shared by the school office. (Demo placeholders.)
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <SectionTitle title="Term Calendar (Demo)" />
            <p className="text-sm text-muted-foreground">
              Replace with the official PDF once available.
            </p>
            <div className="mt-4">
              <Button href="/downloads/term-calendar.pdf" variant="solid">
                Download PDF →
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
