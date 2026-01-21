import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Ematetie Secondary School",
    template: "%s | Ematetie Secondary School",
  },
  description:
    "School website demo highlighting admissions and readiness for the CBE transition.",
  openGraph: {
    title: "Ematetie Secondary School",
    description:
      "Admissions, CBE transition information, school leadership and updates.",
    images: ["/og.png"],
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <SiteHeader />
        <main id="main" className="min-h-[70vh] focus:outline-none">
  {children}
</main>

        <SiteFooter />
      </body>
    </html>
  );
}

