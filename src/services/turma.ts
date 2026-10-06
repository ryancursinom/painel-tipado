import type { Aluno } from '../types/aluno'

// A conversa com a rede mora AQUI, e só aqui. Nenhum componente dá fetch.
// O serviço promete um tipo (Promise<Aluno[]>) e traduz a falha tecnica
// numa frase que serve para uma PESSOA ler na tela.
export async function buscarTurma(): Promise<Aluno[]> {
  try {
    const rota = import.meta.env.VITE_API_URL
    
    const resposta = await fetch(rota, {
      headers: { Accept: 'application/json' },
    })

    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)

    const dados: Aluno[] = await resposta.json()
    return dados

  } catch (falha) {
    
    console.error('[buscarTurma]', falha)

    throw new Error('Não foi possível carregar a turma. Recarregue a página.')
  }
}
