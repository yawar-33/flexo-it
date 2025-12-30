import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}
