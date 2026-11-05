import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AlertTriangle, BadgeCheck, Eye, MapPin, Plus, Search, Send, ThumbsUp } from 'lucide-react'
import { useApp } from '../state/AppContext'
import { Avatar, BrandBar, PersonAvatar, ReportButton, Stars, TopBar } from '../components/ui'
import { categories, equivalences, exchangeReports, findPerson, places, type Category } from '../data/mock'

// RF18 — Explorar: fórum da cidade (tópicos em alta, moradia, restaurantes, guia para quem é de fora)
export default function Explore() {
  const { t, topics } = useApp()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<Category | 'all'>('all')
  const nav = useNavigate()

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    return topics
      .filter((tp) => (cat === 'all' || tp.category === cat) && (!s || `${tp.title} ${tp.body}`.toLowerCase().includes(s)))
      .sort((a, b) => b.helpful + b.replies.length * 5 - (a.helpful + a.replies.length * 5))
  }, [topics, q, cat])

  const shownPlaces = places.filter((p) => (cat === 'all' || p.category === cat) && (!q || p.name.toLowerCase().includes(q.toLowerCase())))

  return (
    <>
      <BrandBar />
      <main className="screen">
        <div className="search">
          <Search size={20} className="muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('exploreSearch')} aria-label={t('search')} />
        </div>

        <div className="cat-grid" role="tablist" aria-label={t('exploreCategories')}>
          {categories.map((c) => (
            <button key={c.id} className={`cat ${cat === c.id ? 'active' : ''}`} onClick={() => setCat(cat === c.id ? 'all' : c.id)} aria-pressed={cat === c.id}>
              <span>{c.icon}</span>{t(c.label)}
            </button>
          ))}
        </div>

        {shownPlaces.length > 0 && (
          <>
            <h2 className="section-title">{t('exploreGuide')}</h2>
            <div className="hscroll">
              {shownPlaces.map((p) => (
                <article key={p.id} className="place-card">
                  <div className="img" style={{ background: `linear-gradient(135deg, ${p.color}, #0b1a63)` }}>{p.emoji}</div>
                  <div className="body">
                    <b>{p.name}</b>
                    <div className="small muted row" style={{ gap: 4 }}><MapPin size={13} /> {p.area} · {p.distanceKm} km {t('distanceFromUnifor')}</div>
                    <div className="small"><Stars value={p.rating} /> {p.rating} · {p.price}</div>
                    <div className="small muted" style={{ marginTop: 4 }}>{p.tip}</div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        <h2 className="section-title">
          {t('exploreTrending')}
          <button onClick={() => nav('/explorar/novo')}>+ {t('exploreNewTopic')}</button>
        </h2>
        {filtered.length === 0 && <p className="card muted">{t('empty')}</p>}
        {filtered.map((tp, i) => {
          const a = findPerson(tp.authorId)
          const c = categories.find((x) => x.id === tp.category)!
          return (
            <Link key={tp.id} to={`/explorar/topico/${tp.id}`} className="card" style={{ display: 'block' }}>
              <div className="row small muted" style={{ gap: 8 }}>
                {i < 3 && cat === 'all' && !q && <span className="pill">🔥 #{i + 1}</span>}
                <span>{c.icon} {t(c.label)}</span>
                <span>· {tp.time}</span>
              </div>
              <h3 style={{ margin: '8px 0 4px', fontSize: '1.05rem' }}>{tp.title}</h3>
              <p className="muted small" style={{ margin: 0 }}>{tp.body}</p>
              <div className="actions">
                <span className="row" style={{ gap: 4 }}><ThumbsUp size={15} /> {tp.helpful}</span>
                <span>💬 {tp.replies.length} {t('replies')}</span>
                <span className="row" style={{ gap: 4 }}><Eye size={15} /> {tp.views}</span>
                <span className="grow" />
                {a && <span className="small">{a.name.split(' ')[0]} {a.flag}</span>}
              </div>
            </Link>
          )
        })}

        {(cat === 'all' || cat === 'academic') && (
          <>
            <h2 className="section-title">{t('exploreReports')}</h2>
            <div className="hscroll">
              {exchangeReports.map((r) => (
                <article key={r.id} className="card flat" style={{ minWidth: 250 }}>
                  <b>{r.university}</b>
                  <div className="small muted">{r.country}</div>
                  <div className="small" style={{ margin: '6px 0' }}><Stars value={r.rating} /> {r.rating} · {r.cost}</div>
                  <div className="small">👍 {r.pros}</div>
                  <div className="small">👎 {r.cons}</div>
                  <div className="small muted" style={{ marginTop: 6 }}>{t('reportDisclaimer')}</div>
                </article>
              ))}
            </div>
            <h2 className="section-title">{t('exploreEquivalences')}</h2>
            <div className="list">
              {equivalences.map((e) => (
                <div key={e.id} className="list-item">
                  <span style={{ fontSize: '1.4rem' }}>🔁</span>
                  <div className="grow">
                    {e.foreign} → <b>{e.unifor}</b>
                    <small>{e.partner} · {e.course} · {e.semester}</small>
                  </div>
                </div>
              ))}
            </div>
            <p className="muted small" style={{ margin: '0 16px' }}>{t('equivalenceDisclaimer')}</p>
          </>
        )}
      </main>
      <button className="fab" onClick={() => nav('/explorar/novo')} aria-label={t('exploreNewTopic')}><Plus size={26} /></button>
    </>
  )
}

export function TopicDetail() {
  const { id } = useParams()
  const { t, topics, set, liked, me } = useApp()
  const [text, setText] = useState('')
  const tp = topics.find((x) => x.id === id)
  if (!tp) return <TopBar title="404" />
  const author = findPerson(tp.authorId)
  const c = categories.find((x) => x.id === tp.category)!
  const key = `topic:${tp.id}`

  const toggleHelpful = () => {
    const on = !liked[key]
    set('liked', (l) => ({ ...l, [key]: on }))
    set('topics', (all) => all.map((x) => (x.id === tp.id ? { ...x, helpful: x.helpful + (on ? 1 : -1) } : x)))
  }
  const sendReply = () => {
    if (!text.trim()) return
    set('topics', (all) => all.map((x) => (x.id === tp.id ? { ...x, replies: [...x.replies, { id: crypto.randomUUID(), authorId: 'me', text: text.trim(), time: 'agora', helpful: 0 }] } : x)))
    setText('')
  }

  return (
    <>
      <TopBar title={`${c.icon} ${t(c.label)}`} right={<ReportButton target={`Tópico: "${tp.title}"`} compact />} />
      <main className="screen">
        <article className="card" style={{ marginTop: 16 }}>
          {tp.authorId === 'me' && me && (
            <Link to="/perfil" className="row">
              <Avatar name={me.displayName} color="var(--brand-royal)" size={42} />
              <div><b>{me.displayName}</b><div className="small muted">{me.course} · {tp.time}</div></div>
            </Link>
          )}
          {author && (
            <Link to={`/pessoas/${author.id}`} className="row">
              <PersonAvatar p={author} size={42} />
              <div>
                <b>{author.name}</b> {author.verified && <BadgeCheck size={15} color="var(--accent)" />}
                <div className="small muted">{author.course} · {tp.time}</div>
              </div>
            </Link>
          )}
          <h2 style={{ margin: '14px 0 6px', fontSize: '1.25rem' }}>{tp.title}</h2>
          <p style={{ margin: 0, lineHeight: 1.5 }}>{tp.body}</p>
          {tp.category === 'housing' && (
            <div className="disclaimer"><AlertTriangle size={18} /> <span>{t('housingDisclaimer')}</span></div>
          )}
          <div className="actions">
            <button className={liked[key] ? 'on' : ''} onClick={toggleHelpful} aria-pressed={!!liked[key]}><ThumbsUp size={16} /> {t('exploreHelpful')} · {tp.helpful}</button>
            <span className="row" style={{ gap: 4 }}><Eye size={15} /> {tp.views}</span>
          </div>
        </article>

        <h3 className="section-title" style={{ fontSize: '1.05rem' }}>{tp.replies.length} {t('replies')}</h3>
        {tp.replies.map((r) => {
          const p = r.authorId === 'me' ? null : findPerson(r.authorId)
          const name = p ? p.name : me?.displayName ?? ''
          return (
            <div key={r.id} className="card">
              <div className="row small">
                <b>{name}</b>
                {p?.status === 'staff' && <span className="pill official">{t('official')}</span>}
                <span className="muted">· {r.time}</span>
                <span className="grow" />
                <ReportButton target={`Resposta de ${name}`} compact />
              </div>
              <p style={{ margin: '6px 0 0' }}>{r.text}</p>
              <div className="small muted" style={{ marginTop: 6 }}>👍 {r.helpful}</div>
            </div>
          )
        })}
      </main>
      <div className="composer">
        <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendReply()} placeholder={t('writeReply')} aria-label={t('writeReply')} />
        <button className="send" onClick={sendReply} aria-label={t('send')}><Send size={20} /></button>
      </div>
    </>
  )
}

export function NewTopic() {
  const { t, set, toast } = useApp()
  const nav = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState<Category>('food')
  const publish = () => {
    if (!title.trim() || !body.trim()) return
    const id = crypto.randomUUID()
    set('topics', (all) => [{ id, category, title: title.trim(), body: body.trim().slice(0, 1000), authorId: 'me', time: 'agora', views: 1, helpful: 0, replies: [] }, ...all])
    toast(t('saved'))
    nav(`/explorar/topico/${id}`, { replace: true })
  }
  return (
    <>
      <TopBar title={t('exploreNewTopic')} />
      <main className="screen pad">
        <div className="field">
          <label htmlFor="cat">{t('exploreTopicCategory')}</label>
          <select id="cat" className="input" value={category} onChange={(e) => setCategory(e.target.value as Category)}>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.icon} {t(c.label)}</option>)}
          </select>
        </div>
        {category === 'housing' && (
          <>
            <div className="disclaimer"><BadgeCheck size={18} /> <span>{t('exploreHousingOnlyVerified')}</span></div>
            <div className="disclaimer"><AlertTriangle size={18} /> <span>{t('housingDisclaimer')}</span></div>
          </>
        )}
        <div className="field">
          <label htmlFor="title">{t('exploreTopicTitle')}</label>
          <input id="title" className="input" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor="body">{t('exploreTopicBody')}</label>
          <textarea id="body" className="input" value={body} onChange={(e) => setBody(e.target.value)} maxLength={1000} />
          <span className="small muted" style={{ textAlign: 'right' }}>{body.length}/1000</span>
        </div>
        <button className="btn block" disabled={!title.trim() || !body.trim()} onClick={publish}>{t('publish')}</button>
      </main>
    </>
  )
}
