import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import type { Aluno } from '../../types/aluno'

interface FichaAlunoProps {
  alunos: Aluno[]
  // o `?` diz que esta prop e' OPCIONAL: uma ficha pode viver sem espera nenhuma
  // (turma escrita no codigo). Quando a turma chega pela rede, o App manda o valor de verdade.
  carregando?: boolean
}

function FichaAluno({ alunos, carregando = false }: FichaAlunoProps) {

  const { id } = useParams()
  const navigate = useNavigate()

  const procurado = id === undefined ? undefined : Number(id)
  const aluno = procurado === undefined ? undefined : alunos.find(item => item.id === procurado)

  useEffect(() => {
    if (!carregando && alunos.length > 0 && aluno === undefined) {
      navigate('/', {replace: true})
    }
  }, [carregando, alunos.length, aluno, navigate])

  // enquanto a turma nao chegou, a regiao viva do App ja anuncia a espera
  if (carregando) return null
  // o efeito acima ja esta levando a pessoa embora; nao pintamos nada no caminho
  // (pintar "nao encontrado" aqui faria a tela piscar duas vezes antes de sair)
  if (aluno === undefined) return null

  return (
    <section className="quadro">
      <h2>{aluno.nome}</h2>
      <p className="placar"><span className={aluno.presente ? 'badge ok' : 'badge nope'}>{aluno.presente ? 'presente hoje' : 'ausente hoje'}</span></p>
      <ul>
        <li className="cartao">
          <span className="nome">entregas</span>
          <span className="contagem">{aluno.entregas}</span>
        </li>
        <li className="cartao">
          <span className="nome">id na turma</span>
          <span className="contagem">{aluno.id}</span>
        </li>
      </ul>
      {/* a PESSOA escolheu voltar: tem de ser um link, para abrir em nova aba e copiar endereco.
          um <button onClick={navigate}> quebraria as tres coisas, e o leitor de tela diria "botao". */}
      <Link to="/" className="voltar">voltar para a chamada</Link>
    </section>
  )
}

export default FichaAluno
