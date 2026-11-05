# Especificação de Requisitos de Software (SRS) — Conecta Intercâmbio

> **Padrão:** IEEE Std 830-1998 (*Recommended Practice for Software Requirements Specifications*), estrutura com organização por casos de uso
> **Disciplina:** Requisitos e Modelagem de Sistemas — Unifor (2026.2) · **Avaliação:** P2, Sprint 2 (Milestone M2, de 03/11 a 23/11/2026)
> **Equipe:** Nikolas Vianna de Carvalho (2623878) · Arthur Maia Roberto (2310641) · Bruno Vasconcelos Rocha (2612659)

## Histórico de Versões

| Versão | Data | Autor(es) | Descrição |
| :---: | :---: | :--- | :--- |
| 0.1 | 02/11/2026 | Equipe | Base da P1: visão, requisitos RF01–RF16, RNF01–RNF10, RN01–RN10, UML inicial. |
| 1.0 | 05/11/2026 | Equipe | Primeira versão do SRS: navegação em 5 abas, RF17–RF23, RNF11–RNF12, RN11–RN14, casos de uso UC01–UC23 detalhados e protótipo navegável. |

---

## 1. Introdução

### 1.1 Propósito
Este documento especifica os requisitos do **Conecta Intercâmbio**, a rede social acadêmica da internacionalização da Unifor. Ele é destinado a: (a) o professor avaliador da disciplina; (b) a equipe de desenvolvimento; (c) a Assessoria de Relações Internacionais / NEI e a Comunicação Institucional (TV Unifor), que validam as regras; e (d) futuros mantenedores. O documento junta os requisitos levantados na P1 com o que foi decidido na Sprint 2 e serve de referência única para o protótipo e para a revisão de consistência com a UML.

### 1.2 Escopo
O **Conecta Intercâmbio** é um aplicativo (web responsivo e PWA, com foco em celular) que reúne em cinco abas:
1. **Explorar:** fórum e guia de Fortaleza para quem vem de fora (moradia, restaurantes, transporte, documentação, segurança), além de relatos e equivalências de disciplinas.
2. **Conversas:** mensagens privadas e em grupo (estilo WhatsApp) e busca de perfis com conexões (estilo LinkedIn/Instagram).
3. **Unifor:** jornal da universidade com notícias oficiais, editais, chegada e saída de professores, eventos, TV Unifor e reels curtos (estilo TikTok/Reels), limitado a temas da universidade.
4. **Menu:** preferências (idioma, tema claro/noturno/automático, cor personalizada), privacidade e LGPD, notificações, Programa Buddy, agenda, moderação e FAQ.
5. **Perfil:** perfil acadêmico no padrão do Unifor Mobile, com dados de intercâmbio, idiomas e notícias do curso do estudante.

**Benefícios:** centralizar a comunicação oficial de mobilidade, acolher intercambistas *incoming*, aproveitar a experiência dos *alumni* e reduzir golpes de moradia e desinformação.

**Fora do escopo desta versão:** tradução automática por IA (US18), *matching* de Buddy por IA (US17), videochamada (US21), validação via Gov.br (US20), integração real com o Unifor Online, AVA ou SSO institucional (simulada no protótipo) e upload real de vídeo (simulado no protótipo).

### 1.3 Definições, Acrônimos e Abreviações
Os termos completos estão no [glossário](glossario.md). Os principais:

| Termo | Definição |
| :--- | :--- |
| **NEI** | Núcleo de Internacionalização / Assessoria de Relações Internacionais da Unifor. |
| **Incoming / Outgoing** | Intercambista estrangeiro na Unifor / aluno da Unifor que vai para o exterior. |
| **Alumni** | Ex-intercambista. |
| **Buddy** | Estudante voluntário que acolhe um intercambista. |
| **Conexão** | Relação aceita pelos dois perfis; libera conversas (RN11). |
| **Pedido de mensagem** | Primeira mensagem de quem ainda não é conexão; precisa ser aceita. |
| **Reel** | Vídeo vertical de até 60 segundos. |
| **LGPD** | Lei nº 13.709/2018 — Lei Geral de Proteção de Dados. |
| **DPO** | Encarregado pelo tratamento de dados pessoais. |
| **MoSCoW** | Priorização em Must, Should, Could e Won't. |
| **SP** | *Story Points* (estimativa relativa). |

### 1.4 Referências
1. IEEE Std 830-1998 — *Recommended Practice for Software Requirements Specifications*.
2. Lei nº 13.709/2018 (LGPD).
3. W3C — WCAG 2.1, nível AA.
4. Documentos do projeto: [Documento de Visão](documento-de-visao.md), [Stakeholders](stakeholders.md), [Roteiro](roteiro-de-entrevistas.md) e [Resultados de Entrevistas](resultados-de-entrevistas.md), [Requisitos](requisitos.md), [Regras de Negócio](regras-de-negocio.md), [Backlog](backlog.md), [Rastreabilidade](rastreabilidade.md), [Revisão de Consistência](revisao-de-consistencia.md), [Protótipo](prototipo.md).
5. Referências de identidade visual: aplicativo Unifor Mobile, AVA Unifor (ead.unifor.br) e Unifor Online (uol.unifor.br).

### 1.5 Visão Geral do Documento
A Seção 2 descreve o produto de forma geral: perspectiva, funções, usuários, restrições e premissas. A Seção 3 traz os requisitos específicos: interfaces externas, casos de uso detalhados (requisitos funcionais), requisitos de desempenho, restrições de projeto, atributos de qualidade e regras de negócio. Os apêndices trazem a rastreabilidade e a lista de mudanças em relação à P1.

---

## 2. Descrição Geral

### 2.1 Perspectiva do Produto
O Conecta Intercâmbio é um produto **novo e independente**, que deve conviver com o ecossistema digital da Unifor (Unifor Mobile, AVA, Unifor Online). Ele não substitui esses sistemas. A arquitetura alvo está em [`uml/componentes.svg`](../uml/componentes.svg) e [`uml/implantacao.svg`](../uml/implantacao.svg): cliente SPA/PWA, API REST com HTTPS, serviços de domínio (Auth, Profile, Feed/Content, Chat, Moderation, Notification, Privacy), banco PostgreSQL, armazenamento de objetos para mídia e SMTP.

```
┌──────────────────────── App (SPA / PWA) ─────────────────────────┐
│  Explorar │ Conversas │  Unifor  │  Menu  │ Perfil   (+ i18n, tema) │
└─────┬───────────┬──────────┬─────────┬────────┬───────────────────┘
      │ HTTPS/REST│ WebSocket│         │        │
┌─────▼───────────▼──────────▼─────────▼────────▼───────────────────┐
│ AuthService · ProfileService · ContentService · ChatService ·     │
│ ModerationService · NotificationService · PrivacyService(LGPD)    │
└─────┬──────────────────────┬───────────────────────┬──────────────┘
   PostgreSQL           Object Storage (mídia)      SMTP / Push
```

### 2.2 Funções do Produto
| Módulo | Funções | RF |
| :--- | :--- | :--- |
| Identidade | Cadastro e login com vínculo verificado, perfil acadêmico, conexões | RF01, RF02, RF22 |
| Explorar | Busca, categorias, guia da cidade, fórum, relatos, equivalências | RF03, RF08, RF15, RF16, RF18 |
| Conversas | Mensagens 1-1 e em grupo, pedidos de mensagem, bloqueio | RF07, RF17 |
| Unifor | Notícias oficiais, filtros por tipo e curso, reels, publicação institucional | RF04, RF05, RF12, RF21, RF23 |
| Menu | Idioma, aparência, privacidade/LGPD, notificações, Buddy, eventos | RF06, RF09, RF13, RF14, RF19, RF20 |
| Governança | Denúncia, moderação com auditoria | RF10, RF11 |

### 2.3 Características dos Usuários
| Ator | Perfil | Conhecimento técnico | Idioma |
| :--- | :--- | :--- | :--- |
| Estudante da Unifor (geral) | Graduação/pós, 17–30 anos, usa redes sociais todo dia | Médio | PT |
| Estudante Internacional (*incoming*) | Recém-chegado, ainda aprendendo português | Médio | EN/ES/outros |
| Estudante Brasileiro (*outgoing*) | Candidato a edital | Médio | PT |
| Ex-intercambista (*alumni*) | Compartilha relatos e equivalências | Médio | PT |
| Buddy voluntário | Acolhe intercambistas | Médio | PT/EN |
| Moderador comunitário | Bolsista treinado | Médio-alto | PT |
| Administrador institucional (NEI) | Servidor da assessoria | Médio | PT/EN |
| Equipe de Comunicação (TV Unifor, coordenações) | Produz conteúdo institucional | Médio-alto | PT |

### 2.4 Restrições
- **Legais:** LGPD (consentimento, direitos do titular, minimização de dados) e Marco Civil da Internet (guarda de registros).
- **Institucionais:** uso da marca Unifor só com autorização da Comunicação Institucional (RNF11); comunicados oficiais exclusivos do NEI (RN01).
- **Técnicas:** web responsivo de 360 a 1920 px (RNF03); i18n sem textos fixos no código (RNF08); HTTPS/TLS 1.3 (RNF01).
- **Acadêmicas:** prazo da disciplina (pitch em 01/12/2026); o protótipo usa dados fictícios e não tem backend.

### 2.5 Premissas e Dependências
- O NEI fornece a lista de códigos de aceite dos intercambistas (RN02).
- A Comunicação Institucional / TV Unifor aceita publicar conteúdo no app (RF23), ainda pendente de contato.
- A integração com SSO ou a base acadêmica da Unifor para obter curso e matrícula depende de autorização da TI. Sem ela, os dados são informados pelo usuário e validados pelo NEI.

### 2.6 Distribuição de Requisitos (versões futuras)
US17 (IA para Buddy), US18 (tradução automática), US20 (Gov.br), US21 (videochamada) e a calculadora de custos por destino ficam para versões futuras (ver [backlog](backlog.md), EP07).

---

## 3. Requisitos Específicos

### 3.1 Interfaces Externas

#### 3.1.1 Interfaces de Usuário
- **IU-01 Navegação:** barra inferior fixa com 5 abas (Explorar, Conversas, **Unifor** no centro e em destaque, Menu, Perfil), no padrão do Unifor Mobile. Telas de conversa aberta escondem a barra.
- **IU-02 Identidade visual:** tema escuro como padrão (fundo grafite, cartões arredondados de 16 px), azul Unifor como cor de destaque, cabeçalho de perfil em azul royal, banner em gradiente azul-ciano e barras de progresso ciano e amarela (RNF11).
- **IU-03 Temas:** claro, noturno e automático, com cor de destaque personalizável (RF19).
- **IU-04 Acessibilidade:** contraste ≥ 4,5:1, foco visível, rótulos ARIA em ícones e tamanho de texto ajustável (RNF04).
- **IU-05 Wireframes e protótipo:** ver [`prototipo.md`](prototipo.md).

#### 3.1.2 Interfaces de Hardware
Smartphones Android/iOS e computadores com navegador atual. Câmera e galeria para fotos e reels (opcional).

#### 3.1.3 Interfaces de Software
| Sistema | Uso | Situação |
| :--- | :--- | :--- |
| SMTP institucional | Confirmação de cadastro e redefinição de senha (RF01) | Previsto |
| Armazenamento de objetos (S3 compatível) | Fotos e vídeos | Previsto |
| SSO / base acadêmica Unifor | Curso e matrícula | Dependência (2.5) |
| Serviço de push (Web Push / FCM) | Notificações, desligadas por padrão (RF14) | Previsto |

#### 3.1.4 Interfaces de Comunicação
HTTPS/TLS 1.3 para a API REST (JSON) e WebSocket seguro (WSS) para conversas (RNF12).

---

### 3.2 Requisitos Funcionais — Casos de Uso

Diagramas: [`uml/casos-de-uso.svg`](../uml/casos-de-uso.svg) (UC01–UC15) e [`uml/casos-de-uso-v2.svg`](../uml/casos-de-uso-v2.svg) (UC16–UC23). O texto completo de cada RF está em [`requisitos.md`](requisitos.md).

#### 3.2.1 Visão geral dos casos de uso

| UC | Nome | Ator principal | RF | RN | Prioridade | Aba / Tela do protótipo |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| UC01 | Autenticar Usuário (com validação de vínculo) | Estudante | RF01 | RN02 | Must | Login |
| UC02 | Gerenciar Perfil Acadêmico e Idiomas | Estudante | RF02 | RN04 | Must | Perfil → Editar |
| UC03 | Buscar Estudantes, Destinos e Relatos | Estudante | RF03, RF08 | RN04 | Must | Conversas (busca), Explorar |
| UC04 | Publicar no Feed (texto/fotos) | Estudante | RF04 | RN06 | Must | Unifor → “+”, Explorar → Novo tópico |
| UC05 | Interagir com Publicações | Estudante | RF04 | — | Must | Unifor, Explorar |
| UC06 | Consultar Notícias e Editais Oficiais | Estudante | RF05 | RN01 | Must | Unifor → Notícias |
| UC07 | Solicitar Conexão com Buddy | Incoming | RF06 | RN03 | Should | Menu → Programa Buddy |
| UC08 | Gerenciar Atribuições do Buddy | Buddy, NEI | RF06 | RN03 | Should | (back-office) |
| UC09 | Participar de Comunidades | Estudante | RF07 | — | Should | Conversas → Grupos |
| UC10 | Submeter Relato de Intercâmbio | Alumni | RF08, RF16 | RN07 | Must | Explorar → Relatos |
| UC11 | Consultar Agenda de Eventos | Estudante | RF09 | RN09 | Should | Menu → Agenda |
| UC12 | Publicar Comunicados e Editais | NEI | RF05 | RN01 | Must | (back-office) |
| UC13 | Denunciar Conteúdo, Comentário ou Perfil | Estudante | RF10 | RN05 | Must | Ícone 🚩 em todas as telas |
| UC14 | Moderar Conteúdos e Processar Denúncias | Moderador | RF11 | RN05, RN10 | Must | Menu → Painel de moderação |
| UC15 | Exibir Isenção Legal em Moradia | Sistema | RF15 | RN08 | Must | Explorar → Moradia |
| **UC16** | **Conversar por Mensagens Privadas e Grupos** | Estudante | RF17 | RN11, RN12 | Should | Conversas |
| **UC17** | **Buscar Perfis e Gerenciar Conexões** | Estudante | RF03, RF22 | RN04, RN11 | Should | Conversas → busca → Perfil |
| **UC18** | **Explorar Guia da Cidade e Fórum** | Estudante | RF18 | RN08, RN14 | Must | Explorar |
| **UC19** | **Personalizar Aparência e Idioma** | Estudante | RF13, RF19 | — | Should | Menu → Aparência / Idioma |
| **UC20** | **Gerenciar Privacidade e Consentimentos** | Estudante | RF20 | RN04, RN13 | Must | Menu → Privacidade e LGPD |
| **UC21** | **Consultar Notícias do Meu Curso** | Estudante | RF21 | RN13 | Should | Perfil; Unifor → “Meu curso” |
| **UC22** | **Assistir e Publicar Reels Acadêmicos** | Estudante | RF12 | RN06 | Should | Unifor → Reels |
| **UC23** | **Publicar Notícias e Reels Institucionais** | Equipe de Comunicação | RF23 | RN01 | Should | (back-office) |

#### 3.2.2 Especificações detalhadas

---

##### UC01 — Autenticar Usuário (com validação de vínculo)
| Campo | Descrição |
| :--- | :--- |
| **Ator principal** | Estudante da Unifor / Estudante Internacional |
| **Pré-condições** | Usuário não autenticado. |
| **Pós-condições** | Sessão criada; consentimento inicial registrado (RF20). |
| **Gatilho** | O usuário abre o app. |

**Fluxo principal**
1. O sistema mostra a tela de login com o seletor de idioma.
2. O usuário informa o e-mail institucional e a senha.
3. O usuário marca o aceite dos Termos de Uso e da Política de Privacidade.
4. O sistema confere se o domínio é `@edu.unifor.br` ou `@unifor.br` (RN02).
5. O sistema autentica, cria a sessão e abre a aba **Unifor**.

**Fluxos alternativos**
- **A1 — Intercambista com código de aceite:** no passo 2 o usuário marca “Sou intercambista” e informa o código `INC-AAAA-NNNN`. O sistema valida o formato e consulta a lista do NEI.
- **A2 — Troca de idioma:** a qualquer momento o usuário troca o idioma, e os textos mudam sem recarregar (RF13).

**Fluxos de exceção**
- **E1 — Domínio não institucional sem código:** o sistema mostra “Use um e-mail @edu.unifor.br…” e não autentica.
- **E2 — Termos não aceitos:** o sistema mostra “É preciso aceitar os termos” e não autentica.
- **E3 — Código inválido:** o sistema mostra o formato esperado.

**Regras:** RN02, RN04. **Requisitos:** RF01, RF13, RF20, RNF01, RNF02.

---

##### UC06 — Consultar Notícias e Editais Oficiais
| Campo | Descrição |
| :--- | :--- |
| **Ator principal** | Estudante |
| **Pré-condições** | Usuário autenticado. |
| **Pós-condições** | — |

**Fluxo principal**
1. O usuário toca na aba central **Unifor**.
2. O sistema mostra o destaque (edital vigente), a faixa da TV Unifor e a lista de notícias em ordem cronológica reversa.
3. O usuário filtra por tipo: Tudo, Meu curso, Editais, Professores, Eventos, TV Unifor ou Internacional.
4. O usuário abre uma notícia. O sistema mostra o selo “Comunicado Institucional Unifor”, o conteúdo completo e os cursos-alvo.

**Alternativos:** **A1** — o usuário curte ou comenta (UC05). **A2** — o usuário denuncia (UC13).
**Regras:** RN01 (só perfis institucionais publicam notícias oficiais). **Requisitos:** RF05, RF21.

---

##### UC13 — Denunciar Conteúdo, Comentário ou Perfil
**Ator:** Estudante · **Pré-condição:** autenticado e vendo um tópico, resposta, notícia, reel, perfil ou conversa.
1. O usuário toca no ícone 🚩.
2. O sistema mostra a lista de motivos: Assédio/ódio, Desinformação, Spam/golpe, Moradia suspeita, Outro.
3. O usuário escolhe o motivo e, se quiser, escreve um detalhe.
4. O usuário envia. O sistema coloca o item na fila de moderação (UC14) e confirma.

**Exceção E1 — conversa privada:** só as mensagens selecionadas e o contexto imediato vão para a fila (RN12).
**Requisitos:** RF10. **Regras:** RN05, RN12.

---

##### UC14 — Moderar Conteúdos e Processar Denúncias
**Ator:** Moderador · **Pré-condição:** perfil de moderador.
1. O moderador abre **Menu → Painel de moderação**.
2. O sistema lista as denúncias pendentes com alvo, motivo e horário.
3. O moderador abre uma denúncia.
4. O moderador escreve a **justificativa obrigatória**.
5. O moderador escolhe “Rejeitar denúncia” ou “Remover conteúdo”.
6. O sistema grava a decisão no log de auditoria (moderador, item, data/hora UTC, justificativa) e tira a denúncia da fila.

**Exceção E1:** sem justificativa, os botões de decisão ficam desabilitados.
**Alternativo A1:** se for a terceira infração confirmada do autor, o sistema aplica a suspensão cautelar (RN10).
**Requisitos:** RF11, RNF09, RNF10.

---

##### UC16 — Conversar por Mensagens Privadas e Grupos
| Campo | Descrição |
| :--- | :--- |
| **Ator principal** | Estudante da Unifor (inclui *incoming*) |
| **Pré-condições** | Autenticado. Para conversa 1-1: ser conexão do destinatário ou ter o pedido aceito (RN11). |
| **Pós-condições** | Mensagem entregue e guardada; status de leitura conforme a privacidade. |

**Fluxo principal**
1. O usuário abre a aba **Conversas**.
2. O sistema mostra a busca, quem está “Online agora” e as abas Conversas, Grupos e Pedidos.
3. O usuário abre uma conversa.
4. O sistema mostra o histórico e o aviso de confidencialidade (RN12).
5. O usuário digita e envia uma mensagem.
6. O sistema entrega a mensagem (P95 ≤ 2 s, RNF12) e mostra ✓✓, que fica azul se o destinatário tiver a confirmação de leitura ligada.

**Fluxos alternativos**
- **A1 — Pedido de mensagem recebido:** na aba Pedidos, o usuário abre a mensagem, vê o aviso de que o remetente não sabe se foi lida e escolhe **Aceitar** (vira conversa normal) ou **Recusar** (a conversa é removida).
- **A2 — Conversa em grupo:** cada mensagem mostra o nome do autor e o cabeçalho mostra o número de membros.
- **A3 — Iniciar a partir de um perfil:** em UC17 o usuário toca em “Mensagem”, e o sistema abre a conversa existente ou cria uma nova.

**Fluxos de exceção**
- **E1 — Usuário bloqueado:** o campo de mensagem é trocado por “Você não pode enviar mensagens para esta pessoa”.
- **E2 — Destinatário com “Ninguém pode me mandar mensagem”:** o envio fica bloqueado (RN11).
- **E3 — Denunciar:** UC13 é disparado (relação «extend»).

**Requisitos:** RF17, RF10, RF20, RNF12. **Regras:** RN11, RN12.

---

##### UC17 — Buscar Perfis e Gerenciar Conexões
1. Na aba Conversas, o usuário digita um nome, curso ou país.
2. O sistema mostra “Pessoas na Unifor” com selo de vínculo, curso e bandeira.
3. O usuário abre um perfil.
4. O sistema mostra avatar, número de publicações e conexões, selo, curso, origem e destino, biografia, idiomas com nível e a grade de publicações.
5. O usuário toca em **Conectar**. O sistema muda o botão para **Pendente** e notifica o outro usuário.

**A1 — Perfil privado:** para quem não é conexão aparecem só nome, selo, curso e país, com o aviso “Este perfil é privado”.
**A2 — Mensagem:** segue para UC16 (A3).
**E1 — Nenhum resultado:** “Ninguém encontrado com esse nome”.
**Requisitos:** RF03, RF22. **Regras:** RN04, RN11.

---

##### UC18 — Explorar Guia da Cidade e Fórum de Tópicos
| Campo | Descrição |
| :--- | :--- |
| **Ator principal** | Estudante (principalmente *incoming*) |
| **Pré-condições** | Autenticado. |
| **Pós-condições** | Tópico ou resposta publicados (quando houver). |

**Fluxo principal**
1. O usuário abre a aba **Explorar**.
2. O sistema mostra a busca, a grade de 8 categorias, o “Guia da cidade para quem chega” (cartões com bairro, distância até a Unifor, nota e preço), “Em alta na comunidade”, relatos e equivalências.
3. O usuário escolhe uma categoria. O sistema filtra lugares e tópicos.
4. O usuário abre um tópico. O sistema mostra o autor com selo, o conteúdo, as respostas e o botão “Útil”.
5. O usuário responde ou marca “Útil”.

**Fluxos alternativos**
- **A1 — Novo tópico:** o usuário toca em “+” e informa categoria, título e texto (até 1.000 caracteres). O sistema publica e abre o tópico.
- **A2 — Categoria Moradia:** o sistema mostra o aviso de isenção do RF15 (UC15 «extend») e exige vínculo verificado para publicar (RN02).
- **A3 — Busca textual:** o sistema filtra pelo título e pelo texto.

**Exceções:** **E1** — título ou texto vazio deixa o botão “Publicar” desabilitado. **E2** — conteúdo patrocinado deve ser denunciado (RN14).
**Requisitos:** RF18, RF08, RF15, RF16. **Regras:** RN02, RN07, RN08, RN14.

---

##### UC19 — Personalizar Aparência e Idioma
1. O usuário abre **Menu → Aparência**.
2. O sistema mostra Modo (Claro, Noturno, Automático), Cor de destaque (8 cores e uma personalizada), Tamanho do texto, Reduzir animações e uma pré-visualização.
3. O usuário muda as opções. O sistema aplica na hora em todas as telas e guarda a preferência.

**A1 — Idioma:** em **Menu → Idioma** o usuário escolhe Português, English ou Español, e a interface muda sem recarregar (RF13).
**A2 — Automático:** o sistema acompanha o tema do sistema operacional em tempo real.
**Requisitos:** RF13, RF19, RNF04, RNF08, RNF11.

---

##### UC20 — Gerenciar Privacidade e Consentimentos (LGPD)
| Campo | Descrição |
| :--- | :--- |
| **Ator principal** | Estudante (titular dos dados) |
| **Pré-condições** | Autenticado. |
| **Pós-condições** | Preferências salvas; cada mudança de consentimento registrada com data e hora. |

**Fluxo principal**
1. O usuário abre **Menu → Privacidade e LGPD**.
2. O sistema mostra: quem vê meu perfil, quem pode me mandar mensagem, status online, confirmação de leitura, país de origem, consentimentos (personalizar notícias pelo curso, analytics) e direitos do titular.
3. O usuário muda uma opção. O sistema salva e, se for um consentimento, registra no histórico.

**Fluxos alternativos**
- **A1 — Baixar meus dados:** o sistema gera e baixa um arquivo JSON com perfil, preferências, conexões, bloqueios e histórico de consentimentos (portabilidade, Art. 18, V).
- **A2 — Histórico de consentimentos:** o sistema lista item, valor e data/hora.
- **A3 — Excluir conta:** o sistema explica o prazo (15 dias) e a retenção de logs (RNF10). Ao confirmar, gera um protocolo.
- **A4 — Desbloquear conta:** o usuário remove alguém da lista de bloqueados.

**Exceção E1:** “Avisos oficiais do NEI” não pode ser desligado, porque é informação de interesse acadêmico obrigatória.
**Requisitos:** RF20, RF14, RNF02. **Regras:** RN04, RN13.

---

##### UC21 — Consultar Notícias do Meu Curso
1. O usuário abre a aba **Perfil**.
2. O sistema mostra o cabeçalho (foto, nome, matrícula, selo, curso), o bloco “Intercâmbio” (conexões, publicações, idiomas, destino, perfil completo %, níveis de idioma) e “Notícias do meu curso”.
3. O sistema lista só as notícias marcadas com o curso do usuário (inclui UC06 com filtro de curso).
4. O usuário abre uma notícia (UC06, passo 4).

**A1 — Filtro “Meu curso” na aba Unifor:** mesmo resultado na lista principal.
**E1 — Consentimento desligado:** o sistema não usa o curso e mostra como ativar (RN13, «include» UC20).
**Requisitos:** RF21, RF02. **Regras:** RN13.

---

##### UC22 — Assistir e Publicar Reels Acadêmicos
1. Na aba Unifor, o usuário toca em **Reels** (ou em um item da faixa TV Unifor).
2. O sistema mostra os vídeos verticais em tela cheia, com rolagem que encaixa um vídeo por vez, barra de progresso, autor com selo, legenda e as ações Curtir, Comentar, Compartilhar, Som e Denunciar.
3. O usuário rola para o próximo vídeo.

**A1 — Publicar:** o usuário toca em “+” e envia texto, fotos (até 4) ou vídeo (até 60 s). O sistema informa “Enviado para moderação” e o conteúdo vai para a fila (UC14) antes de aparecer (RN06).
**E1 — Vídeo acima de 60 s ou formato incompatível:** o upload é bloqueado.
**Requisitos:** RF12, RF04. **Regras:** RN06.

---

##### UC23 — Publicar Notícias e Reels Institucionais
**Ator:** Equipe de Comunicação (TV Unifor, NEI, coordenações) · **Pré-condição:** perfil institucional.
1. O ator cria uma publicação com título, resumo, corpo, mídia, **tipo** (Edital, Professores, Eventos, TV Unifor, Internacional) e **cursos-alvo** (ou “todos”).
2. O sistema publica na hora com o selo oficial, sem passar pela fila de moderação.
3. O sistema notifica os usuários dos cursos-alvo que têm consentimento (RN13) e notificação de curso ligada.

**A1 — Edital:** campos extras de tipo, duração, período, custos obrigatórios e cronograma de bolsa (refinamento do RF05).
**Requisitos:** RF23, RF05, RF14. **Regras:** RN01, RN13.

---

> **Nota:** os casos de uso UC02–UC05, UC07–UC12 e UC15 mantêm a especificação de fluxo dada pelos critérios de aceitação de RF02–RF09 e RF15 em [`requisitos.md`](requisitos.md) e pelas histórias US02–US14 do [backlog](backlog.md). Eles serão detalhados neste mesmo formato na Sprint 3, se a equipe tiver capacidade.

---

### 3.3 Requisitos de Desempenho
| ID | Requisito | Métrica |
| :--- | :--- | :--- |
| RNF05 | Primeira renderização do feed | FCP ≤ 2,0 s; API ≤ 500 ms (P95) |
| RNF12 | Entrega de mensagens | ≤ 2 s (P95) para destinatário online |
| D-01 | Capacidade inicial | 5.000 usuários cadastrados e 500 simultâneos (estimativa da equipe) |

### 3.4 Requisitos Lógicos de Banco de Dados (entidades principais)
`Usuario(id, nome, nomeExibicao, email, matricula, curso, vinculo, statusMobilidade, destino, bio)` · `Idioma(usuarioId, idioma, nivel)` · `Conexao(origemId, destinoId, estado)` · `Conversa(id, tipo{1-1,grupo}, comunidadeId?)` · `Mensagem(id, conversaId, autorId, texto, enviadaEm, lidaEm?)` · `PedidoMensagem(conversaId, estado)` · `Bloqueio(usuarioId, bloqueadoId)` · `Topico(id, categoria, titulo, corpo, autorId, util)` · `Resposta(id, topicoId, autorId, texto)` · `Lugar(id, nome, categoria, bairro, distanciaKm, nota, preco)` · `Noticia(id, tipo, titulo, corpo, autorInstitucionalId, cursosAlvo[])` · `Reel(id, autorId, duracaoSeg, estadoModeracao)` · `Denuncia(id, alvoTipo, alvoId, motivo, detalhe, estado)` · `LogAuditoria(id, moderadorId, alvo, acao, justificativa, emUTC)` · `PreferenciaPrivacidade(usuarioId, perfil, mensagens, online, leitura, pais)` · `Consentimento(usuarioId, item, valor, emUTC)` · `PreferenciaAparencia(usuarioId, modo, corDestaque, escalaFonte, reduzirAnimacoes, idioma)`.

### 3.5 Restrições de Projeto
- Arquitetura em camadas desacopladas (RNF07); frontend SPA/PWA.
- **Protótipo (Sprint 2):** React 19 + TypeScript + Vite, estado local persistido em `localStorage`, dados fictícios, sem backend. Publicado no GitHub Pages.
- Dicionários de idioma separados dos componentes (`app/src/i18n/strings.ts`), seguindo RNF08.

### 3.6 Atributos de Qualidade do Sistema
| Atributo | Requisitos |
| :--- | :--- |
| Segurança | RNF01, RN02, RN11 |
| Privacidade | RNF02, RF20, RN04, RN12, RN13 |
| Usabilidade e Acessibilidade | RNF03, RNF04, RNF11, RF19 |
| Confiabilidade e Disponibilidade | RNF06, RNF09 |
| Manutenibilidade e Portabilidade | RNF07, RNF08 |

### 3.7 Regras de Negócio
RN01–RN14 estão em [`regras-de-negocio.md`](regras-de-negocio.md). As regras novas da Sprint 2 são RN11 (mensagens só entre conexões ou com aceite), RN12 (confidencialidade das conversas), RN13 (personalização por curso depende de consentimento) e RN14 (guia sem publicidade paga).

---

## Apêndice A — Rastreabilidade
A matriz necessidade → requisito → regra → história → caso de uso está em [`rastreabilidade.md`](rastreabilidade.md) (NEC01–NEC16). A matriz requisito × UML × protótipo está em [`revisao-de-consistencia.md`](revisao-de-consistencia.md).

## Apêndice B — Mudanças em relação à P1
| Item | Mudança |
| :--- | :--- |
| Navegação | Definida em 5 abas (Explorar, Conversas, Unifor, Menu, Perfil). |
| RF12 | De *Could* para *Should* (aba Unifor → Reels). |
| US16 | Chat saiu de *Won't* e virou RF17 (*Should*), com RN11 e RN12. |
| RF13 | Espanhol incluído como *Could*. |
| Novos | RF17–RF23, RNF11–RNF12, RN11–RN14, UC16–UC23, NEC13–NEC16, US22–US27. |
