import { useEffect, useState } from 'react'
import { useStores } from './useStores'
import { StoreList } from './pages/StoreList'
import { StoreDetail } from './pages/StoreDetail'
import { MarketResearch } from './pages/MarketResearch'
import { Dashboard } from './pages/Dashboard'
import { TikTok } from './pages/TikTok'
import { Docs, DOC_PAGES, docSlug } from './pages/Docs'
import { Today } from './pages/Today'
import { FocusDock } from './focusTimer'
import { WorklogPanel, SessionDock, useWorklogRoute, useWorklogSection } from './components/WorklogPanel'
import { effectiveHash } from './worklogNav'

// Route mới #/market-research (và #/market-research/quy-trinh). #/products là link cũ: vẫn mở được, tự chuyển sang route mới (giữ phần sau, vd. #/products/x).
const MR = '#/market-research'
const isProducts = (): boolean => effectiveHash() === MR || effectiveHash().startsWith(`${MR}/`) || effectiveHash() === '#/products' || effectiveHash().startsWith('#/products/')
const legacyProducts = (): void => {
  const h = window.location.hash
  if (h === '#/products' || h.startsWith('#/products/')) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${MR}${h.slice('#/products'.length)}`)
}
legacyProducts()

const isToday = (): boolean => effectiveHash() === '#/today' || effectiveHash().startsWith('#/today/')

const isDash = (): boolean => effectiveHash() === '#/dashboard'

const isTiktok = (): boolean => effectiveHash() === '#/tiktok'

const isDocs = (): boolean => effectiveHash() === '#/docs' || effectiveHash().startsWith('#/docs/')

type NavItem = { href: string; label: string; icon: string }
const ICON = {
  store: 'M2 6l1-3h10l1 3M2 6v7h12V6M2 6h12M6 13V9h4v4',
  mr: 'M8 2l5 2.5v7L8 14l-5-2.5v-7zM3 4.5L8 7l5-2.5M8 7v7',
  today: 'M8 2v2M8 12v2M2 8h2M12 8h2M4 4l1.2 1.2M10.8 10.8L12 12M12 4l-1.2 1.2M5.2 10.8L4 12M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z',
  dash: 'M2 2h5v6H2zM9 2h5v3H9zM9 7h5v7H9zM2 10h5v4H2z',
  tiktok: 'M3 3v10M3 3h8l-2 3 2 3H3',
  docs: 'M4 2h6l3 3v9H4zM10 2v3h3M6 8h5M6 11h5',
}
// Thứ tự menu (KAN-131): Hôm nay, Bảng điều khiển, Dropship (Store, Market Research), TikTok Shop US, Tài liệu. Route giữ nguyên.
const NAV: (NavItem | { group: string; items: NavItem[] })[] = [
  { href: '#/today', label: 'Hôm nay', icon: ICON.today },
  { href: '#/dashboard', label: 'Bảng điều khiển', icon: ICON.dash },
  { group: 'Dropship', items: [
    { href: '#/', label: 'Store', icon: ICON.store },
    { href: MR, label: 'Market Research', icon: ICON.mr },
  ] },
  { href: '#/tiktok', label: 'TikTok Shop US', icon: ICON.tiktok },
  { href: '#/docs', label: 'Tài liệu', icon: ICON.docs },
]

const parse = (): string | null => {
  const m = effectiveHash().match(/^#\/store\/(.+)$/)
  return m ? decodeURIComponent(m[1]) : null
}

function NavLink({ n, current, kid }: { n: NavItem; current: string; kid?: boolean }) {
  return (
    <a className={`side-item${kid ? ' side-kid' : ''}`} href={n.href} title={n.label} aria-label={n.label} aria-current={n.href === current ? 'page' : undefined}>
      <svg className="side-ico" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d={n.icon} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <span className="side-label">{n.label}</span>
    </a>
  )
}

export default function App() {
  const { stores, loaded, create, save, remove, reset } = useStores()
  const [id, setId] = useState<string | null>(parse)
  const [products, setProducts] = useState(isProducts)
  const [today, setToday] = useState(isToday)
  const [dash, setDash] = useState(isDash)
  const [tiktok, setTiktok] = useState(isTiktok)
  const [docs, setDocs] = useState(isDocs)
  const [, setTick] = useState(0)
  const wlTask = useWorklogRoute()
  const wlSec = useWorklogSection()
  const [collapsed, setCollapsed] = useState(() => {
    try { return localStorage.getItem('sh-side-collapsed') === '1' } catch { return false }
  })

  useEffect(() => {
    const on = () => { legacyProducts(); setId(parse()); setProducts(isProducts()); setToday(isToday()); setDash(isDash()); setTiktok(isTiktok()); setDocs(isDocs()); setTick((t) => t + 1) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const open = (sid: string) => { window.location.hash = `#/store/${encodeURIComponent(sid)}` }
  const back = () => { window.location.hash = '' }
  const store = id ? stores.find((s) => s.id === id) : undefined
  const current = docs ? '#/docs' : tiktok ? '#/tiktok' : today ? '#/today' : dash ? '#/dashboard' : products ? MR : '#/'
  const toggle = () => {
    setCollapsed((c) => {
      try { localStorage.setItem('sh-side-collapsed', c ? '0' : '1') } catch { /* không lưu được thì bỏ qua */ }
      return !c
    })
  }

  return (
    <div className={`shell${collapsed ? ' collapsed' : ''}`}>
    <FocusDock />
    <SessionDock />
    {wlTask && <WorklogPanel key={wlTask} task={wlTask} section0={wlSec} />}
    <aside className="side">
      <div className="side-head">
        <button className="side-toggle" onClick={toggle} aria-label={collapsed ? 'Mở rộng menu' : 'Thu gọn menu'} aria-expanded={!collapsed} title={collapsed ? 'Mở rộng menu' : 'Thu gọn menu'}>
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d={collapsed ? 'M6 3l5 5-5 5' : 'M10 3L5 8l5 5'} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <nav className="side-nav" aria-label="Menu">
        {NAV.map((n) => 'group' in n ? (
          <div key={n.group} className="side-grp side-dropship">
            <p className="side-dg">{n.group}</p>
            {n.items.map((c) => <NavLink key={c.href} n={c} current={current} kid />)}
          </div>
        ) : (
          <div key={n.href} className="side-grp">
            <NavLink n={n} current={current} />
            {n.href === '#/docs' && docs && (
              <div className="side-sub">
                {DOC_PAGES.map((p, i) => (
                  <div key={p.slug} className="side-dgw">
                    {(i === 0 || DOC_PAGES[i - 1].group !== p.group) && <p className="side-dg">{p.group}</p>}
                    <a className="side-item side-subitem" href={`#/docs/${p.slug}`} title={p.label} aria-current={p.slug === docSlug() ? 'location' : undefined}>
                      <span className="side-label">{p.label}</span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
    <div className="wrap">
      {docs ? (
        <Docs />
      ) : tiktok ? (
        <TikTok />
      ) : today ? (
        <Today />
      ) : dash ? (
        <Dashboard />
      ) : products ? (
        <MarketResearch />
      ) : !loaded ? (
        <p className="note">Đang tải…</p>
      ) : id && store ? (
        <StoreDetail key={store.id} store={store} onBack={back} onSave={save} onRemove={remove} />
      ) : id ? (
        <div className="card">
          <p>Không tìm thấy store “{id}”. Có thể store đã bị xóa.</p>
          <div><button className="btn" onClick={back}>Về danh sách</button></div>
        </div>
      ) : (
        <StoreList stores={stores} onOpen={open} onCreate={create} onSave={save} onRemove={remove} onReset={reset} />
      )}
    </div>
    </div>
  )
}
