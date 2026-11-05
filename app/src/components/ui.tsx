import { useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Bell, Flag, ShieldAlert } from 'lucide-react'
import { useApp } from '../state/AppContext'
import type { StringKey } from '../i18n/strings'
import type { Person, Status } from '../data/mock'

export function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}

export function Avatar({ name, color = '#5b6475', size = 48, online }: { name: string; color?: string; size?: number; online?: boolean }) {
  return (
    <div className="avatar" style={{ width: size, height: size, background: color, fontSize: size * 0.36 }} aria-hidden>
      {initials(name)}
      {online && <i className="on" />}
    </div>
  )
}

export function PersonAvatar({ p, size = 48 }: { p: Person; size?: number }) {
  return <Avatar name={p.name} color={p.color} size={size} online={p.online} />
}

/** Marca do app: escudo simplificado (não reproduz o logotipo oficial). */
export function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <path d="M16 2 4 7v8c0 7.5 5.1 13.4 12 15 6.9-1.6 12-7.5 12-15V7L16 2Z" fill="var(--accent)" />
      <path d="M9 14a7 7 0 0 1 14 0M12 15.5a4 4 0 0 1 8 0" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="19" r="2.4" fill="#fff" />
    </svg>
  )
}

export function BrandBar({ right }: { right?: ReactNode }) {
  const { t, notifications } = useApp()
  const nav = useNavigate()
  const unread = notifications.filter((n) => !n.read).length
  return (
    <header className="topbar">
      <div className="brand">
        <Logo />
        <b>Unifor</b>
        <span>{t('appName')}</span>
      </div>
      {right}
      <button className="icon-btn" aria-label={t('notifTitle')} onClick={() => nav('/notificacoes')}>
        <Bell size={22} />
        {unread > 0 && <span className="badge-dot">{unread}</span>}
      </button>
    </header>
  )
}

export function TopBar({ title, right, back = true }: { title: string; right?: ReactNode; back?: boolean }) {
  const nav = useNavigate()
  const { t } = useApp()
  return (
    <header className="topbar">
      {back && (
        <button className="icon-btn" aria-label={t('back')} onClick={() => nav(-1)}>
          <ArrowLeft size={22} />
        </button>
      )}
      <h1 className="ellipsis">{title}</h1>
      {right}
    </header>
  )
}

export function Toggle({ checked, onChange, disabled, label }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean; label: string }) {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} aria-label={label} />
      <span />
    </label>
  )
}

export function ToggleRow({ label, hint, checked, onChange, disabled }: { label: string; hint?: string; checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <div className="list-item">
      <div className="grow">
        {label}
        {hint && <small>{hint}</small>}
      </div>
      <Toggle checked={checked} onChange={onChange} disabled={disabled} label={label} />
    </div>
  )
}

export function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  if (!open) return null
  return (
    <div className="overlay" onClick={onClose} role="dialog" aria-modal aria-label={title}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="grab" />
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

const reasons: StringKey[] = ['reportReasonHarass', 'reportReasonFake', 'reportReasonSpam', 'reportReasonHousing', 'reportReasonOther']

/** RF10 — denúncia disponível em posts, comentários, perfis e conversas. */
export function ReportButton({ target, compact }: { target: string; compact?: boolean }) {
  const { t, set, toast } = useApp()
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState<StringKey>('reportReasonHarass')
  const [detail, setDetail] = useState('')
  const submit = () => {
    set('reports', (r) => [{ id: crypto.randomUUID(), target, reason, by: 'Você', time: t('today') }, ...r])
    setOpen(false)
    setDetail('')
    toast(t('reportSent'))
  }
  return (
    <>
      <button className={compact ? 'icon-btn' : ''} onClick={() => setOpen(true)} aria-label={t('report')}>
        <Flag size={compact ? 20 : 16} /> {!compact && t('report')}
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} title={t('reportTitle')}>
        <p className="muted small">{target}</p>
        {reasons.map((r) => (
          <button key={r} className={`radio ${reason === r ? 'active' : ''}`} onClick={() => setReason(r)}>
            <ShieldAlert size={18} /> {t(r)}
          </button>
        ))}
        <div className="field" style={{ marginTop: 10 }}>
          <label htmlFor="rep-detail">{t('reportDetail')}</label>
          <textarea id="rep-detail" className="input" value={detail} onChange={(e) => setDetail(e.target.value)} />
        </div>
        <button className="btn block" onClick={submit}>{t('send')}</button>
      </Sheet>
    </>
  )
}

export const statusKey: Record<Status, StringKey> = {
  local: 'statusLocal',
  incoming: 'statusIncoming',
  outgoing: 'statusOutgoing',
  alumni: 'statusAlumni',
  buddy: 'statusBuddy',
  staff: 'statusStaff',
}

export function Stars({ value }: { value: number }) {
  const full = Math.round(value)
  return <span className="stars" aria-label={`${value} / 5`}>{'★'.repeat(full)}{'☆'.repeat(5 - full)}</span>
}
