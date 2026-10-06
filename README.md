<<<<<<< HEAD

#Painel Tipado
Painel da turma com duas telas — **Chamada** (presença) e **Entregas** — sobre um mesmo estado `Aluno[]`, tipado a fundo. Projeto da Semana 07 de DAD (React + TypeScript).

## Rodar

    npm install     # instala as dependências (usa o package-lock.json — versões travadas)
    npm run dev     # sobe o servidor de desenvolvimento (Vite)

Abra a URL que o Vite mostrar (ex.: http://localhost:5173).

## Scripts

- `npm run dev` — servidor de desenvolvimento com HMR.
- `npm run build` — checa os tipos (`tsc -b`) e gera o `dist/`. **É o portão de tipo.**
- `npm run lint` — roda o oxlint (a regra `no-explicit-any` está ligada: `any` é proibido).
- `npm run preview` — serve o `dist/` já compilado.

## Convenções

- Domínio (os tipos do projeto) em `src/types/`.
- Um componente por pasta em `src/components/<Nome>/index.tsx`.
- Node: use a versão de `.nvmrc` (`nvm use`).
```

> 💡 **A última linha do README diz `nvm use` — não vá rodar isso.** O `nvm` é um programa que gerencia várias versões do Node na mesma máquina; se você instalou o Node direto do site (como o Passo 0 mandou), **você não tem nvm e não precisa dele**. Essa linha é um bilhete para quem usa. Se você rodar, vai receber `'nvm' não é reconhecido` — e está tudo certo.

Por último, coloque o Cabecalho no palco:

📄 **No arquivo `src/App.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):
=======
# Painel na Rede — Semana 09 · projeto da aula

Este projeto **já roda**. Ele está de propósito **incompleto**: faltam 11 pedaços,
marcados no código, que você vai escrever na aula.

```
npm run dev
```
*(na sala, o `node_modules` veio junto — não rode `npm install`; em casa, `npm install` uma vez)*

👉 **Abra o `LACUNAS.md`, aqui do lado.** É o mapa: arquivo, linha, o que você vê antes
de cada lacuna e o que muda depois de preenchê-la.

**Força Jovem! 🤞**
>>>>>>> 6503238 (feat: conexão com projeto da outra aula)
