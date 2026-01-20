import Image from "next/image";
import { school } from "@/content/school";
import { Card, Container, SectionTitle, Button } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

const departments = [
  {
    name: "Languages & Communication",
    subjects: ["English", "Kiswahili"],
    focus:
      "Reading, writing, speaking, and communication skills for academics and life.",
  },
  {
    name: "Mathematics",
    subjects: ["Mathematics"],
    focus:
      "Numeracy, problem-solving, and analytical thinking for pathways and future careers.",
  },
  {
    name: "Sciences",
    subjects: ["Biology", "Chemistry", "Physics"],
    focus:
      "Practical learning and scientific thinking—building strong foundations for STEM careers.",
  },
  {
    name: "Humanities",
    subjects: ["History", "Geography", "CRE/IRE (as applicable)"],
    focus:
      "Understanding society, citizenship, ethics, and critical thinking.",
  },
  {
    name: "ICT & Digital Skills",
    subjects: ["Computer Studies / ICT"],
    focus:
      "Digital literacy, responsible technology use, and modern learning support.",
  },
  {
    name: "Co-curricular & Talent",
    subjects: ["Sports", "Clubs", "Music & Drama"],
    focus:
      "Leadership, discipline, teamwork, and talent development.",
  },
];

export default function DepartmentsPage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Academics & Departments
            </h1>
            <p className="mt-3 text-muted-foreground">
              A structured learning environment supporting performance, skills, and wellbeing—aligned
              with the <span className="text-brand font-medium">CBE transition</span>.
            </p>
          </div>
          <Button href="/admissions" variant="solid">Admissions</Button>
        </div>

        {/* Academic snapshot */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/classroom.jpeg"
                alt="Teaching and learning"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-sm font-semibold">Quality Teaching</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Strong classroom instruction, assessment support, and learner mentoring.
            </p>
          </Card>

          <Card>
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/science-lab.jpeg"
                alt="Science practicals"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-sm font-semibold">Practical Learning</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Hands-on activities that build competence and confidence.
            </p>
          </Card>

          <Card>
            <div className="relative h-44 overflow-hidden rounded-xl">
              <Image
                src="/images/students-learning.jpeg"
                alt="Learner support"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-sm font-semibold">Learner Support</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Guidance, counselling, discipline, and parent collaboration.
            </p>
          </Card>
        </div>

        {/* Departments list */}
        <section className="mt-14">
          <SectionTitle
            title="Departments"
            subtitle="Each department supports learning outcomes, discipline, and growth."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {departments.map((d) => (
              <Card key={d.name}>
                <div className="text-sm font-semibold">{d.name}</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-black">Subjects:</span>{" "}
                  {d.subjects.join(", ")}
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-6">
                  {d.focus}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners (demo) */}
        <section className="mt-14">
          <SectionTitle title="Partners" subtitle="Support that strengthens our school community." />
          <Card>
            <p className="text-sm text-muted-foreground leading-6">
              {school.partners.intro}
            </p>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
         {school.partners.list.map((p) => (
  <div key={p.id} className="rounded-2xl border bg-white p-4">

                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border bg-brand-soft p-4">
              <div className="text-xs uppercase tracking-wide text-brand">
                Note (demo)
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Once the school adopts the website officially, we will update this section with the
                full verified list of partners and program details.
              </div>
            </div>
          </Card>
        </section>

        {/* CTA strip */}
        <section className="mt-14">
          <Card>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold">Want to learn more?</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  See our transition plan, student life, and admissions guidance.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/cbc-transition" variant="outline">
                  CBE Transition →
                </Button>
                <Button href="/student-life" variant="outline">
                  Student Life →
                </Button>
                <Button href="/contacts" variant="solid">
                  Contact →
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
}
