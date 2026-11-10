import { useEffect, useState } from 'react'
import { useStores } from './useStores'
import { StoreList } from './pages/StoreList'
import { StoreDetail } from './pages/StoreDetail'
import { MarketProducts } from './pages/MarketProducts'
import { Dashboard } from './pages/Dashboard'

const isProducts = (): boolean => window.location.hash === '#/products'

const isDash = (): boolean => window.location.hash === '#/dashboard'

const NAV = [
  { href: '#/', label: 'Store', icon: 'M2 6l1-3h10l1 3M2 6v7h12V6M2 6h12M6 13V9h4v4' },
  { href: '#/products', label: 'Sản phẩm Market Research', icon: 'M8 2l5 2.5v7L8 14l-5-2.5v-7zM3 4.5L8 7l5-2.5M8 7v7' },
  { href: '#/dashboard', label: 'Bảng điều khiển', icon: 'M2 2h5v6H2zM9 2h5v3H9zM9 7h5v7H9zM2 10h5v4H2z' },
]

const parse = (): string | null => {
  const m = window.location.hash.match(/^#\/store\/(.+)$/)
  return m ? decodeURIComponent(m[1]) : null
}

export default function App() {
  const { stores, loaded, create, save, remove, reset } = useStores()
  const [id, setId] = useState<string | null>(parse)
  const [products, setProducts] = useState(isProducts)
  const [dash, setDash] = useState(isDash)
  const [collapsed, setCollapsed] = useState(() => {
    try { return localStorage.getItem('sh-side-collapsed') === '1' } catch { return false }
  })

  useEffect(() => {
    const on = () => { setId(parse()); setProducts(isProducts()); setDash(isDash()) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const open = (sid: string) => { window.location.hash = `#/store/${encodeURIComponent(sid)}` }
  const back = () => { window.location.hash = '' }
  const store = id ? stores.find((s) => s.id === id) : undefined
  const current = dash ? '#/dashboard' : products ? '#/products' : '#/'
  const toggle = () => {
    setCollapsed((c) => {
      try { localStorage.setItem('sh-side-collapsed', c ? '0' : '1') } catch { /* không lưu được thì bỏ qua */ }
      return !c
    })
  }

  return (
    <div className={`shell${collapsed ? ' collapsed' : ''}`}>
    <aside className="side">
      <div className="side-head">
        <button className="side-toggle" onClick={toggle} aria-label={collapsed ? 'Mở rộng menu' : 'Thu gọn menu'} aria-expanded={!collapsed} title={collapsed ? 'Mở rộng menu' : 'Thu gọn menu'}>
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d={collapsed ? 'M6 3l5 5-5 5' : 'M10 3L5 8l5 5'} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      <nav className="side-nav" aria-label="Menu">
        {NAV.map((n) => (
          <a key={n.href} className="side-item" href={n.href} title={n.label} aria-label={n.label} aria-current={n.href === current ? 'page' : undefined}>
            <svg className="side-ico" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d={n.icon} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="side-label">{n.label}</span>
          </a>
        ))}
      </nav>
    </aside>
    <div className="wrap">
      {dash ? (
        <Dashboard />
      ) : products ? (
        <MarketProducts />
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
