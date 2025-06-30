import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <BlogSection />
    </div>
  )
}
