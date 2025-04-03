"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Share, Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin, Tag } from "lucide-react"

// Función para convertir el formato especial a HTML
const parseContent = (content) => {
  if (!content) return '';

  // Reemplazamos los tags personalizados por etiquetas HTML
  let parsed = content;

  // Negrita: {N}texto{/N} -> <strong>texto</strong>
  parsed = parsed.replace(/\{N\}(.*?)\{\/N\}/g, '<strong class="text-white">$1</strong>');

  // Cursiva: {I}texto{/I} -> <em>texto</em>
  parsed = parsed.replace(/\{I\}(.*?)\{\/I\}/g, '<em class="text-white/90">$1</em>');

  // Títulos: {H2}texto{/H2} -> <h2>texto</h2>
  parsed = parsed.replace(/\{H2\}(.*?)\{\/H2\}/g, '<h2 class="text-xl md:text-2xl font-bold text-[#F0D78C] mt-8 mb-4">$1</h2>');

  // Subtítulos: {H3}texto{/H3} -> <h3>texto</h3>
  parsed = parsed.replace(/\{H3\}(.*?)\{\/H3\}/g, '<h3 class="text-lg md:text-xl font-semibold text-[#F0D78C] mt-6 mb-3">$1</h3>');

  // Enlaces: {A:url}texto{/A} -> <a href="url">texto</a>
  parsed = parsed.replace(/\{A:(.*?)\}(.*?)\{\/A\}/g, '<a href="$1" class="text-[#F0D78C] hover:underline" target="_blank" rel="noopener noreferrer">$2</a>');

  // Listas: {UL}item 1{LI}item 2{/UL} -> <ul><li>item 1</li><li>item 2</li></ul>
  parsed = parsed.replace(/\{UL\}(.*?)\{\/UL\}/g, (match, content) => {
    const items = content.split('{LI}');
    return '<ul class="list-disc pl-6 mt-3 mb-6 space-y-2 text-white/80">' +
      items.map(item => `<li>${item}</li>`).join('') +
      '</ul>';
  });

  // Citas: {Q}texto{/Q} -> <blockquote>texto</blockquote>
  parsed = parsed.replace(/\{Q\}(.*?)\{\/Q\}/g, '<blockquote class="border-l-4 border-[#D4A636] pl-4 italic my-4 text-white/80">$1</blockquote>');

  // Párrafos: asumimos que cada línea es un párrafo
  parsed = parsed.split('\n').map(line => {
    // Si la línea ya es un elemento HTML, la dejamos como está
    if (line.trim().startsWith('<')) return line;
    // Si es una línea vacía, devolvemos un espacio en blanco
    if (line.trim() === '') return '<br>';
    // De lo contrario, es un párrafo
    return `<p class="mb-4 text-white/80 leading-relaxed">${line}</p>`;
  }).join('');

  return parsed;
};

async function getBlogPost(slug) {
  // Simular delay de 1 segundo
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Aquí iría tu lógica real de fetch de datos
  return {
    // datos del post
  };
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug);

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
        {/* Cabecera - fuera del contenedor principal */}
        <header className="text-center mb-12">
          <span className="text-gold-500 text-sm tracking-wider">12 Marzo, 2024</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            El nuevo BMW Serie 7: Lujo y tecnología en su máxima expresión
          </h1>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </header>

        {/* Contenedor principal */}
        <div className="bg-[#0A0A0A]/40 border border-[#333]/30 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

          <div className="p-8 md:p-12 space-y-12">
            {/* Imagen principal */}
            <figure>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/blog/bmw-7.jpg"
                  alt="BMW Serie 7 2024"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-400 mt-3 text-center">
                BMW Serie 7 2024 en su presentación oficial
              </figcaption>
            </figure>

            {/* Introducción */}
            <div className="text-gray-300 leading-relaxed text-center">
              <p className="text-xl mb-6">
                El nuevo BMW Serie 7 representa la culminación de décadas de innovación en el segmento de lujo,
                estableciendo nuevos estándares en confort, tecnología y sostenibilidad.
              </p>
              <p>
                Con su imponente presencia y sus avanzadas características, este buque insignia de BMW
                redefine lo que significa viajar en primera clase sobre cuatro ruedas.
              </p>
            </div>

            {/* Ejemplo de sección con fondo semi-transparente */}
            <section>
              <h2 className="text-2xl text-gold-500 font-semibold mb-8 text-center">
                Diseño exterior revolucionario
              </h2>
              <div className="space-y-8">
                <div className="text-gray-300 space-y-6">
                  <p className="text-center">
                    La parrilla iluminada y los faros divididos en dos niveles marcan un nuevo lenguaje de diseño
                    para BMW. Las proporciones alargadas y la línea de techo fluida crean una silueta elegante
                    que combina presencia y deportividad.
                  </p>
                  {/* Card con fondo semi-transparente */}
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-[#333]/20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0"></span>
                        <span>Nueva parrilla BMW con iluminación Iconic Glow</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0"></span>
                        <span>Faros LED adaptativos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0"></span>
                        <span>Llantas de 21 pulgadas</span>
                      </div>
                    </div>
                  </div>
                </div>
                <figure>
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/blog/bmw-7-front.jpg"
                      alt="Frontal BMW Serie 7"
                      fill
                      className="object-cover"
                    />
                  </div>
                </figure>
              </div>
            </section>

            {/* Separador con transparencia */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Conclusión con fondo semi-transparente */}
            <section>
              <h2 className="text-2xl text-gold-500 font-semibold mb-6 text-center">Conclusión</h2>
              <p className="text-gray-300 mb-8 text-center">
                El nuevo BMW Serie 7 no es solo un automóvil de lujo; es una declaración de intenciones
                sobre el futuro de la movilidad premium.
              </p>
              <blockquote className="bg-white/5 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6">
                <p className="text-gold-500 font-medium text-center">
                  "El Serie 7 2024 marca un antes y un después en el segmento de las berlinas de lujo,
                  estableciendo nuevos estándares que la competencia tardará años en alcanzar."
                </p>
              </blockquote>
            </section>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
        </div>
      </article>
    </main>
  )
} 