// Dados fictícios para o protótipo navegável (P2). Nenhum dado real de terceiros.
import type { StringKey } from '../i18n/strings'

export type Status = 'local' | 'incoming' | 'outgoing' | 'alumni' | 'buddy' | 'staff'
export type Level = 'basic' | 'intermediate' | 'advanced' | 'native'

export interface Person {
  id: string
  name: string
  course: string
  status: Status
  country: string
  flag: string
  destination?: string
  bio: string
  languages: { lang: string; level: Level }[]
  color: string
  online?: boolean
  verified?: boolean
  connections: number
  private?: boolean
}

export const people: Person[] = [
  { id: 'sofia', name: 'Sofía Martínez', course: 'Arquitetura e Urbanismo', status: 'incoming', country: 'Espanha', flag: '🇪🇸', bio: 'Intercambista da Universidad de Salamanca. Amo praia, forró e café coado ☕', languages: [{ lang: 'Espanhol', level: 'native' }, { lang: 'Português', level: 'intermediate' }, { lang: 'Inglês', level: 'advanced' }], color: '#e0567a', online: true, verified: true, connections: 84 },
  { id: 'lucas', name: 'Lucas Ferreira', course: 'Engenharia Civil', status: 'alumni', country: 'Brasil', flag: '🇧🇷', destination: 'Universidade do Porto 🇵🇹', bio: 'Fiz intercâmbio no Porto em 2025.2. Pergunte sobre equivalência de disciplinas!', languages: [{ lang: 'Português', level: 'native' }, { lang: 'Inglês', level: 'intermediate' }], color: '#2f9e6e', online: true, verified: true, connections: 231 },
  { id: 'mariana', name: 'Mariana Costa', course: 'Medicina', status: 'buddy', country: 'Brasil', flag: '🇧🇷', bio: 'Buddy voluntária 2026. Posso te mostrar o campus e os melhores lanches 🥪', languages: [{ lang: 'Português', level: 'native' }, { lang: 'Inglês', level: 'advanced' }, { lang: 'Francês', level: 'basic' }], color: '#8a5cf6', online: true, verified: true, connections: 156 },
  { id: 'julien', name: 'Julien Moreau', course: 'Administração', status: 'incoming', country: 'França', flag: '🇫🇷', bio: 'Exchange student from Université de Lyon. Looking for a surf buddy 🏄', languages: [{ lang: 'Francês', level: 'native' }, { lang: 'Inglês', level: 'advanced' }, { lang: 'Português', level: 'basic' }], color: '#f08c2e', verified: true, connections: 42 },
  { id: 'amara', name: 'Amara Okafor', course: 'Ciência da Computação', status: 'incoming', country: 'Nigéria', flag: '🇳🇬', bio: 'CS student, hackathons and jollof rice. Learning Portuguese!', languages: [{ lang: 'Inglês', level: 'native' }, { lang: 'Português', level: 'basic' }], color: '#13a8c2', online: true, verified: true, connections: 37 },
  { id: 'pedro', name: 'Pedro Albuquerque', course: 'Análise e Desenv. de Sistemas', status: 'outgoing', country: 'Brasil', flag: '🇧🇷', destination: 'Universidad de Chile 🇨🇱', bio: 'Indo para Santiago em 2027.1. Bora trocar dicas?', languages: [{ lang: 'Português', level: 'native' }, { lang: 'Espanhol', level: 'intermediate' }], color: '#d94f3d', verified: true, connections: 98 },
  { id: 'kenji', name: 'Kenji Tanaka', course: 'Jornalismo', status: 'incoming', country: 'Japão', flag: '🇯🇵', bio: 'Waseda University. Fotografia de rua e TV Unifor 📷', languages: [{ lang: 'Japonês', level: 'native' }, { lang: 'Inglês', level: 'intermediate' }], color: '#4c6ef5', verified: true, connections: 51, private: true },
  { id: 'nei', name: 'NEI Unifor', course: 'Núcleo de Internacionalização', status: 'staff', country: 'Brasil', flag: '🇧🇷', bio: 'Canal oficial da Assessoria de Relações Internacionais da Unifor.', languages: [{ lang: 'Português', level: 'native' }, { lang: 'Inglês', level: 'native' }, { lang: 'Espanhol', level: 'native' }], color: '#1a3fd6', verified: true, connections: 4120 },
]

export const findPerson = (id: string) => people.find((p) => p.id === id)

export interface Message { id: string; from: 'me' | string; text: string; time: string; read?: boolean }
export interface Conversation { id: string; personId?: string; group?: { name: string; color: string; members: number }; request?: boolean; messages: Message[] }

export const conversations: Conversation[] = [
  { id: 'c-sofia', personId: 'sofia', messages: [
    { id: '1', from: 'sofia', text: 'Oi! Você sabe se o RU abre no sábado?', time: '09:12' },
    { id: '2', from: 'me', text: 'Abre sim, até as 14h 😉', time: '09:15', read: true },
    { id: '3', from: 'sofia', text: 'Perfeito, obrigada!! Vamos no Dragão do Mar sexta?', time: '09:16' },
  ] },
  { id: 'c-mariana', personId: 'mariana', messages: [
    { id: '1', from: 'mariana', text: 'Fui designada como Buddy do grupo de intercambistas de Arquitetura 🙌', time: 'Ontem' },
    { id: '2', from: 'me', text: 'Show! Posso ajudar no tour do campus', time: 'Ontem', read: true },
  ] },
  { id: 'g-porto', group: { name: 'Intercâmbio Portugal 🇵🇹', color: '#2f9e6e', members: 128 }, messages: [
    { id: '1', from: 'lucas', text: 'Pessoal, o seguro-saúde do edital 2027.1 sai por ~€35/mês', time: '08:40' },
  ] },
  { id: 'g-english', group: { name: 'English Conversation Club', color: '#4c6ef5', members: 64 }, messages: [
    { id: '1', from: 'amara', text: 'Meeting today at 5pm, Bloco J!', time: '07:30' },
  ] },
  { id: 'c-julien', personId: 'julien', request: true, messages: [
    { id: '1', from: 'julien', text: 'Salut! I saw your post about surf at Praia do Futuro. Can I join next time?', time: '10:02' },
  ] },
  { id: 'c-lucas', personId: 'lucas', messages: [
    { id: '1', from: 'me', text: 'Lucas, a disciplina de Estruturas I foi aproveitada?', time: 'Seg' },
    { id: '2', from: 'lucas', text: 'Foi sim! Registrei lá na aba Equivalências.', time: 'Seg' },
  ] },
]

export type Category = 'housing' | 'food' | 'transport' | 'health' | 'leisure' | 'docs' | 'academic' | 'safety'
export const categories: { id: Category; label: StringKey; icon: string }[] = [
  { id: 'housing', label: 'catHousing', icon: '🏠' },
  { id: 'food', label: 'catFood', icon: '🍲' },
  { id: 'transport', label: 'catTransport', icon: '🚌' },
  { id: 'health', label: 'catHealth', icon: '🩺' },
  { id: 'leisure', label: 'catLeisure', icon: '🏖️' },
  { id: 'docs', label: 'catDocs', icon: '🛂' },
  { id: 'academic', label: 'catAcademic', icon: '🎓' },
  { id: 'safety', label: 'catSafety', icon: '🛡️' },
]

export interface Reply { id: string; authorId: string; text: string; time: string; helpful: number }
export interface Topic { id: string; category: Category; title: string; body: string; authorId: string; time: string; views: number; helpful: number; replies: Reply[] }

export const topics: Topic[] = [
  { id: 't1', category: 'housing', title: 'Melhores bairros para morar perto da Unifor?', body: 'Chego em fevereiro e queria algo a até 20 min do campus. Edson Queiroz, Cocó ou Água Fria?', authorId: 'sofia', time: '2h', views: 412, helpful: 38, replies: [
    { id: 'r1', authorId: 'mariana', text: 'Edson Queiroz dá para ir a pé. Água Fria tem mais opções de mercado e é bem servida de ônibus.', time: '1h', helpful: 21 },
    { id: 'r2', authorId: 'lucas', text: 'Evite fechar contrato sem visitar. Peça vídeo-chamada e confira o anunciante com selo verificado.', time: '40min', helpful: 17 },
  ] },
  { id: 't2', category: 'docs', title: 'Passo a passo do RNM / Polícia Federal em Fortaleza', body: 'Quais documentos levar e quanto tempo demora o agendamento?', authorId: 'julien', time: '5h', views: 290, helpful: 44, replies: [
    { id: 'r1', authorId: 'nei', text: 'O NEI publicou um guia oficial na aba Unifor → Editais. Leve passaporte, visto, comprovante de endereço e a carta de aceite.', time: '4h', helpful: 52 },
  ] },
  { id: 't3', category: 'food', title: 'Comida cearense que todo intercambista precisa provar', body: 'Baião de dois, tapioca, caranguejo na quinta… o que mais?', authorId: 'amara', time: '1d', views: 870, helpful: 96, replies: [
    { id: 'r1', authorId: 'pedro', text: 'Panelada e cuscuz com ovo no café da manhã. E caranguejo na Praia do Futuro, obrigatoriamente na quinta!', time: '20h', helpful: 33 },
  ] },
  { id: 't4', category: 'transport', title: 'Bilhete Único: como estudante estrangeiro consegue a meia?', body: 'Tentei pelo site da Etufor e pediu CPF. Alguém conseguiu?', authorId: 'kenji', time: '1d', views: 188, helpful: 12, replies: [] },
  { id: 't5', category: 'safety', title: 'Dicas de segurança à noite na Beira-Mar', body: 'Quais horários e trechos são tranquilos para caminhar?', authorId: 'julien', time: '2d', views: 330, helpful: 29, replies: [] },
  { id: 't6', category: 'academic', title: 'Matrícula em disciplina de outro curso: como funciona?', body: 'Sou de Administração mas quero cursar uma optativa de Jornalismo.', authorId: 'julien', time: '3d', views: 140, helpful: 9, replies: [] },
  { id: 't7', category: 'health', title: 'Onde ser atendido pelo seguro internacional?', body: 'Meu seguro é da Allianz. Algum hospital perto aceita direto?', authorId: 'sofia', time: '3d', views: 120, helpful: 7, replies: [] },
]

export interface Place { id: string; name: string; category: Category; area: string; distanceKm: number; rating: number; price: string; tip: string; color: string; emoji: string }
export const places: Place[] = [
  { id: 'p1', name: 'Beira-Mar e Feirinha', category: 'leisure', area: 'Meireles', distanceKm: 9, rating: 4.8, price: 'Grátis', tip: 'Fim de tarde + tapioca na feirinha.', color: '#1e9ce6', emoji: '🌅' },
  { id: 'p2', name: 'Mercado Central', category: 'leisure', area: 'Centro', distanceKm: 12, rating: 4.6, price: '$', tip: 'Redes, castanha e artesanato.', color: '#e07a2e', emoji: '🧺' },
  { id: 'p3', name: 'Dragão do Mar', category: 'leisure', area: 'Praia de Iracema', distanceKm: 11, rating: 4.7, price: 'Grátis', tip: 'Cinema, museus e shows.', color: '#8a5cf6', emoji: '🎭' },
  { id: 'p4', name: 'Praia do Futuro', category: 'food', area: 'Praia do Futuro', distanceKm: 7, rating: 4.7, price: '$$', tip: 'Caranguejo nas quintas.', color: '#2f9e6e', emoji: '🦀' },
  { id: 'p5', name: 'Restaurante Universitário', category: 'food', area: 'Campus Unifor', distanceKm: 0, rating: 4.2, price: '$', tip: 'Prato feito com preço de estudante.', color: '#1a3fd6', emoji: '🍛' },
  { id: 'p6', name: 'Parque do Cocó', category: 'leisure', area: 'Cocó', distanceKm: 4, rating: 4.8, price: 'Grátis', tip: 'Trilhas e corrida de manhã.', color: '#3aa35b', emoji: '🌳' },
]

export const exchangeReports = [
  { id: 'e1', university: 'Universidade do Porto', country: '🇵🇹 Portugal', rating: 4.6, cost: '€ 850/mês', authorId: 'lucas', pros: 'Transporte excelente, ensino prático', cons: 'Moradia cara no centro' },
  { id: 'e2', university: 'Universidad de Salamanca', country: '🇪🇸 Espanha', rating: 4.8, cost: '€ 700/mês', authorId: 'sofia', pros: 'Cidade universitária, custo baixo', cons: 'Inverno muito frio' },
  { id: 'e3', university: 'Université de Lyon', country: '🇫🇷 França', rating: 4.4, cost: '€ 950/mês', authorId: 'julien', pros: 'Bolsa CAF para moradia', cons: 'Burocracia inicial' },
]

export const equivalences = [
  { id: 'q1', course: 'Engenharia Civil', partner: 'Universidade do Porto', foreign: 'Estruturas de Betão I', unifor: 'Estruturas de Concreto I', semester: '2025.2' },
  { id: 'q2', course: 'Análise e Desenv. de Sistemas', partner: 'Universidad de Chile', foreign: 'Ingeniería de Software', unifor: 'Engenharia de Software', semester: '2025.1' },
  { id: 'q3', course: 'Arquitetura e Urbanismo', partner: 'Universidad de Salamanca', foreign: 'Proyectos III', unifor: 'Projeto Arquitetônico III', semester: '2024.2' },
]

export type NewsKind = 'calls' | 'faculty' | 'events' | 'tv' | 'intl'
export interface News { id: string; kind: NewsKind; title: string; summary: string; body: string; author: string; official: boolean; time: string; courses: string[]; color: string; emoji: string; likes: number; comments: number }

export const news: News[] = [
  { id: 'n1', kind: 'calls', title: 'Edital de Mobilidade Internacional 2027.1 está aberto', summary: '42 vagas em 18 universidades parceiras. Inscrições até 15/12.', body: 'O Núcleo de Internacionalização (NEI) torna pública a abertura do Edital 2027.1. Tipo: intercâmbio semestral. Duração: 1 semestre. Período: fev–jul/2027. Custos obrigatórios conhecidos: seguro-saúde internacional e visto. Bolsas parciais: liberação prevista em duas parcelas (março e maio).', author: 'NEI Unifor', official: true, time: '2h', courses: ['*'], color: '#1a3fd6', emoji: '🌍', likes: 312, comments: 48 },
  { id: 'n2', kind: 'faculty', title: 'ADS recebe nova professora de Inteligência Artificial', summary: 'Dra. Helena Rocha chega do MIT para lecionar Aprendizado de Máquina.', body: 'A coordenação de Análise e Desenvolvimento de Sistemas dá as boas-vindas à Profa. Dra. Helena Rocha, que assume as disciplinas de Aprendizado de Máquina e Tópicos em IA a partir de 2027.1.', author: 'Coordenação ADS', official: true, time: '5h', courses: ['Análise e Desenv. de Sistemas', 'Ciência da Computação'], color: '#8a5cf6', emoji: '👩‍🏫', likes: 128, comments: 12 },
  { id: 'n3', kind: 'tv', title: 'TV Unifor: como é a vida de um intercambista em Fortaleza', summary: 'Série especial com estudantes da Espanha, França e Japão.', body: 'Em parceria com a TV Unifor, a série acompanha três intercambistas durante o primeiro mês no Brasil.', author: 'TV Unifor', official: true, time: '1d', courses: ['*'], color: '#d94f3d', emoji: '📺', likes: 540, comments: 77 },
  { id: 'n4', kind: 'events', title: 'Feira de Intercâmbio 2026 — 28/11 no Centro de Convivência', summary: 'Estandes de 25 universidades parceiras e palestras com alumni.', body: 'A Feira acontece das 9h às 18h. Confirme presença na Agenda de eventos do app.', author: 'NEI Unifor', official: true, time: '1d', courses: ['*'], color: '#f08c2e', emoji: '🎪', likes: 201, comments: 19 },
  { id: 'n5', kind: 'faculty', title: 'Prof. Ricardo Lima se despede da Engenharia Civil', summary: 'Após 22 anos, o professor se aposenta. Homenagem dia 30/11.', body: 'A Engenharia Civil homenageia o Prof. Ricardo Lima, responsável por gerações de engenheiros cearenses.', author: 'Coordenação Eng. Civil', official: true, time: '2d', courses: ['Engenharia Civil'], color: '#2f9e6e', emoji: '🎓', likes: 410, comments: 64 },
  { id: 'n6', kind: 'intl', title: 'Unifor assina acordo com a Universidad de Chile', summary: 'Novo convênio abre 6 vagas para cursos de tecnologia.', body: 'O acordo contempla ADS, Ciência da Computação e Engenharias, com dupla diplomação em estudo.', author: 'NEI Unifor', official: true, time: '3d', courses: ['Análise e Desenv. de Sistemas', 'Ciência da Computação'], color: '#13a8c2', emoji: '🤝', likes: 233, comments: 21 },
]

export interface Reel { id: string; authorId: string; caption: string; color1: string; color2: string; emoji: string; likes: number; comments: number; seconds: number }
export const reels: Reel[] = [
  { id: 'v1', authorId: 'nei', caption: 'Tour de 60s pelo campus da Unifor 🏛️ #boasvindas', color1: '#1a3fd6', color2: '#0b1a63', emoji: '🏛️', likes: 2100, comments: 140, seconds: 58 },
  { id: 'v2', authorId: 'sofia', caption: 'Minha primeira tapioca na Beira-Mar 🤤 #vidadeintercambista', color1: '#e0567a', color2: '#5a1430', emoji: '🌮', likes: 860, comments: 52, seconds: 24 },
  { id: 'v3', authorId: 'kenji', caption: 'Bastidores da TV Unifor 🎥', color1: '#d94f3d', color2: '#3d0f0a', emoji: '🎬', likes: 640, comments: 31, seconds: 41 },
  { id: 'v4', authorId: 'lucas', caption: '3 coisas que eu queria saber antes de ir pro Porto 🇵🇹', color1: '#2f9e6e', color2: '#0b3324', emoji: '✈️', likes: 1320, comments: 98, seconds: 55 },
]

export const events = [
  { id: 'ev1', title: 'Feira de Intercâmbio 2026', date: '28/11', time: '09:00', place: 'Centro de Convivência', org: 'NEI Unifor', emoji: '🎪' },
  { id: 'ev2', title: 'Workshop: Como escrever sua carta de motivação', date: '02/12', time: '18:30', place: 'Bloco J, sala 12', org: 'NEI Unifor', emoji: '✍️' },
  { id: 'ev3', title: 'Encontro de Acolhimento 2027.1', date: '10/02', time: '15:00', place: 'Auditório da Biblioteca', org: 'Programa Buddy', emoji: '🤗' },
  { id: 'ev4', title: 'English Conversation Club', date: 'Toda quinta', time: '17:00', place: 'Online — Teams', org: 'Comunidade', emoji: '🗣️' },
]

export const notificationsSeed = [
  { id: 'nt1', kind: 'official', text: 'NEI: Edital 2027.1 publicado. Prazo: 15/12.', to: '/unifor/noticia/n1', time: '2h', read: false },
  { id: 'nt2', kind: 'replies', text: 'Mariana respondeu ao seu tópico sobre bairros.', to: '/explorar/topico/t1', time: '1h', read: false },
  { id: 'nt3', kind: 'course', text: 'Nova professora de IA no seu curso (ADS).', to: '/unifor/noticia/n2', time: '5h', read: false },
  { id: 'nt4', kind: 'buddy', text: 'Você foi pré-selecionado como Buddy! Confirme até sexta.', to: '/menu/buddy', time: '1d', read: true },
]

export const reportsSeed = [
  { id: 'rp1', target: 'Tópico: "Aluguel barato no Cocó, só pix adiantado"', reason: 'reportReasonHousing' as StringKey, by: 'Anônimo', time: '30min' },
  { id: 'rp2', target: 'Comentário em "Comida cearense…"', reason: 'reportReasonSpam' as StringKey, by: 'Anônimo', time: '3h' },
]

export const courses = [
  'Análise e Desenv. de Sistemas', 'Ciência da Computação', 'Engenharia Civil', 'Arquitetura e Urbanismo', 'Medicina', 'Administração', 'Jornalismo', 'Direito', 'Cinema e Mídias Digitais',
]
