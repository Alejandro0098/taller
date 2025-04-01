'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainEmblaRef, mainEmblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false,
  });
  const [previewEmblaRef, previewEmblaApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    skipSnaps: true,
    align: 'center',
  });

  const scrollPrev = useCallback(() => {
    if (mainEmblaApi) mainEmblaApi.scrollPrev();
  }, [mainEmblaApi]);

  const scrollNext = useCallback(() => {
    if (mainEmblaApi) mainEmblaApi.scrollNext();
  }, [mainEmblaApi]);

  const onSelect = useCallback(() => {
    if (mainEmblaApi) {
      setSelectedIndex(mainEmblaApi.selectedScrollSnap());
      previewEmblaApi?.scrollTo(mainEmblaApi.selectedScrollSnap());
    }
  }, [mainEmblaApi, previewEmblaApi]);

  const onPreviewClick = useCallback((index) => {
    mainEmblaApi?.scrollTo(index);
  }, [mainEmblaApi]);

  useEffect(() => {
    if (mainEmblaApi) {
      mainEmblaApi.on('select', onSelect);
      return () => {
        mainEmblaApi.off('select', onSelect);
      };
    }
  }, [mainEmblaApi, onSelect]);

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 select-none">
      {/* Carrusel principal */}
      <div className="relative mb-4 sm:mb-8 rounded-2xl overflow-hidden bg-premium-gray-dark">
        <div className="overflow-hidden" ref={mainEmblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] sm:h-[600px] bg-premium-gray-dark"
              >
                <Image
                  src={image}
                  alt={`Imagen ${index + 1} del carrusel`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 sm:p-3 rounded-full hover:bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 sm:p-3 rounded-full hover:bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Carrusel de previews */}
      <div className="overflow-hidden" ref={previewEmblaRef}>
        <div className="flex gap-2 sm:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onPreviewClick(index)}
              className={`relative w-28 h-20 sm:w-32 sm:h-20 flex-[0_0_auto] rounded-xl overflow-hidden transition-all duration-200 ${selectedIndex === index
                ? 'ring-2 ring-yellow-500 shadow-lg'
                : 'hover:scale-105 hover:shadow-md'
                }`}
              role="tab"
              aria-selected={selectedIndex === index}
              aria-label={`Imagen ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Vista previa ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
