# Roteiro do Pitch Final — Conecta Intercâmbio (01/12/2026)

**Tempo total:** cerca de 9 minutos (limite de 8 a 10). **Slides:** [`pitch-conecta-intercambio.pdf`](pitch-conecta-intercambio.pdf) (fonte em [`pitch.html`](pitch.html)).

A divisão de falas abaixo é uma sugestão. Troquem os nomes se preferirem outra ordem.

| # | Parte | Quem | Tempo | Slide / tela |
| :---: | :--- | :--- | :---: | :--- |
| 1 | Abertura, problema e público-alvo | Arthur | 1 min 45 s | Capa, Problema, Público-alvo |
| 2 | Solução e funcionalidades | Bruno | 1 min 30 s | Solução Proposta, Funcionalidades |
| 3 | Demonstração ao vivo do protótipo | Nikolas | 3 min | Protótipo no navegador (celular espelhado ou modo celular) |
| 4 | GitHub: repositório, issues e evolução por sprint | Bruno | 1 min 45 s | GitHub + slide Evolução por Sprint |
| 5 | Benefícios, próximos passos e encerramento | Arthur | 1 min | Benefícios, Próximos Passos |

---

## 1. Abertura, problema e público-alvo (Arthur, 1 min 45 s)

- "Somos a equipe do **Conecta Intercâmbio**, a rede social acadêmica da internacionalização Unifor."
- Problema, em uma frase: quem vai ou vem de intercâmbio depende de informação espalhada (murais, e-mails, PDFs, grupos de WhatsApp) e de contatos informais.
- Citar 2 ou 3 cards do slide, não todos: informação dispersa, isolamento de quem chega, risco de golpe em moradia.
- Evidência: "Entrevistamos 6 estudantes na Sprint 1. Em 6 de 6, a dispersão da informação e a falta de relatos de quem já foi apareceram. 5 de 6 se ofereceram para ser Buddy."
- Público-alvo: intercambista que chega (incoming), aluno que vai (outgoing), ex-intercambista e Buddy, e o NEI com a comunicação institucional.

## 2. Solução e funcionalidades (Bruno, 1 min 30 s)

- "É um app com a cara do Unifor Mobile, só para a comunidade da Unifor: entra com e-mail institucional, o que é oficial tem selo e tudo tem moderação."
- As 5 abas: **Unifor** (jornal e reels), **Explorar** (guia da cidade, fórum, relatos), **Conversas**, **Menu** (idioma, aparência, LGPD) e **Perfil**.
- Ponto de engenharia de requisitos: "São 23 requisitos funcionais e 23 casos de uso no SRS, no padrão IEEE 830, e cada tela está ligada a um requisito na matriz de rastreabilidade."

## 3. Demonstração ao vivo (Nikolas, 3 min)

Abrir https://nikolasvianna-hub.github.io/conecta-intercambio/ antes de começar e deixar logado. Se precisar recomeçar: **Menu → Sobre o projeto → Reiniciar dados**.

1. **Login (20 s):** tentar um `@gmail.com` → erro de vínculo (RN02). Trocar o idioma para English e voltar. Entrar.
2. **Unifor (30 s):** abrir o Edital 2027.1 e mostrar o selo "Comunicado Institucional Unifor". Filtrar "Meu curso". Passar rápido pelos Reels.
3. **Explorar → Moradia (30 s):** abrir o tópico de bairros, mostrar o aviso de isenção (RN08) e marcar "Útil".
4. **Novo relato (40 s, novidade da Sprint 3):** Explorar → Relatos → "+ Escrever relato". Preencher universidade, nota, custos, prós e contras. Publicar. Mostrar que aparece como "Depoimento colaborativo não verificado" (RN07), porque o intercâmbio ainda não foi comprovado.
5. **Conversas (30 s):** abrir a conversa com a Sofía e mandar uma mensagem. Mostrar a aba "Pedidos" (RN11: só conexões conversam).
6. **Menu → Aparência e Privacidade (30 s, novidade da Sprint 3):** escolher a cor amarela e mostrar que o texto do botão fica escuro sozinho e que aparece o aviso de contraste (RNF04). Em Privacidade, mostrar os consentimentos e "Baixar meus dados".

**Plano B:** se a internet falhar, rodar localmente (`cd app && npm run dev`) ou passar pelo slide "Demonstração do Protótipo".

## 4. GitHub e evolução por sprint (Bruno, 1 min 45 s)

Abrir https://github.com/Nikolasvianna-hub/conecta-intercambio.

1. **README:** mostrar o bloco "Entrega P2", com os links para SRS, revisão de consistência, protótipo e UML.
2. **Issues → Milestones:** abrir a lista de milestones.
   - **M1, Sprint 1 (20/10 a 02/11):** 10 issues fechadas. Visão, stakeholders, entrevistas, requisitos, backlog e UML inicial.
   - **M2, Sprint 2 (03/11 a 23/11):** 13 issues fechadas. SRS, revisão de consistência (11 achados), protótipo das 5 abas e UML v2.
   - **M3, Sprint 3 (24/11 a 30/11):** formulário de relato (#28), contraste automático (#29) e este pitch (#31).
3. **Abrir uma issue fechada**, por exemplo a #25 (diagrama de implantação com WebSocket). Mostrar o pull request que a fechou e o diagrama `uml/implantacao-v2.svg`.
4. **Ser transparente:** a #27, validar as regras com o NEI, segue aberta. A entrevista com a assessoria não aconteceu, e por isso as regras RN11 a RN14 continuam como hipótese da equipe.

## 5. Benefícios, próximos passos e encerramento (Arthur, 1 min)

- Estudantes: chegada orientada, decisão com dados reais, ambiente seguro.
- NEI e Unifor: canal oficial único e menos atendimento repetido.
- Próximos passos: validar com o NEI, backend real, login integrado ao Unifor Mobile, piloto com a turma de 2027.1.
- "Obrigado! O protótipo e o repositório estão nos links do último slide."

---

## Checklist antes de apresentar

- [ ] Abrir o protótipo no navegador do computador da sala e testar o login.
- [ ] Deixar o GitHub aberto em outra aba, na página de milestones.
- [ ] Abrir o PDF dos slides em tela cheia.
- [ ] Ensaiar uma vez com cronômetro (meta: 9 min).
- [ ] Enviar no AVA: o PDF dos slides e o link do repositório.
