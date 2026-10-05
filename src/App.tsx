import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import type { Aluno } from './types/aluno'
import { buscarTurma } from './services/turma'
import Cabecalho from './components/Cabecalho'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'
import FichaAluno from './components/FichaAluno'
import NaoEncontrado from './components/NaoEncontrado'

function App() {
  // a turma nao mora mais no codigo: ela CHEGA pela rede
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  useEffect(() => {
    async function carregar() {

      setCarregando(true)
      setErro('')

      try {

        const dados = await buscarTurma()
        setAlunos(dados)

      } catch (falha) {

        setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar a turma.')

      } finally {
        setCarregando(false)
      }
    }

    carregar()
  }, [])

  function marcarPresenca(id: number) {
    setAlunos(anteriores => anteriores.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  function registrarEntrega(id: number) {
    setAlunos(anteriores => anteriores.map(aluno =>
      aluno.id === id ? { ...aluno, entregas: aluno.entregas + 1 } : aluno
    ))
  }

  return (
    <BrowserRouter>
      <div className="painel">
        <Cabecalho />

        {/* as abas viraram LINKS: cada tela tem uma URL, e a URL sobrevive ao F5 */}
        <nav className="abas" aria-label="Telas do painel">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'aba ativa' : 'aba')}>Chamada</NavLink>
          
          <NavLink to="/entregas" end className={({ isActive }) => (isActive ? 'aba ativa' : 'aba')}>Entregas</NavLink>
        </nav>

        <main>
          {/* as MESMAS regioes vivas da S08 — agora anunciam a rede.
              dentro do <main>: quem navega por marcos TEM de alcancar o aviso */}
          <p className="aviso" role="status" aria-live="polite">
            {carregando && <span>carregando a turma...</span>}
          </p>
          <p className="erro" role="alert" aria-live="assertive">{erro}</p>

          <Routes>
            <Route path="/" element={<Chamada alunos={alunos} onPresenca={marcarPresenca} />} />

            <Route path="/entregas" element={<Entregas alunos={alunos} onEntrega={registrarEntrega} />}
             />

            <Route path="/aluno/:id" element={<FichaAluno alunos={alunos} carregando={carregando} />}
             />

            <Route path="*" element={<NaoEncontrado/>}
             />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
