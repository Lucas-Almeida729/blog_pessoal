// components/PostCard.tsx

import Link from "next/link";
import type { Post } from "@/data/posts"; // Importando a tipagem

// O componente recebe um 'post' como propriedade (prop)
export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        {post.title}
      </h2>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <p className="text-gray-600 mb-4">{post.summary}</p>
      <Link 
        href={`/posts/${post.slug}`} 
        className="text-blue-600 hover:underline font-semibold"
      >
        Leia mais →
      </Link>
    </article>
  );
}