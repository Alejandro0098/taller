"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, Clock, ChevronDown, User, Tag as TagIcon, X } from "lucide-react"

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [visiblePosts, setVisiblePosts] = useState(12)
  const [hasMore, setHasMore] = useState(true)
  const [allTags, setAllTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        // Simular una petición al backend
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Datos de ejemplo - En un caso real, estos vendrían de la API
        const mockPosts = Array(30).fill().map((_, i) => {
          // Generar 1-3 tags aleatorios para cada post
          const availableTags = ["Premium", "Eventos", "Noticias", "Novedades", "Clásicos", "Deportivos", "Técnica", "Mercado"];
          const numTags = Math.floor(Math.random() * 3) + 1;
          const postTags = [];

          for (let j = 0; j < numTags; j++) {
            const randomTag = availableTags[Math.floor(Math.random() * availableTags.length)];
            if (!postTags.includes(randomTag)) {
              postTags.push(randomTag);
            }
          }

          return {
            id: `post-${i + 1}`,
            slug: `ejemplo-entrada-blog-${i + 1}`,
            title: `Entrada de blog de ejemplo ${i + 1}`,
            excerpt: "Una breve descripción de la entrada del blog que muestra un adelanto del contenido completo...",
            coverImage: "/mercedes_1.jpg",
            date: new Date(Date.now() - i * 86400000).toISOString(),
            readTime: Math.floor(Math.random() * 20) + 5,
            category: ["Noticias", "Eventos", "Lanzamientos"][Math.floor(Math.random() * 3)],
            author: "Nombre del Autor",
            tags: postTags
          }
        });

        setPosts(mockPosts)

        // Extraer todos los tags únicos
        const uniqueTags = [...new Set(mockPosts.flatMap(post => post.tags))];
        setAllTags(uniqueTags.sort());

        setHasMore(mockPosts.length > visiblePosts)
      } catch (error) {
        console.error("Error al cargar las entradas del blog:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Manejar selección de tags
  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  }

  // Filtrar posts por tags seleccionados
  const filteredPosts = selectedTags.length > 0
    ? posts.filter(post => selectedTags.some(tag => post.tags.includes(tag)))
    : posts;

  const handleLoadMore = () => {
    const newVisiblePosts = visiblePosts + 12
    setVisiblePosts(newVisiblePosts)
    setHasMore(filteredPosts.length > newVisiblePosts)
  }

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  if (isLoading) {
    return (
      <main className="relative min-h-screen flex justify-center">
        {/* Fondo más claro - igual que en loading.jsx */}
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

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 py-20">
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 -mt-10 bg-[radial-gradient(ellipse_at_center,rgba(196,151,53,0.15),transparent_70%)]"></div>
            <div className="relative inline-block">
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-[120px] opacity-5 font-bold text-[#C49735]">BLOG</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
                Nuestro <span className="text-[#C49735]">Blog</span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#C49735] to-[#E3BD77] rounded-full mb-6"></div>
            </div>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Descubre las últimas noticias, lanzamientos y eventos del mundo automotriz de lujo
            </p>
          </div>

          {/* Skeleton para filtros de tags */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-4">
              <TagIcon className="h-5 w-5 text-[#C49735] mr-2" />
              <h2 className="text-xl font-semibold text-white">Temas populares</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {Array(6).fill().map((_, i) => (
                <Skeleton key={i} className="h-8 w-24 rounded-full bg-[#1A1A1A]" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(12).fill().map((_, i) => (
              <div key={i} className="bg-[#111111] rounded-xl border border-[#333]/40 shadow-xl overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <Skeleton className="absolute inset-0 bg-[#1A1A1A] animate-pulse" />
                </div>
                <div className="p-6 space-y-4">
                  <Skeleton className="h-4 w-24 bg-[#1A1A1A] mb-2" />
                  <Skeleton className="h-8 w-full bg-[#1A1A1A] mb-2" />
                  <Skeleton className="h-20 w-full bg-[#1A1A1A] mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32 bg-[#1A1A1A]" />
                    <Skeleton className="h-4 w-20 bg-[#1A1A1A]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen flex justify-center">
      {/* Fondo más claro - igual que en loading.jsx */}
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

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 py-20">
        <section>
          {/* Título más destacado y llamativo */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 -mt-10 bg-[radial-gradient(ellipse_at_center,rgba(196,151,53,0.15),transparent_70%)]"></div>
            <div className="relative inline-block">
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-[120px] opacity-5 font-bold text-[#C49735]">BLOG</span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative z-10">
                Nuestro <span className="text-[#C49735]">Blog</span>
              </h1>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[#C49735] to-[#E3BD77] rounded-full mb-6"></div>
            </div>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Descubre las últimas noticias, lanzamientos y eventos del mundo automotriz de lujo
            </p>
          </div>

          {/* Filtros de tags */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <TagIcon className="h-5 w-5 text-[#C49735] mr-2" />
              <h2 className="text-xl font-semibold text-white">Filtrar por temas</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 items-center">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedTags.includes(tag)
                    ? "bg-[#C49735] text-black border border-[#C49735]"
                    : "bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/80 border border-[#333]/40 hover:border-[#C49735]/40"
                    }`}
                >
                  {tag}
                </button>
              ))}

              {selectedTags.length > 0 && (
                <button
                  onClick={() => setSelectedTags([])}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition-all bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/80 border border-[#333]/40 flex items-center"
                >
                  <X className="h-3.5 w-3.5 mr-1" />
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-white/80">No se encontraron artículos con los filtros seleccionados.</p>
              <Button
                onClick={() => setSelectedTags([])}
                className="mt-4 bg-[#111111] hover:bg-[#C49735] text-[#C49735] hover:text-black border border-[#C49735]/40 text-sm font-medium px-6 py-2 h-auto"
              >
                Ver todos los artículos
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(0, visiblePosts).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="bg-[#111111] rounded-xl border border-[#333]/40 shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-[#C49735]/40 group">
                      <div className="aspect-[3/2] relative">
                        <Image
                          src={'/mercedes_1.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-gradient-to-r from-[#C49735] to-[#E3BD77] text-black font-medium px-3 py-1">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-xs bg-[#1A1A1A] text-[#C49735] px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl font-bold text-white line-clamp-2 leading-tight group-hover:text-[#C49735] transition-colors">{post.title}</h2>
                        <p className="text-white/70 text-sm line-clamp-3">{post.excerpt}</p>
                        <div className="flex justify-between items-center pt-2">
                          <div className="flex items-center text-sm text-white/60">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center text-sm text-white/60">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime} min</span>
                          </div>
                        </div>
                        <div className="pt-2 flex justify-between items-center">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-[#C49735]" />
                            <span className="text-sm text-white/70">{post.author}</span>
                          </div>
                          <span className="text-[#C49735] text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            Leer más
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {hasMore && filteredPosts.length > visiblePosts && (
                <div className="flex justify-center mt-16">
                  <Button
                    onClick={handleLoadMore}
                    className="bg-[#111111] hover:bg-[#C49735] text-[#C49735] hover:text-black border border-[#C49735]/40 text-sm font-medium px-6 py-2 h-auto flex items-center transition-all duration-300 rounded-full shadow-md"
                  >
                    Mostrar más
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  )
} 