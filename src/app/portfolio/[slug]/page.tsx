import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <Link href="/portfolio">
        <Button variant="ghost" className="mb-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Button>
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
           <div className="relative rounded-2xl overflow-hidden border border-border aspect-video">
             <Image 
               src={project.image} 
               alt={project.title} 
               fill 
               className="object-cover"
             />
           </div>
           
           <div className="flex gap-4">
             <Button className="flex-1 gap-2">
               <ExternalLink className="h-4 w-4" /> Live Demo
             </Button>
             <Button variant="outline" className="flex-1 gap-2">
               <Github className="h-4 w-4" /> View Code
             </Button>
           </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {project.category}
            </span>
             {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                  {t}
                </span>
             ))}
          </div>

          <div className="space-y-8 text-lg">
            <div className="bg-card border border-border rounded-xl p-6">
               <h3 className="text-xl font-bold mb-2 text-primary">The Challenge</h3>
               <p className="text-muted-foreground">{project.challenge}</p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
               <h3 className="text-xl font-bold mb-2 text-primary">The Solution</h3>
               <p className="text-muted-foreground">{project.solution}</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
               <h3 className="text-xl font-bold mb-2 text-primary">The Results</h3>
               <p className="text-muted-foreground">{project.results}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
