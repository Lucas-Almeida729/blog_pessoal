// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          Olá! Eu sou um desenvolvedor de software apaixonado por criar soluções 
          inovadoras e aprender novas tecnologias. Este blog é um espaço onde 
          compartilho um pouco do meu conhecimento e das minhas experiências no 
          mundo da programação.
        </p>
        <p className="text-lg text-gray-700">
          Sinta-se à vontade para explorar os artigos e entrar em contato.
        </p>

        {/* Seção de Contato e Redes Sociais */}
        <div className="mt-6 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-3">Contato e Redes Sociais</h2>
          <ul className="list-none space-y-2">
            <li><strong>Email:</strong> <a href="mailto:seuemail@exemplo.com" className="text-blue-600 hover:underline">seuemail@exemplo.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="#" className="text-blue-600 hover:underline">seu-linkedin</a></li>
            <li><strong>GitHub:</strong> <a href="#" className="text-blue-600 hover:underline">Lucas Almeida</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}