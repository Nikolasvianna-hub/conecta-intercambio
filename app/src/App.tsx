import { HashRouter, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Clapperboard, Menu as MenuIcon, MessageCircle, Search, User } from 'lucide-react'
import { AppProvider, useApp } from './state/AppContext'
import Login from './pages/Login'
import Explore, { NewTopic, TopicDetail } from './pages/Explore'
import Chats, { ChatRoom, PersonProfile } from './pages/Chats'
import Unifor, { NewsDetail } from './pages/Unifor'
import Menu, { Appearance, Buddy, Events, Faq, Language, Moderation, NotificationSettings, Notifications, Privacy } from './pages/Menu'
import Profile, { EditProfile } from './pages/Profile'

function TabBar() {
  const { t } = useApp()
  const cls = ({ isActive }: { isActive: boolean }) => `tab ${isActive ? 'active' : ''}`
  return (
    <nav className="tabbar" aria-label="Navegação principal">
      <NavLink to="/explorar" className={cls}><Search size={24} />{t('tabExplore')}</NavLink>
      <NavLink to="/conversas" className={cls}><MessageCircle size={24} />{t('tabChats')}</NavLink>
      <NavLink to="/unifor" className={({ isActive }) => `${cls({ isActive })} tab-center`}>
        <span className="bubble"><Clapperboard size={24} /></span>
        {t('tabUnifor')}
      </NavLink>
      <NavLink to="/menu" className={cls}><MenuIcon size={24} />{t('tabMenu')}</NavLink>
      <NavLink to="/perfil" className={cls}><User size={24} />{t('tabProfile')}</NavLink>
    </nav>
  )
}

function Shell() {
  const { me, toastMsg } = useApp()
  const loc = useLocation()
  if (!me) return <div className="device"><Login /></div>
  // Telas de conversa aberta escondem a barra de abas (padrão WhatsApp)
  const hideTabs = /^\/conversas\/.+/.test(loc.pathname)
  return (
    <div className="device">
      <Routes>
        <Route path="/" element={<Navigate to="/unifor" replace />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/explorar/novo" element={<NewTopic />} />
        <Route path="/explorar/topico/:id" element={<TopicDetail />} />
        <Route path="/conversas" element={<Chats />} />
        <Route path="/conversas/:id" element={<ChatRoom />} />
        <Route path="/pessoas/:id" element={<PersonProfile />} />
        <Route path="/unifor" element={<Unifor />} />
        <Route path="/unifor/noticia/:id" element={<NewsDetail />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/aparencia" element={<Appearance />} />
        <Route path="/menu/idioma" element={<Language />} />
        <Route path="/menu/privacidade" element={<Privacy />} />
        <Route path="/menu/notificacoes" element={<NotificationSettings />} />
        <Route path="/menu/buddy" element={<Buddy />} />
        <Route path="/menu/eventos" element={<Events />} />
        <Route path="/menu/moderacao" element={<Moderation />} />
        <Route path="/menu/faq" element={<Faq />} />
        <Route path="/notificacoes" element={<Notifications />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/perfil/editar" element={<EditProfile />} />
        <Route path="*" element={<Navigate to="/unifor" replace />} />
      </Routes>
      {!hideTabs && <TabBar />}
      {toastMsg && <div className="toast" role="status">{toastMsg}</div>}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Shell />
      </HashRouter>
    </AppProvider>
  )
}
