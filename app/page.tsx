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
                <span className="relative z-10">Estudiante de Informatica</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hola, soy</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Tomas Ferrer
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Me dedico a diseñar y crear Webs y App para clientes
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
                  Contactame
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/ferrerthomas" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/tomasferrer/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:tomasferrer_web@hotmail.com">
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
              <Link href="https://instagram.com/ferrer_tomas" target="_blank" rel="noopener noreferrer">
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
          <SectionHeading title="Sobre mi" subtitle="¿Quien soy?" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-16">
            {/* Tarjeta 1 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-80 h-80 rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/yo.png?height=400&width=400"
                  alt="Tomas Ferrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium">Disponible</span>
                  </div>
                </div>
              </div>
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  Soy Tomas Ferrer
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Soy del interior de la provincia y actualmente estudiante de informática en la UNLP.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Me dedico a crear webs para emprendimientos o empresas, cumpliendo objetivos como tiendas online o webs informativas.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Nombre</div>
                    <div className="font-medium">Tomas Ferrer</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">tomasferrer_web@hotmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Ubicación</div>
                    <div className="font-medium">La Plata, Argentina</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Estado</div>
                    <div className="font-medium text-green-500">Disponible</div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>

            {/* Tarjeta 2 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-80 h-80 rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/mike.png?height=400&width=400"
                  alt="Mike"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium">Disponible</span>
                  </div>
                </div>
              </div>
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  Soy Mike
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Desarrollador Frontend apasionado por el diseño y la experiencia de usuario.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Trabajo en proyectos modernos usando React y tecnologías web actuales.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Nombre</div>
                    <div className="font-medium">Mike Johnson</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">mike@email.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Ubicación</div>
                    <div className="font-medium">Buenos Aires, Argentina</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Estado</div>
                    <div className="font-medium text-green-500">Disponible</div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>

            {/* Tarjeta 3 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-80 h-80 rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/jane.png?height=400&width=400"
                  alt="Jane"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium">Disponible</span>
                  </div>
                </div>
              </div>
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  Soy Jane
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Especialista en backend y bases de datos, enfocada en soluciones escalables y seguras.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Me gusta automatizar procesos y optimizar el rendimiento de las aplicaciones.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Nombre</div>
                    <div className="font-medium">Jane Doe</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">jane@email.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Ubicación</div>
                    <div className="font-medium">Rosario, Argentina</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Estado</div>
                    <div className="font-medium text-green-500">Disponible</div>
                  </div>
                </div>
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
          <SectionHeading title="Mis Proyectos" subtitle="Algunos trabajos recientes" />

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
              title="Portfolio"
              description="Web que estas viendo actualmente, diseñada para mostrar trabajos y conexion con api de mails"
              tags={["Next.js", "Node.js", "Tailwind CSS", "TypeScript"]}
              image="/Porfolio.png?height=400&width=600"
              demoUrl="https://portfolio-ft-tomas.vercel.app/"
              repoUrl="https://github.com/FerrerThomas/portfolio"
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
                    <div className="font-medium">tomasferrer_web@hotmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/tomasferrer</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/ferrerthomas</div>
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
                    <div className="font-medium">@ferrer_tomas</div>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Tomas</span>
              <span className="text-white"> Ferrer</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Tomas Ferrer. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/tomasferrer" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/tomasferrer/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:tomasferrer_web@hotmail.com">
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
            <Link href="https://instagram.com/ferrer_tomas" target="_blank" rel="noopener noreferrer">
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
