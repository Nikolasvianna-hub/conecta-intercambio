# Catálogo de Regras de Negócio - Conecta Intercâmbio

Este documento estabelece as diretrizes normativas, políticas operacionais e restrições estruturais de negócio que regem o comportamento do sistema **Conecta Intercâmbio - Rede Social Acadêmica**, no escopo da Sprint 1 / P1 da disciplina **Requisitos e Modelagem de Sistemas** da Universidade de Fortaleza (Unifor).

> [!NOTE]
> **Distinção Metodológica de Governança:**  
> As regras identificadas como **"Proposta da Equipe de Engenharia (Pendente de Validação Institucional)"** representam políticas formuladas com base em boas práticas acadêmicas e nos documentos de referência (`Propostas_Projetos_Internacionalizacao_ENADE_Unifor.docx`), devendo ser apreciadas e homologadas formalmente pela Assessoria de Relações Internacionais / NEI e pela Assessoria Jurídica da Unifor antes da entrada em ambiente de produção real.

---

## 1. Tabela-Resumo das Regras de Negócio

| ID | Nome da Regra de Negócio | Categoria | Status de Validação | Requisitos Vinculados |
| :---: | :--- | :--- | :--- | :--- |
| **RN01** | Exclusividade de Publicação de Comunicados Oficiais | Governança e Permissões | Validada pelo Escopo da P1 | RF05 |
| **RN02** | Verificação Obrigatória de Vínculo Acadêmico | Segurança e Cadastro | Proposta da Equipe (Pendente de Validação NEI) | RF01, RF02 |
| **RN03** | Critérios de Elegibilidade e Atribuição do Programa de Buddy | Operacional / Extensão | Proposta da Equipe (Pendente de Validação NEI) | RF06 |
| **RN04** | Privacidade por Padrão e Proteção de Dados de Contato | Privacidade e LGPD | Validada pelo Escopo da P1 | RF02, RF03, RNF02 |
| **RN05** | Fluxo de Tratamento de Denúncias e Moderação Protetiva | Moderação e Conduta | Validada pelo Escopo da P1 | RF10, RF11, RNF09 |
| **RN06** | Diretrizes Éticas e Técnicas para Publicação de Mídias/Vídeos | Conteúdo e Mídia | Proposta da Equipe (Pendente de Validação) | RF04, RF12 |
| **RN07** | Confiabilidade e Autenticidade em Relatos de Intercâmbio | Curadoria de Conteúdo | Proposta da Equipe (Pendente de Validação) | RF08 |
| **RN08** | Isenção Institucional e Diretrizes de Dicas de Moradia | Jurídico e Risco | Proposta da Equipe (Pendente de Validação Jurídica) | RF10, RF15 |
| **RN09** | Chancela e Destaque de Eventos Acadêmicos e Culturais | Divulgação e Calendário | Proposta da Equipe (Pendente de Validação NEI) | RF09 |
| **RN10** | Suspensão Cautelar por Reincidência de Infrações | Moderação e Governança | Validada pelo Escopo da P1 | RF10, RF11 |
| **RN11** | Mensagens Privadas Condicionadas a Conexão ou Aceite | Conduta e Segurança | Proposta da Equipe (Sprint 2) | RF17, RF20, RF22 |
| **RN12** | Confidencialidade das Conversas e Acesso Restrito da Moderação | Privacidade e LGPD | Proposta da Equipe (Sprint 2) | RF17, RF11, RNF02 |
| **RN13** | Personalização por Curso Dependente de Consentimento | Privacidade e LGPD | Proposta da Equipe (Sprint 2) | RF20, RF21 |
| **RN14** | Guia da Cidade sem Publicidade Paga | Curadoria de Conteúdo | Proposta da Equipe (Sprint 2) | RF18 |

---

## 2. Detalhamento das Regras de Negócio

### RN01 - Exclusividade de Publicação de Comunicados Oficiais
- **Enunciado:** A publicação, edição e fixação de postagens na seção "Notícias e Comunicados Oficiais" é restrita com exclusividade a usuários com perfil de acesso *Gestor Institucional* formalmente autorizado pela Assessoria de Relações Internacionais (NEI). Nenhum discente ou moderador comunitário possui permissão para publicar diretamente nesse espaço.
- **Justificativa:** Preservar a veracidade e a autoridade dos comunicados da universidade, evitando disseminação de datas falsas de editais, fraudes em convocações ou interpretações errôneas de processos seletivos de mobilidade.
- **Requisitos Relacionados:** RF05, RF11, RNF09.
- **Stakeholders Envolvidos:** STK05 (Assessoria NEI), STK01, STK02, STK10 (Unifor).
- **Fonte:** Ementa pedagógica da disciplina e boas práticas de governança universitária.
- **Status de Validação:** **Validada pelo Escopo da P1**.

---

### RN02 - Verificação Obrigatória de Vínculo Acadêmico
- **Enunciado:** O cadastro de discentes brasileiros (*outgoing* e voluntários) requer a utilização de endereço de e-mail institucional ativo (`@edu.unifor.br`). O cadastro de estudantes internacionais (*incoming*) requer validação por código de matrícula temporária emitido pelo NEI ou validação manual de carta de aceitação (*Letter of Acceptance*) pelo administrador do sistema.
- **Justificativa:** Impedir a criação indiscriminada de perfis anônimos por agentes externos alheios à comunidade universitária, assegurando rastreabilidade disciplinar e segurança aos estudantes locais e estrangeiros.
- **Requisitos Relacionados:** RF01, RF02, RNF01, RNF09.
- **Stakeholders Envolvidos:** STK01, STK02, STK05, STK10.
- **Fonte:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Proposta da Equipe de Engenharia (Pendente de Validação Técnica/Institucional)**.

---

### RN03 - Critérios de Elegibilidade e Atribuição do Programa de Buddy
- **Enunciado:** Para atuar como Buddy voluntário, o discente brasileiro deve: (a) estar regularmente matriculado a partir do 2º semestre da graduação na Unifor; (b) não possuir sanções disciplinares registradas; e (c) declarar domínio instrumental de ao menos um idioma estrangeiro (ou inglês básico). Cada Buddy poderá apadrinhar, no máximo, 2 (dois) estudantes internacionais simultaneamente por semestre letivo, salvo autorização extraordinária da Assessoria NEI.
- **Justificativa:** Garantir qualidade e disponibilidade real de tutoria humanizada aos discentes internacionais, evitando sobrecarga sobre alunos voluntários e prevenindo abandono da tutoria no decorrer do período de acolhimento.
- **Requisitos Relacionados:** RF06, RF02, RF14.
- **Stakeholders Envolvidos:** STK01, STK04 (Voluntários Buddy), STK05 (NEI).
- **Fonte:** Diretrizes do programa de acolhimento discente (Apresentação de Extensão).
- **Status de Validação:** **Proposta da Equipe de Engenharia (Pendente de Homologação pelo NEI)**.

---

### RN04 - Privacidade por Padrão e Proteção de Dados de Contato
- **Enunciado:** Em conformidade com a LGPD, o número de telefone celular pessoal, aplicativo de mensagens privadas (WhatsApp/Telegram), endereço de residência em Fortaleza e documento de identidade/passaporte NÃO podem ser exibidos publicamente no perfil do usuário por padrão (*Privacy by Default*). O compartilhamento desses dados deve decorrer de decisão expressa, bilateral e privada entre os discentes.
- **Complemento pós-entrevistas:** também ficam ocultos por padrão, e fora do perfil público, o e-mail pessoal, o sobrenome completo, a idade, o cargo e a empresa onde trabalha, o histórico de notas, as disciplinas matriculadas e qualquer informação socioeconômica ou de auxílio financeiro (PART-B02 a B06).
- **Justificativa:** Proteger a integridade e a tranquilidade dos estudantes, especialmente intercambistas recém-chegados, mitigando riscos de assédio, golpes, fraudes de locação ou exposição pública indesejada.
- **Requisitos Relacionados:** RF02, RF03, RNF02.
- **Stakeholders Envolvidos:** STK01, STK02, STK05, STK10.
- **Fonte:** Lei nº 13.709/2018 (LGPD) e diretrizes de segurança da informação.
- **Status de Validação:** **Validada pelo Escopo da P1**.

---

### RN05 - Fluxo de Tratamento de Denúncias e Moderação Protetiva
- **Enunciado:** Qualquer conteúdo reportado por 3 (três) ou mais usuários distintos entrará em regime de "Ocultação Preventiva Automática" até que um moderador ou gestor institucional delibere sobre a denúncia em até 48 horas úteis. O autor do conteúdo reportado será notificado do motivo da denúncia sem revelação da identidade dos denunciantes.
- **Justificativa:** Conter a propagação imediata de discursos ofensivos, intolerância cultural, fraudes financeiras ou ataques verbais na plataforma comunitária enquanto a moderação analisa o caso.
- **Requisitos Relacionados:** RF10, RF11, RNF09, RNF10.
- **Stakeholders Envolvidos:** STK01, STK02, STK08 (Moderadores), STK05.
- **Fonte:** Diretrizes de segurança da proposta ENADE Unifor.
- **Status de Validação:** **Validada pelo Escopo da P1**.

---

### RN06 - Diretrizes Éticas e Técnicas para Publicação de Mídias e Vídeos
- **Enunciado:** Todo arquivo de vídeo publicado no Conecta Intercâmbio deve ter duração máxima de 60 (sessenta) segundos, resolução máxima de 1080p e tamanho de arquivo não superior a 50 MB, abordando exclusivamente conteúdos de cunho acadêmico, cultural, vivências universitárias ou dicas de viagem/intercâmbio. É expressamente vedada a veiculação de publicidade comercial, venda de produtos ou pornografia/nudez.
- **Justificativa:** Manter o foco pedagógico e cultural da plataforma, além de viabilizar a sustentabilidade dos custos de armazenamento e largura de banda do servidor acadêmico.
- **Requisitos Relacionados:** RF04, RF12, RNF01, RNF07.
- **Stakeholders Envolvidos:** STK01, STK02, STK08, STK09.
- **Fonte:** Ementa temática e análise de capacidade de infraestrutura.
- **Status de Validação:** **Proposta da Equipe de Engenharia (Pendente de Viabilidade Técnica)**.

---

### RN07 - Confiabilidade e Autenticidade em Relatos de Intercâmbio
- **Enunciado:** Para publicar um relato estruturado de intercâmbio com selo de "Relato Verificado", o usuário deve ter concluído programa formal de mobilidade vinculado à Unifor ou submeter comprovante básico de conclusão de intercâmbio ao administrador da plataforma. Relatos publicados sem comprovação exibirão o aviso "Depoimento Colaborativo Não Verificado".
- **Justificativa:** Assegurar que discentes que estejam escolhendo destinos de mobilidade tenham acesso a informações honestas e referendadas por quem de fato vivenciou a experiência na universidade parceira.
- **Requisitos Relacionados:** RF08, RF02, RF03.
- **Stakeholders Envolvidos:** STK02, STK03 (Ex-Intercambistas), STK05.
- **Fonte:** Proposta Conecta Intercâmbio (ENADE Unifor).
- **Status de Validação:** **Proposta da Equipe de Engenharia (Pendente de Validação NEI)**.

---

### RN08 - Isenção Institucional e Diretrizes de Dicas de Moradia
- **Enunciado:** A plataforma veda expressamente qualquer transação financeira, cobrança de caução, assinatura de contratos de locação ou cobrança de comissões imobiliárias em suas páginas. Toda postagem na categoria de "Moradia e Hospedagem" é de responsabilidade civil exclusiva de seu publicador, contendo de forma indelével a mensagem: *"A Universidade de Fortaleza (Unifor) e a plataforma Conecta Intercâmbio atuam exclusivamente como mural informativo acadêmico, não vistoriando imóveis, não intermediando contratos e não se responsabilizando por acordos financeiros entre partes privadas."*
- **Complemento pós-entrevistas:** apenas usuários com vínculo verificado (RN02) podem publicar anúncios de moradia, e a publicação exibe o selo de verificação do anunciante. A validação por CPF integrada ao Unifor Online e a assinatura de termo via Gov.br, sugeridas nas entrevistas (PART-B03, B06), dependem de integração institucional e ficam para versões futuras.
- **Justificativa:** Mitigar integralmente o risco jurídico da universidade frente a desavenças entre locadores e locatários e alertar os estudantes sobre a necessidade de cautela prévia antes de efetuar adiantamentos financeiros de moradia.
- **Requisitos Relacionados:** RF10, RF15, RNF02.
- **Stakeholders Envolvidos:** STK05, STK10 (Unifor Instituição), STK01.
- **Fonte:** Diretrizes de segurança da proposta ENADE Unifor e orientações de compliance.
- **Status de Validação:** **Proposta da Equipe de Engenharia (Pendente de Apreciação Jurídica Unifor)**.

---

### RN09 - Chancela e Destaque de Eventos Acadêmicos e Culturais
- **Enunciado:** Eventos promovidos pela Assessoria de Relações Internacionais recebem automaticamente a etiqueta de "Evento Institucional Oficial" e são exibidos com prioridade no topo do calendário. Eventos cadastrados por Centros Acadêmicos ou ligas estudantis recebem a etiqueta "Evento Estudantil" e passam por conferência prévia sumária de moderação para garantir que estejam alinhados ao calendário acadêmico.
- **Justificativa:** Evitar sobreposição de eventos concorrentes e manter a clareza para os intercambistas sobre quais atividades contam com apoio formal da instituição.
- **Requisitos Relacionados:** RF09, RF05, RF11.
- **Stakeholders Envolvidos:** STK05, STK06, STK01, STK02.
- **Fonte:** Apresentação de Extensão - Internacionalização Unifor.
- **Status de Validação:** **Proposta da Equipe de Engenharia (Pendente de Validação NEI)**.

---

### RN10 - Suspensão Cautelar por Reincidência de Infrações
- **Enunciado:** O usuário que acumular 3 (três) infrações confirmadas pela moderação (remoção de conteúdos por discurso impróprio, assédio ou desrespeito comprovado) terá sua conta suspensa pelo período de 30 (trinta) dias. Casos de intolerância racial, xenofobia, assédio sexual ou fraudes financeiras ensejarão bloqueio imediato definitivo e encaminhamento do caso à Comissão Disciplinar Discente da Unifor.
- **Justificativa:** Assegurar a manutenção de um espaço acadêmico seguro, acolhedor e civilizado, integrando as medidas disciplinares digitais às instâncias institucionais da universidade.
- **Requisitos Relacionados:** RF10, RF11, RNF09.
- **Stakeholders Envolvidos:** STK08 (Moderação), STK05, STK10.
- **Fonte:** Regimento Geral da Unifor e boas práticas de moderação ética.
- **Status de Validação:** **Validada pelo Escopo da P1**.

---

## 3. Regras de Negócio incluídas na Sprint 2 (M2)

### RN11 - Mensagens Privadas Condicionadas a Conexão ou Aceite
- **Enunciado:** Um usuário só pode conversar livremente com suas conexões (RF22). A mensagem de quem não é conexão vira um **pedido de mensagem**: o destinatário vê a primeira mensagem sem que o remetente saiba se ela foi lida, e só pode responder depois de aceitar. Se o destinatário configurou "Quem pode me mandar mensagem = Ninguém" (RF20), o envio fica bloqueado. Uma conta bloqueada não envia mensagens nem pedidos de conexão para quem a bloqueou.
- **Justificativa:** Reduz o risco de assédio e de golpes de moradia, que foram os motivos para deixar o chat fora do escopo na P1.
- **Requisitos Relacionados:** RF17, RF20, RF22, RF10.
- **Status de Validação:** **Proposta da Equipe (Sprint 2), prototipada**.

---

### RN12 - Confidencialidade das Conversas e Acesso Restrito da Moderação
- **Enunciado:** Moderadores e gestores não têm acesso ao conteúdo das conversas privadas. Quando uma conversa é denunciada (RF10), vão para a fila de moderação somente as mensagens selecionadas pelo denunciante, junto com o contexto imediato (até 5 mensagens antes e 5 depois).
- **Justificativa:** Aplica o princípio da necessidade (Art. 6º, III, LGPD) sem impedir a apuração de abusos.
- **Requisitos Relacionados:** RF17, RF11, RNF02, RNF09.
- **Status de Validação:** **Proposta da Equipe (Sprint 2), pendente de validação jurídica**.

---

### RN13 - Personalização por Curso Dependente de Consentimento
- **Enunciado:** O curso do estudante só pode ser usado para filtrar ou priorizar notícias (RF21) e notificações de curso (RF14) enquanto o consentimento "Personalizar notícias pelo curso" (RF20) estiver ativo. Ao revogar, o efeito é imediato e a revogação fica registrada no histórico de consentimentos.
- **Justificativa:** Usar dados para personalizar conteúdo é uma finalidade diferente da autenticação. Por isso exige base legal própria e pode ser revogado.
- **Requisitos Relacionados:** RF20, RF21, RF14.
- **Status de Validação:** **Proposta da Equipe (Sprint 2), prototipada**.

---

### RN14 - Guia da Cidade sem Publicidade Paga
- **Enunciado:** Lugares do guia (RF18) são sugeridos pela comunidade ou pelo NEI e não podem ser patrocinados nem impulsionados por pagamento. Publicações com link de afiliado, cupom pago ou anúncio comercial devem ser denunciadas como "Spam ou golpe" (RF10).
- **Justificativa:** Mantém a confiabilidade das recomendações e evita conflito com a política de isenção institucional (RN08).
- **Requisitos Relacionados:** RF18, RF10, RN08.
- **Status de Validação:** **Proposta da Equipe (Sprint 2)**.
