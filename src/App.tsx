import { useState } from 'react'
import type { Aluno } from './types/aluno'
import type { Aba } from './types/aba'
import Cabecalho from './components/Cabecalho'
import NavAbas from './components/NavAbas'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'

const TURMA_INICIAL: Aluno[] = [
  { id: 1, nome: 'Ana Souza', presente: true, entregas: 3 },
  { id: 2, nome: 'Beto Lima', presente: false, entregas: 1 },
  { id: 3, nome: 'Bia Costa', presente: true, entregas: 4 },
  { id: 4, nome: 'Caio Dias', presente: true, entregas: 0 },
]

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>(TURMA_INICIAL)
  const [aba, setAba] = useState<Aba>('chamada')

  function marcarPresenca(id: number) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  function registrarEntrega(id: number) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, entregas: aluno.entregas + 1 } : aluno
    ))
  }

  return (
    <main className="painel">
      <Cabecalho />
      <NavAbas aba={aba} onTrocar={setAba} />
      {aba === 'chamada'
        ? <Chamada alunos={alunos} onPresenca={marcarPresenca} />
        : <Entregas alunos={alunos} onEntrega={registrarEntrega} />}
    </main>
  )
}

export default App