// app/posts/[slug]/page.tsx

import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

// A página recebe 'params' como uma propriedade (prop)
// O nome 'slug' vem do nome da pasta '[slug]'
export default function PostPage({ params }: { params: { slug: string } }) {
  // 1. Encontrar o post correto usando o 'slug' da URL
  const post = posts.find((post) => post.slug === params.slug);

  // 2. Se o post não for encontrado, mostrar uma página de erro 404
  if (!post) {
    notFound();
  }

  // 3. Se o post for encontrado, exibir seu conteúdo
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="bg-white p-8 rounded-lg shadow-md">
        {/* Metadados do post */}
        <h1 className="text-4xl font-extrabold mb-3 text-gray-900">{post.title}</h1>
        <p className="text-gray-500 text-md mb-6">
          Publicado em {post.date}
        </p>

        {/* Conteúdo completo do post */}
        <div className="prose prose-lg max-w-none text-gray-800">
          <p>{post.summary}</p>
          {/* Em um blog real, aqui viria o conteúdo completo em Markdown ou HTML */}
          <p>
            Este é o lugar para o conteúdo completo do seu post. Em um projeto real, 
            você poderia buscar este conteúdo de um CMS (Content Management System) 
            ou de um arquivo Markdown. Por enquanto, estamos reutilizando o resumo
            para demonstrar a estrutura da página.
          </p>
          <div className="mt-8 pt-6 border-t">
          <LikeButton />
        </div>
        </div>
      </article>
    </main>
  );
}