# Revisão de Consistência — UML × Requisitos × Protótipo (Sprint 2)

> **Entregável P2:** “Revisão de consistência: alinhamento entre UML e requisitos”
> **Data da revisão:** 05/11/2026 · **Artefatos revisados:** [`requisitos.md`](requisitos.md), [`regras-de-negocio.md`](regras-de-negocio.md), [`backlog.md`](backlog.md), [`srs.md`](srs.md), [`uml/casos-de-uso.svg`](../uml/casos-de-uso.svg), [`uml/casos-de-uso-v2.svg`](../uml/casos-de-uso-v2.svg), [`uml/componentes.svg`](../uml/componentes.svg), [`uml/componentes-v2.svg`](../uml/componentes-v2.svg), [`uml/implantacao.svg`](../uml/implantacao.svg) e o protótipo em [`app/`](../app).

## 1. Método
1. **Cobertura direta:** todo RF deve ter pelo menos um caso de uso, ou ser declarado como requisito transversal ou de sistema.
2. **Cobertura reversa:** todo caso de uso deve ter pelo menos um RF de origem.
3. **Atores:** todo ator da UML deve corresponder a um stakeholder em [`stakeholders.md`](stakeholders.md).
4. **Componentes:** todo RF deve ter um componente responsável no diagrama de componentes.
5. **Regras:** toda RN deve estar ligada a um RF e aparecer em pelo menos um fluxo do SRS.
6. **Protótipo:** todo RF *Must* ou *Should* com interface deve ter uma tela navegável.

## 2. Matriz RF × Caso de Uso × Componente × Tela

| RF | Prioridade | Caso(s) de Uso | Componente | Tela do protótipo | Situação |
| :--- | :---: | :--- | :--- | :--- | :---: |
| RF01 Autenticação | Must | UC01 | Auth & Identity | Login | ✅ |
| RF02 Perfil | Must | UC02, UC21 | Profile & Search | Perfil, Editar perfil | ✅ |
| RF03 Busca | Must | UC03, UC17 | Profile & Search | Conversas → busca | ✅ |
| RF04 Feed | Must | UC04, UC05 | Feed & Interaction | Unifor (curtir, “+”), Explorar (tópicos) | ✅ |
| RF05 Notícias oficiais | Must | UC06, UC12 | Institutional News | Unifor → Notícias, Detalhe | ✅ (UC12 é back-office, sem tela) |
| RF06 Buddy | Should | UC07, UC08 | Buddy Program | Menu → Programa Buddy | ✅ (UC08 é back-office) |
| RF07 Comunidades | Should | UC09 | Community | Conversas → Grupos | ✅ |
| RF08 Relatos | Must | UC10, UC03 | Exchange Reports | Explorar → Relatos | ⚠️ só consulta; o formulário de envio fica para a Sprint 3 |
| RF09 Eventos | Should | UC11 | Institutional News | Menu → Agenda | ✅ |
| RF10 Denúncia | Must | UC13 | Moderation & Audit | Ícone 🚩 em tópico, resposta, notícia, reel, perfil e conversa | ✅ |
| RF11 Moderação | Must | UC14 | Moderation & Audit | Menu → Painel de moderação | ✅ |
| RF12 Reels | Should | **UC22** (novo) | **Media & Reels** (novo) | Unifor → Reels | ✅ corrigido |
| RF13 Idiomas | Must | **UC19** (novo) | Motor de Localização | Menu → Idioma, seletor no Login | ✅ corrigido |
| RF14 Notificações | Should | — (transversal) | Serviço de Notificação | Sino 🔔, Menu → Notificações | ⚠️ ver I-05 |
| RF15 Isenção moradia | Must | UC15 | Feed & Interaction | Explorar → Moradia | ✅ |
| RF16 Equivalências | Should | UC10, UC03 | Exchange Reports | Explorar → Equivalências | ✅ |
| RF17 Conversas | Should | UC16 | Chat & Messaging | Conversas, Conversa aberta | ✅ |
| RF18 Explorar | Must | UC18 | City Guide & Forum | Explorar, Tópico, Novo tópico | ✅ |
| RF19 Aparência | Should | UC19 | Theme Engine | Menu → Aparência | ✅ |
| RF20 Privacidade LGPD | Must | UC20 | Privacy & Consent | Menu → Privacidade e LGPD | ✅ |
| RF21 Notícias do curso | Should | UC21 | Institutional News | Perfil, filtro “Meu curso” | ✅ |
| RF22 Conexões | Should | UC17 | Connections | Perfil de outra pessoa | ✅ |
| RF23 Publicação institucional | Should | UC23 | Institutional News | — (back-office) | ⚠️ ver I-07 |

**Cobertura reversa:** os casos de uso UC01–UC23 têm RF de origem (ver SRS §3.2.1). Não há caso de uso órfão.

## 3. Inconsistências encontradas e tratamento

| ID | Inconsistência | Artefatos | Gravidade | Tratamento | Status |
| :---: | :--- | :--- | :---: | :--- | :---: |
| I-01 | RF12 (reels) não tinha caso de uso nem componente. | requisitos × casos-de-uso × componentes | Alta | Criados UC22 e o componente *Media & Reels Module*. | ✅ Resolvido |
| I-02 | RF13 (idiomas) não tinha caso de uso; o Motor de Localização só citava PT/EN. | requisitos × UML | Média | Criado UC19; o componente foi marcado como “PT/EN + ES” na v2. | ✅ Resolvido |
| I-03 | O backlog marcava o chat (US16) como *Won't have*, mas a navegação nova coloca Conversas como aba principal. | backlog × visão do produto | Alta | Repriorizado para *Should* (RF17), com RN11 e RN12 para tratar os riscos citados na P1. | ✅ Resolvido |
| I-04 | Diagrama de implantação sem canal WebSocket para mensagens em tempo real. | implantacao × RNF12 | Média | Canal WSS e Pub/Sub incluídos em `componentes-v2.svg`. O `implantacao.drawio` ainda precisa do nó/protocolo WSS. | 🟡 Parcial (issue #4) |
| I-05 | RF14 (notificações) não tem caso de uso próprio. | requisitos × casos-de-uso | Baixa | Tratado como requisito transversal, acionado por UC06, UC07, UC16 e UC23. As preferências estão em UC20. Se necessário, criar UC24 “Receber e gerenciar notificações” na Sprint 3. | 🟡 Aceito |
| I-06 | Stakeholder STK07 (Comunicação Institucional) não aparecia como ator na UML. | stakeholders × casos-de-uso | Média | Criado o ator “Equipe de Comunicação (TV Unifor / NEI / Coord.)” e o UC23. | ✅ Resolvido |
| I-07 | UC08, UC12 e UC23 são de back-office e não têm tela no protótipo. | casos-de-uso × protótipo | Baixa | Fora do escopo do protótipo do app do estudante. No protótipo, o conteúdo institucional vem pré-carregado. | 🟡 Aceito |
| I-08 | RF08: o protótipo tem consulta de relatos, mas não o formulário de envio. | requisitos × protótipo | Média | Planejado para a Sprint 3. | 🟡 Pendente |
| I-09 | RNF02 (LGPD) era genérico e sem funções verificáveis. | requisitos | Média | Detalhado em RF20 (direitos do Art. 18) e RN13. | ✅ Resolvido |
| I-10 | O RF04 diz que o feed é “de estudantes e gestores”, mas a aba central virou um jornal institucional. | requisitos × visão | Baixa | Posts de estudantes continuam possíveis (“+” na aba Unifor e tópicos em Explorar), mas passam por moderação (RN06). Conteúdo oficial vem do RF23. | ✅ Resolvido |
| I-11 | RNF04 pede contraste de 4,5:1, mas a cor personalizada (RF19) pode quebrar isso. | RNF04 × RF19 | Baixa | O critério de aceitação do RF19 exige manter o contraste. Na implementação real, o seletor deve avisar quando a cor escolhida tiver contraste baixo. | 🟡 Pendente de implementação |

## 4. Regras de Negócio × Fluxos do SRS

| RN | Onde aparece no SRS | Onde aparece no protótipo |
| :--- | :--- | :--- |
| RN01 | UC06, UC23 | Selo “Comunicado Institucional Unifor” |
| RN02 | UC01 (E1), UC18 (A2) | Validação de domínio e código no Login; aviso em Moradia |
| RN04 | UC17 (A1), UC20 | Perfil privado; opções de visibilidade |
| RN05 / RN10 | UC13, UC14 | Fila de denúncias e log de auditoria |
| RN06 | UC22 (A1) | “Enviado para moderação” |
| RN08 | UC18 (A2) | Aviso amarelo em Moradia |
| RN11 | UC16 (A1, E2) | Aba “Pedidos”, Aceitar/Recusar, Bloquear |
| RN12 | UC13 (E1), UC16 | Aviso de confidencialidade na conversa |
| RN13 | UC21 (E1), UC20 | Aviso quando o consentimento está desligado |
| RN14 | UC18 (E2) | Motivo “Spam ou golpe” na denúncia |

## 5. Conclusão
Depois da revisão, **os 23 RFs** têm caso de uso (ou justificativa de transversalidade) e componente responsável, e **22 dos 23 RFs** têm tela navegável no protótipo. A exceção é o RF23, que é de back-office, e o RF08 está coberto só em parte. Seguem pendentes: I-04 (atualizar `implantacao.drawio`), I-08 (formulário de relato) e I-11 (aviso de contraste), registrados como issues da Sprint 3.
