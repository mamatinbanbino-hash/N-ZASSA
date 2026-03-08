import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-obsidian text-white overflow-hidden`}>
        {/* Le fond noir global de N'ZASSA */}
        <div className="fixed inset-0 bg-obsidian z-[-1]" />
        
        {/* L'application */}
        <main className="h-screen w-full max-w-md mx-auto relative border-x border-white/5">
          {children}
        </main>
      </body>
    </html>
  );
}
