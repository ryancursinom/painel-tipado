<<<<<<< HEAD
import type { Aluno } from '../../types/aluno'

interface CartaoPresencaProps {
  aluno: Aluno,
=======
import { Link } from 'react-router'
import type { Aluno } from '../../types/aluno'

interface CartaoPresencaProps {
  aluno: Aluno
>>>>>>> 6503238 (feat: conexão com projeto da outra aula)
  onPresenca: (id: number) => void
}

function CartaoPresenca({ aluno, onPresenca }: CartaoPresencaProps) {
<<<<<<< HEAD
    return (
      <li className="cartao">
        <span className="nome">{aluno.nome}</span>

        <span className={aluno.presente ? 'badge ok' : 'badge nope'}>
          {aluno.presente ? 'presente' : 'ausente'}
        </span>

        <button onClick={() => onPresenca(aluno.id)}>
          {aluno.presente ? 'marcar falta' : 'marcar presença'}
        </button>
        
      </li>
    )
  }
  
  export default CartaoPresenca
=======
  return (
    <li className="cartao">
      <span className="nome">
        <Link to={`/aluno/${aluno.id}`}>{aluno.nome}</Link>
      </span>
      <span className={aluno.presente ? 'badge ok' : 'badge nope'}>
        {aluno.presente ? 'presente' : 'ausente'}
      </span>
      <button onClick={() => onPresenca(aluno.id)}>
        {aluno.presente ? 'marcar falta' : 'marcar presença'}
      </button>
    </li>
  )
}

export default CartaoPresenca
>>>>>>> 6503238 (feat: conexão com projeto da outra aula)
