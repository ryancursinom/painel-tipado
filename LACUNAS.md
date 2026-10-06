# ⌨ As lacunas deste projeto — o mapa

Este projeto **já roda**. Abra o terminal na pasta dele e faça:

```
npm run dev
```

*(Na sala, a pasta `node_modules` veio junto — **não** rode `npm install`; só se o `npm run dev`
responder `'vite' não é reconhecido` é que ela ficou para trás, e aí peça o pendrive. **Em casa,
sem o pendrive:** `npm install` uma vez, com internet — 1 a 3 minutos — e depois `npm run dev`.)*

Clique no endereço que aparecer. O painel abre. **Nada está quebrado** — e é de propósito:
cada lacuna deixa o programa **funcionando e visivelmente pior**, para você ver com os olhos o
que a linha que falta faz.

> **Por que assim, e não do zero?** Porque você tem **um mês** para entregar o projeto
> integrador, e você já digitou duas semanas de painel. Só **colar** de novo as **595 linhas** que já
> funcionam levava 22 minutos na versão longa desta aula — e digitá-las levaria horas. Esses minutos
> agora são **seus**. O que você escreve hoje são as
> **16 linhas que fazem a diferença**, sabendo exatamente por que cada uma existe.
>
> **Seja honesto consigo mesmo sobre uma coisa:** esta semana você não escreveu nenhum arquivo
> do zero. Quem prova que aprendeu é o **Nível 3 do Desafio**, que é um componente de arquivo
> em branco, no **seu** projeto. É lá que a nota cheia mora.

## Como achar cada lacuna

No VS Code, `Ctrl+Shift+F`, digite `Preencha aqui` e escreva `src` no campo *files to include*.
Aparecem **12 marcas**, todas em `src/`, para **11 lacunas numeradas**. Cada marca é um comentário
`[n.m - Preencha aqui]`: **n** é a lacuna (o número que o professor chama), **m** é o lugar dentro dela —
a lacuna **5** tem dois lugares no mesmo arquivo, `[5.1 - …]` e `[5.2 - …]`. Para ir direto a uma, digite a marca inteira: `[3.1 - Preencha aqui]`.

A ordem abaixo é a **ordem da aula**: o professor chama "lacuna 3" em voz alta e todo mundo abre
o mesmo lugar. **Antes de escrever, leia o comentário acima da marca** — ele diz o que falta e,
na maioria, a **forma** da linha.

**A coluna `apoio`:** **M** = a linha de cima é o molde, copie e adapte · **F** = a forma está no
comentário — com `______` para você preencher, ou escrita por extenso (7, 10, 11) · **P** = só a
pista — é para descobrir.

## O mapa

| # | passo · req. | apoio | arquivo : linha | linhas | o que você vê ANTES | o que muda DEPOIS |
|---|---|---|---|---|---|---|
| **1** | 00 · — | M | `src/components/Cabecalho/index.tsx` : 5 | 1 | o cabeçalho diz “feito por ____” | o seu nome na tela |
| **2** | 04 · M10 | M | `src/App.tsx` : 55 | 1 | não existe aba para as Entregas — a tela existe (digite /entregas) e ninguém alcança clicando | duas abas, e a URL muda ao clicar |
| **3** | 07A · M9 · M10 | F | `src/App.tsx` : 70 | 1 | /aluno/2 deixa a área de conteúdo VAZIA — nenhuma rota casa, e o console avisa `No routes matched` (a curinga também ainda não existe: é a lacuna 7) | /aluno/2 abre a ficha do Beto |
| **4** | 07A · M10 | F | `src/components/CartaoPresenca/index.tsx` : 13 | 1 | o nome é texto morto, não dá para clicar | cada nome vira link sublinhado, na cor do texto (se ficou AZUL, o Link ficou fora do span) |
| **5** | 07A · M9 | F | `src/components/FichaAluno/index.tsx` : 23 **e** 35 (marca `[5.2 - Preencha aqui]`) | 2 (+1 na 5.2) | /aluno/9999 deixa a área de conteúdo em BRANCO | **nada** na tela — é a única assim, e é esse o ponto: o efeito vem com a 5.2 |
| **6** | 07B · (S08) | P | `src/index.css` : 172 | 1 | tabule até o nome de um aluno (que a lacuna 4 criou): o anel é **outro** — fino e escuro, o do navegador, não o âmbar do painel | as 11 paradas passam a ter o MESMO anel âmbar (antes: 7 com o do painel, 4 com o do navegador). Confira também o “voltar” em /aluno/2 |
| **7** | 07C · M10 | F | `src/App.tsx` : 76 | 1 | /xpto mostra a área de conteúdo vazia | tela de erro com título e saída |
| **8** | 11A · M5 | F | `src/services/turma.ts` : 15 | 1 | com o alunos.json renomeado, a NOSSA linha do console diz `SyntaxError: Unexpected end of JSON input` — em outro lugar e com outra cara | a nossa linha do console passa a dizer `[buscarTurma] Error: HTTP 404` |
| **9** | 13 · M12 | P | `src/App.tsx` : 19 | 2 | nada anuncia a espera; um erro anterior fica na tela | “carregando a turma...” aparece com a rede lenta (throttling, no DevTools) e some quando a turma chega |
| **10** | 13 · M12 | F | `src/App.tsx` : 23 | 3 | provoque o erro: o “carregando” FICA PRESO na tela para sempre (no caminho que dá certo ele fecha — a linha está dentro do `try`) | a espera fecha mesmo quando dá erro |
| **11** | 15 · M5 | F | `src/services/turma.ts` : 8 | 1 | a URL está escrita no código (o `Ctrl+Shift+F` por `alunos.json` acha) | nada muda na tela — e é esse o ponto |

**Dependência declarada, e é a única:** a lacuna **10** só faz sentido depois da **9** — e é de
propósito: é entre uma e outra que você provoca o erro e vê o “carregando” ficar preso. Todas
as outras são independentes: errar uma não te custa o resto da aula.

**Uma ordem que não é arbitrária:** a lacuna **6** vem depois da **4** porque, antes da 4, não
existe nenhum link solto na tela para você tabular até ele — as duas abas já têm anel, por
outra regra. Você só pode **descobrir** o que falta depois de criar o link que sofre com a falta.

**Sobre a coluna `passo · req.`:** o passo é o do roteiro da aula (serve para achar o assunto no
guia). M5, M9 e M10 são os requisitos **desta** semana, e é por eles que a entrega é corrigida.
O **M12** (os três estados) é avaliado na **semana 10** — ele aparece aqui porque sem ele você vê
o dado chegar e **nunca** vê o que acontece quando ele não chega. A lacuna **6** não é requisito
de semana nenhuma: é a S08 cobrando que todo recurso novo (e um link é um recurso novo) volte a
ser alcançável pelo teclado. A lacuna **1** não vale nota: ela existe para o painel deixar de
ser meu e passar a ser seu.

## O contador de progresso

Rode `npm run build` agora, com tudo em aberto. Ele **para**, com 3 linhas `error TS6133` —
*"declarado, mas nunca lido"*. Não se assuste com a palavra *error*: é de propósito. O
`npm run dev` continua rodando; só o `build` para, e a pasta `dist/` não sai. Cada uma dessas
3 linhas é um pedaço que a aula vai **usar**:

| o que a linha diz | onde | passa a ser usado na |
|---|---|---|
| `'FichaAluno' is declared but its value is never read` | `src/App.tsx` | **lacuna 3** |
| `'NaoEncontrado' is declared but its value is never read` | `src/App.tsx` | **lacuna 7** |
| `'Link' is declared but its value is never read` | `src/components/CartaoPresenca/index.tsx` | **lacuna 4** |

**Não conserte isso apagando os imports** — o `npm run lint` vai até sugerir (*"Consider
removing this import"*); ele não sabe que a lacuna vem aí. Você sabe. **Só essas lacunas mexem
no contador.** As outras não mudam número nenhum: o placar delas é a **tela**, e a coluna "o que
muda DEPOIS" diz o que olhar. Quando o `npm run build` passar sem nenhum, você fechou o painel
da semana.

O `npm run lint` conta a mesma coisa, com outras palavras — medido: 3 avisos aqui, **zero**
no projeto pronto.

> Um detalhe que vale para a vida: `npm run dev` **roda mesmo com esses erros**, porque o Vite só
> transpila e não verifica tipo. É o `npm run build` que passa o `tsc`, e o `npm run lint` que
> passa o oxlint. Foi por isso que este projeto pôde chegar até você **funcionando e incompleto
> ao mesmo tempo** — e é bom você saber que isso é possível, porque no seu projeto integrador
> vai acontecer igual.

## Se você se perder

A linha pronta de cada lacuna está em **`resgate/lacuna-NN.txt`, aqui dentro do seu projeto** —
só a linha, sem nada em volta. **Antes de colar, leia o `resgate/LEIA-ME.txt`:** ele diz, lacuna
por lacuna, o que você seleciona para colar por cima (em algumas é só a marca; em outras é a marca
**e** a linha velha de baixo). Se o arquivo inteiro se perdeu, o arquivo pronto está em `resgate/`
também (`App.tsx`, `FichaAluno.tsx`, `CartaoPresenca.tsx`, `NaoEncontrado.tsx`, `turma.ts`), e o
esqueleto do Nível 3 do Desafio está em `resgate/N3/`. Colar é **permitido** — depois de tentar,
não antes. O que fica não é o arquivo: é a linha que você entendeu.

**Não cole os arquivos de `blocos_da_aula/` da aula longa** (`04-`, `07A-`, `07C-`, `12-`): o
`App.tsx` de lá não tem a rede nem as marcas, e colar ele por cima apaga metade do seu trabalho.

**Força Jovem! 🤞** Se travar, chama no Teams ou me procura na escola, em qualquer horário ou
turma. A vida não é uma prova.
