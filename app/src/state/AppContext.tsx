import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { dictionaries, type Lang, type StringKey } from '../i18n/strings'
import { conversations as convSeed, notificationsSeed, reportsSeed, topics as topicSeed, type Conversation, type Level, type Status, type Topic } from '../data/mock'

export type Mode = 'dark' | 'light' | 'system'
export type Audience = 'everyone' | 'connections' | 'nobody'

export interface Me {
  name: string
  displayName: string
  matricula: string
  email: string
  course: string
  status: Status
  destination: string
  bio: string
  languages: { lang: string; level: Level }[]
}

export interface ConsentEntry { at: string; item: string; value: boolean }

interface State {
  lang: Lang
  mode: Mode
  accent: string
  fontScale: number
  reduceMotion: boolean
  me: Me | null
  privacy: {
    profile: Audience
    messages: Audience
    showOnline: boolean
    readReceipts: boolean
    showCountry: boolean
    courseNews: boolean
    analytics: boolean
  }
  notif: { push: boolean; replies: boolean; chat: boolean; buddy: boolean; events: boolean; course: boolean }
  consentLog: ConsentEntry[]
  connections: Record<string, 'connected' | 'pending'>
  blocked: string[]
  conversations: Conversation[]
  topics: Topic[]
  liked: Record<string, boolean>
  eventsRsvp: Record<string, boolean>
  buddy: 'none' | 'requested' | 'volunteer'
  notifications: typeof notificationsSeed
  reports: { id: string; target: string; reason: StringKey; by: string; time: string }[]
  auditLog: { at: string; action: string; target: string; justification: string }[]
}

export const UNIFOR_BLUE = '#2f8cff'

const initial: State = {
  lang: 'pt',
  mode: 'dark',
  accent: UNIFOR_BLUE,
  fontScale: 1,
  reduceMotion: false,
  me: null,
  // RN04 — privacidade por padrão
  privacy: { profile: 'everyone', messages: 'connections', showOnline: true, readReceipts: true, showCountry: true, courseNews: true, analytics: false },
  // RF14 — push desativado por padrão
  notif: { push: false, replies: true, chat: true, buddy: true, events: true, course: true },
  consentLog: [],
  connections: { sofia: 'connected', mariana: 'connected', lucas: 'connected', amara: 'connected', nei: 'connected' },
  blocked: [],
  conversations: convSeed,
  topics: topicSeed,
  liked: {},
  eventsRsvp: {},
  buddy: 'none',
  notifications: notificationsSeed,
  reports: reportsSeed,
  auditLog: [],
}

const KEY = 'conecta-intercambio:v1'

function load(): State {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...initial, ...JSON.parse(raw) }
  } catch { /* estado corrompido: recomeça */ }
  const browser = navigator.language.slice(0, 2)
  return { ...initial, lang: browser === 'en' ? 'en' : browser === 'es' ? 'es' : 'pt' }
}

interface Ctx extends State {
  t: (k: StringKey) => string
  set: <K extends keyof State>(key: K, value: State[K] | ((prev: State[K]) => State[K])) => void
  setConsent: (item: keyof State['privacy'] | 'push', value: boolean) => void
  toast: (msg: string) => void
  toastMsg: string | null
  resolvedMode: 'dark' | 'light'
  reset: () => void
}

const AppCtx = createContext<Ctx | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(load)
  const [toastMsg, setToast] = useState<string | null>(null)
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(state)) }, [state])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const fn = (e: MediaQueryListEvent) => setSystemDark(e.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [])

  const resolvedMode = state.mode === 'system' ? (systemDark ? 'dark' : 'light') : state.mode

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = resolvedMode
    root.style.setProperty('--accent', state.accent)
    root.style.setProperty('--font-scale', String(state.fontScale))
    root.dataset.motion = state.reduceMotion ? 'reduce' : 'full'
    root.lang = state.lang === 'pt' ? 'pt-BR' : state.lang === 'en' ? 'en-US' : 'es'
  }, [resolvedMode, state.accent, state.fontScale, state.reduceMotion, state.lang])

  const set: Ctx['set'] = useCallback((key, value) => {
    setState((s) => ({ ...s, [key]: typeof value === 'function' ? (value as (p: unknown) => unknown)(s[key]) : value }))
  }, [])

  const setConsent: Ctx['setConsent'] = useCallback((item, value) => {
    setState((s) => {
      const entry = { at: new Date().toISOString(), item, value }
      if (item === 'push') return { ...s, notif: { ...s.notif, push: value }, consentLog: [entry, ...s.consentLog] }
      return { ...s, privacy: { ...s.privacy, [item]: value }, consentLog: [entry, ...s.consentLog] }
    })
  }, [])

  const toast = useCallback((msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2600)
  }, [])

  const t = useCallback((k: StringKey) => dictionaries[state.lang][k] ?? dictionaries.pt[k], [state.lang])

  const reset = useCallback(() => { localStorage.removeItem(KEY); setState({ ...initial, lang: state.lang }) }, [state.lang])

  const value = useMemo(() => ({ ...state, t, set, setConsent, toast, toastMsg, resolvedMode, reset }), [state, t, set, setConsent, toast, toastMsg, resolvedMode, reset])
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppCtx)
  if (!ctx) throw new Error('useApp fora do AppProvider')
  return ctx
}
