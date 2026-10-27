# Documento de Visão — Conecta Intercâmbio

**Rede Social Acadêmica e de Integração Internacional**  
**Universidade de Fortaleza (Unifor)**  
**Centro de Ciências Tecnológicas (CCT)**  
**Disciplina:** Requisitos e Modelagem de Sistemas  
**Ciclo de Entrega:** Avaliação P1 — Sprint 1 (Milestone M1) | Período: 20/10/2026 a 02/11/2026  
**Eixo Temático de Extensão:** Internacionalização Universitária  

---

## 1. Identificação do Projeto

- **Nome do Projeto:** Conecta Intercâmbio — Rede Social Acadêmica.
- **Natureza do Sistema:** Plataforma Web responsiva de integração acadêmica, social e informativa para mobilidade internacional universitária.
- **Equipe de Engenharia de Requisitos:** Grupo de Discentes de Engenharia de Software / Ciência da Computação (Unifor).
- **Stakeholder Institucional Principal:** Assessoria de Relações Internacionais / Núcleo de Internacionalização (NEI) da Unifor.
- **Avaliador da Disciplina:** Prof. Marcelo Bezerra (`marcelobezerra-dotcom`).

---

## 2. Contextualização Acadêmica e Institucional

A internacionalização no ensino superior contemporâneo transcende a mera celebração de acordos bilaterais formais entre instituições de diferentes nações; ela demanda um ecossistema articulado capaz de propiciar acolhimento humanizado, engajamento intercultural e suporte continuado ao discente. No âmbito da **Universidade de Fortaleza (Unifor)**, as diretrizes de extensão curricular e os indicativos de formação global (alinhados às competências do ENADE) apontam para a necessidade de estreitar laços entre o corpo discente local, os estudantes estrangeiros em intercâmbio e os egressos de programas de mobilidade.

O projeto **Conecta Intercâmbio** é desenvolvido como artefato central da disciplina **Requisitos e Modelagem de Sistemas**, cumprindo a etapa da **Sprint 1 (Milestone M1)** da avaliação P1. Seu propósito nesta fase é formular um arcabouço estruturado de engenharia de requisitos — compreendendo visão de produto, mapeamento de stakeholders, protocolos de entrevista, modelagem de requisitos funcionais e não funcionais, regras de negócio e diagramas UML fundamentais —, estabelecendo bases sólidas para a evolução sustentável do sistema sem antecipar prematuramente detalhes de implementação física.

---

## 3. Descrição do Problema Investigado

A mobilidade acadêmica envolve desafios multidimensionais que se estendem antes, durante e após o período de intercâmbio. A equipe identificou, em caráter preliminar de investigação, que os atores envolvidos na internacionalização universitária vivenciam lacunas de comunicação, dispersão informativa e barreiras de entrosamento social.

### Situação Atual e Dificuldades a Serem Verificadas

> [!NOTE]
> **Ressalva Metodológica de Engenharia de Requisitos:**  
> As dificuldades descritas a seguir representam **hipóteses diagnósticas de partida**, originadas das diretrizes propostas na ementa da atividade e em relatos preliminares de domínio. Elas **não devem ser tomadas como fatos estatisticamente consolidados** até que o processo sistemático de entrevistas e validações com discentes e o setor de relações internacionais seja integralmente concluído.

1. **Dispersão e Fragmentação de Canais Informativos:**  
   Informações sobre editais de mobilidade, documentação de visto, seguro-saúde internacional, convalidação de créditos, moradia e acolhimento encontram-se frequentemente dispersas em murais físicos, e-mails pontuais, arquivos em formato PDF anexados a portais institucionais e grupos informais e voláteis de aplicativos de mensagens instantâneas (como WhatsApp ou Telegram).
2. **Desafio de Adaptação Cultural e Isolamento Inicial de Estudantes Internacionais (*Incoming*):**  
   Estudantes estrangeiros que chegam à cidade de Fortaleza relatam potencial sensação de isolamento nas primeiras semanas decorrente de barreiras linguísticas, desconhecimento da geografia do campus, complexidades burocráticas locais e ausência de pontes diretas com estudantes locais dispostos a orientá-los.
3. **Subaproveitamento da Bagagem Experiencial dos Ex-Intercambistas (*Alumni*):**  
   Estudantes brasileiros que regressam de intercâmbios acumulam repertório prático relevante (gestão financeira, escolha de acomodação, rotinas acadêmicas no exterior, resolução de imprevistos), porém não dispõem de um ambiente acadêmico estruturado para documentar e compartilhar essas vivências com candidatos a futuros editais.
4. **Assimetria de Confiabilidade em Informações Informais de Moradia e Serviços:**  
   A circulação não moderada de ofertas de locação e repasses de moradia em redes abertas pode expor estudantes a situações de vulnerabilidade, fraudes ou desinformação, justificando a necessidade de diretrizes institucionais claras sobre avisos de responsabilidade.
5. **Dificuldade de Engajamento e Descoberta de Parceiros para Prática de Idiomas:**  
   Embora exista demanda recíproca entre alunos locais (desejosos de aperfeiçoar inglês, espanhol, francês, etc.) e alunos estrangeiros (interessados em dominar o português e a cultura cearense/brasileira), faltam mecanismos formais de aproximação orientada e voluntária.

---

## 4. Justificativa do Projeto

A concepção do **Conecta Intercâmbio** justifica-se tanto sob a ótica da experiência do estudante quanto sob a perspectiva da gestão universitária. Proporcionar uma plataforma institucional e comunitária dedicada à internacionalização fortalece o pertencimento acadêmico, amplia o alcance dos programas de mobilidade, mitiga taxas de evasão ou desistência de intercâmbios e consolida a reputação da Unifor como polo receptivo e cosmopolita de educação superior.

Diferente de redes sociais comerciais e genéricas (como Instagram, Facebook ou LinkedIn), o Conecta Intercâmbio é concebido com foco estrito na **jornada da mobilidade acadêmica**. Seus pilares não visam à retenção algorítmica de atenção orientada à publicidade comercial, mas sim à utilidade pública institucional, à colaboração solidária orientada a pares, à verificação de vínculo acadêmico e à mediação ética do ambiente de convivência.

---

## 5. Visão Geral da Solução Proposta

O **Conecta Intercâmbio** é uma aplicação web responsiva projetada para atuar como o ponto central de conexão, orientação e convivência da comunidade universitária internacionalizada da Unifor.

A solução estrutura-se em quatro eixos funcionais complementares:

```
+-----------------------------------------------------------------------------------+
|                        CONECTA INTERCÂMBIO — EIXOS DA SOLUÇÃO                     |
+-----------------------------------------------------------------------------------+
|  1. COMUNICAÇÃO OFICIAL     2. SOCIAL & COMUNIDADES    3. PROGRAMA DE BUDDY       |
|  - Notícias e Editais NEI   - Feed acadêmico moderado  - Cadastro de mentores     |
|  - Agenda de Eventos        - Grupos por país/destino  - Solicitação de apadrinh. |
|  - Guias Práticos Oficiais  - Troca de idiomas         - Match orientativo        |
+-----------------------------------------------------------------------------------+
|               4. GOVERNANÇA, SEGURANÇA E MODERAÇÃO INSTITUCIONAL                  |
|  - Gestão de denúncias       - Verificação de vínculo   - Painel administrativo   |
|  - Termos de uso e LGPD      - Moderação ética          - Relatórios de engajamento|
+-----------------------------------------------------------------------------------+
```

### Diferenciais em Relação a Redes Sociais Genéricas

| Dimensão | Redes Sociais Genéricas (Instagram, WhatsApp, LinkedIn) | Conecta Intercâmbio (Rede Social Acadêmica) |
| :--- | :--- | :--- |
| **Finalidade Central** | Entretenimento amplo, networking corporativo genérico ou mensagens instantâneas. | Apoio à mobilidade acadêmica, acolhimento intercultural e integração comunitária. |
| **Verificação de Identidade** | Aberta ao público irrestrito; suscetível a perfis falsos (*bots*). | Autenticação vinculada ao domínio institucional e perfil com histórico de mobilidade. |
| **Arquitetura de Informação** | Feed orientado a engajamento comercial e monetização por anúncios. | Organização temática por país, destino de intercâmbio, idioma e editais oficiais. |
| **Governança e Moderação** | Algoritmos opacos de moderação externa e ausência de contato local. | Equipe de moderação e assessoria internacional da própria universidade. |
| **Privacidade e Proteção de Dados** | Monetização intensiva de metadados para fins publicitários. | Conformidade com a LGPD, foco educacional e preservação de dados institucionais. |

---

## 6. Objetivos do Projeto

### Objetivo Geral
Especificar, modelar e projetar a arquitetura de requisitos de uma plataforma digital colaborativa que centralize e potencialize a integração acadêmica, social e cultural entre estudantes brasileiros, estudantes internacionais, ex-intercambistas e o setor de relações internacionais da Unifor.

### Objetivos Específicos
1. Levantar e documentar os requisitos funcionais, não funcionais e regras de negócio essenciais para o fluxo de mobilidade acadêmica (*incoming* e *outgoing*).
2. Estruturar instrumentos de elicitação empírica (roteiros de entrevista neutros e abertos) direcionados aos diferentes perfis de stakeholders.
3. Projetar os modelos visuais da arquitetura de software utilizando notação UML padronizada (Casos de Uso, Componentes e Implantação).
4. Estabelecer mecanismos de governança digital, conformidade com a LGPD e critérios institucionais de segurança e moderação de conteúdo comunitário.
5. Priorizar o backlog de desenvolvimento por meio do framework MoSCoW, delimitando com precisão o escopo do MVP viável para a disciplina.

---

## 7. Público-Alvo e Benefícios Esperados

| Segmento de Público | Perfil Resumido | Benefícios Primários Esperados |
| :--- | :--- | :--- |
| **Estudantes Internacionais (*Incoming*)** | Discentes estrangeiros em mobilidade na Unifor. | Acolhimento ágil, acesso simplificado a guias de integração, conexão imediata com Buddies locais e suporte na barreira do idioma. |
| **Estudantes Brasileiros (*Outgoing*)** | Alunos da Unifor interessados ou inscritos em intercâmbio. | Acesso a relatos autênticos de quem já viajou, esclarecimento de dúvidas pontuais de rotina no país de destino e rede de apoio. |
| **Ex-Intercambistas (*Alumni*)** | Alunos ou egressos que já concluíram intercâmbio. | Espaço formal de valorização de sua bagagem internacional, oportunidade de mentoria e manutenção de laços globais. |
| **Estudantes Voluntários (Candidatos a Buddy)** | Alunos locais com vocação para tutoria intercultural. | Prática de línguas estrangeiras, desenvolvimento de *soft skills* (liderança, empatia) e pontuação de horas complementares de extensão. |
| **Equipe Institucional (Assessoria NEI / Relações Internacionais)** | Gestores e analistas da cooperação internacional da Unifor. | Canal oficial direto e unificado para avisos, redução de atendimentos repetitivos via balcão e monitoramento da adaptação discente. |

---

## 8. Escopo do Projeto

### 8.1. Funcionalidades Previstas para o MVP (Sprint 1 / P1)
O Produto Mínimo Viável foca nos serviços essenciais de autenticação, perfil acadêmico, feed institucional/comunitário e estrutura de moderação:
- **Gestão de Identidade:** Cadastro e login com autenticação institucional, suporte inicial multilíngue (Português e Inglês) e exibição do tipo de vínculo (Intercambista, Brasileiro, Ex-intercambista, Buddy, Gestor).
- **Perfis de Usuário:** Configuração de biografia, curso, país de origem/destino, idiomas falados e histórico de mobilidade.
- **Feed e Comunidades Temáticas:** Publicação de postagens em texto com fotos, comentários, curtidas e categorização básica por comunidade/destino.
- **Canal de Notícias e Editais Oficiais:** Área reservada para comunicados oficiais publicados com exclusividade por perfis institucionais autorizados.
- **Relatos Estruturados de Intercâmbio:** Módulo básico para submissão e consulta de avaliações e dicas sobre universidades e cidades conveniadas.
- **Mecanismos de Segurança:** Ferramenta de denúncia de publicações inadequadas e painel de moderação para administradores.

### 8.2. Funcionalidades Fora do Escopo da P1 (Horizontes Futuros)
As seguintes funcionalidades foram identificadas nas discussões de produto, mas são **explicitamente excluídas do escopo da P1** para assegurar a viabilidade técnica e a maturidade metodológica da modelagem:
- Chat de mensagens instantâneas privadas ponta-a-ponta em tempo real (adiado devido à complexidade de infraestrutura de WebSockets e privacidade).
- Feed vertical de vídeos curtos (*reels/shorts*) com infraestrutura de transcodificação e streaming de vídeo de alto consumo de banda (mantido como hipótese avançada).
- Algoritmo automatizado de correspondência inteligente (*matching*) com inteligência artificial para o Programa de Buddy.
- Módulo comercial de intermediação financeira ou pagamento de reservas de moradia estudantil.
- Tradução dinâmica em tempo real por modelos generativos de IA integrados à API.

---

## 9. Restrições, Premissas e Dependências

### 9.1. Restrições
- **Restrição Acadêmica:** O projeto deve ser desenvolvido e modelado estritamente de acordo com o cronograma e os padrões avaliativos da disciplina Requisitos e Modelagem de Sistemas (Unifor), respeitando a entrega da P1 em 02/11/2026.
- **Restrição Tecnológica:** A arquitetura do sistema deve adotar tecnologias web abertas e escaláveis, compatíveis com os ambientes computacionais da universidade e sem imposição prematura de infraestruturas onerosas.
- **Restrição Legal:** O sistema deve operar em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei 13.709/2018), resguardando informações de contato e a privacidade dos estudantes estrangeiros.

### 9.2. Premissas
- A comunidade acadêmica da Unifor possui conectividade regular à internet por meio de computadores pessoais e smartphones.
- A equipe institucional de relações internacionais demonstrará interesse na validação dos requisitos e regras de negócio durante o ciclo avaliativo.
- Estudantes voluntários e ex-intercambistas demonstrarão disposição em alimentar a plataforma de maneira colaborativa e ética.

### 9.3. Dependências Externas
- Validação formal das diretrizes de publicação oficial junto à Assessoria de Relações Internacionais da Unifor.
- Disponibilidade de interface de autenticação unificada (Single Sign-On — SSO) ou validação de e-mails institucionais `@edu.unifor.br`.
- Autorização institucional para utilização da identidade visual e marca da Universidade de Fortaleza no protótipo acadêmico.

---

## 10. Riscos Iniciais e Medidas Mitigatórias

| ID | Risco Identificado | Probabilidade | Impacto | Estratégia de Mitigação |
| :--- | :--- | :---: | :---: | :--- |
| **RSK01** | Baixa adesão inicial de ex-intercambistas para alimentar relatos. | Média | Alto | Propor incentivos institucionais acadêmicos (horas complementares de extensão) e simplificar o formulário de relato. |
| **RSK02** | Veiculação de conteúdo inadequado ou desinformação sobre moradia. | Média | Alto | Implementação obrigatória de regras de denúncia (RN05), moderação rápida e termo explícito de isenção institucional (RN08). |
| **RSK03** | Dificuldade de agendamento de entrevistas com gestores da internacionalização antes da data-limite da P1. | Alta | Médio | Elaborar roteiro estruturado com perguntas neutras, registrar hipóteses documentadas e manter campos de resultado preparados para atualização contínua. |
| **RSK04** | Complexidade excessiva no escopo preliminar prejudicar a qualidade da modelagem UML. | Média | Alto | Aplicação rigorosa da técnica MoSCoW, delimitando o MVP ao essencial e movendo itens complexos (ex: streaming de vídeo) para versões futuras. |
| **RSK05** | Vazamento acidental ou exposição indevida de dados de contato de intercambistas vulneráveis. | Baixa | Crítico | Aplicação das regras de negócio de privacidade de perfis (RN04) e criptografia de credenciais. |

---

## 11. Critérios Preliminares de Sucesso

1. **Rastreabilidade Integral:** 100% dos requisitos funcionais do MVP rastreados até seus respectivos stakeholders, regras de negócio e histórias de usuário.
2. **Consistência da Modelagem UML:** Diagramas de Casos de Uso, Componentes e Implantação que reflitam fielmente as especificações textuais sem ambiguidades estruturais.
3. **Clareza Metodológica:** Distinção explícita entre funcionalidades confirmadas em referências, hipóteses de trabalho da equipe e itens dependentes de elicitação em campo.
4. **Viabilidade Operacional:** Aceitação conceitual do modelo pelos stakeholders acadêmicos como instrumento viável de extensão universitária.

---

## 12. Questões em Aberto e Próximos Passos de Investigação

- Qual é o nível de autonomia que a Assessoria de Relações Internacionais concederá para que centros acadêmicos ou estudantes divulguem eventos no calendário oficial?
- Como será operacionalizado tecnicamente o vínculo de estudantes intercambistas *incoming* que ainda não tenham gerado matrícula ativa no sistema Unifor Online?
- O programa de Buddy contará com certificação formal emitida pela universidade ou funcionará prioritariamente sob tutela comunitária e voluntária?
- Quais são os limites institucionais de responsabilidade civil em relação a dicas de repasse de moradia compartilhadas no fórum de estudantes?

---

## 13. Referências Consultadas

1. **Materiais de Referência da Disciplina (Unifor):**
   - UNIVERSIDADE DE FORTALEZA. *Projeto de Extensão — Internacionalização — Requisitos e Modelagem de Sistemas*. Apresentação institucional de diretrizes pedagógicas da disciplina.
   - UNIVERSIDADE DE FORTALEZA. *Propostas de Projetos de Internacionalização — ENADE Unifor*. Documento orientador de temas aplicados de engenharia de requisitos.
   - *Nota de Registro Metodológico:* Como os arquivos originais em formato binário (.pptx.pdf e .docx) são disponibilizados via ambiente virtual da instituição e seu conteúdo direto de diretrizes foi incorporado ao escopo da atividade, suas prescrições sobre a rede social Conecta Intercâmbio, comunidades por destino, relatos de hospedagem e programa de Buddy foram integralmente mapeadas e referenciadas.
2. **Normas e Literatura Especializada em Engenharia de Software:**
   - ISO/IEC/IEEE 29148:2018. *Systems and software engineering — Life cycle processes — Requirements engineering*. IEEE, 2018.
   - SOMMERVILLE, Ian. *Engenharia de Software*. 10. ed. São Paulo: Pearson Education do Brasil, 2019.
   - PRESSMAN, Roger S.; MAXIM, Bruce R. *Engenharia de Software: Uma Abordagem Profissional*. 9. ed. Porto Alegre: AMGH, 2021.
   - OBJECT MANAGEMENT GROUP (OMG). *Unified Modeling Language (OMG UML) Specification, Version 2.5.1*. OMG Document formal/2017-12-05, 2017.
   - BRASIL. *Lei nº 13.709, de 14 de agosto de 2018*. Dispõe sobre a proteção de dados pessoais (LGPD). Brasília, DF: Presidência da República, 2018.
