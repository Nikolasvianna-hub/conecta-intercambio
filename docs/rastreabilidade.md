# Matriz de Rastreabilidade Bidirecional — Conecta Intercâmbio

Este documento estabelece a rastreabilidade completa entre as necessidades de negócio identificadas, os stakeholders de origem, os requisitos funcionais e não funcionais, as regras de negócio, as histórias de usuário do backlog e os casos de uso da modelagem UML do projeto **Conecta Intercâmbio — Rede Social Acadêmica** (Unifor — Sprint 1 / P1).

> [!NOTE]
> **Rastreabilidade Transparente e Integridade Epistemológica:**  
> Fontes rotuladas como *"Pendente de Validação em Entrevista"* indicam requisitos derivados de hipóteses e diretrizes acadêmicas que aguardam confirmação empírica durante a execução das entrevistas com discentes e gestores da Unifor.

---

## 1. Matriz Principal de Rastreabilidade: Necessidade → Requisito → Modelo

| ID Nec. | Necessidade / Problema Investigado | Stakeholders | Fonte Primária | Requisito(s) Vinculado(s) | Regra de Negócio | História de Usuário (Backlog) | Caso de Uso UML (UC) | Status de Validação |
| :---: | :--- | :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **NEC01** | Garantir que o ambiente da plataforma seja exclusivo, seguro e autêntico para a comunidade acadêmica. | STK01, STK02, STK05, STK10 | Ementa da Disciplina / Segurança | RF01, RNF01, RNF02 | RN02, RN04 | US01 | UC01 — Autenticar Usuário | **Validado pelo Escopo da P1** |
| **NEC02** | Facilitar a identificação contextualizada de discentes por país de origem, destino de intercâmbio e idioma. | STK01, STK02, STK03, STK04 | Proposta Conecta Intercâmbio (ENADE) | RF02, RF03, RNF03 | RN04 | US02, US05 | UC02 — Gerenciar Perfil Acadêmico<br>UC03 — Buscar Estudantes e Relatos | **Validado pelo Escopo da P1** |
| **NEC03** | Permitir a circulação de vivências cotidianas, dúvidas práticas e acolhimento através de postagens e interações. | STK01, STK02, STK03 | Proposta Conecta Intercâmbio (ENADE) | RF04, RNF03, RNF05 | RN06 | US04 | UC04 — Publicar no Feed Acadêmico<br>UC05 — Interagir com Publicações | **Validado pelo Escopo da P1** |
| **NEC04** | Centralizar notícias, prazos de bolsas e editais de mobilidade internacional com autoridade institucional única. | STK01, STK02, STK05 | Apresentação de Extensão — Internacionalização | RF05, RNF09 | RN01 | US07 | UC06 — Consultar Notícias e Editais<br>UC12 — Publicar Comunicado Institucional | **Validado pelo Escopo da P1** |
| **NEC05** | Oferecer apoio individualizado de alunos veteranos locais para guiar intercambistas recém-chegados. | STK01, STK04, STK05 | Apresentação de Extensão / Hipótese HIP03 | RF06, RF14 | RN03 | US09, US10 | UC07 — Solicitar Vínculo de Buddy<br>UC08 — Gerenciar Programa de Buddy | ⏳ **Hipótese da Equipe (Pendente de Validação NEI)** |
| **NEC06** | Segmentar discussões e interesses de intercâmbio por países ou idiomas sem poluir o feed geral. | STK01, STK02, STK03 | Proposta Conecta Intercâmbio (ENADE) | RF07 | RN06 | US06 | UC09 — Participar de Comunidade Temática | **Validado pelo Escopo da P1** |
| **NEC07** | Documentar a inteligência prática de quem já viajou para orientar candidatos sobre custo de vida e moradia. | STK02, STK03, STK05 | Proposta Conecta Intercâmbio / Hipótese HIP02 | RF08 | RN07 | US11 | UC10 — Submeter Relato de Intercâmbio<br>UC03 — Buscar Estudantes e Relatos | ⏳ **Hipótese da Equipe (Pendente de Validação)** |
| **NEC08** | Divulgar eventos de recepção, feiras de intercâmbio e encontros culturais no calendário da universidade. | STK01, STK02, STK05, STK06 | Apresentação de Extensão | RF09 | RN09 | US08 | UC11 — Consultar Agenda de Eventos | **Validado pelo Escopo da P1** |
| **NEC09** | Proteger a comunidade contra discursos de ódio, assédio, desinformação e golpes de falsos aluguéis. | STK01, STK02, STK08, STK05 | Diretrizes de Governança / LGPD | RF10, RF11, RNF09, RNF10 | RN05, RN10 | US12, US13 | UC13 — Denunciar Conteúdo/Perfil<br>UC14 — Moderar Conteúdos e Denúncias | **Validado pelo Escopo da P1** |
| **NEC10** | Permitir o uso autônomo da plataforma por intercambistas estrangeiros que ainda não dominam a língua portuguesa. | STK01, STK05 | Ementa Pedagógica da Disciplina | RF13, RNF08 | RN04 | US03 | Transversal a todos os Casos de Uso | **Validado pelo Escopo da P1** |
| **NEC11** | Proteger a Universidade de Fortaleza de litígios jurídicos e indenizações em virtude de negociações de moradia. | STK05, STK10 | Diretrizes de Risco / Hipótese HIP04 | RF15, RNF02 | RN08 | US14 | Regra transversal em UC04, UC09 e UC10 | ⏳ **Pendente de Homologação Jurídica** |

---

## 2. Rastreabilidade Reversa: Requisitos Não Funcionais x Mecanismos Arquiteturais

A tabela abaixo demonstra como os atributos de qualidade exigidos pelos RNFs são atendidos nos componentes e na infraestrutura modelada:

| ID RNF | Categoria de Qualidade | Componente de Software Responsável | Elemento de Implantação / Infraestrutura | Métrica de Verificação |
| :---: | :--- | :--- | :--- | :--- |
| **RNF01** | Segurança e Criptografia | `AuthService`, `API Gateway` | Terminação TLS 1.3 / HTTPS no Servidor Web; Hashes bcrypt no BD. | Zero senhas em texto puro; certificado SSL válido emitido. |
| **RNF02** | Privacidade e LGPD | `ProfileService`, `AuthService` | Banco de Dados Relacional com criptografia em repouso e isolamento de campos privados. | Ocultação padrão de contatos e logs de consentimento. |
| **RNF03** | Responsividade | `Frontend Web SPA/PWA` | Navegador Web do Dispositivo Móvel / Desktop. | Renderização adequada de 360px a 1920px. |
| **RNF04** | Acessibilidade Digital | `Frontend Web (Design System)` | Interface do Navegador com conformidade WCAG 2.1 AA. | Teste de contraste > 4.5:1 e leitor de tela (NVDA/TalkBack). |
| **RNF05** | Desempenho e Latência | `API Gateway`, Camada de Cache, CDN | Servidor Web de Alta Performance / Cloud CDN. | FCP < 2,0s; Resposta da API < 500ms (P95). |
| **RNF06** | Disponibilidade Operacional | Cluster de Aplicação e Réplicas de BD | Servidor de Hospedagem em Nuvem com rotina de backup diário. | Uptime >= 99,0% no semestre letivo. |
| **RNF07** | Manutenibilidade | Separação em Camadas e Módulos | Módulos desacoplados comunicando via interfaces REST. | Cobertura de testes e isolamento de dependências. |
| **RNF08** | Internacionalização (i18n) | `Frontend i18n Engine` | Arquivos estáticos de localização (dicionários JSON pt/en). | 100% de strings desacopladas de código duro. |
| **RNF09** | Auditoria e Não Repúdio | `ModerationService`, `AuditLogger` | Tabela de Logs de Auditoria com timestamps UTC e integridade referencial. | Registro indelével de toda ação punitiva ou moderadora. |
| **RNF10** | Retenção de Registros | `AuditLogger` | Volume de Armazenamento persistente de logs por 6 meses. | Política de retenção e expurgo automatizada configurada. |
