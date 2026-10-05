import type { Aba } from '../../types/aba'

const ABAS: { id: Aba; rotulo: string }[] = [
  { id: 'chamada', rotulo: 'Chamada' },
  { id: 'entregas', rotulo: 'Entregas' },
]

interface NavAbasProps {
  aba: Aba
  onTrocar: (aba: Aba) => void
}

function NavAbas({ aba, onTrocar }: NavAbasProps) {
  return (
    <nav className="abas">
      {ABAS.map(item => (
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