import CartaoPresenca from '../CartaoPresenca'

function Chamada({ alunos, onPresenca }: any) {

  const presentes = alunos.filter((aluno: any) => aluno.presente).length

  const todosPresentes = alunos.length > 0 && alunos.every((aluno: any) => aluno.presente)

  return (
    <section className="quadro">

      <h2>Chamada</h2>

      <p className="placar">Presentes: {presentes} de {alunos.length}</p>
      {todosPresentes && <p className="completa">turma completa!</p>}

      <ul>
        {alunos.map((aluno: any) => (
          <CartaoPresenca key={aluno.id} aluno={aluno} onPresenca={onPresenca} />
        ))}
      </ul>
      
    </section>
  )
}

export default Chamada