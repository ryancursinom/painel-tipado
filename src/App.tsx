import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Chamada from './components/Chamada'

const TURMA_INICIAL = [
  { id: 1, nome: 'Ana Souza', presente: true, entregas: 3 },
  { id: 2, nome: 'Beto Lima', presente: false, entregas: 1 },
  { id: 3, nome: 'Bia Costa', presente: true, entregas: 4 },
  { id: 4, nome: 'Caio Dias', presente: true, entregas: 0 },
]

function App() {
  const [alunos, setAlunos] = useState(TURMA_INICIAL)

  function marcarPresenca(id: any) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  return (
    <main className="painel">
      <Cabecalho />
      <Chamada alunos={alunos} onPresenca={marcarPresenca} />
    </main>
  )
}

export default App