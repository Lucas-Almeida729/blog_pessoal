// data/posts.ts

// Tipagem para cada post
export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

// Array com os dados dos posts
export const posts: Post[] = [
  {
    slug: "nextjs-app-router",
    title: "Entendendo o App Router do Next.js",
    summary: "Uma visão geral sobre a nova estrutura de roteamento do Next.js que usa Server Components por padrão.",
    date: "20/09/202",
  },
  {
    slug: "server-vs-client-components",
    title: "Server vs. Client Components",
    summary: "Quando usar cada tipo de componente no Next.js para otimizar a performance e a interatividade da sua aplicação.",
    date: "18/09/2025",
  },
  {
    slug: "estilizacao-com-tailwind-css",
    title: "Estilização com Tailwind CSS",
    summary: "Dicas práticas para criar designs modernos e responsivos de forma rápida e eficiente com Tailwind CSS.",
    date: "15/09/2025",
  },
  
];