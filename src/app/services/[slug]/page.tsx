import { notFound } from "next/navigation"
import { services } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="container mx-auto px-4 py-24">
      <Link href="/services">
        <Button variant="ghost" className="mb-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Button>
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="mb-6 p-4 rounded-2xl bg-primary/10 inline-block">
            <Icon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {service.fullDescription}
          </p>
          
          <Link href="/contact">
            <Button size="lg">Get a Quote</Button>
          </Link>
        </div>

        <div className="space-y-8">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Benefits</h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
