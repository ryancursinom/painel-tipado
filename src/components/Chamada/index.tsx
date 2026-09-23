import type { Aluno } from '../../types/aluno'
import CartaoPresenca from '../CartaoPresenca'

interface ChamadaProps {
  alunos: Aluno[]
  onPresenca: (id: number) => void
}

function Chamada({ alunos, onPresenca }: ChamadaProps) {
  const presentes = alunos.filter(aluno => aluno.presente).length
  const todosPresentes = alunos.length > 0 && alunos.every(aluno => aluno.presente)

  return (
    <section className="quadro">
      <h2>Chamada</h2>
      <p className="placar">Presentes: {presentes} de {alunos.length}</p>
      {todosPresentes && <p className="completa">turma completa!</p>}
      <ul>
        {alunos.map(aluno => (
          <CartaoPresenca key={aluno.id} aluno={aluno} onPresenca={onPresenca} />
        ))}
      </ul>
    </section>
  )
}

export default Chamada
