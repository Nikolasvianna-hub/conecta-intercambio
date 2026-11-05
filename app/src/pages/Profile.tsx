import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, Pencil, Plus, Settings, Trash2 } from 'lucide-react'
import { useApp, type Me } from '../state/AppContext'
import { Avatar, statusKey, TopBar } from '../components/ui'
import { courses, news, type Level } from '../data/mock'
import type { StringKey } from '../i18n/strings'

const levels: Level[] = ['basic', 'intermediate', 'advanced', 'native']
const levelKey: Record<Level, StringKey> = { basic: 'levelBasic', intermediate: 'levelIntermediate', advanced: 'levelAdvanced', native: 'levelNative' }

function completeness(me: Me) {
  const checks = [me.displayName, me.bio, me.course, me.languages.length > 1, me.destination || me.status === 'incoming']
  return Math.round((checks.filter(Boolean).length / checks.length) * 100)
}

// RF02 + RF21 — perfil no padrão Unifor Mobile + notícias do meu curso
export default function Profile() {
  const { t, me, privacy, connections } = useApp()
  const nav = useNavigate()
  if (!me) return null
  const courseNews = news.filter((n) => n.courses.includes(me.course))
  const pct = completeness(me)
  const connCount = Object.values(connections).filter((c) => c === 'connected').length

  return (
    <main className="screen no-pad" style={{ paddingBottom: 24 }}>
      <section className="profile-head">
        <div className="top">
          <button className="icon-btn" style={{ color: '#fff' }} onClick={() => nav(-1)} aria-label={t('back')}><ArrowLeft size={26} /></button>
          <button className="icon-btn" style={{ color: '#fff' }} onClick={() => nav('/menu')} aria-label={t('tabMenu')}><Settings size={26} /></button>
        </div>
        <h1>{t('profileTitle')}</h1>
        <div className="who">
          <div style={{ position: 'relative', width: 140, margin: '0 auto' }}>
            <Avatar name={me.displayName} color="linear-gradient(135deg,#3a4bd8,#0b1a7a)" size={140} />
            <button className="edit-fab" onClick={() => nav('/perfil/editar')} aria-label={t('profileEdit')}><Pencil size={18} /></button>
          </div>
          <h2>{me.name}</h2>
          <div style={{ opacity: .9 }}>{me.matricula}</div>
          <span className="pill" style={{ background: 'rgba(255,255,255,.16)', color: '#fff', marginTop: 8 }}>
            {privacy.profile !== 'everyone' && <Lock size={12} />} {t(statusKey[me.status])}
          </span>
        </div>
        <div className="course">{me.course}</div>
      </section>

      <section className="pad">
        <h2 style={{ margin: '4px 0 10px' }}>{t('profileExchange')}</h2>
        <div className="stats">
          <div><span className="small">{t('profileConnections')}</span><b>{connCount}</b></div>
          <div><span className="small">{t('personPosts')}</span><b>3</b></div>
          <div><span className="small">{t('profileLanguages')}</span><b>{me.languages.length}</b></div>
        </div>
        <hr className="hr" />
        <div className="small">{t('profileDestination')}</div>
        <b>{me.destination || '—'}</b>
        <hr className="hr" />
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <span>{t('profileComplete')}</span><b style={{ fontSize: '1.6rem' }}>{pct}%</b>
        </div>
        <div className="progress"><div style={{ width: `${pct}%` }} /></div>
        <hr className="hr" />
        <div>{t('profileLanguages')}</div>
        {me.languages.map((l) => {
          const v = (levels.indexOf(l.level) + 1) * 25
          return (
            <div key={l.lang} style={{ marginTop: 10 }}>
              <div className="row small" style={{ justifyContent: 'space-between' }}><span>{l.lang}</span><span className="muted">{t(levelKey[l.level])}</span></div>
              <div className="progress yellow" style={{ height: 10 }}><div style={{ width: `${v}%` }} /></div>
            </div>
          )
        })}
        {me.bio && <><hr className="hr" /><p style={{ margin: 0 }}>{me.bio}</p></>}
      </section>

      <h2 className="section-title">🎓 {t('profileCourseNews')}</h2>
      {!privacy.courseNews ? (
        <p className="card muted small">{t('profileCourseNewsOff')}</p>
      ) : courseNews.length === 0 ? (
        <p className="card muted">{t('empty')}</p>
      ) : (
        courseNews.map((n) => (
          <Link key={n.id} to={`/unifor/noticia/${n.id}`} className="card row">
            <div style={{ width: 56, height: 56, borderRadius: 12, background: n.color, display: 'grid', placeItems: 'center', fontSize: 28, flexShrink: 0 }}>{n.emoji}</div>
            <div className="grow">
              <b style={{ display: 'block' }}>{n.title}</b>
              <span className="small muted">{n.author} · {n.time}</span>
            </div>
          </Link>
        ))
      )}

      <h2 className="section-title">{t('profileMyPosts')}</h2>
      <div className="grid3">
        {['🏛️', '🌎', '💻'].map((e) => <div key={e} style={{ background: 'linear-gradient(135deg, var(--accent), var(--brand-royal))' }}>{e}</div>)}
      </div>
    </main>
  )
}

export function EditProfile() {
  const { t, me, set, toast } = useApp()
  const nav = useNavigate()
  const [draft, setDraft] = useState<Me>(me!)
  const [newLang, setNewLang] = useState('')
  const upd = <K extends keyof Me>(k: K, v: Me[K]) => setDraft((d) => ({ ...d, [k]: v }))
  const save = () => { set('me', draft); toast(t('saved')); nav('/perfil') }
  return (
    <>
      <TopBar title={t('profileEdit')} />
      <main className="screen pad">
        <div className="field">
          <label htmlFor="dn">{t('profileDisplayName')}</label>
          <input id="dn" className="input" value={draft.displayName} onChange={(e) => upd('displayName', e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="bio">{t('profileBio')}</label>
          <textarea id="bio" className="input" value={draft.bio} maxLength={280} onChange={(e) => upd('bio', e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="course">Curso</label>
          <select id="course" className="input" value={draft.course} onChange={(e) => upd('course', e.target.value)}>
            {courses.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="dest">{t('profileDestination')}</label>
          <input id="dest" className="input" value={draft.destination} onChange={(e) => upd('destination', e.target.value)} />
        </div>
        <div className="field">
          <label>{t('profileStatus')}</label>
          <div className="input row" style={{ opacity: .7 }}><Lock size={16} /> {t(statusKey[draft.status])}</div>
          <span className="small muted">{t('profileBadgeLocked')}</span>
        </div>

        <h3>{t('profileLanguages')}</h3>
        {draft.languages.map((l, i) => (
          <div key={l.lang} className="row" style={{ marginBottom: 8 }}>
            <span className="grow">{l.lang}</span>
            <select className="input" style={{ width: 150 }} value={l.level} onChange={(e) => upd('languages', draft.languages.map((x, j) => (j === i ? { ...x, level: e.target.value as Level } : x)))}>
              {levels.map((lv) => <option key={lv} value={lv}>{t(levelKey[lv])}</option>)}
            </select>
            <button className="icon-btn" onClick={() => upd('languages', draft.languages.filter((_, j) => j !== i))} aria-label="remover"><Trash2 size={18} /></button>
          </div>
        ))}
        <div className="row" style={{ marginBottom: 20 }}>
          <input className="input grow" value={newLang} onChange={(e) => setNewLang(e.target.value)} placeholder={t('profileAddLanguage')} />
          <button className="btn ghost" onClick={() => { if (newLang.trim()) { upd('languages', [...draft.languages, { lang: newLang.trim(), level: 'basic' }]); setNewLang('') } }} aria-label={t('profileAddLanguage')}><Plus size={18} /></button>
        </div>
        <button className="btn block" onClick={save}>{t('save')}</button>
      </main>
    </>
  )
}
