import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="fixed inset-0 flex flex-col bg-[#1e1e1e]">
      {/* Modern header */}
      <header className="w-full bg-[#23272e] shadow-md py-6 px-4 md:px-8 flex items-center z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#62aaff] tracking-tight">
          Hello World!
        </h1>
      </header>
      <div className="flex flex-1 min-h-0">
        {/* Sidebar lateral esquerda alinhada com o header */}
        <aside className="w-56 min-w-[140px] bg-[#23272e] flex flex-col items-center py-8 shadow-md h-full">
          <Link
            to="/one"
            className="mb-4 px-5 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition duration-200 text-center w-full"
          >
            Go to Lesson 1
          </Link>
          {/* Adicione mais itens de menu aqui se desejar */}
        </aside>
        {/* Conteúdo principal */}
        <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
          {/* ...adicione conteúdo principal aqui se desejar... */}
        </main>
      </div>
    </div>
  )
}

export default App
