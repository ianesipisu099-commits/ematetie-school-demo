import announcements from "@/content/announcements.json";
import { school } from "@/content/school";
import { Card, Container, SectionTitle, Button } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

export default function InfoPage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">FAQs & Announcements</h1>
            <p className="mt-3 text-muted-foreground">
              Quick answers for parents and learners, plus key updates from the school.
            </p>
          </div>
          <Button href="/contacts" variant="solid">Contact →</Button>
        </div>

<section className="mt-12">
  <SectionTitle
    title="Announcements"
    subtitle={school.info.announcementsIntro}
  />

  <div className="grid gap-4 md:grid-cols-3">
    {announcements.map((a) => (
      <Card key={a.title}>
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold">{a.title}</div>

          <div className="rounded-full border bg-brand-soft px-2 py-1 text-[11px] text-brand">
            {a.date}
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground leading-6">
          {a.body}
        </p>
      </Card>
    ))}
  </div>
</section>


        {/* FAQs */}
        <section className="mt-14">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Clear guidance on admissions, learning, and the CBE transition."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {school.info.faqs.map((f) => (
              <Card key={f.q}>
                <div className="text-sm font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-6">{f.a}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14">
          <Card>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold">Need help?</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Email the school office for admissions guidance or reporting details.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/admissions" variant="outline">Admissions →</Button>
                <Button href="/cbc-transition" variant="outline">CBE Transition →</Button>
                <Button href="/contacts" variant="solid">Contact →</Button>
              </div>
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
}
