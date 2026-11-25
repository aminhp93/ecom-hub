import { useState } from 'react'
import type { Store, StoreProduct } from '../data/types'
import { Modal } from './Modal'
import { Pill } from './ui'

const usd = (n: number) => `US$${n.toFixed(2).replace('.', ',')}`
const pct = (n: number) => n.toFixed(1).replace('.', ',')
const mainImg = (p: StoreProduct) => p.images.find((i) => i.role === 'main') ?? p.images[0]

function List({ items }: { items?: string[] }) {
  return items?.length ? <ul className="sp-ul">{items.map((x, i) => <li key={i}>{x}</li>)}</ul> : <span className="note">Chưa có</span>
}

/** Danh sách sản phẩm của store: ảnh chính, tên, giá mua tham chiếu, giá bán, biên, nhãn dữ liệu, nút Chi tiết. */
export function StoreProducts({ store }: { store: Store }) {
  const [open, setOpen] = useState<StoreProduct | null>(null)
  const list = store.products ?? []
  return (
    <>
      <div className="bar">
        <h2>Sản phẩm của store ({list.length})</h2>
        <span className="note">Giá mua là giá tham chiếu AliExpress; Amin sẽ đàm phán và cập nhật sau. Biên trước quảng cáo.</span>
      </div>
      <div className="card sprod-list">
        {list.map((p) => {
          const im = mainImg(p)
          return (
            <div key={p.id} className="sprod-row">
              {im ? <img className="sprod-img" src={`/media/${im.path}`} alt={p.name} /> : <span className="sprod-img" />}
              <div className="sprod-name">
                <b>{p.code}. {p.name}</b>
                <span className="note">{p.summary}</span>
                <span className="sprod-tags">
                  <Pill tone="warn">Ước tính</Pill>
                  <Pill tone="idle">Ảnh tham chiếu</Pill>
                </span>
              </div>
              <dl className="sprod-nums">
                <div><dt>Giá mua tham chiếu</dt><dd>{usd(p.cost_ref_usd)}</dd></div>
                <div><dt>Giá bán</dt><dd>{usd(p.price_sell_usd)}</dd></div>
                <div><dt>Biên</dt><dd className={p.margin.pct < 25 ? 'sprod-low' : ''}>{usd(p.margin.usd)} ({pct(p.margin.pct)}%)</dd></div>
              </dl>
              <button className="btn" onClick={() => setOpen(p)} aria-label={`Chi tiết ${p.name}`}>Chi tiết</button>
            </div>
          )
        })}
      </div>
      {open && <ProductDetail p={open} onClose={() => setOpen(null)} />}
    </>
  )
}

function ProductDetail({ p, onClose }: { p: StoreProduct; onClose: () => void }) {
  const ref = p.reference
  return (
    <Modal title={`${p.code}. ${p.name}`} onClose={onClose} wide>
      <div className="sprod-detail">
        <div className="pi-imgs">
          {p.images.map((im) => (
            <a key={im.path} href={`/media/${im.path}`} target="_blank" rel="noreferrer" title={im.label}>
              <img className="sprod-thumb" src={`/media/${im.path}`} alt={`${p.name} (${im.role})`} loading="lazy" />
            </a>
          ))}
        </div>
        {p.image_status && <p className="note">{p.image_status}</p>}
        <p>{p.description ?? p.summary}</p>
        <h3>Giá và biên</h3>
        <p>Giá bán {usd(p.price_sell_usd)} · giá mua tham chiếu {usd(p.cost_ref_usd)} · biên {usd(p.margin.usd)} ({pct(p.margin.pct)}%)</p>
        {p.margin.formula && <p className="note">{p.margin.formula}</p>}
        {p.cost_note && <p className="note">{p.cost_note}</p>}
        {p.price_rationale && <p className="note">Căn cứ giá bán: {p.price_rationale}</p>}
        {p.margin.cpa_scenarios?.length ? (
          <p className="note">Sau quảng cáo (giả định): {p.margin.cpa_scenarios.map((c) => `CPA ${usd(c.cpa_usd)} → ${usd(c.profit_after_ads_usd)}`).join(' · ')}</p>
        ) : null}
        <p className="sprod-tags">{p.margin.labels?.map((l) => <Pill key={l} tone="idle">{l}</Pill>)}</p>
        <h3>Khách hàng mục tiêu</h3>
        <p>{p.audience ?? 'Chưa có'}</p>
        <h3>Thông số</h3>
        {p.specs?.length ? (
          <ul className="sp-ul">{p.specs.map((s) => <li key={s.k}><b>{s.k}:</b> {s.v} {s.label && <Pill tone="idle">{s.label}</Pill>}</li>)}</ul>
        ) : <span className="note">Chưa có</span>}
        <h3>Cách dùng, lắp đặt</h3>
        <List items={p.usage} />
        <h3>Claim được</h3>
        <List items={p.claims_ok} />
        <h3>Claim không được</h3>
        <List items={p.claims_no} />
        <h3>Rủi ro</h3>
        <List items={p.risks} />
        <h3>Reference (nhà cung cấp)</h3>
        <p><Pill tone="warn">{ref?.status ?? 'Amin sẽ đàm phán và cập nhật sau'}</Pill></p>
        {ref?.ali_url && <p>Link AliExpress: <a href={ref.ali_url} target="_blank" rel="noreferrer">{ref.ali_url}</a></p>}
        {ref?.seller && <p>Người bán: {ref.seller}</p>}
        {ref?.supplier_price_note && <p className="note">{ref.supplier_price_note}</p>}
      </div>
      <div className="rowact">
        {p.detail_path && <a className="btn" href={`/preview/${p.detail_path.split('/').map(encodeURIComponent).join('/')}`} target="_blank" rel="noreferrer">Mở DETAIL.html (bản đầy đủ)</a>}
        <button className="btn" onClick={onClose}>Đóng</button>
      </div>
    </Modal>
  )
}
