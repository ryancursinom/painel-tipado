import CartaoEntrega from '../CartaoEntrega'

function Entregas({ alunos, onEntrega }: any) {
    
  const total = alunos.reduce((soma: any, aluno: any) => soma + aluno.entregas, 0)

  return (
    <section className="quadro">

      <h2>Entregas</h2>
      <p className="placar">Total de entregas: {total}</p>

      <ul>
        {alunos.map((aluno: any) => (
          <CartaoEntrega key={aluno.id} aluno={aluno} onEntrega={onEntrega} />
        ))}
      </ul>

    </section>
  )
}

export default Entregas