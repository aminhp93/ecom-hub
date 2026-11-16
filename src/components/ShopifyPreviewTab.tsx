import { useEffect, useState } from 'react'
import type { Store } from '../data/types'
import { SHOPIFY } from '../data/shopifySeed'
import { Pill } from './ui'

export function ShopifyPreviewTab({ store }: { store: Store }) {
  const s = SHOPIFY[store.id]
  const url = `/mockup/${store.id}/`
  const [has, setHas] = useState<boolean | null>(null)
  useEffect(() => {
    let live = true
    fetch(url, { method: 'HEAD' }).then((r) => { if (live) setHas(r.ok) }).catch(() => { if (live) setHas(false) })
    return () => { live = false }
  }, [url])
  if (!s) return <div className="card"><p>Store này chưa có mockup Shopify từ Muse.</p></div>
  return (
    <>
      <div className="card sp-top">
        <div className="bar">
          <h2>Preview Shopify (file HTML mockup)</h2>
          <span className="sp" />
          {has && <a className="btn pri" href={url} target="_blank" rel="noreferrer">Mở file HTML</a>}
        </div>
        <div className="pi-list">
          <div className="pi-row"><span className="pi-lab">Trạng thái</span><span className="pi-val">{s.status}</span><span /></div>
          <div className="pi-row"><span className="pi-lab">Task</span><span className="pi-val"><a href={s.taskUrl} target="_blank" rel="noreferrer">{s.task}</a></span><span /></div>
          <div className="pi-row"><span className="pi-lab">File HTML</span><span className="pi-val">{has === null ? '…' : has ? <><span className="mono">{s.folder}mockup/index.html</span> <Pill tone="ok">đã lưu</Pill></> : <Pill tone="warn">chưa lưu, session đang lấy file từ Muse</Pill>}</span><span /></div>
          <div className="pi-row"><span className="pi-lab">Ai làm</span><span className="pi-val">{s.madeBy}</span><span /></div>
          <div className="pi-row"><span className="pi-lab">Ảnh</span><span className="pi-val">{s.images}</span><span /></div>
          <div className="pi-row"><span className="pi-lab">Bản Muse đầu</span><span className="pi-val"><a href={s.museUrl} target="_blank" rel="noreferrer">{s.museUrl.replace('https://', '')}</a> <span className="note">(cần đăng nhập Muse, bản cũ, chỉ để đối chiếu)</span></span><span /></div>
          <div className="pi-row"><span className="pi-lab">Thread Muse</span><span className="pi-val"><a href={s.threadUrl} target="_blank" rel="noreferrer">{s.threadUrl.replace('https://', '')}</a></span><span /></div>
          <div className="pi-row"><span className="pi-lab">Credit</span><span className="pi-val">{s.credit}</span><span /></div>
          <div className="pi-row"><span className="pi-lab">Cập nhật</span><span className="pi-val">{s.asOf}</span><span /></div>
        </div>
        <p className="note">File nằm trong Google Drive nên mở được ở đâu cũng dùng được; web chỉ phục vụ file khi chạy dev server. Nội dung dưới lấy từ README của session; Claude chưa mở lại từng trang trong lần sync này.</p>
      </div>
      {has && (
        <div className="card sp-frame">
          <iframe title={`Mockup ${store.name}`} src={url} loading="lazy" />
        </div>
      )}
      <div className="grid2">
        <div className="card">
          <h3>Có trong mockup <Pill tone="ok">đã kiểm qua localhost</Pill></h3>
          <ul className="sp-list">{s.includes.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
        <div className="card">
          <h3>Chưa có (cần store Shopify thật)</h3>
          <ul className="sp-list">{s.missing.map((t) => <li key={t}>{t}</li>)}</ul>
          <h3>Còn placeholder, Amin cần chốt</h3>
          <ul className="sp-list">{s.placeholders.map((t) => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
      {s.notes.length > 0 && <div className="card"><h3>Lưu ý</h3><ul className="sp-list">{s.notes.map((t) => <li key={t}>{t}</li>)}</ul></div>}
      <p className="note">Ghi chú đối thủ và kết quả session: <span className="mono">{s.folder}</span> · Checklist chung: <span className="mono">1-dropship/stores/_shared/shopify-store-checklist.md</span></p>
    </>
  )
}
