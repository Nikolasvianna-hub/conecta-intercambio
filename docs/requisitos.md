# Especificação de Requisitos de Software - Conecta Intercâmbio

Este documento apresenta a especificação detalhada dos **Requisitos Funcionais (RF)** e **Requisitos Não Funcionais (RNF)** do sistema **Conecta Intercâmbio - Rede Social Acadêmica**, em conformidade com as diretrizes da norma ISO/IEC/IEEE 29148 e do programa avaliativo da P1 da disciplina **Requisitos e Modelagem de Sistemas** (Unifor).

---

## 1. Convenções e Metodologia de Classificação

Cada requisito é especificado contendo:
- **ID:** Código identificador único sequencial (`RF01` a `RF23` para funcionais, sendo RF17–RF23 incluídos na Sprint 2; `RNF01` a `RNF12` para não funcionais).
- **Nome:** Título autoexplicativo do requisito.
- **Descrição Objetiva:** O comportamento observável ou a restrição de qualidade exigida.
- **Justificativa:** Motivação técnica, acadêmica ou institucional para a existência do requisito.
- **Stakeholder Primário:** Parte interessada mais diretamente beneficiada ou impactada.
- **Prioridade MoSCoW:** *Must have* (Essencial para o MVP), *Should have* (Importante, mas não bloqueia a versão inicial), *Could have* (Desejável se houver viabilidade), *Won't have now* (Fora do escopo da P1).
- **Critério de Aceitação Verificável:** Condição mensurável e testável que valida o atendimento do requisito.
- **Fonte / Origem:** Origem do requisito (Documento de Propostas ENADE/Unifor, Ementa da Disciplina, Hipótese da Equipe).
- **Status de Validação:** Nível de maturidade epistemológica no ciclo da Sprint 1.

---

## 2. Requisitos Funcionais (RF)

### RF01 - Autenticação e Gestão de Identidade Institucional
- **Descrição Objetiva:** O sistema deve permitir que os usuários se cadastrem e realizem login utilizando credenciais validadas (e-mail institucional da Unifor ou processo de verificação de matrícula/vínculo de intercâmbio), permitindo redefinição segura de senha.
- **Justificativa:** Garantir a autenticidade do ambiente acadêmico, prevenindo criação de perfis falsos (*spambots*) e mantendo um ambiente seguro e auditável.
- **Stakeholder Primário:** STK01, STK02, STK03, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Dado um usuário não autenticado portando e-mail institucional válido `@edu.unifor.br` ou código de intercâmbio autorizado, quando submeter o formulário de cadastro, então o sistema deve enviar um token de confirmação e registrar o usuário com o perfil de acesso correspondente.
- **Fonte / Origem:** Diretrizes gerais da proposta de extensão Unifor e boas práticas de governança.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF02 - Gerenciamento de Perfil Acadêmico e Intercultural
- **Descrição Objetiva:** O sistema deve permitir que cada usuário mantenha um perfil público acadêmico contendo: foto, nome de exibição, biografia, curso/área de estudo, país de origem, país/universidade de destino (quando aplicável), idiomas falados e nível de fluência, e selo de vínculo (Intercambista, Brasileiro, Ex-Intercambista, Buddy, Gestor).
- **Justificativa:** Possibilitar a identificação contextualizada dos membros da comunidade universitária, servindo de base para conexões por afinidade de destino, idioma e interesses.
- **Stakeholder Primário:** STK01, STK02, STK03, STK04.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** O usuário pode editar suas informações a qualquer momento e visualizar o perfil conforme outros o veem. O selo institucional de vínculo é bloqueado para edição manual direta pelo usuário (atribuído exclusivamente pelo sistema/gestor).
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**. Reforçado por entrevistas com estudantes.
- **Refinamento pós-entrevistas:** Nome de exibição sem exigência de sobrenome completo; idade, empresa/cargo, histórico acadêmico e situação socioeconômica nunca são campos de perfil público (PART-B03, B05, B06).

---

### RF03 - Descoberta e Busca Avançada de Estudantes
- **Descrição Objetiva:** O sistema deve disponibilizar ferramenta de busca e filtros para localização de perfis cadastrados por: país de origem, país de destino de interesse, curso, idiomas declarados e disponibilidade para mentoria/Buddy.
- **Justificativa:** Facilitar que discentes prestes a viajar encontrem rapidamente veteranos do mesmo destino ou que intercambistas encontrem discentes com interesses comuns.
- **Stakeholder Primário:** STK01, STK02, STK04.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Ao aplicar o filtro "Espanha" e "Engenharia", o sistema deve retornar em menos de 1 segundo uma listagem paginada de estudantes com esse perfil de destino ou origem, respeitando as preferências de privacidade configuradas.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF04 - Feed Acadêmico de Publicações e Interações
- **Descrição Objetiva:** O sistema deve oferecer um feed dinâmico no qual estudantes e gestores possam publicar mensagens de texto (de até 1.000 caracteres) acompanhadas de imagens (até 4 fotos por post), com recursos de curtir, comentar e compartilhar publicações internamente.
- **Justificativa:** Estimular a circulação orgânica de dúvidas, vivências cotidianas, celebrações de chegada e entrosamento na comunidade universitária.
- **Stakeholder Primário:** STK01, STK02, STK03.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Qualquer usuário autenticado pode criar um post, visualizar posts de seus pares em ordem cronológica reversa, inserir comentários em postagens públicas e desfazer curtidas previamente registradas.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF05 - Canal Oficial de Notícias, Editais e Comunicados Institucionais
- **Descrição Objetiva:** O sistema deve fornecer uma seção exclusiva de notícias e comunicados institucionais alimentada unicamente por perfis com permissão de Gestor da Assessoria de Relações Internacionais (NEI), sinalizada visualmente com distintivo oficial.
- **Justificativa:** Eliminar o ruído de desinformação e garantir que prazos de editais, convocações e alertas governamentais tenham fonte confiável e inquestionável.
- **Stakeholder Primário:** STK05, STK01, STK02.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Discentes comuns não visualizam opção de publicar na aba de Notícias Oficiais. Publicações do NEI são marcadas com banner "Comunicado Institucional Unifor" e não podem ser apagadas por moderadores voluntários comuns.
- **Fonte / Origem:** Apresentação de Extensão - Internacionalização Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**. Reforçado por entrevistas com estudantes.
- **Refinamento pós-entrevistas:** Cada oportunidade deve informar **tipo** (intercâmbio semestral, curso curto de férias, estágio, bolsa), **duração**, **período** (para filtrar pelo recesso da Unifor), **custos obrigatórios conhecidos** (seguro-saúde, taxas) e, quando houver bolsa, o **cronograma previsto de liberação do valor** (PART-B03, B04, B06).

---

### RF06 - Conexão e Gestão do Programa de Buddy
- **Descrição Objetiva:** O sistema deve permitir que estudantes locais se cadastrem como voluntários do Programa de Buddy e que estudantes internacionais solicitem a designação de um Buddy, possibilitando a aceitação do vínculo e a visualização do par designado.
- **Justificativa:** Viabilizar digitalmente a tutoria solidária e o apadrinhamento discente, promovendo a adaptação e o acolhimento seguro no campus da Unifor.
- **Stakeholder Primário:** STK01, STK04, STK05.
- **Prioridade:** **Should have** (Escopo Prioritário da Sprint 1 / P1).
- **Critério de Aceitação:** Um intercambista *incoming* visualiza a opção "Solicitar Buddy". O sistema lista tutores voluntários disponíveis compatíveis por idioma/área ou encaminha a solicitação para atribuição pelo coordenador do programa.
- **Fonte / Origem:** Apresentação de Extensão e Proposta ENADE Unifor.
- **Status de Validação:** **Hipótese de Produto da Equipe (Pendente de Validação com NEI)**.

---

### RF07 - Comunidades Temáticas por Destino e Interesses
- **Descrição Objetiva:** O sistema deve permitir a navegação e participação em grupos/comunidades temáticas organizadas por destino (ex.: "Intercâmbio Portugal", "Intercâmbio França"), por idioma (ex.: "English Conversation Club") ou por interesse acadêmico.
- **Justificativa:** Segmentar as discussões e evitar que o feed principal fique sobrecarregado com dúvidas hiperespecíficas de determinadas cidades ou cursos.
- **Stakeholder Primário:** STK01, STK02, STK03.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** O usuário pode ingressar em uma comunidade pública com um clique, visualizar postagens restritas àquela comunidade e publicar dúvidas direcionadas ao grupo temático.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF08 - Repositório de Relatos Estruturados de Intercâmbio
- **Descrição Objetiva:** O sistema deve disponibilizar um formulário estruturado para que ex-intercambistas submetam avaliações sobre universidades parceiras, abordando: facilidade de matrícula, custo de vida médio, opções de moradia, transporte e choque cultural.
- **Justificativa:** Transformar a experiência dispersa dos egressos em um ativo de conhecimento institucional perene para candidatos a futuras mobilidades.
- **Stakeholder Primário:** STK02, STK03, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Relatos submetidos exibem campos padronizados (Avaliação 1 a 5 estrelas, Prós, Contras e Dicas Práticas) e contêm aviso fixo de que os valores monetários informados são estimativas informais do autor.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**. Reforçado por entrevistas com estudantes.
- **Refinamento pós-entrevistas:** O formulário de relato passa a ter custos mensais por categoria (moradia, alimentação, transporte, seguro) e campos obrigatórios de **prós e contras**, para evitar relatos apenas positivos (PART-B04, B05). A agregação dos custos em uma "calculadora por destino" fica como *Could have*.

---

### RF09 - Agenda Integrada de Eventos Acadêmicos e Culturais
- **Descrição Objetiva:** O sistema deve disponibilizar um calendário interativo com eventos voltados à internacionalização (Feira de Intercâmbio, Workshops de Idiomas, Encontros de Acolhimento, Sessões Informativas de Editais), permitindo marcar presença confirmada.
- **Justificativa:** Ampliar a adesão discente aos encontros presenciais e remotos promovidos pela Unifor e por entidades estudantis.
- **Stakeholder Primário:** STK01, STK02, STK05, STK06.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Cada evento exibe título, data/hora, local físico (bloco/sala do campus) ou link remoto, organizador responsável e botão "Tenho Interesse / Comparecerei".
- **Fonte / Origem:** Apresentação de Extensão - Internacionalização Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF10 - Denúncia Colaborativa de Conteúdos e Perfis
- **Descrição Objetiva:** O sistema deve fornecer opção em todos os posts, comentários e perfis para que qualquer usuário reporte violações de conduta, assédio, preconceito, desinformação ou anúncio ilícito de moradia.
- **Justificativa:** Assegurar a integridade ética, o respeito mútuo e a segurança da comunidade acadêmica em conformidade com o código de ética da universidade.
- **Stakeholder Primário:** STK01, STK02, STK08, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Ao clicar no ícone de denúncia, o usuário seleciona o motivo em uma lista padronizada e submete justificativa opcional. O item denunciado é enviado instantaneamente para a fila do painel de moderação.
- **Fonte / Origem:** Diretrizes de segurança da proposta ENADE Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF11 - Painel Administrativo de Moderação e Auditoria
- **Descrição Objetiva:** O sistema deve dispor de interface administrativa restrita para moderadores e gestores visualizarem denúncias pendentes, aprovarem publicações reportadas, removerem conteúdos infratores ou suspenderem preventivamente perfis abusivos.
- **Justificativa:** Garantir controle operacional ágil e suporte à governança institucional da plataforma.
- **Stakeholder Primário:** STK08, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Moderador autenticado acessa a fila de denúncias, visualiza o conteúdo original no contexto, escolhe entre "Rejeitar Denúncia" ou "Remover Conteúdo", registrando justificativa obrigatória registrada em log de auditoria.
- **Fonte / Origem:** Diretrizes de governança da disciplina.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF12 - Feed Vertical de Vídeos Curtos Acadêmicos (*Hipótese de Produto*)
- **Descrição Objetiva:** O sistema deve possibilitar a visualização e publicação em formato vertical (estilo *reels*) de vídeos de curta duração (até 60 segundos) com foco exclusivo em apresentação de cursos, dicas do campus, vida cultural de Fortaleza e momentos do intercâmbio.
- **Justificativa:** Atrair a atenção e o engajamento visual do público universitário jovem habituado a mídias dinâmicas.
- **Stakeholder Primário:** STK01, STK02.
- **Prioridade:** **Could have** (*Não prioritário para o MVP da P1*).
- **Critério de Aceitação:** Se implementado, o reprodutor deve suportar rolagem vertical contínua, botão de mudo rápido e bloqueio automático de uploads com duração superior a 60 segundos ou resolução incompatível.
- **Fonte / Origem:** Ementa temática da proposta Conecta Intercâmbio.
- **Status de Validação:** **Hipótese da Equipe em Análise de Viabilidade Técnica**.

---

### RF13 - Suporte à Interface Multilíngue (i18n)
- **Descrição Objetiva:** O sistema deve permitir que o usuário alterne dinamicamente o idioma da interface gráfica da plataforma entre **Português (pt-BR)** e **Inglês (en-US)** em qualquer tela sem necessidade de recarregar a página ou perder o estado atual.
- **Justificativa:** Atender com dignidade e autonomia os estudantes estrangeiros em fase inicial de aquisição do português.
- **Stakeholder Primário:** STK01, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Ao clicar no seletor de idioma na barra superior, 100% dos rótulos de navegação, botões de ação e mensagens do sistema mudam instantaneamente para o idioma selecionado.
- **Fonte / Origem:** Ementa da atividade Conecta Intercâmbio.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF14 - Notificações Centrais do Sistema
- **Descrição Objetiva:** O sistema deve emitir notificações visuais (em painel central na interface) para alertar o discente sobre: respostas aos seus comentários, avisos oficiais urgentes da Assessoria NEI, designação de Buddy e interações em suas publicações.
- **Justificativa:** Manter os estudantes engajados e garantir que avisos críticos de intercâmbio não passem despercebidos.
- **Stakeholder Primário:** STK01, STK02, STK04, STK05.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Notificações não lidas exibem badge numérico no cabeçalho; ao serem clicadas, redirecionam diretamente para o conteúdo alvo e são marcadas como lidas.
- **Fonte / Origem:** Ementa da proposta Conecta Intercâmbio.
- **Status de Validação:** **Validado pelo Escopo da P1**. Reforçado por entrevistas com estudantes.
- **Refinamento pós-entrevistas:** O usuário deve poder escolher quais tipos de notificação recebe; notificações *push* no celular ficam **desativadas por padrão**, mantendo apenas o painel interno e os avisos oficiais urgentes (PART-B01, B06).

---

### RF15 - Isenção de Responsabilidade sobre Moradia e Hospedagem
- **Descrição Objetiva:** O sistema deve exibir de forma compulsória um termo de ciência e isenção institucional em qualquer publicação ou comunidade que envolva orientações, indicações ou repasses de moradia, alertando sobre a natureza estritamente privada da negociação.
- **Justificativa:** Proteger a Universidade de Fortaleza de corresponsabilidade civil em caso de litígios locatícios ou fraudes praticadas por terceiros.
- **Stakeholder Primário:** STK05, STK10, STK01.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Toda publicação categorizada como moradia/acomodação exibe no rodapé aviso institucional padronizado e intransponível: *"A Unifor não intermedeia, não fiscaliza e não se responsabiliza por locações financeiras entre particulares."*
- **Fonte / Origem:** Diretrizes de segurança da proposta ENADE Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**. Reforçado por entrevistas com estudantes.
- **Refinamento pós-entrevistas:** Somente usuários com vínculo verificado (RN02) podem publicar na categoria Moradia, e o perfil do anunciante exibe o selo de verificação. Avaliações de ex-moradores e distância estimada até a universidade ficam como *Could have* (PART-B02, B03, B04, B06).

---

### RF16 - Registro Colaborativo de Equivalências de Disciplinas
- **Descrição Objetiva:** O sistema deve permitir que ex-intercambistas registrem, junto ao relato, as disciplinas cursadas na universidade parceira e a disciplina da Unifor que foi aproveitada, e que candidatos consultem esse histórico filtrando por curso e universidade parceira.
- **Justificativa:** A equivalência de disciplinas, sobretudo as práticas, foi apontada como a informação mais difícil de obter e como motivo principal para usar a plataforma.
- **Stakeholder Primário:** STK02, STK03, STK06.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Ao filtrar "Cinema e Mídias Digitais" e uma universidade parceira, o sistema lista as equivalências registradas, com semestre de aproveitamento e o aviso "Informação colaborativa. A equivalência oficial depende de análise da coordenação do curso."
- **Fonte / Origem:** Entrevistas PART-B01 e PART-B02.
- **Status de Validação:** **Derivado de entrevistas (pendente de validação com coordenações e NEI)**.

---

## 2.1 Requisitos Funcionais incluídos na Sprint 2 (M2)

> **Contexto da mudança (05/11/2026):** na Sprint 2 o grupo definiu a navegação do app em cinco abas (Explorar · Conversas · Unifor · Menu · Perfil), seguindo a identidade visual do Unifor Mobile. A proposta junta recursos de LinkedIn (perfil acadêmico e conexões), WhatsApp (conversas), Instagram/TikTok (posts e reels) e um fórum da cidade. Por isso, alguns itens que estavam fora do escopo na P1 foram repriorizados. A tabela de mudanças está em [`revisao-de-consistencia.md`](revisao-de-consistencia.md).

### Repriorizações
| Requisito | P1 | Sprint 2 | Motivo |
| :--- | :--- | :--- | :--- |
| RF12 — Feed vertical de vídeos curtos | Could have | **Should have** | Virou a aba central "Unifor" (jornal + reels). O conteúdo fica restrito a temas da universidade (RN06) e o protótipo usa vídeo simulado, sem custo de infraestrutura. |
| US16 — Chat privado | Won't have now | **Should have** (RF17) | É a segunda aba do app. Os riscos de assédio apontados na P1 são tratados pelas regras RN11 e RN12. |
| RF13 — Idiomas | PT/EN | PT/EN + **ES (Could have)** | Muitos intercambistas *incoming* vêm da América Latina e da Espanha. RNF08 já previa idiomas novos sem mudar a lógica. |

---

### RF17 - Conversas Privadas e em Grupo (estilo mensageiro)
- **Descrição Objetiva:** O sistema deve permitir conversas de texto 1-para-1 entre usuários conectados e conversas em grupo ligadas às comunidades (RF07), mostrando lista de conversas, quem está online, confirmação de leitura (configurável) e separando os **pedidos de mensagem** de quem ainda não é conexão.
- **Justificativa:** Na P1 os grupos de WhatsApp externos foram apontados como o canal mais usado e o mais desorganizado. Trazer a conversa para dentro do app, com vínculo verificado, reduz golpes e mantém o histórico perto do conteúdo oficial.
- **Stakeholder Primário:** STK01, STK02, STK04.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Dado um usuário A que não é conexão de B, quando A envia a primeira mensagem, então ela aparece para B na aba "Pedidos", e B só pode responder depois de "Aceitar". Toda conversa tem as opções "Denunciar" (RF10) e "Bloquear". Depois de bloquear, A não consegue enviar novas mensagens.
- **Fonte / Origem:** Ideação da equipe na Sprint 2 (rascunho de navegação) e entrevistas PART-B02 e B06 (dispersão em grupos externos).
- **Status de Validação:** **Hipótese da equipe, prototipada** (ver `app/`).

---

### RF18 - Explorar: Guia da Cidade e Fórum de Tópicos em Alta
- **Descrição Objetiva:** O sistema deve ter a aba "Explorar", com: (a) busca textual; (b) categorias (Moradia, Restaurantes, Transporte, Saúde, Lazer e turismo, Documentação, Vida acadêmica, Segurança); (c) guia de lugares com distância estimada até a Unifor, faixa de preço e nota; (d) fórum de tópicos ordenado por relevância ("Em alta"), com respostas e a marcação "Útil"; (e) acesso aos relatos (RF08) e às equivalências (RF16).
- **Justificativa:** O intercambista *incoming* precisa de informação prática sobre Fortaleza (onde morar, comer, como se locomover, como tirar o RNM). Hoje isso fica espalhado em grupos e perfis pessoais.
- **Stakeholder Primário:** STK01, STK02, STK03.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Ao selecionar a categoria "Moradia", só aparecem tópicos e lugares dessa categoria, e cada tópico mostra o aviso do RF15. A lista "Em alta" é ordenada por (votos de "Útil" + 5 × número de respostas). Para criar um tópico em Moradia é preciso ter vínculo verificado (RN02).
- **Fonte / Origem:** Ideação da equipe (aba "lupa" do rascunho) e entrevistas PART-B02, B03 e B04.
- **Status de Validação:** **Hipótese da equipe, prototipada**.

---

### RF19 - Personalização de Aparência
- **Descrição Objetiva:** O sistema deve permitir escolher o modo de tema **Claro**, **Noturno** ou **Automático** (segue o sistema operacional), escolher uma **cor de destaque** entre as cores da paleta Unifor ou uma cor personalizada (seletor livre), ajustar o tamanho do texto e ativar "Reduzir animações".
- **Justificativa:** Conforto visual e acessibilidade (RNF04). Também mantém coerência com o Unifor Mobile, que usa tema escuro por padrão.
- **Stakeholder Primário:** STK01, STK02.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** A mudança de tema ou de cor vale na hora para todas as telas, sem recarregar, e continua salva na próxima sessão. Com uma cor personalizada, botões, abas ativas e destaques usam essa cor, e o contraste do texto sobre o fundo continua ≥ 4,5:1.
- **Fonte / Origem:** Ideação da equipe (aba Menu).
- **Status de Validação:** **Hipótese da equipe, prototipada**.

---

### RF20 - Central de Privacidade e Direitos do Titular (LGPD)
- **Descrição Objetiva:** O sistema deve oferecer, no Menu, uma central para: definir quem vê o perfil (Comunidade Unifor / Somente conexões / Privado); definir quem pode mandar mensagem (Comunidade / Conexões / Ninguém); ligar ou desligar status online, confirmação de leitura e país de origem; dar ou revogar consentimentos específicos (personalizar notícias pelo curso e enviar dados de uso anônimos); **baixar uma cópia dos dados** (portabilidade); ver o **histórico de consentimentos**; **pedir a exclusão da conta**; ver o contato do Encarregado (DPO); e gerenciar contas bloqueadas.
- **Justificativa:** Atende os direitos do titular do Art. 18 da LGPD (acesso, portabilidade, eliminação e revogação de consentimento) e detalha o RNF02, que na P1 era só uma restrição geral.
- **Stakeholder Primário:** STK01, STK02, STK05, STK10.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** (1) Cada mudança de consentimento gera um registro com data e hora no histórico. (2) "Baixar meus dados" gera um arquivo JSON com perfil, preferências, conexões e consentimentos. (3) O pedido de exclusão gera um número de protocolo e informa o prazo de anonimização (até 15 dias), avisando que os logs de auditoria ficam guardados pelo prazo do RNF10. (4) Analytics vem **desligado** por padrão.
- **Fonte / Origem:** Lei nº 13.709/2018, RNF02 e entrevistas PART-B01, B05 e B06.
- **Status de Validação:** **Validado pelo requisito legal, prototipado**.

---

### RF21 - Notícias Segmentadas por Curso no Perfil
- **Descrição Objetiva:** O sistema deve mostrar no Perfil do usuário a seção "Notícias do meu curso", com publicações institucionais marcadas com o curso dele (chegada ou saída de professores, editais específicos, convênios da área). Na aba Unifor deve existir também o filtro "Meu curso".
- **Justificativa:** O estudante recebe muitos comunicados gerais. Filtrar pelo curso aumenta a relevância e o engajamento com o canal oficial.
- **Stakeholder Primário:** STK01, STK02, STK05, STK06.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Um estudante de ADS vê no perfil as notícias marcadas com "Análise e Desenv. de Sistemas" e não vê as marcadas só com outros cursos. Se o consentimento "personalizar notícias pelo curso" (RF20) estiver desligado, a seção mostra o aviso explicando como ativar e não usa o dado do curso.
- **Fonte / Origem:** Ideação da equipe (aba Perfil inspirada no Unifor Mobile).
- **Status de Validação:** **Hipótese da equipe, prototipada**.

---

### RF22 - Conexões Acadêmicas entre Perfis
- **Descrição Objetiva:** O sistema deve permitir enviar pedido de conexão a outro perfil, aceitar ou recusar pedidos, e mostrar no perfil o número de conexões, idiomas com nível de fluência, curso, país de origem e destino, além de uma grade com as publicações da pessoa.
- **Justificativa:** A conexão é o que libera as conversas (RN11) e a visualização de perfis privados, ao mesmo tempo que forma uma rede acadêmica parecida com o LinkedIn.
- **Stakeholder Primário:** STK01, STK02, STK03, STK04.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Ao tocar em "Conectar", o estado muda para "Pendente". Perfis com visibilidade "Privado" mostram para quem não é conexão apenas nome, selo, curso e país.
- **Fonte / Origem:** Ideação da equipe e RF03.
- **Status de Validação:** **Hipótese da equipe, prototipada**.

---

### RF23 - Publicação de Conteúdo Institucional por Equipes de Comunicação
- **Descrição Objetiva:** O sistema deve ter um perfil de acesso "Equipe de Comunicação" (TV Unifor, NEI, coordenações de curso) que pode publicar notícias e reels institucionais com o selo oficial, classificando cada publicação por tipo (Edital, Professores, Eventos, TV Unifor, Internacional) e pelos cursos-alvo.
- **Justificativa:** Permite que a aba Unifor funcione como um jornal da universidade. A proposta prevê contato com a TV Unifor para integrar o conteúdo dela.
- **Stakeholder Primário:** STK07 (Comunicação Institucional, incluindo a TV Unifor), STK05, STK06.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Publicações desse perfil aparecem com o selo "Comunicado Institucional Unifor" e não precisam passar pela fila de moderação. Publicações de estudantes na aba Unifor vão para a fila (RN06).
- **Fonte / Origem:** Ideação da equipe e extensão de RF05 / RN01.
- **Status de Validação:** **Pendente de contato com a TV Unifor e o NEI**.

---

## 3. Requisitos Não Funcionais (RNF)

| ID | Nome do RNF | Categoria | Descrição Objetiva e Critério de Aceitação Verificável | Prioridade | Fonte / Validação |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **RNF01** | **Segurança e Criptografia** | Segurança | Todas as comunicações cliente-servidor devem trafegar exclusivamente sob protocolo criptografado **HTTPS (TLS 1.3)**. Senhas devem ser armazenadas com função de hash adaptativo (ex.: *bcrypt* com fator de custo mínimo 12 ou *Argon2id*). O sistema deve possuir defesas contra vulnerabilidades do OWASP Top 10 (SQL Injection, XSS, CSRF). | **Must have** | Padrões de Engenharia de Software / Validado. |
| **RNF02** | **Conformidade com a LGPD** | Privacidade e Governança | O sistema deve cumprir integralmente a Lei nº 13.709/2018 (LGPD), exigindo consentimento explícito no primeiro acesso, permitindo a anonimização ou exclusão a pedido do titular e mantendo números de telefone pessoal e dados residenciais ocultos por padrão (*Privacy by Default*). | **Must have** | Requisito Legal / Validado pelo Escopo da P1. |
| **RNF03** | **Responsividade e Usabilidade** | Usabilidade | A interface web deve ser 100% responsiva, adaptando-se perfeitamente a resoluções de telas móveis (360px a 480px), tablets (768px a 1024px) e monitores desktop (1280px ou superior), mantendo legibilidade sem barra de rolagem horizontal indesejada. | **Must have** | Diretrizes da disciplina / Validado. |
| **RNF04** | **Acessibilidade Digital** | Acessibilidade | O sistema deve seguir os critérios de conformidade da **WCAG 2.1 nível AA** (*Web Content Accessibility Guidelines*), assegurando contraste mínimo de cores de 4.5:1 para textos padrão, navegação completa por teclado e tags descritivas (*alt text*) em botões e imagens. | **Should have** | Padrões de Inclusão Acadêmica / Validado. |
| **RNF05** | **Desempenho e Tempo de Resposta** | Desempenho | O tempo de carregamento da primeira visualização (*First Contentful Paint*) do feed não deve exceder 2,0 segundos em conexões de banda larga padrão. Consultas à API e buscas de perfis devem responder em até 500ms para 95% das requisições em regime normal de carga discente. | **Should have** | Premissa Técnica Proposta pela Equipe (Pendente de Teste de Carga). |
| **RNF06** | **Disponibilidade e Resiliência** | Disponibilidade | O ambiente de produção acadêmica deve manter índice de disponibilidade operacional mínimo de **99,0%** durante o período letivo regular, suportando rotinas automáticas de backup diário do banco de dados e arquivos de mídia. | **Should have** | Premissa Operacional Proposta pela Equipe. |
| **RNF07** | **Manutenibilidade e Modularidade** | Manutenibilidade | A arquitetura de software deve ser estruturada em camadas bem definidas e desacopladas (Frontend SPA/SSR, Backend RESTful API, Camada de Persistência), com aderência a princípios de código limpo (*Clean Code*) e cobertura de testes automatizados para fluxos críticos de negócio. | **Must have** | Diretrizes de Engenharia de Software / Validado. |
| **RNF08** | **Internacionalização da Arquitetura** | Arquitetura | O código-fonte não deve conter textos de interface codificados diretamente (*hardcoded*). Todas as mensagens, legendas e textos de sistema devem residir em arquivos padronizados de recursos de localização (dicionários JSON i18n), permitindo inclusão de novos idiomas (ex.: Espanhol) sem alteração de lógica. | **Must have** | Escopo Multilíngue da P1 / Validado. |
| **RNF09** | **Integridade e Auditoria Administrativa** | Confiabilidade | Todas as ações de moderação (remoção de posts, suspensão de usuários, encerramento de denúncias) devem gerar registros de log indeléveis contendo: identificador do moderador, identificador do conteúdo, timestamp preciso UTC e justificativa formal. | **Must have** | Governança Institucional / Validado. |
| **RNF10** | **Retenção e Descarte de Registros** | Governança de Dados | Logs de auditoria administrativa de denúncias e segurança devem ser mantidos armazenados de forma segura pelo período mínimo de 6 (seis) meses, após o qual poderão ser arquivados ou expurgados segundo as diretrizes de descarte da instituição. | **Should have** | Diretrizes de Auditoria Acadêmica / Validado. |
| **RNF11** | **Identidade Visual Institucional** | Usabilidade / Marca | A interface deve seguir a linguagem visual do Unifor Mobile: tema escuro como padrão, cartões com cantos arredondados, azul Unifor como cor de destaque, cabeçalho de perfil em azul royal e navegação por barra inferior com 5 abas. A logomarca oficial só pode ser usada com autorização da Comunicação Institucional. | **Must have** | Sprint 2 / Referências: Unifor Mobile, AVA e Unifor Online. |
| **RNF12** | **Tempo Real nas Conversas** | Desempenho | Na operação real, as mensagens de RF17 devem chegar ao destinatário online em até 2 segundos no percentil 95 (WebSocket com *fallback* para *long-polling*). O protótipo da Sprint 2 simula essa troca localmente. | **Should have** | Sprint 2 / Hipótese da equipe (pendente de prova de conceito). |
