import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BadgeCheck, Ban, CheckCheck, Lock, MessageCircle, Search, Send, UserCheck, UserPlus } from 'lucide-react'
import { useApp } from '../state/AppContext'
import { Avatar, BrandBar, PersonAvatar, ReportButton, statusKey, TopBar } from '../components/ui'
import { findPerson, people, type Conversation } from '../data/mock'
import type { StringKey } from '../i18n/strings'

const levelKey: Record<string, StringKey> = { basic: 'levelBasic', intermediate: 'levelIntermediate', advanced: 'levelAdvanced', native: 'levelNative' }

function convTitle(c: Conversation) {
  if (c.group) return { name: c.group.name, color: c.group.color, online: false }
  const p = findPerson(c.personId!)!
  return { name: p.name, color: p.color, online: !!p.online }
}

// RF17 — Conversas estilo WhatsApp + busca de perfis (RF03)
export default function Chats() {
  const { t, conversations, blocked } = useApp()
  const [q, setQ] = useState('')
  const [tab, setTab] = useState<'all' | 'groups' | 'requests'>('all')
  const nav = useNavigate()

  const list = conversations.filter((c) => {
    if (c.personId && blocked.includes(c.personId)) return false
    if (tab === 'groups') return !!c.group
    if (tab === 'requests') return !!c.request
    return !c.request
  })
  const s = q.trim().toLowerCase()
  const shown = s ? list.filter((c) => convTitle(c).name.toLowerCase().includes(s)) : list
  const foundPeople = s ? people.filter((p) => `${p.name} ${p.course} ${p.country}`.toLowerCase().includes(s)) : []
  const requests = conversations.filter((c) => c.request).length

  return (
    <>
      <BrandBar />
      <main className="screen">
        <div className="search">
          <Search size={20} className="muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('chatsSearch')} aria-label={t('chatsSearch')} />
        </div>

        {!s && (
          <>
            <h2 className="section-title">{t('chatsOnline')}</h2>
            <div className="stories">
              {people.filter((p) => p.online).map((p) => (
                <Link key={p.id} to={`/pessoas/${p.id}`} className="story">
                  <PersonAvatar p={p} size={66} />
                  <span>{p.name.split(' ')[0]}<br />{p.name.split(' ')[1]}</span>
                </Link>
              ))}
            </div>
          </>
        )}

        {s && (
          <>
            <h2 className="section-title">{t('chatsPeople')}</h2>
            {foundPeople.length === 0 && <p className="muted" style={{ margin: '0 16px' }}>{t('chatsNoResult')}</p>}
            {foundPeople.map((p) => (
              <Link key={p.id} to={`/pessoas/${p.id}`} className="chat-row">
                <PersonAvatar p={p} size={48} />
                <div className="grow">
                  <b>{p.name}</b> {p.flag}
                  <div className="small muted ellipsis">{t(statusKey[p.status])} · {p.course}</div>
                </div>
              </Link>
            ))}
          </>
        )}

        <div style={{ padding: '12px 16px' }}>
          <div className="segmented" role="tablist">
            <button className={tab === 'all' ? 'active' : ''} onClick={() => setTab('all')}>{t('chatsAll')}</button>
            <button className={tab === 'groups' ? 'active' : ''} onClick={() => setTab('groups')}>{t('chatsGroups')}</button>
            <button className={tab === 'requests' ? 'active' : ''} onClick={() => setTab('requests')}>{t('chatsRequests')}{requests ? ` (${requests})` : ''}</button>
          </div>
        </div>

        {shown.length === 0 && <p className="muted" style={{ margin: '0 16px' }}>{t('empty')}</p>}
        {shown.map((c) => {
          const info = convTitle(c)
          const last = c.messages[c.messages.length - 1]
          const unread = c.messages.filter((m) => m.from !== 'me').length && last.from !== 'me' ? 1 : 0
          return (
            <button key={c.id} className="chat-row" onClick={() => nav(`/conversas/${c.id}`)}>
              <Avatar name={info.name} color={info.color} size={52} online={info.online} />
              <div className="grow">
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <b className="ellipsis">{info.name}</b>
                  <span className="small muted">{last?.time}</span>
                </div>
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <span className="small muted ellipsis">
                    {last?.from === 'me' && <CheckCheck size={14} color={last.read ? 'var(--accent)' : undefined} />} {c.group && last.from !== 'me' ? `${findPerson(last.from)?.name.split(' ')[0]}: ` : ''}{last?.text}
                  </span>
                  {unread > 0 && <span className="unread">{unread}</span>}
                </div>
              </div>
            </button>
          )
        })}
      </main>
    </>
  )
}

const autoReplies = ['Boa! 😄', 'Combinado!', 'Valeu pela dica 🙏', 'Te vejo no campus!', 'Hahaha verdade']

export function ChatRoom() {
  const { id } = useParams()
  const { t, conversations, set, blocked, privacy, toast } = useApp()
  const nav = useNavigate()
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const conv = conversations.find((c) => c.id === id)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [conv?.messages.length, typing])

  if (!conv) return <TopBar title="404" />
  const info = convTitle(conv)
  const person = conv.personId ? findPerson(conv.personId) : undefined
  const isBlocked = !!person && blocked.includes(person.id)

  const push = (from: string, txt: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    set('conversations', (all) => all.map((c) => (c.id === conv.id ? { ...c, messages: [...c.messages, { id: crypto.randomUUID(), from, text: txt, time, read: privacy.readReceipts }] } : c)))
  }
  const send = () => {
    if (!text.trim() || isBlocked) return
    push('me', text.trim())
    setText('')
    // simulação de resposta para a demonstração do protótipo
    const responder = person?.id ?? 'amara'
    setTyping(true)
    window.setTimeout(() => {
      setTyping(false)
      push(responder, autoReplies[Math.floor(Math.random() * autoReplies.length)])
    }, 1600)
  }
  const accept = () => set('conversations', (all) => all.map((c) => (c.id === conv.id ? { ...c, request: false } : c)))
  const decline = () => { set('conversations', (all) => all.filter((c) => c.id !== conv.id)); nav('/conversas') }
  const block = () => {
    if (!person) return
    set('blocked', (b) => [...b, person.id])
    toast(`${person.name}: ${t('block')} ✓`)
    nav('/conversas')
  }

  return (
    <>
      <header className="topbar">
        <button className="icon-btn" aria-label={t('back')} onClick={() => nav('/conversas')}>←</button>
        <Link to={person ? `/pessoas/${person.id}` : '#'} className="row grow">
          <Avatar name={info.name} color={info.color} size={40} online={info.online} />
          <div className="grow">
            <b className="ellipsis" style={{ display: 'block' }}>{info.name}</b>
            <span className="small muted">{typing ? t('chatsTyping') : conv.group ? `${conv.group.members} membros` : info.online ? t('online') : person?.course}</span>
          </div>
        </Link>
        <ReportButton target={`Conversa com ${info.name}`} compact />
        {person && <button className="icon-btn" onClick={block} aria-label={t('block')}><Ban size={20} /></button>}
      </header>

      <div className="messages">
        <div className="system-note"><Lock size={12} /> {t('chatsE2E')}</div>
        {conv.messages.map((m) => (
          <div key={m.id} className={`msg ${m.from === 'me' ? 'me' : ''}`}>
            {conv.group && m.from !== 'me' && <b className="small" style={{ color: findPerson(m.from)?.color }}>{findPerson(m.from)?.name}<br /></b>}
            {m.text}
            <time>{m.time} {m.from === 'me' && <CheckCheck size={13} color={m.read ? 'var(--accent)' : undefined} />}</time>
          </div>
        ))}
        {typing && <div className="msg muted">•••</div>}
        <div ref={endRef} />
      </div>

      {conv.request ? (
        <div className="pad" style={{ background: 'var(--bar)' }}>
          <p className="small muted" style={{ marginTop: 0 }}>{t('chatsRequestInfo')}</p>
          <div className="row">
            <button className="btn ghost grow" onClick={decline}>{t('chatsDecline')}</button>
            <button className="btn grow" onClick={accept}>{t('chatsAccept')}</button>
          </div>
        </div>
      ) : isBlocked ? (
        <p className="pad muted small" style={{ background: 'var(--bar)', margin: 0 }}>{t('chatsBlocked')}</p>
      ) : (
        <div className="composer">
          <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder={t('chatsTypeMessage')} aria-label={t('chatsTypeMessage')} />
          <button className="send" onClick={send} aria-label={t('send')}><Send size={20} /></button>
        </div>
      )}
    </>
  )
}

// Perfil de outra pessoa: LinkedIn (conectar, curso, idiomas) + Instagram (grade de posts)
export function PersonProfile() {
  const { id } = useParams()
  const { t, connections, set, conversations, toast } = useApp()
  const nav = useNavigate()
  const p = findPerson(id!)
  const state = p ? connections[p.id] : undefined
  const gridItems = useMemo(() => ['🏖️', '📚', '☕', '🎓', '🌮', '📷'].slice(0, p?.private && state !== 'connected' ? 0 : 6), [p, state])
  if (!p) return <TopBar title="404" />

  const connect = () => {
    if (state) return
    set('connections', (c) => ({ ...c, [p.id]: 'pending' }))
    toast(`${t('personPending')} ✓`)
  }
  const message = () => {
    const existing = conversations.find((c) => c.personId === p.id)
    if (existing) return nav(`/conversas/${existing.id}`)
    const cid = `c-${p.id}`
    set('conversations', (all) => [{ id: cid, personId: p.id, messages: [] }, ...all])
    nav(`/conversas/${cid}`)
  }
  const locked = p.private && state !== 'connected'

  return (
    <>
      <TopBar title={p.name} right={<ReportButton target={`Perfil: ${p.name}`} compact />} />
      <main className="screen">
        <div className="pad row" style={{ gap: 20 }}>
          <PersonAvatar p={p} size={88} />
          <div className="stats">
            <div><b>{gridItems.length}</b><span className="small muted">{t('personPosts')}</span></div>
            <div><b>{p.connections}</b><span className="small muted">{t('personConnections')}</span></div>
          </div>
        </div>
        <div style={{ padding: '0 16px' }}>
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>{p.name} {p.verified && <BadgeCheck size={18} color="var(--accent)" aria-label={t('verified')} />}</h2>
          <div className="row" style={{ gap: 6, flexWrap: 'wrap', margin: '6px 0' }}>
            <span className={`pill ${p.status === 'staff' ? 'official' : ''}`}>{t(statusKey[p.status])}</span>
            <span className="small muted">{p.course}</span>
          </div>
          <div className="small">{t('personFrom')}: {p.flag} {p.country}{p.destination ? ` · ${t('personGoingTo')}: ${p.destination}` : ''}</div>
          {!locked && <p style={{ margin: '10px 0' }}>{p.bio}</p>}
        </div>
        <div className="row pad">
          <button className={`btn grow ${state ? 'ghost' : ''}`} onClick={connect}>
            {state === 'connected' ? <><UserCheck size={18} /> {t('personConnected')}</> : state === 'pending' ? t('personPending') : <><UserPlus size={18} /> {t('personConnect')}</>}
          </button>
          <button className="btn ghost grow" onClick={message}><MessageCircle size={18} /> {t('personMessage')}</button>
        </div>

        {locked ? (
          <p className="card muted"><Lock size={16} /> {t('personPrivate')}</p>
        ) : (
          <>
            <h3 className="section-title" style={{ fontSize: '1.05rem' }}>{t('personLanguages')}</h3>
            <div className="chips">
              {p.languages.map((l) => <span key={l.lang} className="chip">{l.lang} · {t(levelKey[l.level])}</span>)}
            </div>
            <h3 className="section-title" style={{ fontSize: '1.05rem' }}>{t('personPosts')}</h3>
            <div className="grid3">
              {gridItems.map((e, i) => <div key={i} style={{ background: `linear-gradient(135deg, ${p.color}, #0b1a63)` }}>{e}</div>)}
            </div>
          </>
        )}
      </main>
    </>
  )
}
