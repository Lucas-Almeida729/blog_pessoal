// components/LikeButton.tsx

// 1. Diretiva "use client" - ESSENCIAL para interatividade
"use client";

import { useState } from "react";

export default function LikeButton() {
  // 2. Estado para armazenar o número de curtidas
  const [likes, setLikes] = useState(0);

  // 3. Função para ser chamada quando o botão for clicado
  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <button
      onClick={handleLike}
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300"
    >
      ❤️ Curtir ({likes})
    </button>
  );
}