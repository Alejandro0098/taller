"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Share, Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Tag } from "lucide-react"
import { getBlogEntryById } from "@/lib/api"
import { Button } from "@/components/ui/button"

// Función para convertir el formato especial a HTML
const applyStyles = (content) => {
  if (!content) return '';

  // Reemplazamos los tags personalizados por etiquetas HTML
  let parsed = content;

  parsed = parsed.trim()
    .replace(/{N}(.*?){\/N}/g, '<strong class="text-white">$1</strong>')
    .replace(/{C}(.*?){\/C}/g, '<em class="text-white/90">$1</em>')
    .replace(/{S}(.*?){\/S}/g, '<u class="text-white/90">$1</u>')
    .replace(/{E url="(.*?)">(.*?){\/E}/g, '<a href="$1" class="mx-1 text-[#F0D78C] hover:text-[#E3BD77] no-underline transition-colors" target="_blank" rel="noopener noreferrer">$2</a>')
    .replace(/{Q}(.*?){\/Q}/g, '<blockquote class="border-l-4 border-[#D4A636] pl-4 italic my-4 text-white/80">$1</blockquote>')
    .replace(/{D class="(.*?)">(.*?){\/D}/g, '<div class="$1">$2</div>');

  return parsed;
};

const parseTag = ({ tipo, contenido, imagen, youtube_url }, index) => {
  let text = "";

  if (contenido) {
    text = applyStyles(contenido);
  }

  switch (tipo) {
    case "p":
      return <p className="mb-4 text-white/90 leading-7 md:leading-8 text-xs md:text-base" dangerouslySetInnerHTML={{ __html: text }}></p>;
    case "h3":
      return <h3 className="text-sm md:text-xl font-semibold text-[#F0D78C] mt-6 md:mt-8 mb-3 md:mb-4" dangerouslySetInnerHTML={{ __html: text }}></h3>;
    case "h2":
      return <h2 className="text-base md:text-2xl font-bold text-[#F0D78C] mt-8 md:mt-10 mb-4 md:mb-6" dangerouslySetInnerHTML={{ __html: text }}></h2>;
    case "h1":
      return <h1 className="text-lg md:text-3xl font-bold text-[#F0D78C] mt-10 md:mt-12 mb-6 md:mb-8" dangerouslySetInnerHTML={{ __html: text }}></h1>;
    case "list":
      const items = contenido.split('\r\n').map(item => item.trim());
      return (
        <div className="my-4">
          <div className="max-w-3xl mx-auto bg-black/20 p-4 md:p-6 rounded-lg border border-[#333]/30">
            <h4 className="text-sm md:text-lg font-semibold text-[#F0D78C] mb-3 md:mb-4 text-center">Lista de elementos</h4>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4A636] group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-white/90 leading-relaxed text-xs md:text-base" dangerouslySetInnerHTML={{ __html: applyStyles(item) }}></div>
                    {index < items.length - 1 && (
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4A636]/20 to-transparent my-2"></div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-[#D4A636] pl-3 md:pl-8 italic my-3 md:my-6 text-white/90 text-xs md:text-base bg-black/20 p-3 md:p-4 rounded-r-lg">
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </blockquote>
      );
    case "img":
      return (
        <div className="my-6 flex justify-center">
          <div className="max-w-2xl w-full">
            <img 
              src={`http://localhost:8000${imagen}`} 
              alt={contenido} 
              className="w-full h-auto rounded-lg shadow-lg border border-[#333]/30 object-contain" 
            />
            {contenido && (
              <p className="text-center text-white/60 mt-2 text-xs md:text-sm">{contenido}</p>
            )}
          </div>
        </div>
      );
    case "youtube":
      return (
        <div className="my-8 aspect-video w-full">
          <iframe 
            src={`${youtube_url.replace('watch?v=', 'embed/')}?modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
            className="w-full h-full rounded-lg shadow-lg border border-[#333]/30" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            title="Video de YouTube"
            frameBorder="0"
            style={{ maxWidth: '100%' }}
          />
        </div>
      );
    case "code":
      return (
        <pre className="bg-black/40 p-4 rounded-lg my-6 overflow-x-auto border border-[#333]/30">
          <code className="text-white/90 font-mono text-sm">{contenido}</code>
        </pre>
      );
    case "divider":
      return (
        <div className="my-8 flex items-center justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4A636] to-transparent"></div>
        </div>
      );
    case "card":
      return (
        <div className="bg-black/20 p-6 rounded-lg border border-[#333]/30 my-6">
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      );
    case "highlight":
      return (
        <div className="bg-[#D4A636]/10 p-4 rounded-lg my-6 border border-[#D4A636]/20">
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [data, setData] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getBlogEntryById('5')
      .then(post => {
        setData(post);
        // Simular recomendaciones con datos estáticos por ahora
        setRecommendations([
          {
            id: '1',
            slug: 'ejemplo-1',
            title: 'Nuevo Mercedes-Benz Clase S',
            excerpt: 'Descubre las últimas innovaciones en el nuevo Mercedes-Benz Clase S...',
            coverImage: '/mercedes_1.jpg'
          },
          {
            id: '2',
            slug: 'ejemplo-2',
            title: 'BMW Serie 8 Gran Coupé',
            excerpt: 'El nuevo BMW Serie 8 Gran Coupé redefine el lujo y el rendimiento...',
            coverImage: '/mercedes_1.jpg'
          },
          {
            id: '3',
            slug: 'ejemplo-3',
            title: 'Audi RS7 Sportback',
            excerpt: 'El Audi RS7 Sportback combina elegancia y potencia en un paquete único...',
            coverImage: '/mercedes_1.jpg'
          }
        ]);
      })
      .catch(error => {
        console.error('Error al cargar el post:', error);
      })
      .finally(() => {
        setIsLoading(false);
        // Añadir delay de 500ms antes de mostrar el contenido
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      });
  }, []);

  if (isLoading || isTransitioning) {
    return (
      <main className="relative min-h-screen flex justify-center">
        {/* Fondo más claro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>

        {/* Patrón sutil */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23C49735' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}>
        </div>

        {/* Efecto de luz sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,151,53,0.05),transparent_70%)]"></div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 py-12">
          {/* Botón de volver */}
          <div className="mb-8">
            <Skeleton className="h-10 w-32 bg-white/20" />
          </div>

          {/* Cabecera */}
          <div className="text-center mb-12">
            <Skeleton className="h-4 w-32 mx-auto mb-2 bg-white/20" />
            <Skeleton className="h-12 w-3/4 mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-px w-24 mx-auto bg-white/20" />
          </div>

          {/* Contenedor principal */}
          <div className="bg-[#0A0A0A]/60 border border-[#333]/30 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] p-8 md:p-12">
            <div className="space-y-8">
              {/* Párrafos */}
              <div className="space-y-4">
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-5/6 bg-white/20" />
                <Skeleton className="h-4 w-4/6 bg-white/20" />
              </div>

              {/* Imagen */}
              <div className="my-8">
                <Skeleton className="aspect-video w-full rounded-lg bg-white/20" />
              </div>

              {/* Más párrafos */}
              <div className="space-y-4">
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-3/4 bg-white/20" />
                <Skeleton className="h-4 w-5/6 bg-white/20" />
              </div>

              {/* Lista */}
              <div className="my-8">
                <Skeleton className="h-6 w-48 mb-4 bg-white/20" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full bg-white/20" />
                  <Skeleton className="h-4 w-5/6 bg-white/20" />
                  <Skeleton className="h-4 w-4/6 bg-white/20" />
                </div>
              </div>

              {/* Últimos párrafos */}
              <div className="space-y-4">
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-3/4 bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const parsedContent = data.map((curr, index) => parseTag(curr, index));

  return (
    <main className="relative min-h-screen flex justify-center">
      {/* Fondo más claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>

      {/* Patrón sutil */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23C49735' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}>
      </div>

      {/* Efecto de luz sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,151,53,0.05),transparent_70%)]"></div>

      <article className="relative w-full max-w-5xl mx-auto px-6 md:px-8 py-12">
        {/* Botón de volver */}
        <div className="mb-8">
          <Link href="/blog">
            <Button className="bg-[#0A0A0A] hover:bg-[#D4A636] text-[#D4A636] hover:text-black border border-[#D4A636]/30">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al blog
            </Button>
          </Link>
        </div>

        {/* Cabecera */}
        <header className="text-center mb-12">
          <span className="text-gold-500 text-sm tracking-wider">12 Marzo, 2024</span>
          <h1 className="text-2xl md:text-5xl font-bold text-white mt-4 mb-6">
            El nuevo BMW Serie 7: Lujo y tecnología en su máxima expresión
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </header>

        {/* Contenedor principal */}
        <div className="bg-[#0A0A0A]/60 border border-[#333]/30 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

          <div className="p-7 md:p-10 space-y-10">
            {parsedContent}
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        </div>

        {/* Sección de recomendaciones */}
        {recommendations.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F0D78C] mb-8 text-center">
              También te puede interesar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendations.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] overflow-hidden hover:border-[#D4A636]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,166,54,0.2)] h-full flex flex-col">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#D4A636] to-[#E3BD77] text-black font-medium">
                          Nuevo
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#D4A636] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-3 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#333]/30">
                        <div className="flex items-center text-sm text-white/60">
                          <Calendar className="h-4 w-4 mr-1 text-[#D4A636]" />
                          <span>12 Marzo</span>
                        </div>
                        <div className="flex items-center text-sm text-white/60">
                          <Clock className="h-4 w-4 mr-1 text-[#D4A636]" />
                          <span>5 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Ejemplos de componentes disponibles */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F0D78C] mb-8 text-center">
            Ejemplos de Componentes
          </h2>
          
          {/* Ejemplo de párrafo */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Párrafo</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              Este es un ejemplo de párrafo con estilo. Puedes incluir <strong className="text-white">texto en negrita</strong>, 
              <em className="text-white/90"> texto en cursiva</em>, <u className="text-[#F0D78C]">texto subrayado</u> y 
              <a href="#" className="text-[#F0D78C] hover:text-[#E3BD77] no-underline hover:underline underline-offset-4 transition-colors"> enlaces interactivos</a>. 
              También puedes combinar varios estilos como <strong className="text-white"><em className="text-white/90">negrita y cursiva</em></strong> o 
              <a href="#" className="mx-1 text-[#F0D78C] hover:text-[#E3BD77] no-underline hover:underline underline-offset-4 transition-colors"><strong className="text-white">enlaces en negrita</strong></a>.
            </p>
          </div>

          {/* Ejemplo de lista */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Lista</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/20 p-6 rounded-lg border border-[#333]/30">
                <h4 className="text-lg font-semibold text-[#F0D78C] mb-4">Lista con viñetas</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#D4A636] mr-2">•</span>
                    <span className="text-white/80">Primer elemento de la lista con un texto más largo que ocupa varias líneas para demostrar el alineamiento correcto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A636] mr-2">•</span>
                    <span className="text-white/80">Segundo elemento de la lista</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A636] mr-2">•</span>
                    <span className="text-white/80">Tercer elemento de la lista</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/20 p-6 rounded-lg border border-[#333]/30">
                <h4 className="text-lg font-semibold text-[#F0D78C] mb-4">Lista numerada</h4>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-white/80">
                    <span className="text-[#D4A636] mr-2">1.</span>
                    Primer paso del proceso
                  </li>
                  <li className="text-white/80">
                    <span className="text-[#D4A636] mr-2">2.</span>
                    Segundo paso del proceso
                  </li>
                  <li className="text-white/80">
                    <span className="text-[#D4A636] mr-2">3.</span>
                    Tercer paso del proceso
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Ejemplo de cita */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Cita</h3>
            <blockquote className="border-l-4 border-[#D4A636] pl-6 italic my-6 text-white/80 text-lg bg-black/20 p-4 rounded-r-lg">
              "Esta es una cita destacada que puede incluir texto importante o referencias."
            </blockquote>
          </div>

          {/* Ejemplo de imagen */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Imagen</h3>
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                <img 
                  src="/mercedes_1.jpg" 
                  alt="Ejemplo de imagen" 
                  className="w-full h-auto rounded-lg shadow-lg border border-[#333]/30" 
                />
                <p className="text-center text-white/60 mt-2 text-sm">Pie de foto descriptivo</p>
              </div>
            </div>
          </div>

          {/* Ejemplo de tarjeta destacada */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Tarjeta Destacada</h3>
            <div className="bg-[#D4A636]/10 p-6 rounded-lg border border-[#D4A636]/20">
              <h4 className="text-lg font-semibold text-[#F0D78C] mb-2">Título de la tarjeta</h4>
              <p className="text-white/80">
                Este es un contenido destacado que puede incluir información importante o resaltada.
              </p>
            </div>
          </div>

          {/* Ejemplo de código */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Código</h3>
            <pre className="bg-black/40 p-4 rounded-lg my-6 overflow-x-auto border border-[#333]/30">
              <code className="text-white/90 font-mono text-sm">
                {`function ejemplo() {
  console.log("Este es un ejemplo de código");
}`}
              </code>
            </pre>
          </div>

          {/* Ejemplo de video de YouTube */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Video de YouTube</h3>
            <div className="my-8">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-[#333]/30 shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/n8bmZKM9BKs"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video de YouTube"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              <p className="text-center text-white/60 mt-2 text-sm">Video demostrativo del nuevo modelo</p>
            </div>
          </div>

          {/* Ejemplo de separador */}
          <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#F0D78C] mb-4">Separador</h3>
            <div className="my-8 flex items-center justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4A636] to-transparent"></div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 