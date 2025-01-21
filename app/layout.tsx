import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ScrollToTopButton from '@/components/ScrollToTopButton';
import AnimatedStars from '@/components/AnimatedStars';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Majed El-Naser - Personal Portfolio',
  description: 'A showcase of my skills, projects, and experiences',
  icons:{
    icon:"/Logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
    <link rel="icon" href="/Logo.png" />
    <link rel="apple-touch-icon" href="/Logo.png" />
  </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AnimatedStars />
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}