import Image from "next/image";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/projects/ProjectCard";
import Transitioner from "../components/Transitioner";
import BlurOverlay from "../components/BlurOverlay";
import { projects } from "../utils/projects";

const title = "Anish Shanbhag | Home";
const description =
  "Anish Shanbhag's website, showcasing his personal projects, past work experience in web/AI/ML/computer systems, and links to his social media and resume.";
export const metadata = {
  title,
  description,
  colorScheme: "light",
  creator: "Anish Shanbhag",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon-32x32.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
  manifest: "/site.webmanifest",
  themeColor: "white",
  keywords: [
    "Anish",
    "Shanbhag",
    "portfolio",
    "projects",
    "software",
    "resume",
  ],
  openGraph: {
    title,
    description,
    url: "https://www.anishshanbhag.com",
    siteName: title,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <BlurOverlay />
      <Transitioner />
      <div className="fixed top-0 w-full h-full z-[-30]">
        <Image
          src="/images/sky.png"
          priority
          fill
          className="object-fill w-full"
          alt="Aqua"
        />
      </div>

      <Navbar />
      <Hero />

      <div className="flex justify-center px-8 mb-8">
        <div className="flex justify-center flex-wrap gap-y-6 gap-x-6 max-w-[100rem]">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center mb-8 -tracking-wider">
        Made with ❤️ in Berkeley, CA
      </div>
    </>
  );
}
