# Especificação de Requisitos de Software — Conecta Intercâmbio

Este documento apresenta a especificação detalhada dos **Requisitos Funcionais (RF)** e **Requisitos Não Funcionais (RNF)** do sistema **Conecta Intercâmbio — Rede Social Acadêmica**, em conformidade com as diretrizes da norma ISO/IEC/IEEE 29148 e do programa avaliativo da P1 da disciplina **Requisitos e Modelagem de Sistemas** (Unifor).

---

## 1. Convenções e Metodologia de Classificação

Cada requisito é especificado contendo:
- **ID:** Código identificador único sequencial (`RF01` a `RF15` para funcionais; `RNF01` a `RNF10` para não funcionais).
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

### RF01 — Autenticação e Gestão de Identidade Institucional
- **Descrição Objetiva:** O sistema deve permitir que os usuários se cadastrem e realizem login utilizando credenciais validadas (e-mail institucional da Unifor ou processo de verificação de matrícula/vínculo de intercâmbio), permitindo redefinição segura de senha.
- **Justificativa:** Garantir a autenticidade do ambiente acadêmico, prevenindo criação de perfis falsos (*spambots*) e mantendo um ambiente seguro e auditável.
- **Stakeholder Primário:** STK01, STK02, STK03, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Dado um usuário não autenticado portando e-mail institucional válido `@edu.unifor.br` ou código de intercâmbio autorizado, quando submeter o formulário de cadastro, então o sistema deve enviar um token de confirmação e registrar o usuário com o perfil de acesso correspondente.
- **Fonte / Origem:** Diretrizes gerais da proposta de extensão Unifor e boas práticas de governança.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF02 — Gerenciamento de Perfil Acadêmico e Intercultural
- **Descrição Objetiva:** O sistema deve permitir que cada usuário mantenha um perfil público acadêmico contendo: foto, nome de exibição, biografia, curso/área de estudo, país de origem, país/universidade de destino (quando aplicável), idiomas falados e nível de fluência, e selo de vínculo (Intercambista, Brasileiro, Ex-Intercambista, Buddy, Gestor).
- **Justificativa:** Possibilitar a identificação contextualizada dos membros da comunidade universitária, servindo de base para conexões por afinidade de destino, idioma e interesses.
- **Stakeholder Primário:** STK01, STK02, STK03, STK04.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** O usuário pode editar suas informações a qualquer momento e visualizar o perfil conforme outros o veem. O selo institucional de vínculo é bloqueado para edição manual direta pelo usuário (atribuído exclusivamente pelo sistema/gestor).
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF03 — Descoberta e Busca Avançada de Estudantes
- **Descrição Objetiva:** O sistema deve disponibilizar ferramenta de busca e filtros para localização de perfis cadastrados por: país de origem, país de destino de interesse, curso, idiomas declarados e disponibilidade para mentoria/Buddy.
- **Justificativa:** Facilitar que discentes prestes a viajar encontrem rapidamente veteranos do mesmo destino ou que intercambistas encontrem discentes com interesses comuns.
- **Stakeholder Primário:** STK01, STK02, STK04.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Ao aplicar o filtro "Espanha" e "Engenharia", o sistema deve retornar em menos de 1 segundo uma listagem paginada de estudantes com esse perfil de destino ou origem, respeitando as preferências de privacidade configuradas.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF04 — Feed Acadêmico de Publicações e Interações
- **Descrição Objetiva:** O sistema deve oferecer um feed dinâmico no qual estudantes e gestores possam publicar mensagens de texto (de até 1.000 caracteres) acompanhadas de imagens (até 4 fotos por post), com recursos de curtir, comentar e compartilhar publicações internamente.
- **Justificativa:** Estimular a circulação orgânica de dúvidas, vivências cotidianas, celebrações de chegada e entrosamento na comunidade universitária.
- **Stakeholder Primário:** STK01, STK02, STK03.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Qualquer usuário autenticado pode criar um post, visualizar posts de seus pares em ordem cronológica reversa, inserir comentários em postagens públicas e desfazer curtidas previamente registradas.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF05 — Canal Oficial de Notícias, Editais e Comunicados Institucionais
- **Descrição Objetiva:** O sistema deve fornecer uma seção exclusiva de notícias e comunicados institucionais alimentada unicamente por perfis com permissão de Gestor da Assessoria de Relações Internacionais (NEI), sinalizada visualmente com distintivo oficial.
- **Justificativa:** Eliminar o ruído de desinformação e garantir que prazos de editais, convocações e alertas governamentais tenham fonte confiável e inquestionável.
- **Stakeholder Primário:** STK05, STK01, STK02.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Discentes comuns não visualizam opção de publicar na aba de Notícias Oficiais. Publicações do NEI são marcadas com banner "Comunicado Institucional Unifor" e não podem ser apagadas por moderadores voluntários comuns.
- **Fonte / Origem:** Apresentação de Extensão — Internacionalização Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF06 — Conexão e Gestão do Programa de Buddy
- **Descrição Objetiva:** O sistema deve permitir que estudantes locais se cadastrem como voluntários do Programa de Buddy e que estudantes internacionais solicitem a designação de um Buddy, possibilitando a aceitação do vínculo e a visualização do par designado.
- **Justificativa:** Viabilizar digitalmente a tutoria solidária e o apadrinhamento discente, promovendo a adaptação e o acolhimento seguro no campus da Unifor.
- **Stakeholder Primário:** STK01, STK04, STK05.
- **Prioridade:** **Should have** (Escopo Prioritário da Sprint 1 / P1).
- **Critério de Aceitação:** Um intercambista *incoming* visualiza a opção "Solicitar Buddy". O sistema lista tutores voluntários disponíveis compatíveis por idioma/área ou encaminha a solicitação para atribuição pelo coordenador do programa.
- **Fonte / Origem:** Apresentação de Extensão e Proposta ENADE Unifor.
- **Status de Validação:** **Hipótese de Produto da Equipe (Pendente de Validação com NEI)**.

---

### RF07 — Comunidades Temáticas por Destino e Interesses
- **Descrição Objetiva:** O sistema deve permitir a navegação e participação em grupos/comunidades temáticas organizadas por destino (ex.: "Intercâmbio Portugal", "Intercâmbio França"), por idioma (ex.: "English Conversation Club") ou por interesse acadêmico.
- **Justificativa:** Segmentar as discussões e evitar que o feed principal fique sobrecarregado com dúvidas hiperespecíficas de determinadas cidades ou cursos.
- **Stakeholder Primário:** STK01, STK02, STK03.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** O usuário pode ingressar em uma comunidade pública com um clique, visualizar postagens restritas àquela comunidade e publicar dúvidas direcionadas ao grupo temático.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF08 — Repositório de Relatos Estruturados de Intercâmbio
- **Descrição Objetiva:** O sistema deve disponibilizar um formulário estruturado para que ex-intercambistas submetam avaliações sobre universidades parceiras, abordando: facilidade de matrícula, custo de vida médio, opções de moradia, transporte e choque cultural.
- **Justificativa:** Transformar a experiência dispersa dos egressos em um ativo de conhecimento institucional perene para candidatos a futuras mobilidades.
- **Stakeholder Primário:** STK02, STK03, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Relatos submetidos exibem campos padronizados (Avaliação 1 a 5 estrelas, Prós, Contras e Dicas Práticas) e contêm aviso fixo de que os valores monetários informados são estimativas informais do autor.
- **Fonte / Origem:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF09 — Agenda Integrada de Eventos Acadêmicos e Culturais
- **Descrição Objetiva:** O sistema deve disponibilizar um calendário interativo com eventos voltados à internacionalização (Feira de Intercâmbio, Workshops de Idiomas, Encontros de Acolhimento, Sessões Informativas de Editais), permitindo marcar presença confirmada.
- **Justificativa:** Ampliar a adesão discente aos encontros presenciais e remotos promovidos pela Unifor e por entidades estudantis.
- **Stakeholder Primário:** STK01, STK02, STK05, STK06.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Cada evento exibe título, data/hora, local físico (bloco/sala do campus) ou link remoto, organizador responsável e botão "Tenho Interesse / Comparecerei".
- **Fonte / Origem:** Apresentação de Extensão — Internacionalização Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF10 — Denúncia Colaborativa de Conteúdos e Perfis
- **Descrição Objetiva:** O sistema deve fornecer opção em todos os posts, comentários e perfis para que qualquer usuário reporte violações de conduta, assédio, preconceito, desinformação ou anúncio ilícito de moradia.
- **Justificativa:** Assegurar a integridade ética, o respeito mútuo e a segurança da comunidade acadêmica em conformidade com o código de ética da universidade.
- **Stakeholder Primário:** STK01, STK02, STK08, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Ao clicar no ícone de denúncia, o usuário seleciona o motivo em uma lista padronizada e submete justificativa opcional. O item denunciado é enviado instantaneamente para a fila do painel de moderação.
- **Fonte / Origem:** Diretrizes de segurança da proposta ENADE Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF11 — Painel Administrativo de Moderação e Auditoria
- **Descrição Objetiva:** O sistema deve dispor de interface administrativa restrita para moderadores e gestores visualizarem denúncias pendentes, aprovarem publicações reportadas, removerem conteúdos infratores ou suspenderem preventivamente perfis abusivos.
- **Justificativa:** Garantir controle operacional ágil e suporte à governança institucional da plataforma.
- **Stakeholder Primário:** STK08, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Moderador autenticado acessa a fila de denúncias, visualiza o conteúdo original no contexto, escolhe entre "Rejeitar Denúncia" ou "Remover Conteúdo", registrando justificativa obrigatória registrada em log de auditoria.
- **Fonte / Origem:** Diretrizes de governança da disciplina.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF12 — Feed Vertical de Vídeos Curtos Acadêmicos (*Hipótese de Produto*)
- **Descrição Objetiva:** O sistema deve possibilitar a visualização e publicação em formato vertical (estilo *reels*) de vídeos de curta duração (até 60 segundos) com foco exclusivo em apresentação de cursos, dicas do campus, vida cultural de Fortaleza e momentos do intercâmbio.
- **Justificativa:** Atrair a atenção e o engajamento visual do público universitário jovem habituado a mídias dinâmicas.
- **Stakeholder Primário:** STK01, STK02.
- **Prioridade:** **Could have** (*Não prioritário para o MVP da P1*).
- **Critério de Aceitação:** Se implementado, o reprodutor deve suportar rolagem vertical contínua, botão de mudo rápido e bloqueio automático de uploads com duração superior a 60 segundos ou resolução incompatível.
- **Fonte / Origem:** Ementa temática da proposta Conecta Intercâmbio.
- **Status de Validação:** **Hipótese da Equipe em Análise de Viabilidade Técnica**.

---

### RF13 — Suporte à Interface Multilíngue (i18n)
- **Descrição Objetiva:** O sistema deve permitir que o usuário alterne dinamicamente o idioma da interface gráfica da plataforma entre **Português (pt-BR)** e **Inglês (en-US)** em qualquer tela sem necessidade de recarregar a página ou perder o estado atual.
- **Justificativa:** Atender com dignidade e autonomia os estudantes estrangeiros em fase inicial de aquisição do português.
- **Stakeholder Primário:** STK01, STK05.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Ao clicar no seletor de idioma na barra superior, 100% dos rótulos de navegação, botões de ação e mensagens do sistema mudam instantaneamente para o idioma selecionado.
- **Fonte / Origem:** Ementa da atividade Conecta Intercâmbio.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF14 — Notificações Centrais do Sistema
- **Descrição Objetiva:** O sistema deve emitir notificações visuais (em painel central na interface) para alertar o discente sobre: respostas aos seus comentários, avisos oficiais urgentes da Assessoria NEI, designação de Buddy e interações em suas publicações.
- **Justificativa:** Manter os estudantes engajados e garantir que avisos críticos de intercâmbio não passem despercebidos.
- **Stakeholder Primário:** STK01, STK02, STK04, STK05.
- **Prioridade:** **Should have**.
- **Critério de Aceitação:** Notificações não lidas exibem badge numérico no cabeçalho; ao serem clicadas, redirecionam diretamente para o conteúdo alvo e são marcadas como lidas.
- **Fonte / Origem:** Ementa da proposta Conecta Intercâmbio.
- **Status de Validação:** **Validado pelo Escopo da P1**.

---

### RF15 — Isenção de Responsabilidade sobre Moradia e Hospedagem
- **Descrição Objetiva:** O sistema deve exibir de forma compulsória um termo de ciência e isenção institucional em qualquer publicação ou comunidade que envolva orientações, indicações ou repasses de moradia, alertando sobre a natureza estritamente privada da negociação.
- **Justificativa:** Proteger a Universidade de Fortaleza de corresponsabilidade civil em caso de litígios locatícios ou fraudes praticadas por terceiros.
- **Stakeholder Primário:** STK05, STK10, STK01.
- **Prioridade:** **Must have**.
- **Critério de Aceitação:** Toda publicação categorizada como moradia/acomodação exibe no rodapé aviso institucional padronizado e intransponível: *"A Unifor não intermedeia, não fiscaliza e não se responsabiliza por locações financeiras entre particulares."*
- **Fonte / Origem:** Diretrizes de segurança da proposta ENADE Unifor.
- **Status de Validação:** **Validado pelo Escopo da P1**.

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
