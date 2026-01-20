import { school } from "@/content/school";
import { Card, Container, SectionTitle } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

export default function ContactsPage() {
  return (
    <div className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Card>
            <SectionTitle title="School Office" />
            <div className="text-sm text-muted-foreground">
              <div className="font-medium text-black">Email</div>
              <a className="underline" href={`mailto:${school.email}`}>
                {school.email}
              </a>

              <div className="mt-6 font-medium text-black">Address</div>
              <div>{school.addressLine}</div>
            </div>
          </Card>
<Card>
  <SectionTitle title="Office Hours" />
  <div className="space-y-2 text-sm text-muted-foreground">
    {school.openingHours.map((h) => (
      <div key={h.day} className="flex justify-between gap-4">
        <span className="font-medium text-black">{h.day}</span>
        <span>{h.hours}</span>
      </div>
    ))}
  </div>

  <div className="mt-6">
    <div className="text-sm font-semibold">Location</div>
    <div className="mt-2 text-sm text-muted-foreground">
      {school.location.short}
      <div className="mt-1 text-xs">{school.location.mapNote}</div>
    </div>
  </div>
</Card>

          <Card>
            <SectionTitle title="Map (demo placeholder)" />
            <div className="mt-2 flex h-56 items-center justify-center rounded-2xl border bg-muted text-sm text-muted-foreground">
              Embed Google Map later (after collecting exact location pin)
            </div>
          </Card>
          <Card>
  <SectionTitle title="Quick Actions" />
  <div className="grid gap-3">
    <a
      className="rounded-xl border bg-white px-4 py-3 text-sm font-medium hover:bg-brand-soft"
      href={`mailto:${school.email}?subject=Admissions%20Enquiry`}
    >
      Email for Admissions
    </a>
    <a
      className="rounded-xl border bg-white px-4 py-3 text-sm font-medium hover:bg-brand-soft"
      href={`mailto:${school.email}?subject=CBE%20Transition%20Enquiry`}
    >
      Email about CBE Transition
    </a>
    <a
      className="rounded-xl border bg-white px-4 py-3 text-sm font-medium hover:bg-brand-soft"
      href="/downloads"
    >
      Downloads →
    </a>
  </div>
</Card>

        </div>
      </Container>
    </div>
  );
}
