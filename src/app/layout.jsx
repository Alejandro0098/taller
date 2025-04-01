import { Inter } from "next/font/google"
import "./globals.css"
import '../../styles/globals.css'
// import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Premium Car Dealership",
  description: "Discover our exclusive collection of luxury and performance vehicles",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-premium-gray-medium`}>
        <Header />
        {children}
        <Footer />
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        </ThemeProvider> */}
      </body>
    </html>
  )
}



import './globals.css'