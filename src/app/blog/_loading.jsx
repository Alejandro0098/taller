// export default function BlogLoading() {
//   return (
//     <main className="relative min-h-screen flex justify-center">
//       {/* Fondo más claro - igual que en page.jsx */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"></div>
      
//       {/* Patrón sutil */}
//       <div className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0,0 L40,40 M0,40 L40,0' stroke='%23C49735' stroke-width='1'/%3E%3C/svg%3E")`,
//           backgroundSize: '20px 20px'
//         }}>
//       </div>
      
//       {/* Efecto de luz sutil */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,151,53,0.05),transparent_70%)]"></div>

//       <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8 py-20">
//         {/* Título */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-6">
//             BLOG
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Últimas Noticias
//           </h1>
//           <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
//         </div>

//         {/* Grid de skeletons */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-[#333]/50 hover:border-gold-500/50 transition-colors">
//               {/* Skeleton imagen */}
//               <div className="w-full h-48 bg-gradient-to-r from-[#1E1E1E] via-[#252525] to-[#1E1E1E] animate-pulse"></div>
              
//               {/* Skeleton contenido */}
//               <div className="p-6 space-y-4">
//                 {/* Skeleton fecha */}
//                 <div className="w-24 h-4 bg-gradient-to-r from-[#1E1E1E] via-[#252525] to-[#1E1E1E] rounded animate-pulse"></div>
                
//                 {/* Skeleton título */}
//                 <div className="space-y-2">
//                   <div className="w-full h-6 bg-gradient-to-r from-[#1E1E1E] via-[#252525] to-[#1E1E1E] rounded animate-pulse"></div>
//                   <div className="w-2/3 h-6 bg-gradient-to-r from-[#1E1E1E] via-[#252525] to-[#1E1E1E] rounded animate-pulse"></div>
//                 </div>
                
//                 {/* Skeleton descripción */}
//                 <div className="space-y-2">
//                   <div className="w-full h-4 bg-gradient-to-r from-[#1E1E1E] via-[#252525] to-[#1E1E1E] rounded animate-pulse"></div>
//                   <div className="w-full h-4 bg-gradient-to-r from-[#1E1E1E] via-[#252525] to-[#1E1E1E] rounded animate-pulse"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// } 