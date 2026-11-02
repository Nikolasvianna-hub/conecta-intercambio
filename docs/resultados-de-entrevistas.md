# Registro e Resultados de Entrevistas de Elicitação - Conecta Intercâmbio

Este documento destina-se ao registro, consolidação analítica e rastreabilidade dos dados coletados durante o processo de entrevistas semiestruturadas com os stakeholders do projeto **Conecta Intercâmbio - Rede Social Acadêmica** (Unifor - Sprint 1 / P1).

---

> [!WARNING]
> ### DECLARAÇÃO DE INTEGRIDADE ACADÊMICA
> **STATUS DA COLETA EM CAMPO:** 🟡 **PARCIAL (1ª rodada registrada, validação pendente)**
>
> Este documento não contém participantes fictícios, percentuais artificiais nem citações apresentadas como reais. A situação de cada registro está descrita com transparência na Seção 0:
> - **Roteiros A e B (estudantes):** uma rodada de entrevista registrada, conduzida por integrante da equipe, com fichas preenchidas em [`fichas_de_registro_entrevista.pdf`](fichas_de_registro_entrevista.pdf).
> - **Roteiro C (Assessoria NEI):** **ainda não houve entrevista com a assessoria**. A ficha correspondente foi preenchida apenas com as hipóteses da equipe, explicitamente marcadas como tal.
> - As frases do campo "Síntese da Equipe" das fichas são **paráfrases da equipe, não citações literais**.
>
> Os requisitos da P1 se apoiam, portanto, em três fontes combinadas: documentos institucionais de referência, hipóteses da equipe (Seção 2) e os indícios da primeira rodada de entrevistas (Seção 4).

---

## 0. Situação da Coleta (Sprint 1)

| Código | Roteiro aplicado | Perfil | Entrevistador | Status | Observação |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **PART-A01** | Roteiro A (Incoming) | Estudante (respostas sobre chegada e integração) | Bruno Vasconcelos Rocha | Coletado | Ficha 1 do PDF |
| **PART-B01** | Roteiro B (Outgoing / Alumni) | Estudante interessado em intercâmbio (não é ex-intercambista) | Bruno Vasconcelos Rocha | Coletado | Ficha 2 do PDF; mesmo participante de PART-A01 |
| **PART-C01** | Roteiro C (Assessoria NEI) | Assessoria de Relações Internacionais / NEI | (a agendar) | **Pendente** | Ficha 3 do PDF contém só hipóteses; nenhuma diretriz institucional obtida |

> [!NOTE]
> Os participantes são identificados apenas por códigos anônimos, conforme as diretrizes éticas do [roteiro de entrevistas](roteiro-de-entrevistas.md) e a LGPD.

---

## 1. Instrumento de Registro

Cada entrevista é registrada em uma ficha padronizada, com os mesmos blocos do [roteiro de entrevistas](roteiro-de-entrevistas.md). Os campos são: código anônimo do participante, entrevistador, respostas por bloco, problemas e dores declarados, necessidades manifestadas, sugestões espontâneas, síntese da equipe, requisitos relacionados, incertezas e status do registro (Pendente de Coleta, Coletado ou Tabulado e Validado por Pares).

As fichas preenchidas da Sprint 1 estão em [`fichas_de_registro_entrevista.pdf`](fichas_de_registro_entrevista.pdf):

| Ficha | Roteiro | Participante | Status |
| :---: | :--- | :---: | :---: |
| 1 | Roteiro A (Incoming) | PART-A01 | Coletado |
| 2 | Roteiro B (Outgoing / Alumni) | PART-B01 | Coletado |
| 3 | Roteiro C (Assessoria NEI) | PART-C01 | Pendente de Coleta (contém apenas as hipóteses a levar à assessoria) |

---

## 2. Hipóteses Preliminares de Trabalho (Derivadas dos Documentos de Referência)

As proposições a seguir representam **hipóteses diagnósticas preliminares** formuladas pela equipe a partir da análise dos documentos `PROJETO DE EXTENSÃO - INTERNACIONALIZAÇÃO - REQUISITOS E MODELAGEM DE SISTEMAS.pptx.pdf` e `Propostas_Projetos_Internacionalizacao_ENADE_Unifor.docx`. Elas servem de guia para a modelagem inicial da P1 e serão rigorosamente testadas e confrontadas durante as entrevistas.

| ID da Hipótese | Enunciado da Hipótese de Trabalho | Fonte Teórica / Documental | Status Epistemológico | Requisitos que Busca Fundamentar |
| :---: | :--- | :--- | :---: | :--- |
| **HIP01** | Estudantes internacionais vivenciam desorientação informativa nas primeiras semanas por dependerem de canais dispersos e não centralizados. | Eixo de Acolhimento do Projeto de Extensão da Unifor | Hipótese Preliminar | RF01, RF02, RF05, RNF04 |
| **HIP02** | Ex-intercambistas possuem alta disposição para orientar novos candidatos, desde que haja um ambiente acadêmico formal e reconhecimento institucional. | Proposta "Conecta Intercâmbio" (ENADE/Unifor) | Hipótese Preliminar | RF08, RF09, RN03 |
| **HIP03** | A oferta de um Programa de Buddy estruturado digitalmente reduz o isolamento cultural do aluno estrangeiro e potencializa a prática de idiomas pelo aluno local. | Apresentação de Extensão - Internacionalização | Hipótese Preliminar | RF06, RN03 |
| **HIP04** | A veiculação de dicas e repasses de moradia exige salvaguardas explícitas de isenção de responsabilidade para evitar responsabilização jurídica da universidade. | Diretrizes de Segurança do documento de propostas ENADE | Hipótese Preliminar | RN08, RF15 |
| **HIP05** | Publicações institucionais (editais de bolsas e prazos de intercâmbio) devem ser visualmente destacadas e restritas a perfis autorizados pelo setor responsável. | Diretrizes de Governança Institucional | Hipótese Preliminar | RF05, RN01, RNF08 |
| **HIP06** | A implementação de um feed vertical de vídeos curtos pode aumentar o engajamento jovem, porém apresenta alto custo de infraestrutura de armazenamento e moderação para o MVP da P1. | Ementa da Proposta Conecta Intercâmbio | Hipótese Técnica em Análise | RF12 (Pendente de Viabilidade) |

---

## 3. Matriz de Rastreabilidade Preliminar: Hipóteses x Requisitos

A tabela a seguir demonstra a consistência lógica entre o que a equipe formulou como hipótese de elicitação e os requisitos especificados para a Sprint 1:

| ID Hipótese | Necessidade Subjacente | Requisito Funcional | Regra de Negócio | Status de Rastreabilidade |
| :---: | :--- | :--- | :--- | :--- |
| **HIP01** | Centralização de orientações práticas e perfis acadêmicos. | RF01, RF02, RF07 | RN02, RN04 | ⏳ Fundamentado em Hipótese (Pendente de Validação Empírica) |
| **HIP02** | Criação de repositório de relatos e dicas por universidade/destino. | RF08 | RN07 | ⏳ Fundamentado em Hipótese (Pendente de Validação Empírica) |
| **HIP03** | Conexão voluntária entre estudante internacional e discente local. | RF06 | RN03 | ⏳ Fundamentado em Hipótese (Pendente de Validação Empírica) |
| **HIP04** | Proteção jurídica e moderação de anúncios comunitários de moradia. | RF10, RF11, RF15 | RN05, RN08 | ⏳ Fundamentado em Hipótese (Pendente de Validação Institucional) |
| **HIP05** | Separação entre comunicados institucionais oficiais e posts sociais. | RF05 | RN01 | ⏳ Fundamentado em Hipótese (Pendente de Validação Institucional) |
| **HIP06** | Avaliação do custo-benefício de streaming de vídeo no MVP. | RF12 | RN06 | ⏳ Em Análise Técnica (Não prioritário no MVP) |

---

## 4. Consolidação da 1ª Rodada de Entrevistas (PART-A01 / PART-B01)

Síntese das fichas registradas em [`fichas_de_registro_entrevista.pdf`](fichas_de_registro_entrevista.pdf). Os itens abaixo resumem o que foi declarado pelo participante; não são generalizações estatísticas.

### 4.1. Achados por tema

| Tema | O que o participante relatou | Hipótese afetada | Efeito nos requisitos |
| :--- | :--- | :---: | :--- |
| **Dispersão de informação** | Usa e-mail institucional, portal do aluno, WhatsApp e Instagram; comunicados importantes "se perdem" entre conversas. Cursos e calendário são fáceis de achar; custo de vida, bairros e transporte não. | HIP01 | **Reforça** RF05 (canal oficial destacado) e RF14 (notificações). Sugere conteúdo de "guia de chegada" a avaliar com o NEI. |
| **Chegada e moradia** | Maiores incertezas: moradia, deslocamento e matrícula. Resolveu com dicas de colegas e aplicativos de mapa. | HIP01, HIP04 | **Reforça** RF07 (comunidades/dúvidas por tema) e RF15/RN08 (avisos sobre moradia). |
| **Apoio por pares (Buddy)** | Recebeu ajuda informal de um colega; considera o Buddy uma boa ideia para dúvidas do dia a dia e apresentação do campus. Como estudante local, só seria Buddy com carga pequena e reconhecimento (horas de extensão, certificado, orientação). | HIP03 | **Reforça** RF06. Indica incluir em RN03 limite de carga do voluntário (já previsto: até 2 apadrinhados) e investigar reconhecimento em horas com o NEI. |
| **Relatos de ex-intercambistas** | Ainda não conversou com quem foi aos destinos de interesse; relato estruturado seria útil, sobretudo custo real de vida, equivalência de disciplinas e moradia. | HIP02 | **Reforça** RF08 e RF03 (busca por destino). Sugere avaliar o campo "equivalência de disciplinas" no formulário de relato. |
| **Privacidade e segurança** | Receio de golpes e exposição de dados; prefere não deixar públicos telefone, endereço, documentos e rotina. | HIP04 | **Confirma** RN04 (privacidade por padrão) e RNF02 (LGPD). |
| **Formatos de conteúdo** | Essenciais: avisos oficiais, guia de chegada, contato com Buddy, dúvidas por categoria, guias passo a passo. Vídeos curtos: "dispensável" ou apenas complemento. | HIP06 | **Reforça** a decisão de manter RF12 (vídeos curtos) como *Could have*, fora do MVP. |
| **Barreiras de adoção** | Deixaria de usar se o app fosse lento, desatualizado, com excesso de notificações ou com pouca gente ativa. Usaria se houvesse informação confiável, busca por destino e relatos verificados. | - | **Reforça** RNF05 (desempenho), RN07 (relato verificado) e aponta necessidade de configurar a frequência de notificações (refinamento futuro de RF14). |

### 4.2. Sugestões espontâneas registradas
- Checklist para as primeiras semanas do intercambista.
- Perguntas organizadas por tema.
- Modelo padronizado de relato.
- Reconhecimento em horas complementares/extensão para voluntários e autores de relatos.

### 4.3. Limitações desta rodada
1. **Amostra mínima:** um único participante respondeu aos roteiros A e B; os achados são indícios qualitativos, não validação.
2. **Perfil incoming a confirmar:** as fichas indicam a necessidade de repetir o Roteiro A com intercambistas estrangeiros efetivamente matriculados na Unifor.
3. **NEI não entrevistado:** RN01, RN02, RN03, RN05 e RN08 continuam como propostas da equipe até a reunião com a assessoria.
4. **Sínteses parafraseadas:** as frases de síntese das fichas foram redigidas pela equipe a partir das respostas e não devem ser citadas como falas literais.

### 4.4. Próximas ações de elicitação (Sprint 2)
- Aplicar o Roteiro A com pelo menos 2 intercambistas *incoming* e o Roteiro B com pelo menos 2 ex-intercambistas.
- Agendar a entrevista do Roteiro C com a Assessoria de Relações Internacionais / NEI para validar regras de negócio e o texto do aviso de moradia.
- Complementar a amostra com questionário on-line curto para estudantes interessados em mobilidade.
