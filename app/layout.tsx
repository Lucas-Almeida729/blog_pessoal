// app/layout.tsx

// 1. IMPORTAÇÕES: Trazendo ferramentas para o nosso arquivo
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// 2. A FUNÇÃO PRINCIPAL: Onde a "mágica" acontece
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. A ESTRUTURA HTML: O esqueleto da página
return (
  <html lang="pt-br">
    <body className="bg-gray-50 text-gray-800">
      
      {/* CABEÇALHO */}
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Meu Blog
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* O CONTEÚDO DA PÁGINA ATUAL VAI AQUI! */}
      <main className="container mx-auto p-4 mt-8">
        {children}
      </main>

      {/* RODAPÉ */}
      <footer className="text-center p-4 mt-10 text-gray-500 text-sm">
        <p>© 2025 Meu Blog Pessoal.</p>
      </footer>

    </body>
  </html>
);
}