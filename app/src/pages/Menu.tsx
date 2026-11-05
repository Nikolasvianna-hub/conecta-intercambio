import { useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Bell, CalendarDays, ChevronRight, CircleHelp, Download, Gavel, Globe, HandHeart, History, Info, LogOut, MapPin, Palette, ShieldCheck, Trash2, Users,
} from 'lucide-react'
import { UNIFOR_BLUE, useApp, type Audience, type Mode } from '../state/AppContext'
import { BrandBar, Sheet, ToggleRow, TopBar } from '../components/ui'
import { events, people } from '../data/mock'
import { languageNames, type Lang, type StringKey } from '../i18n/strings'

function Item({ icon, label, hint, to, onClick }: { icon: ReactNode; label: string; hint?: string; to?: string; onClick?: () => void }) {
  const nav = useNavigate()
  return (
    <button className="list-item" onClick={onClick ?? (() => to && nav(to))}>
      {icon}
      <span className="grow">{label}{hint && <small>{hint}</small>}</span>
      <ChevronRight size={18} className="muted" />
    </button>
  )
}

// Menu no padrão "lista" do Unifor Mobile, com preferências, LGPD e recursos da comunidade
export default function Menu() {
  const { t, lang, mode, set, reset } = useApp()
  const [about, setAbout] = useState(false)
  const modeLabel: Record<Mode, StringKey> = { dark: 'appearanceDark', light: 'appearanceLight', system: 'appearanceSystem' }
  return (
    <>
      <BrandBar />
      <main className="screen">
        <h2 className="section-title">{t('menuPreferences')}</h2>
        <div className="list">
          <Item icon={<Globe />} label={t('menuLanguage')} hint={languageNames[lang]} to="/menu/idioma" />
          <Item icon={<Palette />} label={t('menuAppearance')} hint={t(modeLabel[mode])} to="/menu/aparencia" />
          <Item icon={<ShieldCheck />} label={t('menuPrivacy')} to="/menu/privacidade" />
          <Item icon={<Bell />} label={t('menuNotifications')} to="/menu/notificacoes" />
        </div>
        <h2 className="section-title">{t('menuCommunity')}</h2>
        <div className="list">
          <Item icon={<HandHeart />} label={t('menuBuddy')} to="/menu/buddy" />
          <Item icon={<CalendarDays />} label={t('menuEvents')} to="/menu/eventos" />
          <Item icon={<Users />} label={t('menuCommunities')} to="/conversas" />
          <Item icon={<MapPin />} label={t('menuCampusMap')} to="/explorar" />
          <Item icon={<Gavel />} label={t('menuModeration')} to="/menu/moderacao" />
        </div>
        <h2 className="section-title">{t('menuSupport')}</h2>
        <div className="list">
          <Item icon={<CircleHelp />} label={t('menuFaq')} to="/menu/faq" />
          <Item icon={<Info />} label={t('menuAbout')} onClick={() => setAbout(true)} />
          <Item icon={<LogOut />} label={t('menuLogout')} onClick={() => set('me', null)} />
        </div>
      </main>
      <Sheet open={about} onClose={() => setAbout(false)} title={t('menuAbout')}>
        <p>{t('aboutText')}</p>
        <p className="small muted">Equipe: Nikolas Vianna, Arthur Maia, Bruno Vasconcelos · Prof. Marcelo Bezerra</p>
        <button className="btn ghost block" onClick={() => { reset(); setAbout(false) }}>↺ Reiniciar dados da demonstração</button>
      </Sheet>
    </>
  )
}

const swatches = [UNIFOR_BLUE, '#1428a0', '#13a8c2', '#2fbf71', '#8a5cf6', '#e0567a', '#f08c2e', '#d94f3d']

// RF19 — aparência: claro, noturno, automático e cor personalizada
export function Appearance() {
  const { t, mode, accent, fontScale, reduceMotion, set } = useApp()
  const custom = !swatches.includes(accent)
  return (
    <>
      <TopBar title={t('menuAppearance')} />
      <main className="screen pad">
        <h3 style={{ marginTop: 0 }}>{t('appearanceMode')}</h3>
        <div className="segmented">
          {(['light', 'dark', 'system'] as Mode[]).map((m) => (
            <button key={m} className={mode === m ? 'active' : ''} onClick={() => set('mode', m)}>
              {m === 'light' ? '☀️ ' + t('appearanceLight') : m === 'dark' ? '🌙 ' + t('appearanceDark') : '⚙️ ' + t('appearanceSystem')}
            </button>
          ))}
        </div>

        <h3>{t('appearanceAccent')}</h3>
        <div className="swatches">
          {swatches.map((c) => (
            <button key={c} className={`swatch ${accent === c ? 'active' : ''}`} style={{ background: c }} onClick={() => set('accent', c)} aria-label={c} />
          ))}
          <label className={`color-input swatch ${custom ? 'active' : ''}`} style={{ background: custom ? accent : 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)' }} title={t('appearanceCustom')}>
            <input type="color" value={accent} onChange={(e) => set('accent', e.target.value)} style={{ opacity: 0, width: '100%', height: '100%' }} aria-label={t('appearanceCustom')} />
          </label>
        </div>
        {custom && <p className="small muted">{t('appearanceCustom')}: {accent}</p>}

        <h3>{t('appearanceFont')}</h3>
        <input type="range" min={0.9} max={1.3} step={0.05} value={fontScale} onChange={(e) => set('fontScale', Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--accent)' }} aria-label={t('appearanceFont')} />

        <div className="list" style={{ margin: '16px 0' }}>
          <ToggleRow label={t('appearanceMotion')} checked={reduceMotion} onChange={(v) => set('reduceMotion', v)} />
        </div>

        <h3>{t('appearancePreview')}</h3>
        <div className="hero" style={{ margin: 0 }}>
          <h2>{t('appName')}</h2>
          <p>{t('appTagline')}</p>
          <button className="btn white">OK</button>
        </div>
      </main>
    </>
  )
}

// RF13 — troca de idioma sem recarregar
export function Language() {
  const { t, lang, set } = useApp()
  return (
    <>
      <TopBar title={t('menuLanguage')} />
      <main className="screen pad">
        {(Object.keys(languageNames) as Lang[]).map((l) => (
          <button key={l} className={`radio ${lang === l ? 'active' : ''}`} onClick={() => set('lang', l)}>
            <span style={{ fontSize: '1.4rem' }}>{l === 'pt' ? '🇧🇷' : l === 'en' ? '🇺🇸' : '🇪🇸'}</span>
            {languageNames[l]}
          </button>
        ))}
      </main>
    </>
  )
}

// RF20 — Central de Privacidade (LGPD)
export function Privacy() {
  const { t, privacy, set, setConsent, consentLog, me, connections, blocked, toast, notif } = useApp()
  const [history, setHistory] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const setP = <K extends keyof typeof privacy>(k: K, v: (typeof privacy)[K]) => set('privacy', (p) => ({ ...p, [k]: v }))
  const audience = (k: 'profile' | 'messages', value: Audience, labels: [StringKey, StringKey, StringKey]) => (
    <div className="segmented" style={{ margin: '0 0 16px' }}>
      {(['everyone', 'connections', 'nobody'] as Audience[]).map((a, i) => (
        <button key={a} className={value === a ? 'active' : ''} onClick={() => setP(k, a)}>{t(labels[i])}</button>
      ))}
    </div>
  )
  const exportData = () => {
    const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), profile: me, privacy, notifications: notif, connections, blocked, consentLog }, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'meus-dados-conecta-intercambio.json'
    a.click()
    URL.revokeObjectURL(a.href)
  }
  return (
    <>
      <TopBar title={t('menuPrivacy')} />
      <main className="screen pad">
        <p className="muted" style={{ marginTop: 0 }}>{t('privacyIntro')}</p>
        <h3>{t('privacyVisibility')}</h3>
        {audience('profile', privacy.profile, ['optEveryone', 'optConnections', 'optPrivate'])}
        <h3>{t('privacyMessages')}</h3>
        {audience('messages', privacy.messages, ['optEveryone', 'optConnections', 'optNobody'])}

        <div className="list" style={{ margin: '0 0 16px' }}>
          <ToggleRow label={t('privacyOnline')} checked={privacy.showOnline} onChange={(v) => setP('showOnline', v)} />
          <ToggleRow label={t('privacyReceipts')} checked={privacy.readReceipts} onChange={(v) => setP('readReceipts', v)} />
          <ToggleRow label={t('privacyCountry')} checked={privacy.showCountry} onChange={(v) => setP('showCountry', v)} />
        </div>

        <h3>{t('privacyConsents')}</h3>
        <div className="list" style={{ margin: '0 0 16px' }}>
          <ToggleRow label={t('privacyCourseNews')} checked={privacy.courseNews} onChange={(v) => setConsent('courseNews', v)} />
          <ToggleRow label={t('privacyAnalytics')} checked={privacy.analytics} onChange={(v) => setConsent('analytics', v)} />
        </div>

        <h3>{t('privacyRights')}</h3>
        <div className="list" style={{ margin: '0 0 16px' }}>
          <Item icon={<Download />} label={t('privacyExport')} hint="JSON" onClick={exportData} />
          <Item icon={<History />} label={t('privacyHistory')} hint={`${consentLog.length}`} onClick={() => setHistory(true)} />
          <Item icon={<Trash2 color="var(--danger)" />} label={t('privacyDelete')} onClick={() => setConfirmDelete(true)} />
        </div>
        {blocked.length > 0 && (
          <>
            <h3>{t('privacyBlocked')}</h3>
            <div className="list" style={{ margin: '0 0 16px' }}>
              {blocked.map((b) => (
                <div key={b} className="list-item">
                  <span className="grow">{people.find((p) => p.id === b)?.name}</span>
                  <button className="btn ghost" onClick={() => set('blocked', (x) => x.filter((y) => y !== b))}>✕</button>
                </div>
              ))}
            </div>
          </>
        )}
        <p className="small muted">{t('privacyDpo')}</p>
      </main>

      <Sheet open={history} onClose={() => setHistory(false)} title={t('privacyHistory')}>
        {consentLog.length === 0 && <p className="muted">{t('empty')}</p>}
        {consentLog.map((c, i) => (
          <div key={i} className="row small" style={{ padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
            <span className="grow">{c.item}</span>
            <span className={c.value ? 'pill ok' : 'pill'}>{c.value ? 'ON' : 'OFF'}</span>
            <span className="muted">{new Date(c.at).toLocaleString()}</span>
          </div>
        ))}
      </Sheet>
      <Sheet open={confirmDelete} onClose={() => setConfirmDelete(false)} title={t('privacyDelete')}>
        <p>{t('privacyDeleteConfirm')}</p>
        <div className="row">
          <button className="btn ghost grow" onClick={() => setConfirmDelete(false)}>{t('cancel')}</button>
          <button className="btn danger grow" onClick={() => { setConfirmDelete(false); toast(`${t('privacyDeleteDone')} LGPD-${Date.now().toString().slice(-6)}`) }}>{t('confirm')}</button>
        </div>
      </Sheet>
    </>
  )
}

// RF14 — preferências de notificação (push desligado por padrão)
export function NotificationSettings() {
  const { t, notif, set, setConsent } = useApp()
  const setN = (k: keyof typeof notif, v: boolean) => set('notif', (n) => ({ ...n, [k]: v }))
  return (
    <>
      <TopBar title={t('menuNotifications')} />
      <main className="screen pad">
        <div className="list" style={{ margin: 0 }}>
          <ToggleRow label={t('notifPush')} hint={t('notifPushInfo')} checked={notif.push} onChange={(v) => setConsent('push', v)} />
          <ToggleRow label={t('notifReplies')} checked={notif.replies} onChange={(v) => setN('replies', v)} />
          <ToggleRow label={t('notifChat')} checked={notif.chat} onChange={(v) => setN('chat', v)} />
          <ToggleRow label={t('notifBuddy')} checked={notif.buddy} onChange={(v) => setN('buddy', v)} />
          <ToggleRow label={t('notifEvents')} checked={notif.events} onChange={(v) => setN('events', v)} />
          <ToggleRow label={t('notifCourse')} checked={notif.course} onChange={(v) => setN('course', v)} />
          <ToggleRow label={t('notifOfficial')} checked disabled onChange={() => {}} />
        </div>
      </main>
    </>
  )
}

export function Notifications() {
  const { t, notifications, set } = useApp()
  const nav = useNavigate()
  const open = (id: string, to: string) => {
    set('notifications', (all) => all.map((n) => (n.id === id ? { ...n, read: true } : n)))
    nav(to)
  }
  return (
    <>
      <TopBar title={t('notifTitle')} right={<button className="icon-btn small" style={{ color: 'var(--accent)' }} onClick={() => set('notifications', (all) => all.map((n) => ({ ...n, read: true })))}>{t('notifMarkAll')}</button>} />
      <main className="screen">
        {notifications.map((n) => (
          <button key={n.id} className="chat-row" onClick={() => open(n.id, n.to)} style={{ background: n.read ? undefined : 'color-mix(in srgb, var(--accent) 8%, transparent)' }}>
            <span style={{ fontSize: '1.5rem' }}>{n.kind === 'official' ? '🏛️' : n.kind === 'buddy' ? '🤝' : n.kind === 'course' ? '🎓' : '💬'}</span>
            <div className="grow">
              <div style={{ fontWeight: n.read ? 400 : 600 }}>{n.text}</div>
              <div className="small muted">{n.time}</div>
            </div>
            {!n.read && <span className="unread"> </span>}
          </button>
        ))}
      </main>
    </>
  )
}

// RF06 — Programa Buddy
export function Buddy() {
  const { t, buddy, set, me } = useApp()
  const buddies = people.filter((p) => p.status === 'buddy' || p.status === 'alumni')
  return (
    <>
      <TopBar title={t('menuBuddy')} />
      <main className="screen">
        <div className="hero"><h2>🤝 {t('menuBuddy')}</h2><p>{t('buddyIntro')}</p><span className="art" aria-hidden>🧭</span></div>
        <div className="pad" style={{ paddingTop: 0 }}>
          {buddy === 'none' && (
            <>
              {me?.status === 'incoming' && <button className="btn block" onClick={() => set('buddy', 'requested')}>{t('buddyRequest')}</button>}
              <button className="btn ghost block" style={{ marginTop: 10 }} onClick={() => set('buddy', 'volunteer')}>{t('buddyVolunteer')}</button>
              <p className="small muted">{t('buddyRules')}</p>
            </>
          )}
          {buddy === 'requested' && <p className="card flat">✅ {t('buddyRequested')}</p>}
          {buddy === 'volunteer' && <p className="card flat">✅ {t('buddyVolunteered')}</p>}
        </div>
        <h2 className="section-title">Buddies</h2>
        {buddies.map((p) => (
          <div key={p.id} className="card row">
            <div className="avatar" style={{ width: 46, height: 46, background: p.color }}>{p.name[0]}</div>
            <div className="grow">
              <b>{p.name}</b>
              <div className="small muted">{p.course} · {p.languages.map((l) => l.lang).join(', ')}</div>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

// RF09 — agenda de eventos
export function Events() {
  const { t, eventsRsvp, set } = useApp()
  return (
    <>
      <TopBar title={t('menuEvents')} />
      <main className="screen" style={{ paddingTop: 16 }}>
        {events.map((e) => (
          <article key={e.id} className="card">
            <div className="row">
              <span style={{ fontSize: '2rem' }}>{e.emoji}</span>
              <div className="grow">
                <b>{e.title}</b>
                <div className="small muted">📅 {e.date} · 🕒 {e.time}</div>
                <div className="small muted">📍 {e.place} · {e.org}</div>
              </div>
            </div>
            <button className={`btn block ${eventsRsvp[e.id] ? '' : 'ghost'}`} style={{ marginTop: 12 }} onClick={() => set('eventsRsvp', (r) => ({ ...r, [e.id]: !r[e.id] }))}>
              {eventsRsvp[e.id] ? `✓ ${t('eventsGoing')}` : t('eventsInterest')}
            </button>
          </article>
        ))}
      </main>
    </>
  )
}

// RF11 — painel de moderação com justificativa obrigatória e log de auditoria (RNF09)
export function Moderation() {
  const { t, reports, set, auditLog, toast } = useApp()
  const [selected, setSelected] = useState<string | null>(null)
  const [why, setWhy] = useState('')
  const decide = (action: 'keep' | 'remove') => {
    const r = reports.find((x) => x.id === selected)!
    set('auditLog', (log) => [{ at: new Date().toISOString(), action, target: r.target, justification: why }, ...log])
    set('reports', (all) => all.filter((x) => x.id !== selected))
    setSelected(null)
    setWhy('')
    toast(t('modDone'))
  }
  return (
    <>
      <TopBar title={t('menuModeration')} />
      <main className="screen">
        <p className="card small muted" style={{ marginTop: 16 }}>🛡️ {t('modDemoRole')}</p>
        <h2 className="section-title">{t('modQueue')} ({reports.length})</h2>
        {reports.length === 0 && <p className="card">{t('modEmpty')}</p>}
        {reports.map((r) => (
          <button key={r.id} className="card" style={{ display: 'block', width: 'calc(100% - 32px)', textAlign: 'left', border: 0 }} onClick={() => setSelected(r.id)}>
            <b>{r.target}</b>
            <div className="small muted">{t('modReason')}: {t(r.reason)} · {r.by} · {r.time}</div>
          </button>
        ))}
        {auditLog.length > 0 && (
          <>
            <h2 className="section-title">Log de auditoria</h2>
            {auditLog.map((a, i) => (
              <div key={i} className="card small">
                <span className={a.action === 'remove' ? 'pill' : 'pill ok'}>{a.action === 'remove' ? t('modRemove') : t('modKeep')}</span>
                <div style={{ marginTop: 6 }}>{a.target}</div>
                <div className="muted">“{a.justification}” · {new Date(a.at).toLocaleString()}</div>
              </div>
            ))}
          </>
        )}
      </main>
      <Sheet open={!!selected} onClose={() => setSelected(null)} title={t('modQueue')}>
        <p>{reports.find((x) => x.id === selected)?.target}</p>
        <div className="field">
          <label htmlFor="why">{t('modJustify')}</label>
          <textarea id="why" className="input" value={why} onChange={(e) => setWhy(e.target.value)} />
        </div>
        <div className="row">
          <button className="btn ghost grow" disabled={!why.trim()} onClick={() => decide('keep')}>{t('modKeep')}</button>
          <button className="btn danger grow" disabled={!why.trim()} onClick={() => decide('remove')}>{t('modRemove')}</button>
        </div>
      </Sheet>
    </>
  )
}

export function Faq() {
  const { t } = useApp()
  const qa: [StringKey, StringKey][] = [['faqQ1', 'faqA1'], ['faqQ2', 'faqA2'], ['faqQ3', 'faqA3'], ['faqQ4', 'faqA4']]
  return (
    <>
      <TopBar title={t('menuFaq')} />
      <main className="screen" style={{ paddingTop: 16 }}>
        {qa.map(([q, a]) => (
          <details key={q} className="card">
            <summary style={{ fontWeight: 600, cursor: 'pointer' }}>{t(q)}</summary>
            <p className="muted" style={{ marginBottom: 0 }}>{t(a)}</p>
          </details>
        ))}
      </main>
    </>
  )
}
