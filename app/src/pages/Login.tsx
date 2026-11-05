import { useState } from 'react'
import { Globe } from 'lucide-react'
import { useApp } from '../state/AppContext'
import { Logo } from '../components/ui'
import { languageNames, type Lang } from '../i18n/strings'

// RF01 / RN02 — login com e-mail institucional ou código de aceite de intercâmbio.
export default function Login() {
  const { t, set, lang, setConsent } = useApp()
  const [email, setEmail] = useState('nikolas.vianna@edu.unifor.br')
  const [password, setPassword] = useState('')
  const [exchange, setExchange] = useState(false)
  const [code, setCode] = useState('')
  const [consent, setConsentChecked] = useState(false)
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const institutional = /@(edu\.)?unifor\.br$/i.test(email.trim())
    if (!consent) return setError(t('loginErrorConsent'))
    if (exchange) {
      if (!/^INC-\d{4}-\d{4}$/i.test(code.trim())) return setError(t('loginErrorCode'))
    } else if (!institutional) {
      return setError(t('loginErrorDomain'))
    }
    setConsent('analytics', false) // registra o aceite inicial com analytics desligado (privacidade por padrão)
    set('me', {
      name: exchange ? 'Visiting Student' : 'Nikolas Vianna de Carvalho',
      displayName: exchange ? 'Visiting Student' : 'Nikolas Vianna',
      matricula: exchange ? code.toUpperCase() : '2623878',
      email: email.trim(),
      course: 'Análise e Desenv. de Sistemas',
      status: exchange ? 'incoming' : 'outgoing',
      destination: exchange ? '' : 'Universidad de Chile 🇨🇱',
      bio: 'Estudante de ADS na Unifor. Interessado em intercâmbio na América Latina.',
      languages: [{ lang: 'Português', level: 'native' }, { lang: 'Inglês', level: 'advanced' }, { lang: 'Espanhol', level: 'basic' }],
    })
  }

  return (
    <div className="screen no-pad">
      <div className="login">
        <div className="head">
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div className="row" style={{ gap: 8 }}>
              <Logo size={34} />
              <b style={{ fontSize: '1.4rem' }}>Unifor</b>
            </div>
            <label className="row small" style={{ gap: 6 }}>
              <Globe size={18} />
              <span className="sr-only">{t('menuLanguage')}</span>
              <select value={lang} onChange={(e) => set('lang', e.target.value as Lang)} style={{ background: 'transparent', border: 0, color: '#fff' }}>
                {Object.entries(languageNames).map(([k, v]) => <option key={k} value={k} style={{ color: '#000' }}>{v}</option>)}
              </select>
            </label>
          </div>
          <h1>{t('appName')}</h1>
          <p style={{ margin: 0, opacity: .9 }}>{t('appTagline')}</p>
        </div>

        <form className="card" onSubmit={submit} noValidate>
          <h2 style={{ marginTop: 0 }}>{t('loginTitle')}</h2>
          <p className="muted small" style={{ marginTop: -6 }}>{t('loginSubtitle')}</p>

          <div className="field">
            <label htmlFor="email">{t('loginEmail')}</label>
            <input id="email" className="input" type="email" autoComplete="username" value={email} onChange={(e) => { setEmail(e.target.value); setError('') }} />
          </div>
          <div className="field">
            <label htmlFor="pwd">{t('loginPassword')}</label>
            <input id="pwd" className="input" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>

          <label className="row small" style={{ marginBottom: 12 }}>
            <input type="checkbox" checked={exchange} onChange={(e) => { setExchange(e.target.checked); setError('') }} />
            {t('loginExchangeCode')}
          </label>
          {exchange && (
            <div className="field">
              <label htmlFor="code">{t('loginCode')}</label>
              <input id="code" className="input" value={code} onChange={(e) => { setCode(e.target.value); setError('') }} placeholder="INC-2027-0042" />
            </div>
          )}

          <label className="row small" style={{ marginBottom: 14, alignItems: 'flex-start' }}>
            <input type="checkbox" checked={consent} onChange={(e) => { setConsentChecked(e.target.checked); setError('') }} />
            {t('loginConsent')}
          </label>

          {error && <p className="error" role="alert">{error}</p>}
          <button className="btn block" type="submit">{t('loginButton')}</button>
          <p className="small" style={{ textAlign: 'center', color: 'var(--accent)' }}>{t('loginForgot')}</p>
          <p className="muted small" style={{ textAlign: 'center', marginBottom: 0 }}>{t('loginDemo')}</p>
        </form>
      </div>
    </div>
  )
}
