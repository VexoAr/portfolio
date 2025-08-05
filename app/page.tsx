import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MessageCircle, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Empresa de Software</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hola, somos</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Vexo
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Nos dedicamos a crear sitios web modernos y funcionales, diseñados para destacar tu presencia en línea
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500 bg-transparent"
                >
                  Contactanos
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/vexoar" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              {/*<Link href="https://www.linkedin.com/in/tomasferrer/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>*/}
              <Link href="mailto:vexo.contact.dev@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              
              <Link href="https://wa.me/2355506234" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Button>
              </Link>
              <Link href="https://instagram.com/vexo.ar" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Nuestro Equipo" subtitle="Conoce a los Fundadores" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {/* Primer Integrante (Tomas) */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src="/tomi.png?height=600&width=600"
                    alt="Tomas Ferrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">Disponible</span>
                    </div>
                  </div>
                </div>
              </div>
              <GlassmorphicCard>
                <h3 className="text-xl font-semibold mb-2">Tomas Ferrer</h3>
                <p className="text-sm text-zinc-400">Co-Fundador y Desarrollador Web</p>
                <p className="text-zinc-300 mt-4">
                  Tomi es el cerebro detrás de la arquitectura y el desarrollo. Su pasión es convertir las ideas en sitios web funcionales y atractivos.
                </p>
              </GlassmorphicCard>
            </div>

            {/* Segundo Integrante (Mike) */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src="/mike.png?height=600&width=600"
                    alt="Michael Vasquez"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">Disponible</span>
                    </div>
                  </div>
                </div>
              </div>
              <GlassmorphicCard>
                <h3 className="text-xl font-semibold mb-2">Michael Vasquez</h3>
                <p className="text-sm text-zinc-400">Co-Fundador y Diseñador UI/UX</p>
                <p className="text-zinc-300 mt-4">
                  Mike es el encargado de la experiencia de usuario y la estética visual de cada proyecto, garantizando interfaces intuitivas y un diseño impactante.
                </p>
              </GlassmorphicCard>
            </div>

            {/* Tercer Integrante (Facu) */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
                <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                  <img
                    src="/facu.png?height=600&width=600"
                    alt="Facu Lambertucci"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">Disponible</span>
                    </div>
                  </div>
                </div>
              </div>
              <GlassmorphicCard>
                <h3 className="text-xl font-semibold mb-2">Facundo Lambertucci</h3>
                <p className="text-sm text-zinc-400">Co-Fundador y Estratega Digital</p>
                <p className="text-zinc-300 mt-4">
                  Facu se enfoca en la estrategia digital, asegurando que cada sitio web no solo funcione, sino que también cumpla sus objetivos de negocio.
                </p>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Nuestros Proyectos" subtitle="Algunos trabajos recientes" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Barber Web"
              description="Web para gestionar turnos de una barberia/peluqueria"
              tags={["Next.js", "TypeScript", "MongoDB"]}
              image="/Barberia.png?height=400&width=600"
              demoUrl="https://turnos-barberia-neon.vercel.app/"
              repoUrl="https://github.com/FerrerThomas/turnosBarberia"
            />
            <ProjectCard
              title=""
              description=""
              tags={["Next.js", "Node.js", "Tailwind CSS", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Tienda Suplmentos Deportivos"
              description="Web para la venta de suplementeos, con base de datos para los productos y ventas"
              tags={["Next.js", "Pagos Online", "Node.js", "MongoDB"]}
              image="/supleShop.png?height=400&width=600"
              demoUrl="https://suple-shop.vercel.app/"
              repoUrl="https://github.com/FerrerThomas/supleShop"
            />
            <ProjectCard
              title="Gestion Deposito"
              description="Web con un plano iterativo, notificaciones para tareas y mas..."
              tags={["TypeScript", "Next.js", "MongoDB"]}
              image="/gestionDepo.png?height=400&width=600"
              demoUrl="https://gestion-deposito.vercel.app/"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title=""
              description=""
              tags={["React", "Weather API", "Chart.js", "Styled Components"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title=""
              description=""
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="siguiendo estos pasos" subtitle="¿Como obtener tu web?" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Ponte en contacto" subtitle="Trabajemos juntos" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Informacion de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">vexo.contact.dev@gmail.com</div>
                  </div>
                </div>

                {/*<div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  {/*<div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/tomasferrer</div>
                  </div>
                </div>*/}

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/vexoar</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">WhatsApp</div>
                    <div className="font-medium">+54 9 2355 506234</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Instagram</div>
                    <div className="font-medium">@vexo.ar</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponible</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Vexo</span>
              <span className="text-white"> {/*Ferrer*/}</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Vexo. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/vexoar" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            {/*<Link href="https://www.linkedin.com/in/tomasferrer/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>*/}
            <Link href="mailto:vexo.contact.dev@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="https://wa.me/2355506234" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
            <Link href="https://instagram.com/vexo.ar" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
