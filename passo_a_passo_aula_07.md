# Aula 07 — Painel Tipado

### Estudo dirigido — a aula por escrito, para você executar no seu ritmo

**Curso:** Desenvolvimento de Aplicações Dinâmicas (DAD) · 2ª série · Instituto J&F
**Tempo estimado:** 1h30 a 2h, sem pressa. Dá para parar no meio e voltar depois — o ponto certo de parada está marcado.

> **Como ler este arquivo.** Isto é a nossa aula, escrita. A sequência é a mesma que eu conduziria em sala, na mesma ordem, com as mesmas paradas e as mesmas perguntas — só que quem marca o ritmo agora é você. **Eu continuo do outro lado:** Teams a qualquer hora, ou me procurar na escola em qualquer horário. E a aula 09 começa com as dúvidas do que está aqui, então anote as suas pelo caminho.

---

## O que você vai construir

Um painel de turma com **duas telas** que dividem a mesma lista de alunos:

- **Chamada** — marca quem está presente e mostra o placar "Presentes: 3 de 4".
- **Entregas** — conta quantos trabalhos cada um entregou e soma o total.

Uma barra de abas troca entre as duas. As duas leem a **mesma** lista: se você marca +1 entrega numa tela e volta na outra, o número continua lá.

E aí vem o assunto de verdade da aula: **dar contratos ao código**. Você vai montar tudo primeiro do jeito "frouxo" (com `any` espalhado), sentir um bug nascer em silêncio, e depois refazer com tipos — para ver o **mesmo** bug, no **mesmo** lugar, ser barrado antes de chegar no navegador.

> **A aula tem duas partes e elas se conversam.** A Parte 1 monta o painel. A Parte 2 refaz por dentro sem mudar nada na tela. Não pule a Parte 1 achando que é só enfeite — o bug do passo 07 é a razão de existir da Parte 2.

---

## Como usar este arquivo

1. **Leia o parágrafo do passo antes de colar o código.** O código sem a explicação é só texto; a explicação é o que fica com você.
2. **Cole e SALVE.** Todo bloco de código aqui está limpo e completo — selecione, copie (`Ctrl+C`), cole, e aperte **`Ctrl+S`**. Quando disser *SUBSTITUA TUDO*, abra o arquivo, dê `Ctrl+A` (seleciona tudo), cole por cima e salve.
3. **Confira o caminho do arquivo antes de colar.** Este é o erro nº 1, e ele tem um motivo: pela convenção do curso quase todo componente se chama `index.tsx`. Você vai ter cinco abas abertas com o mesmo nome. **Não confie no nome da aba** — olhe a *barra de migalhas* no topo do editor, que mostra o caminho inteiro (`src > components > Entregas > index.tsx`).
4. **Depois de cada passo tem um ✅** dizendo o que tem de acontecer. Se não aconteceu, pare ali e resolva antes de seguir — erro empilhado fica dez vezes mais difícil.
5. **Travou?** Vá até o fim do arquivo, em *Se algo deu errado*. E veja a última seção: **você pode me chamar a qualquer momento.**

**As marcas que aparecem o tempo todo:**

| marca | quer dizer |
|---|---|
| 💻 **No terminal** | é comando para digitar no terminal — **não** é conteúdo de arquivo |
| 📄 **No arquivo** | é conteúdo de arquivo — criar, substituir ou acrescentar |
| ✍️ **DIGITE** | trecho para digitar à mão, não colar — é curto e é o conceito da aula |
| 📖 **Pare e entenda** | o porquê. É daqui que sai a prova |
| 🤞 | deu certo. **Reações coreana 🤞** |

---

## Passo 0 — a máquina está pronta?

**Faça isto antes de qualquer outra coisa.** São 30 segundos e evitam o travamento mais comum de todos.

Abra o **PowerShell** (tecla Windows, digite `powershell`, Enter) e rode:

💻 **No terminal:**
```powershell
node --version
npm --version
```

✅ **Resposta boa:** algo como `v22.22.2` na primeira e `10.x.x` na segunda. O número depois do `22.` pode ser outro — o que importa é começar com **v22**.

**Deu `'node' não é reconhecido como nome de cmdlet`?** O Node não está instalado. Baixe em **[nodejs.org](https://nodejs.org/)** a versão **22 LTS**, instale com *Next* em tudo, **feche o VS Code e o PowerShell, e abra de novo** (o terminal só enxerga um programa novo depois de reabrir). Rode os dois comandos outra vez.

**Deu uma versão menor que 22** (v18, v20)? Instale o Node 22 por cima, pelo mesmo link. O projeto usa Vite 8 e TypeScript 6, que **não rodam** em Node antigo — e o erro que aparece (`EBADENGINE`) não é óbvio.

> **Força Jovem!** Essa checagem de 30 segundos é a diferença entre fazer a aula hoje e travar no minuto três achando que "não funciona". Feito isso, o resto é ladeira abaixo.

---

## Antes de começar

Você vai trabalhar a partir da pasta **`_projeto_inicial_aula_07`**. Ela é o projeto recém-criado pelo Vite, exatamente como ele nasce — nada de nosso ainda.

### Onde colocar o projeto (leia, isto evita dor de cabeça)

**Se você recebeu um `.zip`, extraia primeiro.** Abrir arquivo de dentro de um zip faz o VS Code abrir em modo leitura, e nada do que você digitar será salvo. Botão direito no zip → *Extrair tudo*.

**Crie uma pasta `C:\dev`** e trabalhe lá dentro. Não é frescura:

- **sem espaço e sem acento no caminho** — `C:\Users\João Pedro\Área de Trabalho\` quebra ferramenta Node de vez em quando, e o erro não diz que o problema é o nome;
- **fora do OneDrive e da Área de Trabalho** — o OneDrive tenta sincronizar as ~200 MB de `node_modules`, trava a máquina e às vezes corrompe arquivo.

**Agora:** copie a pasta **`_projeto_inicial_aula_07`** para dentro de `C:\dev` e **renomeie a cópia para `painel-tipado`**.

Trabalhe sempre **na cópia**. A pasta original fica intacta, e se algo der muito errado você recomeça sem perder nada.

**Abra a pasta no VS Code:** **File → Open Folder → `painel-tipado`**.

### Confira em que terminal você está (30 segundos, e evita um estrago invisível)

Abra o terminal do VS Code: **Terminal → New Terminal**.

Olhe a **listinha do lado direito** do painel de terminal. Tem de estar escrito **`powershell`** ou **`pwsh`**.

**Está escrito `bash`, `cmd` ou `Git Bash`?** Troque, e troque agora:

1. clique na **setinha `˅`** ao lado do botão `+`, no canto direito do painel de terminal;
2. **Select Default Profile** → escolha **PowerShell**;
3. feche o terminal (ícone da lixeira) e abra um novo.

> ⚠️ **Por que isso importa tanto.** Os comandos desta aula usam a barra invertida do Windows (`src\components\Chamada`). No PowerShell isso funciona. **No Git Bash não dá erro — dá errado:** ele cria uma pasta chamada `srccomponentsChamada` e segue como se nada tivesse acontecido. Você só descobre quatro passos depois, quando a tela quebra, e aí não tem como relacionar uma coisa com a outra.

**E confirme que você está na pasta certa.** O prompt do terminal tem de terminar com `\painel-tipado>`. Se não terminar, você abriu a pasta errada no VS Code — feche e faça *File → Open Folder* de novo, escolhendo a `painel-tipado`.

💻 **No terminal:**
```powershell
dir package.json
```

✅ Tem de listar o arquivo. Se responder que não encontrou, você não está na raiz do projeto.

> 📌 **Dois vocabulários que eu vou usar o tempo todo:**
>
> **"Raiz do projeto"** é a pasta `painel-tipado` em si — o nível onde moram o `package.json`, o `index.html` e o `vite.config.ts`. **Não** é a pasta `src`. Quando eu disser "na raiz", é esse nível.
>
> **Arquivos que começam com ponto** (`.gitignore`, `.nvmrc`, `.oxlintrc.json`) existem e são normais, mas são fáceis de perder de vista no explorador do VS Code. O jeito rápido de achar qualquer arquivo: **`Ctrl+P`** e digite parte do nome.

### Instale as bibliotecas e ligue o servidor

💻 **No terminal:**
```powershell
npm install
```

Isso baixa o React e o resto para dentro de `node_modules`. Demora de um a quatro minutos na primeira vez.

> 💡 **O que é normal aparecer** e não é problema: o número de pacotes varia (`added 176 packages`, `added 183 packages` — tanto faz); linhas amarelas de `npm warn deprecated`; e uma linha dizendo `N vulnerabilities`. **Ignore as três.** E **não rode `npm audit fix`** — ele mexe nas versões e é capaz de quebrar o projeto de verdade.
>
> Se ficar um ou dois minutos parado sem imprimir nada, **está funcionando** — ele está baixando. Só vá atrás se passar de uns cinco minutos.

💻 **No terminal:**
```powershell
npm run dev
```

Ele imprime um endereço parecido com `http://localhost:5173`. **Abra no navegador** (dá para segurar `Ctrl` e clicar no link, direto do terminal). Você vê a página **"Get started"** do Vite.

✅ Página "Get started" no ar. 🤞

**Deixe esse terminal rodando o tempo todo** — ele é a tomada. Toda vez que você salvar um arquivo, a página se atualiza sozinha.

**Agora abra um SEGUNDO terminal.** Clique no botão **`+`** no canto direito do painel de terminal. Você vai ver **dois** itens na listinha da direita.

Daqui em diante eu chamo de:

- **terminal da tomada** — o primeiro, o que está rodando o `npm run dev`. **Ele fica ocupado**; não dá para digitar nada nele.
- **terminal de trabalho** — o segundo, onde vão todos os outros comandos (criar pasta, `npm run build`, `git`).

> ⚠️ **Se você digitar no terminal errado, não acontece nada e não aparece erro nenhum** — o servidor simplesmente engole a tecla. É um dos travamentos mais frustrantes que existem, porque parece que o comando "não funciona". Quando um comando parecer que não fez nada, a primeira suspeita é essa.

### Git — precisa mesmo? (30 segundos)

💻 **No terminal de trabalho:**
```powershell
git --version
```

**Respondeu uma versão?** Ótimo. Se esta é a primeira vez que você usa git nesta máquina, diga quem você é **agora** — sem isso o `git commit` falha com uma mensagem grande e assustadora (`*** Please tell me who you are`):

💻 **No terminal de trabalho:**
```powershell
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

**Respondeu `'git' não é reconhecido`?** Para **esta aula** não tem problema nenhum: os blocos marcados com 📌 são opcionais e nenhum ✅ depende deles. Pule e siga.

> ⚠️ **Mas guarde isto:** a **entrega da Semana 08, que vale nota**, pede um commit no seu projeto. Então em algum momento você vai precisar do git. Instale em [git-scm.com](https://git-scm.com/) quando puder — ou me chame, que eu instalo com você em cinco minutos. **Não deixe isso ser o motivo de perder a entrega.**

**Se o git funcionou**, sele o ponto de partida — é o primeiro dos quatro 📌 da aula:

💻 **No terminal de trabalho:**
```powershell
git init ; git add -A ; git commit -m "feat: projeto criado com vite e template react-ts"
```

---

# PARTE 1 — as duas telas funcionando

Nesta parte o código fica **frouxo** de propósito: cheio de `: any`, que em TypeScript quer dizer *"aceito qualquer coisa, não me pergunte"*. É para você sentir na pele o que acontece quando o código não tem contrato.

---

## 01 · A casa da turma

**O que você vai fazer:** jogar fora a página de exemplo do Vite e deixar o palco vazio, com a folha de estilo do painel já pronta.

São três arquivos. O primeiro é a página HTML que segura tudo — muda só o idioma (`pt-BR`) e o título da aba do navegador. Cole inteiro mesmo assim; é mais seguro do que caçar duas linhas.

📄 **No arquivo `index.html`** (está na raiz do projeto) — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Painel Tipado</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Agora o `App.tsx`, que é o componente principal — o que aparece na tela. Ele vai ficar vazio por enquanto: um palco sem atores. Repare que sumiram todos os `import` do template (logos, `App.css`, o contador).

📄 **No arquivo `src/App.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
function App() {
  return (
    <main className="painel">
    </main>
  )
}

export default App
```

E a folha de estilo. Esta você **não precisa entender linha por linha agora** — é CSS puro, sem novidade de React, e foi escrita antes para você não gastar a aula escolhendo cor. Vale reparar em uma coisa só: ela está **cheia de cores escritas na mão** (`#16223d`, `#8fe0b0`, `#7cc0ff`...). Guarde isso: é exatamente o problema que a **aula 08** vai resolver.

📄 **No arquivo `src/index.css`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: #eaf0f7;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(160deg, #1b2a52, #0d1420);
}

.painel {
  max-width: 640px;
  margin: 0 auto;
  padding: 32px 20px 56px;
}

.cabecalho h1 {
  margin: 0;
  font-size: 2rem;
  color: #7cc0ff;
}

.cabecalho p {
  margin: 4px 0 24px;
  color: #9db4d0;
  font-style: italic;
}

.quadro {
  background: #16223d;
  border: 1px solid #2b3b5e;
  border-radius: 12px;
  padding: 20px 22px;
}

.quadro h2 {
  margin: 0 0 8px;
  font-size: 1.3rem;
}

.placar {
  margin: 0 0 4px;
  font-weight: bold;
  color: #8fe0b0;
}

.completa {
  display: inline-block;
  margin: 0 0 16px;
  padding: 3px 12px;
  border-radius: 999px;
  background: #143d2a;
  color: #8fe0b0;
  font-weight: bold;
  font-size: 0.95rem;
}

.quadro ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cartao {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-top: 1px solid #2b3b5e;
}

.cartao .nome {
  flex: 1;
}

.cartao .contagem {
  min-width: 40px;
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  color: #7cc0ff;
}

.badge {
  min-width: 92px;
  text-align: center;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 999px;
}

.badge.ok {
  background: #143d2a;
  color: #8fe0b0;
}

.badge.nope {
  background: #4a2a14;
  color: #ffcf9e;
}

.cartao button {
  min-width: 150px;
  text-align: center;
  border: 1px solid #4a5a7e;
  background: #22314f;
  color: #cbd8ec;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
}

.cartao button:hover {
  background: #2c3c60;
}

.abas {
  display: flex;
  gap: 8px;
  margin: 0 0 16px;
}

.aba {
  border: 1px solid #2b3b5e;
  background: #101a30;
  color: #cbd8ec;
  border-radius: 8px 8px 0 0;
  padding: 8px 18px;
  cursor: pointer;
  font-size: 0.95rem;
}

.aba:hover {
  background: #1a2740;
}

.aba.ativa {
  background: #16223d;
  color: #7cc0ff;
  border-bottom: 3px solid #7cc0ff;
  font-weight: bold;
}
```

✅ **Confira na tela:** a aba do navegador passa a se chamar **"Painel Tipado"** e o fundo fica **escuro, azulado**. A página em si está vazia — é isso mesmo, ainda não tem nada dentro do palco.

> 🤔 **"Sobrou um `src/App.css` na pasta e ninguém usa."** Verdade. O `App.tsx` não importa mais ele, então o arquivo está lá parado, sem efeito nenhum. Deixe quieto por enquanto — a aula 08 apaga.

---

## 02 · O cabeçalho e as convenções da casa

**O que você vai fazer:** criar o primeiro componente de verdade e deixar três arquivos que todo projeto profissional tem.

Primeiro a pasta e o arquivo do componente. **Regra da casa: um componente por pasta**, sempre em `src/components/<Nome>/index.tsx`. Parece exagero com um componente só; com quinze, é o que salva.

💻 **No terminal de trabalho:**
```powershell
mkdir src\components\Cabecalho ; ni src\components\Cabecalho\index.tsx
ni .nvmrc
```

> 💡 **O que esse comando faz:** `mkdir` cria a pasta, o `;` separa dois comandos, e `ni` (*new item*) cria o arquivo vazio. O conteúdo entra pelo VS Code, no próximo bloco.
>
> **Prefere fazer pelo VS Code?** Botão direito **na pasta `src`** → **New File** → e digite o caminho **inteiro de uma vez**: `components/Cabecalho/index.tsx`. O VS Code cria as pastas do caminho junto. *(Clicar na área vazia do explorador faz o arquivo nascer na raiz, e é fácil não perceber.)*
>
> **Já o `.nvmrc` é na raiz mesmo** — este é a exceção. Para criá-lo pelo VS Code, clique com o botão direito **no nome do projeto**, lá no topo do explorador (`PAINEL-TIPADO`), ou na área vazia abaixo da lista → **New File** → `.nvmrc`.

📄 **No arquivo `src/components/Cabecalho/index.tsx`** — **crie e cole**, e salve com `Ctrl+S`:

```tsx
function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1>Painel Tipado</h1>
      <p>feito por Ana</p>
    </header>
  )
}

export default Cabecalho
```

Troque **"feito por Ana"** pelo seu nome. É o seu painel.

> 📖 **Pare e entenda — o que é um componente.** É uma função que devolve pedaço de tela. O nome começa com **letra maiúscula** (é assim que o React distingue um componente seu de uma tag HTML comum). O `export default` no fim é o que permite outro arquivo importar esse componente. Esses três detalhes se repetem em **todos** os componentes que você vai escrever.

Agora as três convenções. O **`.nvmrc`** diz qual versão do Node o projeto usa, para a sua máquina e a do professor rodarem igual:

📄 **No arquivo `.nvmrc`** (na raiz) — **crie e cole**, e salve com `Ctrl+S`:

```text
22
```

O **`.gitignore`** lista o que **não** sobe para o repositório. Já vinha um do template; vamos acrescentar a regra da casa no fim — *segredo nunca sobe*. Na Semana 09 você vai usar chave de API, e é esta regra que impede a chave de vazar.

📄 **No arquivo `.gitignore`** (na raiz) — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# segredos — nunca sobem (a Semana 09 usa chaves de API)
.env
.env.*
!.env.example
```

E o **`README.md`** — a porta de entrada do projeto. Quem abre o repositório lê isso primeiro. O que veio do template fala do Vite; o seu tem de falar do **seu** projeto.

📄 **No arquivo `README.md`** (na raiz) — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```markdown
# Painel Tipado

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

```tsx
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <main className="painel">
      <Cabecalho />
    </main>
  )
}

export default App
```

✅ **Confira na tela:** aparece **"Painel Tipado"** em azul e, embaixo, **o seu nome** em itálico.

📌 **git (opcional):**
```powershell
git add -A ; git commit -m "feat: base do painel-tipado instalada"
```

---

## 03 · O cartão de presença

**O que você vai fazer:** o cartão de um aluno na lista da chamada — nome, selo de presente/ausente e o botão.

Este componente **não guarda nada**. Ele recebe duas coisas de fora (o `aluno` e a função `onPresenca`) e, quando clicam no botão, só **avisa**: chama `onPresenca(aluno.id)`. Quem decide o que fazer com esse aviso é outro componente, lá em cima.

💻 **No terminal de trabalho:**
```powershell
mkdir src\components\CartaoPresenca ; ni src\components\CartaoPresenca\index.tsx
```

📄 **No arquivo `src/components/CartaoPresenca/index.tsx`** — **crie e cole**, e salve com `Ctrl+S`:

```tsx
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
```

> 📖 **Pare e entenda — props.** Aquilo entre `{ }` na linha da função (`{ aluno, onPresenca }`) são as **props**: os valores que o componente recebe de quem o usa. É como parâmetro de função, porque é exatamente isso.
>
> **E repare no `: any` no fim da linha.** Ele é o combinado com o TypeScript: *"não confere nada, aceito qualquer coisa aqui"*. **É o primeiro que a gente vai matar na Parte 2.** Marque essa linha na sua cabeça.

**Na tela ainda não muda nada** — ninguém usa esse cartão ainda, é normal. Mas então como você sabe se colou certo? Assim:

💻 **No terminal de trabalho:**
```powershell
npm run build
```

✅ **`✓ built`.** É o único jeito de conferir um passo que não muda a tela. 🤞

---

## 04 · A tela de Chamada e o estado no App

**O que você vai fazer:** a lista de alunos nasce aqui, e a tela de Chamada aparece.

💻 **No terminal de trabalho:**
```powershell
mkdir src\components\Chamada ; ni src\components\Chamada\index.tsx
```

📄 **No arquivo `src/components/Chamada/index.tsx`** — **crie e cole**, e salve com `Ctrl+S`:

```tsx
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
```

Olhe as duas primeiras linhas de dentro da função:

```tsx
const presentes = alunos.filter((aluno: any) => aluno.presente).length
const todosPresentes = alunos.length > 0 && alunos.every((aluno: any) => aluno.presente)
```

> 📖 **Pare e entenda — valor derivado.** `presentes` e `todosPresentes` **não são estado**. Ninguém guarda esses números em lugar nenhum: eles são **calculados a partir da lista**, toda vez que a tela é desenhada. Se você guardasse "quantos presentes" num estado separado, teria dois lugares com a mesma informação — e um dia eles discordariam. A regra: **derive, não duplique.**

Agora o `App`, onde a lista de alunos de fato mora:

📄 **No arquivo `src/App.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import Chamada from './components/Chamada'

const TURMA_INICIAL = [
  { id: 1, nome: 'Ana Souza', presente: true, entregas: 3 },
  { id: 2, nome: 'Beto Lima', presente: false, entregas: 1 },
  { id: 3, nome: 'Bia Costa', presente: true, entregas: 4 },
  { id: 4, nome: 'Caio Dias', presente: true, entregas: 0 },
]

function App() {
  const [alunos, setAlunos] = useState(TURMA_INICIAL)

  function marcarPresenca(id: any) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  return (
    <main className="painel">
      <Cabecalho />
      <Chamada alunos={alunos} onPresenca={marcarPresenca} />
    </main>
  )
}

export default App
```

> 📖 **Pare e entenda — por que a lista mora no App.** Daqui a pouco a tela de Entregas vai precisar da **mesma** lista. Se cada tela tivesse a sua, marcar presença numa não apareceria na outra. Então a lista fica no **pai comum** das duas, e desce como prop. Esse movimento tem nome: *elevar o estado*.
>
> **E olhe bem o `marcarPresenca`:**
>
> ```tsx
> setAlunos(alunos.map(aluno =>
>   aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
> ))
> ```
>
> A gente **não** escreve `aluno.presente = !aluno.presente`. A gente cria uma lista **nova**, com um aluno **novo** no lugar do que mudou (é isso que o `{ ...aluno, presente: ... }` faz: copia tudo e troca um campo). Por quê? Porque o React percebe "objeto diferente" e redesenha. Se você remexesse no objeto antigo, ele continuaria sendo o mesmo objeto de sempre — e a tela não mudaria. **Estado novo, não estado remexido.**

✅ **Confira na tela:** aparece o quadro **Chamada**, com os 4 alunos e o placar **"Presentes: 3 de 4"**. Clique em **"marcar falta"** na Ana: o selo dela vira **"ausente"** e o placar cai para **"2 de 4"**. Clique de novo e volta.

🚦 **Checkpoint.** Se o placar não mexe quando você clica, pare aqui. Provavelmente o `onPresenca` não está chegando no cartão — confira se o `App.tsx` tem `onPresenca={marcarPresenca}` na linha do `<Chamada ... />`.

---

## 05 · A tela de Entregas

**O que você vai fazer:** a segunda tela, que lê a **mesma** lista mas olha outro campo (`entregas`) e oferece outra ação.

💻 **No terminal de trabalho:**
```powershell
mkdir src\components\CartaoEntrega ; ni src\components\CartaoEntrega\index.tsx
mkdir src\components\Entregas ; ni src\components\Entregas\index.tsx
```

📄 **No arquivo `src/components/CartaoEntrega/index.tsx`** — **crie e cole**, e salve com `Ctrl+S`:

```tsx
function CartaoEntrega({ aluno, onEntrega }: any) {
  return (
    <li className="cartao">
      <span className="nome">{aluno.nome}</span>
      <span className="contagem">{aluno.entregas}</span>
      <button onClick={() => onEntrega(aluno.id)}>+1 entrega</button>
    </li>
  )
}

export default CartaoEntrega
```

📄 **No arquivo `src/components/Entregas/index.tsx`** — **crie e cole**, e salve com `Ctrl+S`:

```tsx
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
```

> 📖 **Pare e entenda — o `reduce`.** `alunos.reduce((soma, aluno) => soma + aluno.entregas, 0)` percorre a lista somando. O `0` do fim é onde a soma começa. É mais um **valor derivado**: o total não é guardado, é calculado.

**Na tela ainda não aparece nada de Entregas** — a tela existe, mas ninguém a colocou no palco. Então confira pelo terminal, principalmente porque **você acabou de criar dois arquivos de uma vez** (é fácil trocar um pelo outro):

💻 **No terminal de trabalho:**
```powershell
npm run build
```

✅ **`✓ built`.** Se deu erro, o mais provável é que os conteúdos foram trocados entre os dois arquivos — confira pela barra de migalhas no topo do editor.

---

## 06 · As abas — ligando as duas telas

**O que você vai fazer:** a barra de abas, e o `App` decidindo qual tela mostrar. Aqui o projeto deixa de ser uma página e vira uma **aplicação**.

💻 **No terminal de trabalho:**
```powershell
mkdir src\components\NavAbas ; ni src\components\NavAbas\index.tsx
```

📄 **No arquivo `src/components/NavAbas/index.tsx`** — **crie e cole**, e salve com `Ctrl+S`:

```tsx
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
```

📄 **No arquivo `src/App.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import NavAbas from './components/NavAbas'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'

const TURMA_INICIAL = [
  { id: 1, nome: 'Ana Souza', presente: true, entregas: 3 },
  { id: 2, nome: 'Beto Lima', presente: false, entregas: 1 },
  { id: 3, nome: 'Bia Costa', presente: true, entregas: 4 },
  { id: 4, nome: 'Caio Dias', presente: true, entregas: 0 },
]

function App() {
  const [alunos, setAlunos] = useState(TURMA_INICIAL)
  const [aba, setAba] = useState('chamada')

  function marcarPresenca(id: any) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  function registrarEntrega(id: any) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, entregas: aluno.entregas + 1 } : aluno
    ))
  }

  return (
    <main className="painel">
      <Cabecalho />
      <NavAbas aba={aba} onTrocar={setAba} />
      {aba === 'chamada'
        ? <Chamada alunos={alunos} onPresenca={marcarPresenca} />
        : <Entregas alunos={alunos} onEntrega={registrarEntrega} />}
    </main>
  )
}

export default App
```

> 📖 **Pare e entenda — duas memórias, papéis diferentes.** Agora o App guarda **duas** coisas: `alunos` (a lista, compartilhada pelas duas telas) e `aba` (qual tela está aparecendo). E a decisão de qual mostrar é esta linha:
>
> ```tsx
> {aba === 'chamada'
>   ? <Chamada alunos={alunos} onPresenca={marcarPresenca} />
>   : <Entregas alunos={alunos} onEntrega={registrarEntrega} />}
> ```
>
> Lê-se: *se `aba` for `'chamada'`, mostre a Chamada; senão, mostre as Entregas.* **Grave esta linha** — ela é a estrela dos dois próximos passos.

✅ **Confira na tela:** duas abas no topo, e elas trocam de conteúdo ao clicar.

🚦 **Checkpoint — o teste que prova que o estado é compartilhado.** Faça exatamente isto:

1. Vá para **Entregas** e clique **"+1 entrega"** na Ana (o número dela sobe).
2. Volte para **Chamada** e marque falta na Ana.
3. Volte para **Entregas**.

O `+1` da Ana **continua lá**. As duas telas estão lendo a mesma lista. Se o número tivesse voltado ao valor original, seriam duas listas separadas — e aí teria algo errado.

🤞 **Passou?** Então você acabou de montar uma aplicação de duas telas com estado compartilhado. **Reações coreana 🤞** — o mais difícil da Parte 1 ficou para trás.

---

## 07 · 🐞 Sinta o bug — o erro que ninguém avisa

**Este é o passo mais importante da Parte 1.** Ele não constrói nada; ele te mostra um problema. Sem sentir esse problema, a Parte 2 vira decoreba.

O painel funciona. Mas repare: aquele `'chamada'` na linha da decisão é só **texto solto**. Nada no mundo impede você de digitar errado. Vamos ver o que acontece quando alguém digita errado.

**⚠️ Antes de mexer, clique na aba _Chamada_** — o passo anterior te deixou em Entregas, e sem estar na Chamada o bug não aparece.

📄 **No arquivo `src/App.tsx`** — **não substitua nada.** Só ache a linha:

```tsx
{aba === 'chamada'
```

e tire um `a`, deixando assim:

```tsx
{aba === 'chamda'
```

Salve. E agora **olhe o navegador**, não o editor.

✅ **O que acontece:** a aba **"Chamada" continua acesa, destacada, como se estivesse selecionada** — mas o conteúdo que aparece embaixo é o de **Entregas**. A tela está **mentindo** para quem usa.

E o pior: rode o portão de qualidade.

💻 **No terminal de trabalho:**
```powershell
npm run build
```

Ele responde **`✓ built`**. **Passou.** O código está errado, a tela está errada, e nenhuma ferramenta reclamou. Esse bug iria para produção calado.

> 💭 **Guarde esta cena:** aba Chamada acesa, conteúdo de Entregas, build verde. Na Parte 2 você vai fazer **o mesmo typo, na mesma linha** — e o resultado vai ser o oposto.

**Agora desfaça:** `Ctrl+Z` até voltar `aba === 'chamada'`. Salve. A Chamada reaparece.

⚠️ **Cuidado com o `Ctrl+Z`: ele não tem freio.** Se você segurar, ele passa do ponto e vai desfazendo os passos anteriores — dá para voltar o `App.tsx` até o arquivo vazio do passo 01 sem perceber. Dê um `Ctrl+Z` por vez, olhando a tela.

🆘 **Passou do ponto e o arquivo virou bagunça?** Sem problema, acontece com todo mundo. Cole esta versão boa por cima (é exatamente o `App.tsx` do passo 06):

📄 **No arquivo `src/App.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import { useState } from 'react'
import Cabecalho from './components/Cabecalho'
import NavAbas from './components/NavAbas'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'

const TURMA_INICIAL = [
  { id: 1, nome: 'Ana Souza', presente: true, entregas: 3 },
  { id: 2, nome: 'Beto Lima', presente: false, entregas: 1 },
  { id: 3, nome: 'Bia Costa', presente: true, entregas: 4 },
  { id: 4, nome: 'Caio Dias', presente: true, entregas: 0 },
]

function App() {
  const [alunos, setAlunos] = useState(TURMA_INICIAL)
  const [aba, setAba] = useState('chamada')

  function marcarPresenca(id: any) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  function registrarEntrega(id: any) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, entregas: aluno.entregas + 1 } : aluno
    ))
  }

  return (
    <main className="painel">
      <Cabecalho />
      <NavAbas aba={aba} onTrocar={setAba} />
      {aba === 'chamada'
        ? <Chamada alunos={alunos} onPresenca={marcarPresenca} />
        : <Entregas alunos={alunos} onEntrega={registrarEntrega} />}
    </main>
  )
}

export default App
```

---

## 08 · Fecha a Parte 1

💻 **No terminal de trabalho:**
```powershell
npm run build
```

✅ **`✓ built`.** Guarde este detalhe: **o código frouxo compila.** O `any` é uma permissão que você mesmo assinou, e o TypeScript respeita a sua assinatura.

📌 **git (opcional):**
```powershell
git add -A ; git commit -m "feat: painel de duas telas funcional (tipos frouxos)"
```

> ☕ **Bom ponto para parar.** Se você vai fazer a Parte 2 em outro momento, é aqui que se interrompe: o painel está inteiro e funcionando. Quando voltar, ligue a tomada de novo (`npm run dev`) e siga do passo 09.

---

# PARTE 2 — os contratos

**A regra desta parte inteira: a tela NÃO pode mudar.** Nada de botão novo, cor nova, texto novo. Se a Chamada ou as Entregas pararem de funcionar, você quebrou algo. Mudar o código por dentro sem mudar o comportamento por fora tem nome: **refatorar**.

Se a tomada não estiver ligada:

💻 **No terminal da tomada:**
```powershell
npm run dev
```

---

## 09 · O domínio em `src/types` e o primeiro contrato

**O que você vai fazer:** escrever, num lugar só, o que é um **Aluno** neste projeto. E depois dar o primeiro contrato a um componente — **este você digita à mão.**

💻 **No terminal de trabalho:**
```powershell
mkdir src\types ; ni src\types\aluno.ts
```

📄 **No arquivo `src/types/aluno.ts`** — **crie e cole**, e salve com `Ctrl+S`:

```ts
export interface Aluno {
  id: number
  nome: string
  presente: boolean
  entregas: number
}
```

> 📖 **Pare e entenda — por que um arquivo só para isto.** "O que é um aluno" é uma decisão do **projeto**, não de um componente. Escrita uma vez aqui, ela é importada por todos. Quando a definição mudar (e ela sempre muda), você muda num lugar e o TypeScript te mostra **todos** os lugares que precisam acompanhar. Repare também na extensão: `.ts`, não `.tsx` — este arquivo não tem tela dentro, só tipo.

### ✍️ Agora o único trecho que você DIGITA, não cola

**Digite à mão. Sério.** Este é o gesto que a semana inteira está ensinando; o seu dedo precisa aprender. Os próximos três você pode colar, porque aí já é repetição.

Abra o **`src/components/CartaoPresenca/index.tsx`** (o que você criou no passo 03) e faça **três mudanças**:

**① Na primeira linha do arquivo**, acima de tudo, importe o tipo:

```tsx
import type { Aluno } from '../../types/aluno'
```

**② Logo acima da linha `function CartaoPresenca...`**, escreva o contrato do componente:

```tsx
interface CartaoPresencaProps {
  aluno: Aluno
  onPresenca: (id: number) => void
}
```

**③ Na linha da `function`**, troque `: any` por `: CartaoPresencaProps`:

```tsx
function CartaoPresenca({ aluno, onPresenca }: CartaoPresencaProps) {
```

**Como o arquivo fica no fim.** Confira o seu contra este. Se ficou igual, ótimo — não precisa recolar. **Se ficou diferente em qualquer coisa, cole este por cima e siga em frente**: você já digitou uma vez, o gesto já foi aprendido, e não vale travar aqui.

```tsx
import type { Aluno } from '../../types/aluno'

interface CartaoPresencaProps {
  aluno: Aluno
  onPresenca: (id: number) => void
}

function CartaoPresenca({ aluno, onPresenca }: CartaoPresencaProps) {
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
```

> 📖 **Pare e entenda — o que você acabou de escrever.** Uma `interface` é um **contrato**: a lista exata do que o componente aceita. `aluno: Aluno` diz *"me passe um Aluno, com todos os campos"*. E `onPresenca: (id: number) => void` diz *"me passe uma função que recebe um número e não devolve nada"*. Antes, o `: any` aceitava um texto, um `null`, o que fosse. Agora não.
>
> **E o `import type`?** Ele avisa o TypeScript: *"estou importando só o tipo, que some quando o código vira JavaScript — não importe nada de verdade"*. Se você esquecer o `type`, o erro é **`TS1484`**.

### ✅ Agora confira de verdade — e aqui a tela NÃO serve

Na tela, a Chamada continua exatamente igual. **Mas isso também é o que acontece se você não tiver feito nada** — o navegador roda o código mesmo com erro de tipo, então a tela não é testemunha confiável neste passo. O único juiz é o terminal:

💻 **No terminal de trabalho:**
```powershell
npm run build
```

✅ **`✓ built`.** A tela idêntica **e** o build limpo: você refatorou certo, mudou por dentro sem mudar por fora.

**Mas quero que você prove que o contrato existe de verdade.** Faça este teste de 15 segundos — é o que separa "eu digitei" de "eu entendi":

1. No **`src/components/Chamada/index.tsx`**, ache `aluno={aluno}` e troque por **`aluno={aluno.nome}`** (em vez do aluno inteiro, você está mandando só o nome dele, que é um texto).
2. Rode `npm run build`.

✅ **O build tem de FALHAR**, com:

```text
error TS2322: Type 'string' is not assignable to type 'Aluno'.
```

**É essa mensagem que prova que a `interface` que você digitou está funcionando.** Ela diz: *"você prometeu me entregar um `Aluno` e me entregou um texto"*. Antes, com `: any`, isso passaria calado e o cartão apareceria vazio na tela.

3. **Desfaça** (`Ctrl+Z`), salve, e rode `npm run build` de novo — tem de voltar a `✓ built`. 🤞

⚠️ **Deu `TS1484 ... must be imported using a type-only import`?** Faltou a palavra `type` no import. Tem de ser `import type { Aluno }`, não `import { Aluno }`.

⚠️ **Deu outro erro?** Leia o nome do arquivo e o número da linha que ele aponta, e compare aquele trecho com o **COMO FICA** acima. Se não achar a diferença em dois minutos, cole o COMO FICA inteiro por cima e siga.

---

## 10 · Os outros três contratos

**O que você vai fazer:** o **mesmo gesto** em mais três componentes. Agora pode colar — o gesto você já aprendeu no passo anterior.

Em cada um é sempre a mesma receita: **importa o tipo → escreve a `interface ...Props` → troca o `: any`.**

📄 **No arquivo `src/components/Chamada/index.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import type { Aluno } from '../../types/aluno'
import CartaoPresenca from '../CartaoPresenca'

interface ChamadaProps {
  alunos: Aluno[]
  onPresenca: (id: number) => void
}

function Chamada({ alunos, onPresenca }: ChamadaProps) {
  const presentes = alunos.filter(aluno => aluno.presente).length
  const todosPresentes = alunos.length > 0 && alunos.every(aluno => aluno.presente)

  return (
    <section className="quadro">
      <h2>Chamada</h2>
      <p className="placar">Presentes: {presentes} de {alunos.length}</p>
      {todosPresentes && <p className="completa">turma completa!</p>}
      <ul>
        {alunos.map(aluno => (
          <CartaoPresenca key={aluno.id} aluno={aluno} onPresenca={onPresenca} />
        ))}
      </ul>
    </section>
  )
}

export default Chamada
```

📄 **No arquivo `src/components/CartaoEntrega/index.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import type { Aluno } from '../../types/aluno'

interface CartaoEntregaProps {
  aluno: Aluno
  onEntrega: (id: number) => void
}

function CartaoEntrega({ aluno, onEntrega }: CartaoEntregaProps) {
  return (
    <li className="cartao">
      <span className="nome">{aluno.nome}</span>
      <span className="contagem">{aluno.entregas}</span>
      <button onClick={() => onEntrega(aluno.id)}>+1 entrega</button>
    </li>
  )
}

export default CartaoEntrega
```

📄 **No arquivo `src/components/Entregas/index.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import type { Aluno } from '../../types/aluno'
import CartaoEntrega from '../CartaoEntrega'

interface EntregasProps {
  alunos: Aluno[]
  onEntrega: (id: number) => void
}

function Entregas({ alunos, onEntrega }: EntregasProps) {
  const total = alunos.reduce((soma, aluno) => soma + aluno.entregas, 0)

  return (
    <section className="quadro">
      <h2>Entregas</h2>
      <p className="placar">Total de entregas: {total}</p>
      <ul>
        {alunos.map(aluno => (
          <CartaoEntrega key={aluno.id} aluno={aluno} onEntrega={onEntrega} />
        ))}
      </ul>
    </section>
  )
}

export default Entregas
```

> 📖 **Pare e entenda — o `any` que sumiu sozinho.** Compare a Chamada de antes com a de agora:
>
> | antes | agora |
> |---|---|
> | `alunos.filter((aluno: any) => aluno.presente)` | `alunos.filter(aluno => aluno.presente)` |
>
> Você **não** tirou esse `any` na mão — ele desapareceu porque agora `alunos` é `Aluno[]`, e o TypeScript **deduz sozinho** que cada item do `filter` é um `Aluno`. Um contrato na entrada limpa o arquivo inteiro. É por isso que tipar compensa: você escreve o tipo num lugar e colhe em dez.

✅ **Confira na tela:** painel **idêntico**. Se quebrou, o erro já está sublinhado em vermelho no VS Code — leia a mensagem, ela diz o arquivo e a linha.

---

## 11 · A união que conecta as três pontas

**O que você vai fazer:** a aba deixa de ser texto solto e vira um tipo que só aceita dois valores.

💻 **No terminal de trabalho:**
```powershell
ni src\types\aba.ts
```

📄 **No arquivo `src/types/aba.ts`** — **crie e cole**, e salve com `Ctrl+S`:

```ts
export type Aba = 'chamada' | 'entregas'
```

> 📖 **Pare e entenda — tipo-união.** Essa barra `|` quer dizer **ou**. O tipo `Aba` aceita o texto `'chamada'` **ou** o texto `'entregas'`. **Mais nada.** Nem `'Chamada'` com maiúscula, nem `'chamda'`, nem `'alunos'`. É o tipo mais estreito que existe: uma lista fechada de valores permitidos.

📄 **No arquivo `src/components/NavAbas/index.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
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
```

📄 **No arquivo `src/App.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import { useState } from 'react'
import type { Aluno } from './types/aluno'
import type { Aba } from './types/aba'
import Cabecalho from './components/Cabecalho'
import NavAbas from './components/NavAbas'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'

const TURMA_INICIAL: Aluno[] = [
  { id: 1, nome: 'Ana Souza', presente: true, entregas: 3 },
  { id: 2, nome: 'Beto Lima', presente: false, entregas: 1 },
  { id: 3, nome: 'Bia Costa', presente: true, entregas: 4 },
  { id: 4, nome: 'Caio Dias', presente: true, entregas: 0 },
]

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>(TURMA_INICIAL)
  const [aba, setAba] = useState<Aba>('chamada')

  function marcarPresenca(id: number) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  function registrarEntrega(id: number) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, entregas: aluno.entregas + 1 } : aluno
    ))
  }

  return (
    <main className="painel">
      <Cabecalho />
      <NavAbas aba={aba} onTrocar={setAba} />
      {aba === 'chamada'
        ? <Chamada alunos={alunos} onPresenca={marcarPresenca} />
        : <Entregas alunos={alunos} onEntrega={registrarEntrega} />}
    </main>
  )
}

export default App
```

> 📖 **Pare e entenda — `useState<Aluno[]>` e `useState<Aba>`.** Aquilo entre `< >` é você dizendo ao TypeScript o que aquela memória guarda. `useState<Aba>('chamada')` promete: *esta caixa só guarda `'chamada'` ou `'entregas'`*. E olhe esta linha:
>
> ```tsx
> <NavAbas aba={aba} onTrocar={setAba} />
> ```
>
> Ela só compila porque os **dois lados prometem `Aba`**: o `setAba` só aceita `Aba`, e a prop `onTrocar` do NavAbas declarou que entrega `Aba`. Se um dos dois dissesse `string`, não encaixaria.

✅ **Confira na tela:** painel idêntico, abas trocando normalmente.

💻 **No terminal de trabalho:**
```powershell
npm run build
```

✅ **`✓ built`.**

---

## 12 · 🎯 O clímax — o mesmo typo, outro final

Lembra do passo 07? Mesmo erro, mesma linha, agora com contrato.

📄 **No arquivo `src/App.tsx`** — ache a linha do `return`:

```tsx
{aba === 'chamada'
```

e tire o mesmo `a`:

```tsx
{aba === 'chamda'
```

Salve.

**⚠️ Aviso importante antes de você olhar a tela:** o navegador **vai continuar rodando** e mostrando Entregas, igualzinho ao passo 07. Isso **não** é a Parte 2 falhando — é exatamente o ponto. A tipagem trabalha **antes** de o código rodar. Por isso, daqui em diante, **o placar é o terminal, não a tela.**

💻 **No terminal de trabalho:**
```powershell
npm run build
```

✅ **Agora o build FALHA**, e aparece:

```text
src/App.tsx(36,8): error TS2367: This comparison appears to be unintentional because the types 'Aba' and '"chamda"' have no overlap.
```

> 💡 **O número da linha no seu pode ser outro** (`(37,8)`, `(35,8)`...) — depende de você ter deixado uma linha em branco a mais ou a menos. **O que importa é o código `TS2367`**, e o build ter falhado. Não se preocupe com o número.

> 💥 **Compare os dois passos, lado a lado. É a aula inteira nestas duas colunas:**
>
> | | passo 07 (frouxo) | passo 12 (tipado) |
> |---|---|---|
> | o que a tela faz | mostra a tela errada, calada | mostra a tela errada |
> | o que o `npm run build` diz | **`✓ built`** — passou | **erro `TS2367`** — não compila |
> | o bug chega no usuário? | **sim** | **não** |
>
> O erro diz: *"esta comparação parece não intencional porque os tipos `Aba` e `'chamda'` não têm sobreposição"*. Traduzindo: *"você está comparando uma aba com um texto que nunca poderia ser uma aba. Você errou de digitação."* O compilador entendeu a sua intenção melhor do que o seu teclado.

🤞 **Se você viu o `TS2367` aparecer, você entendeu a Semana 07 inteira.** Este erro é a aula. **Reações coreana 🤞**

**Agora desfaça:** `Ctrl+Z` até voltar `aba === 'chamada'`. Rode `npm run build` de novo — tem de voltar a `✓ built`.

🆘 **Se o `Ctrl+Z` se perdeu** e o arquivo virou bagunça, cole esta versão boa (é idêntica à do passo 11):

📄 **No arquivo `src/App.tsx`** — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```tsx
import { useState } from 'react'
import type { Aluno } from './types/aluno'
import type { Aba } from './types/aba'
import Cabecalho from './components/Cabecalho'
import NavAbas from './components/NavAbas'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'

const TURMA_INICIAL: Aluno[] = [
  { id: 1, nome: 'Ana Souza', presente: true, entregas: 3 },
  { id: 2, nome: 'Beto Lima', presente: false, entregas: 1 },
  { id: 3, nome: 'Bia Costa', presente: true, entregas: 4 },
  { id: 4, nome: 'Caio Dias', presente: true, entregas: 0 },
]

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>(TURMA_INICIAL)
  const [aba, setAba] = useState<Aba>('chamada')

  function marcarPresenca(id: number) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ))
  }

  function registrarEntrega(id: number) {
    setAlunos(alunos.map(aluno =>
      aluno.id === id ? { ...aluno, entregas: aluno.entregas + 1 } : aluno
    ))
  }

  return (
    <main className="painel">
      <Cabecalho />
      <NavAbas aba={aba} onTrocar={setAba} />
      {aba === 'chamada'
        ? <Chamada alunos={alunos} onPresenca={marcarPresenca} />
        : <Entregas alunos={alunos} onEntrega={registrarEntrega} />}
    </main>
  )
}

export default App
```

---

## 13 · Por que a união conecta (só leitura)

Não tem nada para digitar aqui. Olhe o desenho e entenda o mecanismo — é o que a prova vai cobrar.

```
                    type Aba = 'chamada' | 'entregas'
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
   NavAbas: id das abas   App: useState<Aba>   App: aba === 'chamada' ?
   (a barra que clica)    (o estado guardado)  (qual tela mostrar)
              └────────── os três TÊM de concordar ──────────┘
        um 'chamda' em QUALQUER um → o tsc recusa no build (TS2367)
```

O mesmo tipo `Aba` aparece em **três lugares**: a barra que você clica, a memória que guarda a escolha, e a decisão de qual tela mostrar. Os três são **obrigados a concordar**. É por isso que a navegação não pode mais quebrar em silêncio: um `'chamda'` em qualquer um dos três é recusado no build.

> ⚖️ **Uma honestidade importante — o limite do tipo.** Tipo **some** quando o código é compilado. No navegador roda JavaScript puro, sem nenhuma verificação. Por isso o placar da Parte 2 é o terminal, e não a tela: **a tipagem trabalha antes de rodar, não durante.**
>
> E isso tem uma consequência direta: se o dado vier de **fora** do seu código — da internet, por exemplo — o TypeScript **não** tem como conferir. Ele acredita no que você declarou. Esse é exatamente o problema que a **Semana 09** vai enfrentar: tipar a fronteira por onde o dado entra.

---

## 14 · `any` proibido

**O que você vai fazer:** ligar a regra que proíbe escrever `: any` de propósito.

Por que precisa de uma regra se o TypeScript já confere tudo? Porque o `any` é **explícito**: é você assinando "não confere". O `tsc` respeita a sua assinatura e deixa passar. Quem barra isso é outra ferramenta, o **oxlint** — um *linter*, que checa estilo e má prática, não tipo.

> 📌 **Este arquivo JÁ EXISTE.** O Vite criou junto com o projeto, e ele está na **raiz** (o nível do `package.json`), não dentro da `src`. Como começa com ponto, é fácil não achar na lista: use **`Ctrl+P`** e digite `oxlintrc`. Você não está criando um arquivo novo — está **acrescentando uma regra** ao que já está lá.

📄 **No arquivo `.oxlintrc.json`** (na raiz) — **SUBSTITUA TUDO** (`Ctrl+A`, cole, `Ctrl+S`):

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }],
    "typescript/no-explicit-any": "error"
  }
}
```

💻 **No terminal de trabalho:**
```powershell
npm run lint
```

✅ **Sai limpo** — nenhum `any` sobrou no projeto.

> 🔬 **Quer ver a regra pegando?** No `src/App.tsx`, na linha `function marcarPresenca(id: number) {`, troque `number` por `any` e rode `npm run lint` de novo. Ele acusa **`no-explicit-any`** e aponta a linha. *(Troque o `number`, não uma interface — assim sai só este aviso, e fica fácil de ler.)*
>
> ⚠️ **E agora DESFAÇA** (`Ctrl+Z`), salve, e rode `npm run lint` outra vez — tem de sair limpo **antes** de você ir para o passo 15. Se você esquecer, o `npm run build` continua dando `✓ built` (o `any` compila!) e o erro só vai aparecer no lint do próximo passo — e aí você não vai lembrar que foi este experimento.

---

## 15 · Fechamento — os dois portões

💻 **No terminal de trabalho:**
```powershell
npm run build
npm run lint
```

✅ **`✓ built`** e lint limpo. Esses dois comandos são os **portões** do projeto: o primeiro garante que os tipos batem, o segundo que o estilo está de acordo. Rodar os dois antes de entregar qualquer coisa é hábito profissional.

📌 **git (opcional):**
```powershell
git add -A ; git commit -m "feat: painel tipado a fundo, any eliminado, abas em uniao"
git log --oneline
```

Se você fez os quatro 📌, o `git log` mostra **4 commits**. Se pulou o git, ignore — não muda nada no seu painel.

### Confira com o gabarito

Abra a pasta **`_projeto_final_aula_07`** e compare com o seu. Ela é exatamente onde você deveria ter chegado.

> 💡 **Como comparar dois arquivos de verdade, sem ler linha por linha.**
>
> **Primeiro, ponha as duas pastas no mesmo lugar:** no VS Code, **File → Add Folder to Workspace** → escolha a pasta de gabarito. Agora as duas aparecem no explorador da esquerda, uma embaixo da outra. *(Sem isso não dá: você abriu só a sua, e não tem em que clicar.)*
>
> **Depois:** botão direito no **seu** arquivo → **Select for Compare**. Botão direito no arquivo correspondente do gabarito → **Compare with Selected**. Ele abre os dois lado a lado e pinta só o que está diferente.
>
> Vale a pena fazer isso com os arquivos que você mais mexeu. Se vier tudo branco, está igual.

Os arquivos que mudaram nesta aula:

| arquivo | o que aconteceu |
|---|---|
| `index.html` | trocado (idioma e título) |
| `.gitignore` | trocado (regra dos segredos no fim) |
| `README.md` | trocado (fala do seu projeto) |
| `.oxlintrc.json` | trocado (regra `no-explicit-any`) |
| `.nvmrc` | **novo** |
| `src/index.css` | trocado (a folha de estilo do painel) |
| `src/App.tsx` | trocado |
| `src/types/aluno.ts` | **novo** |
| `src/types/aba.ts` | **novo** |
| `src/components/Cabecalho/index.tsx` | **novo** |
| `src/components/CartaoPresenca/index.tsx` | **novo** |
| `src/components/Chamada/index.tsx` | **novo** |
| `src/components/CartaoEntrega/index.tsx` | **novo** |
| `src/components/Entregas/index.tsx` | **novo** |
| `src/components/NavAbas/index.tsx` | **novo** |

Todo o resto (o `package.json`, os `tsconfig`, o `main.tsx`, os ícones) fica **exatamente igual** ao inicial — você não precisou tocar em nenhum deles.

*(Duas diferenças esperadas e corretas: o `Cabecalho` vai ter o seu nome em vez de "Ana", e o `README.md` vai diferir se você o personalizou.)*

---

## 🎉 Você terminou

Sério: pare um segundo e reconheça o que você acabou de fazer. Você pegou um arquivo de texto, sozinho, em casa, sem ninguém ao lado, e montou uma aplicação de duas telas com tipagem de verdade. Isso não é pouco. Muita gente que programa por dinheiro não sabe o que é um tipo-união.

**Maravilha, estou orgulhoso de você.** 🤞

E guarde isto: a Semana 09 vai pegar esse mesmo painel e ligar na internet. O contrato que você escreveu hoje é o que vai defender a fronteira lá.

---

## O que você levou desta aula

Em uma frase: **mesma tela, mesmo comportamento — mas o código passou de "aceito qualquer coisa" para "aqui está o contrato de cada peça".**

As cinco ideias, para a prova e para a vida:

1. **Estado no pai comum.** Duas telas que dividem dado → o dado mora no pai das duas.
2. **Derive, não duplique.** Placar, total, "turma completa" — tudo calculado do estado, nunca guardado à parte.
3. **Estado novo, não estado remexido.** `{ ...aluno, campo: novo }` dentro de um `map`.
4. **`interface ...Props` é contrato.** Uma vez por componente, e o `any` de dentro some sozinho.
5. **Tipo-união fecha o conjunto de valores.** E quando o mesmo tipo aparece em vários lugares, ele obriga esses lugares a concordarem.

---

## Se algo deu errado

**Primeiro, os três suspeitos de sempre** — confira estes antes de qualquer outra coisa, porque respondem por metade dos travamentos:

1. **Salvou?** A aba do arquivo tem uma bolinha branca no lugar do `x`? Está sem salvar. `Ctrl+S`.
2. **É o arquivo certo?** Olhe a barra de migalhas no topo do editor, não o nome da aba — todas se chamam `index.tsx`.
3. **O servidor está vivo?** Olhe o terminal da tomada. Se voltou o prompt, ele morreu: `npm run dev` de novo.

| o que aparece | o que é | o que fazer |
|---|---|---|
| colei e a tela não mudou | o arquivo está **sem salvar** | olhe a aba do arquivo no VS Code: tem uma **bolinha branca** no lugar do `x`? Aperte `Ctrl+S` |
| salvei e a tela não mudou | o servidor pode ter caído | olhe o terminal da tomada. Se voltou o prompt (`PS C:\dev\painel-tipado>`), ele morreu: rode `npm run dev` de novo |
| a página parece congelada no tempo | o Vite subiu em outra porta | confira se a URL do navegador é a mesma que o terminal acabou de imprimir — pode ter subido em `5174` |
| `'npm' não é reconhecido` | Node não instalado, ou terminal não reiniciado | volte ao **Passo 0** |
| `EBADENGINE` / `Unsupported engine` | seu Node é mais antigo que o 22 | instale o Node 22 em [nodejs.org](https://nodejs.org/) e reabra o VS Code |
| `Select-String` / `ni` / `mkdir` "não é reconhecido" | você não está no PowerShell | troque o terminal (veja *Antes de começar*) |
| criei a pasta e ela não aparece onde devia | terminal errado (Git Bash) ou pasta errada aberta | confira que o prompt termina com `\painel-tipado>` e que o terminal é `powershell` |
| `'git' não é reconhecido` | Git não instalado | para **esta aula** é opcional: pule os 📌 e siga normalmente. Para a **entrega que vale nota** você vai precisar — instale em [git-scm.com](https://git-scm.com/) quando der |
| `*** Please tell me who you are` no `git commit` | git instalado, mas nunca configurado | rode `git config --global user.name "Seu Nome"` e `git config --global user.email "seu@email"` |
| `TS1484 ... must be imported using a type-only import` | faltou `type` no import | escreva `import type { Aluno } from ...` |
| `TS2322` | valor de tipo errado | leia o que ele esperava e o que recebeu — a mensagem diz os dois |
| `TS7006: Parameter implicitly has an 'any' type` | parâmetro sem tipo | dê o tipo ao parâmetro |
| `no-explicit-any` no `npm run lint` | sobrou um `: any` | ele aponta arquivo e linha — troque pelo tipo certo |
| `TS2367` e você **não** está no passo 12 | comparação impossível | confira se escreveu `'chamada'` e `'entregas'` certinho, tudo minúsculo |
| aba certa acesa, conteúdo da outra, e o build passa | você ainda está na Parte 1 | é o esperado (passo 07). A Parte 2 conserta |
| a tela não reage ao clique | a função não chegou no componente | confira se a prop foi passada: `onPresenca={marcarPresenca}` |
| o selo aparece sem cor | `className` errado | tem de ser `badge ok` / `badge nope` — com espaço no meio |
| `'ni' não é reconhecido` | você não está no PowerShell | crie o arquivo pelo VS Code: botão direito na pasta → *New File* |
| `Cannot find module './components/...'` | caminho ou nome errado | confira as maiúsculas: `Cabecalho`, não `cabecalho` |
| nada funciona e você quer recomeçar | acontece | copie de novo o `_projeto_inicial_aula_07`, rode `npm install`, e volte no passo que travou |

---

## Para quem quiser ir além

Duas extensões curtas. Ambas reforçam por que o domínio mora em `src/types/`.

**E1 · o contrato paga.** Em `src/types/aluno.ts`, acrescente um campo **obrigatório**:

```ts
turma: number
```

Rode `npm run build`. O TypeScript aponta **cada** objeto de `TURMA_INICIAL` que ficou sem `turma` (erro `TS2741`). Você mudou o contrato num lugar e o compilador achou **todos** os lugares que precisam acompanhar — é para isso que o domínio fica num arquivo só. Depois preencha os quatro (`turma: 2`) ou desfaça.

**E2 · derive, não duplique.** Na tela Entregas, acrescente um segundo placar: quantos alunos estão com **zero** entregas.

```tsx
const semEntrega = alunos.filter(aluno => aluno.entregas === 0).length
```

e mostre num `<p className="placar">`. **Sem criar `useState` novo** — é valor derivado, nasce do estado a cada desenho da tela.

---

## 💙 E se não deu certo?

Se você chegou até aqui e o seu painel não está funcionando, leia isto antes de fechar o computador.

**Não deu certo hoje. Só isso.** Não quer dizer que você não leva jeito, não quer dizer que programação não é para você, e não quer dizer nada sobre a sua nota. Código quebrado é o estado natural do código — quem programa há vinte anos passa metade do dia com a tela vermelha. A diferença é só que essa pessoa já viu aquele erro antes.

**A vida não é uma prova. Você tem mais valor do que isso.**

Então faça o seguinte, nesta ordem:

1. **Pare.** Insistir cansado só empilha erro.
2. **Tire dois prints** — a tela e o terminal inteiro.
3. **Me manda no Teams**, dizendo em que passo você estava. Pode ser agora, pode ser de madrugada.
4. **Vá dormir.** Sério. Metade dos bugs se resolve sozinha quando a gente volta no dia seguinte, e eu não estou brincando.

Quem pede ajuda no mesmo dia resolve em cinco minutos. Quem guarda a dúvida passa duas semanas carregando ela. **Me chame.**

---

## 📞 Ficou com dúvida? Me chame.

**Não fique travado sozinho.** Você pode:

- **Mandar mensagem pelo Teams a qualquer momento** — dia, noite, fim de semana. Não existe horário errado para mandar.
- **Me procurar na escola em qualquer horário**, inclusive **durante aula de outra turma**. Pode entrar, pode chamar na porta, pode esperar do lado. Não precisa marcar, não precisa esperar a nossa aula.

**Mandando mensagem, mande junto estas três coisas** — com elas eu quase sempre resolvo na primeira resposta:

1. **print da tela** (o navegador, ou o VS Code com o código);
2. **print do erro** (o terminal **inteiro**, não só a última linha);
3. **em que passo você está** ("passo 09").

E por favor: **pergunte no mesmo dia**. Dúvida guardada vira dúvida acumulada, e na semana seguinte o conteúdo novo empilha em cima. Duas linhas de mensagem hoje economizam duas semanas de confusão.

Ninguém aqui vai achar sua pergunta boba. Eu já fiz todas elas.

**Força Jovem!** 🤞

---

*Prof. Rodolfo Gonçalves · DAD · Instituto J&F*
