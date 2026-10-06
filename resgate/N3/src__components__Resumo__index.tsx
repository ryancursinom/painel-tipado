import { useEffect, useState } from 'react'
import { buscarResumo } from '../../services/resumo'

function Resumo() {
  // um numero que chega de fora, como a turma
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarResumo()   // nenhum fetch aqui: o servico fala com a rede
        setTotal(dados.totalEntregas)
      } catch (falha) {
        console.error(falha)
      }
    }

    carregar()
  }, [])

  return (
    <section className="quadro">
      <h2>Resumo da turma</h2>

      <p className="placar">Total de entregas: {total}</p>
    </section>
  )
}

export default Resumo
