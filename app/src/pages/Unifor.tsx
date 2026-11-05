import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BadgeCheck, Heart, MessageSquare, Plus, Share2, Volume2, VolumeX } from 'lucide-react'
import { useApp } from '../state/AppContext'
import { BrandBar, PersonAvatar, ReportButton, Sheet, TopBar } from '../components/ui'
import { findPerson, news, reels, type NewsKind } from '../data/mock'
import type { StringKey } from '../i18n/strings'

type Filter = 'all' | 'course' | NewsKind
const filters: { id: Filter; label: StringKey }[] = [
  { id: 'all', label: 'uniforAll' },
  { id: 'course', label: 'uniforMyCourse' },
  { id: 'calls', label: 'uniforCalls' },
  { id: 'faculty', label: 'uniforFaculty' },
  { id: 'events', label: 'uniforEvents' },
  { id: 'tv', label: 'uniforTv' },
  { id: 'intl', label: 'uniforIntl' },
]

// RF05 + RF12 + RF21 — aba central: jornal da Unifor (notícias oficiais) e Reels institucionais
export default function Unifor() {
  const [view, setView] = useState<'news' | 'reels'>('news')
  return view === 'news' ? <NewsFeed onReels={() => setView('reels')} /> : <ReelsView onNews={() => setView('news')} />
}

function NewsFeed({ onReels }: { onReels: () => void }) {
  const { t, me, privacy, liked, set } = useApp()
  const [filter, setFilter] = useState<Filter>('all')
  const [compose, setCompose] = useState(false)
  const nav = useNavigate()
  const items = news.filter((n) => {
    if (filter === 'all') return true
    if (filter === 'course') return privacy.courseNews && (n.courses.includes(me!.course))
    return n.kind === filter
  })

  return (
    <>
      <BrandBar />
      <main className="screen">
        <div style={{ padding: '12px 16px 0' }}>
          <div className="segmented">
            <button className="active">{t('uniforNews')}</button>
            <button onClick={onReels}>{t('uniforReels')}</button>
          </div>
        </div>

        <section className="hero">
          <h2>{t('uniforHighlight')}</h2>
          <p>{t('uniforHighlightText')}</p>
          <button className="btn white" onClick={() => nav('/unifor/noticia/n1')}>{t('uniforHighlightCta')}</button>
          <span className="art" aria-hidden>🌍</span>
        </section>

        <h2 className="section-title">{t('uniforTv')}</h2>
        <div className="stories">
          {reels.map((r) => {
            const a = findPerson(r.authorId)!
            return (
              <button key={r.id} className="story" onClick={onReels}>
                <div className="avatar" style={{ width: 66, height: 66, background: `linear-gradient(135deg, ${r.color1}, ${r.color2})`, fontSize: 28, border: '3px solid var(--accent)' }}>{r.emoji}</div>
                <span className="ellipsis" style={{ width: '100%' }}>{a.name.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>

        <div className="chips" style={{ marginTop: 8 }}>
          {filters.map((f) => (
            <button key={f.id} className={`chip ${filter === f.id ? 'active' : ''}`} onClick={() => setFilter(f.id)}>{t(f.label)}</button>
          ))}
        </div>
        {filter === 'course' && !privacy.courseNews && <p className="card muted small">{t('profileCourseNewsOff')}</p>}

        {items.map((n) => {
          const key = `news:${n.id}`
          return (
            <article key={n.id} className="card news">
              <div className="row small" style={{ gap: 8 }}>
                <b>{n.author}</b> <BadgeCheck size={15} color="var(--accent)" />
                <span className="muted">· {n.time}</span>
              </div>
              {n.official && <span className="pill official" style={{ marginTop: 8 }}>🏛️ {t('official')}</span>}
              <Link to={`/unifor/noticia/${n.id}`}>
                <div className="cover" style={{ background: `linear-gradient(135deg, ${n.color}, #0b1a63)` }}>{n.emoji}</div>
                <h3>{n.title}</h3>
                <p className="muted small" style={{ margin: 0 }}>{n.summary}</p>
              </Link>
              <div className="actions">
                <button className={liked[key] ? 'on' : ''} onClick={() => set('liked', (l) => ({ ...l, [key]: !l[key] }))} aria-pressed={!!liked[key]}>
                  <Heart size={17} fill={liked[key] ? 'currentColor' : 'none'} /> {n.likes + (liked[key] ? 1 : 0)}
                </button>
                <button onClick={() => nav(`/unifor/noticia/${n.id}`)}><MessageSquare size={17} /> {n.comments}</button>
                <button><Share2 size={17} /> {t('share')}</button>
              </div>
            </article>
          )
        })}
      </main>
      <button className="fab" onClick={() => setCompose(true)} aria-label={t('uniforNewPost')}><Plus size={26} /></button>
      <ComposeSheet open={compose} onClose={() => setCompose(false)} />
    </>
  )
}

function ComposeSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, toast } = useApp()
  const [text, setText] = useState('')
  return (
    <Sheet open={open} onClose={onClose} title={t('uniforNewPost')}>
      <p className="small muted" style={{ marginTop: -6 }}>{t('uniforNewPostInfo')}</p>
      <textarea className="input" value={text} onChange={(e) => setText(e.target.value)} maxLength={1000} placeholder="📷 🎬 …" aria-label={t('uniforNewPost')} />
      <p className="small muted">🎬 {t('uniforLimit')} · 🖼️ máx. 4 fotos</p>
      <button className="btn block" disabled={!text.trim()} onClick={() => { onClose(); setText(''); toast(t('uniforPending')) }}>{t('publish')}</button>
    </Sheet>
  )
}

function ReelsView({ onNews }: { onNews: () => void }) {
  const { t, liked, set } = useApp()
  const [muted, setMuted] = useState(true)
  return (
    <main className="screen no-pad" style={{ position: 'relative', background: '#000' }}>
      <div className="reels-top">
        <button onClick={onNews}>{t('uniforNews')}</button>
        <button className="active">{t('uniforReels')}</button>
      </div>
      <div className="reels">
        {reels.map((r) => {
          const a = findPerson(r.authorId)!
          const key = `reel:${r.id}`
          return (
            <section key={r.id} className="reel" style={{ background: `linear-gradient(160deg, ${r.color1}, ${r.color2})` }}>
              <span className="big" aria-hidden>{r.emoji}</span>
              <div className="side">
                <button className={liked[key] ? 'on' : ''} onClick={() => set('liked', (l) => ({ ...l, [key]: !l[key] }))} aria-label={t('like')}>
                  <Heart size={30} fill={liked[key] ? 'currentColor' : 'none'} />{r.likes + (liked[key] ? 1 : 0)}
                </button>
                <button aria-label={t('comment')}><MessageSquare size={30} />{r.comments}</button>
                <button aria-label={t('share')}><Share2 size={30} />{t('share')}</button>
                <button onClick={() => setMuted(!muted)} aria-label={t('uniforSound')}>{muted ? <VolumeX size={28} /> : <Volume2 size={28} />}</button>
                <ReportButton target={`Reel de ${a.name}`} compact />
              </div>
              <div className="info">
                <Link to={`/pessoas/${a.id}`} className="row" style={{ gap: 8 }}>
                  <PersonAvatar p={a} size={36} />
                  <b>{a.name}</b>
                  {a.status === 'staff' && <span className="pill official">🏛️</span>}
                </Link>
                <p style={{ margin: '8px 0 0' }}>{r.caption}</p>
                <span className="small" style={{ opacity: .8 }}>0:{String(r.seconds).padStart(2, '0')}</span>
              </div>
              <div className="bar"><div style={{ animationDuration: `${r.seconds}s` }} /></div>
            </section>
          )
        })}
      </div>
    </main>
  )
}

export function NewsDetail() {
  const { id } = useParams()
  const { t } = useApp()
  const n = news.find((x) => x.id === id)
  if (!n) return <TopBar title="404" />
  return (
    <>
      <TopBar title={n.author} right={<ReportButton target={`Notícia: ${n.title}`} compact />} />
      <main className="screen">
        <div className="news" style={{ padding: 16 }}>
          {n.official && <span className="pill official">🏛️ {t('official')}</span>}
          <div className="cover" style={{ background: `linear-gradient(135deg, ${n.color}, #0b1a63)`, height: 200 }}>{n.emoji}</div>
          <h2 style={{ margin: '0 0 8px' }}>{n.title}</h2>
          <p className="muted small">{n.author} · {n.time}</p>
          <p style={{ lineHeight: 1.6 }}>{n.body}</p>
          {n.courses[0] !== '*' && <div className="chips" style={{ padding: 0 }}>{n.courses.map((c) => <span key={c} className="chip">🎓 {c}</span>)}</div>}
        </div>
      </main>
    </>
  )
}
