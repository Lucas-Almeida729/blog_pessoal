// app/page.tsx

import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        Blog Pessoal Simples
      </h1>

      {/* Seção da lista de posts */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapeamos o array de posts e renderizamos um Card para cada um */}
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}