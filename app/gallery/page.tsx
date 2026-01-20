import Image from "next/image";
import { school } from "@/content/school";
import { Card, Container, SectionTitle, Button } from "@/components/ui";
export const metadata = {
  title: "Gallery",
  description: "School photos and learning environment (demo).",
};

export default function GalleryPage() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
            <p className="mt-3 text-muted-foreground">{school.gallery.intro}</p>
          </div>
          <Button href="/contacts" variant="solid">
            Contact →
          </Button>
        </div>

        <div className="mt-10 grid gap-10">
          {school.gallery.albums.map((album) => (
            <section key={album.title}>
              <SectionTitle title={album.title} />
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {album.items.map((img) => (
                  <a
                    key={img.src}
                    href={img.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                    title="Open full image"
                  >
                    <Card>
                      <div className="relative h-44 overflow-hidden rounded-xl">
                        <Image
                          src={img.src}
                          alt={img.caption}
                          fill
                          className="object-cover transition group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="mt-3 text-sm font-semibold">{img.caption}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        Click to view full size
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14">
          <Card>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold">Want more photos?</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Once the school adopts the website officially, we’ll upload full albums for events,
                  academics, clubs, and facilities.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/student-life" variant="outline">
                  Student Life →
                </Button>
                <Button href="/departments" variant="outline">
                  Academics →
                </Button>
                <Button href="/admissions" variant="solid">
                  Admissions →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
