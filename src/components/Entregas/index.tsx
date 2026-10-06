<<<<<<< HEAD
import CartaoEntrega from '../CartaoEntrega'
import type { Aluno } from '../../types/aluno'

interface EntregasProps {
    alunos: Aluno[],
    onEntrega: (id: number) => void
}

function Entregas({ alunos, onEntrega }: EntregasProps) {

  const total = alunos.reduce((soma: number, aluno) => soma + aluno.entregas, 0)

  return (
    <section className="quadro">

      <h2>Entregas</h2>
      <p className="placar">Total de entregas: {total}</p>

      <ul>
        {alunos.map((aluno) => (
          <CartaoEntrega key={aluno.id} aluno={aluno} onEntrega={onEntrega} />
        ))}
      </ul>

=======
import type { Aluno } from '../../types/aluno'
import CartaoEntrega from '../CartaoEntrega'

interface EntregasProps {
  alunos: Aluno[]
  onEntrega: (id: number) => void
}

function Entregas({ alunos, onEntrega }: EntregasProps) {
  const total = alunos.reduce((soma, aluno) => soma + aluno.entregas, 0)

  return (
    <section className="quadro">
      <h2>Entregas</h2>
      <p className="placar">Total de entregas: {total}</p>
      <ul>
        {alunos.map(aluno => (
          <CartaoEntrega key={aluno.id} aluno={aluno} onEntrega={onEntrega} />
        ))}
      </ul>
>>>>>>> 6503238 (feat: conexão com projeto da outra aula)
    </section>
  )
}

<<<<<<< HEAD
export default Entregas
=======
export default Entregas
>>>>>>> 6503238 (feat: conexão com projeto da outra aula)
