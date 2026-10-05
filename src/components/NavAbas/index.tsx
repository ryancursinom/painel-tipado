const ABAS = [
    { id: 'chamada', rotulo: 'Chamada' },
    { id: 'entregas', rotulo: 'Entregas' },
  ]
  
  function NavAbas({ aba, onTrocar }: any) {
    return (
      <nav className="abas">

        {ABAS.map((item: any) => (
          <button
            key={item.id}
            className={aba === item.id ? 'aba ativa' : 'aba'}
            onClick={() => onTrocar(item.id)}
          >
            {item.rotulo}
          </button>
        ))}
        
      </nav>
    )
  }
  
  export default NavAbas