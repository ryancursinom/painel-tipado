function CartaoPresenca({ aluno, onPresenca }: any) {
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