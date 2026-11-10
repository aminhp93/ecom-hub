import { useMemo, useState } from 'react'
import type { Store } from '../data/types'
import { Meter, StatusPill } from '../components/ui'
import { StoreForm } from '../components/StoreForm'
import { checkStore } from '../data/checklist'
import { Modal } from '../components/Modal'

interface Props {
  stores: Store[]
  onOpen: (id: string) => void
  onCreate: (s: Store) => Promise<Store>
  onSave: (s: Store) => Promise<void>
  onRemove: (id: string) => Promise<void>
  onReset: () => Promise<void>
}

type Dialog = { kind: 'new' } | { kind: 'edit'; store: Store } | { kind: 'delete'; store: Store } | { kind: 'reset' } | null

const channelCount = (s: Store) => Object.values(s.social).filter((c) => c.status === 'Đã đăng bài đầu').length
const videoCount = (s: Store) => s.creative.filter((v) => v.media).length

export function StoreList({ stores, onOpen, onCreate, onSave, onRemove, onReset }: Props) {
  const [q, setQ] = useState('')
  const [dialog, setDialog] = useState<Dialog>(null)

  const rows = useMemo(() => {
    const t = q.trim().toLowerCase()
    return stores.filter((s) => !t || `${s.name} ${s.product} ${s.jira}`.toLowerCase().includes(t))
  }, [stores, q])

  return (
    <>
      <div className="bar">
        <h1>Store</h1>
        <span className="note">{stores.length} store · cùng một template</span>
        <span className="sp" />
        <input id="search" type="search" className="search" placeholder="Tìm tên, sản phẩm, KAN-xx" value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn pri" onClick={() => setDialog({ kind: 'new' })}>+ Tạo store</button>
      </div>
      <div className="card">
        <div className="scroll">
          <table className="rt">
            <thead>
              <tr>
                <th>Store</th><th>Jira</th><th>Trạng thái</th><th>Product info</th><th>Còn thiếu</th><th>Creative</th><th>Social</th><th>Cập nhật</th><th />
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr><td colSpan={9} className="note">Không có store khớp. Bấm Tạo store để thêm.</td></tr>
              )}
              {rows.map((s) => (
                <tr key={s.id} className="click" onClick={() => onOpen(s.id)}>
                  <td>
                    <div className="sname">
                      <b>{s.name}</b>
                      <span>{s.product}</span>
                    </div>
                  </td>
                  <td className="mono" data-label="Jira">{s.jira}</td>
                  <td data-label="Trạng thái"><StatusPill status={s.status} /></td>
                  <td data-label="Product info"><Meter value={s.productInfo.filter((r) => r.value).length} max={s.productInfo.length} /></td>
                  <td data-label="Còn thiếu" className="miss">{checkStore(s).product.missing.join(', ') || 'Đủ'}</td>
                  <td data-label="Creative">{videoCount(s)} video · {s.creative.length} mục</td>
                  <td data-label="Social">{channelCount(s)}/4 kênh</td>
                  <td className="mono" data-label="Cập nhật">{s.updated}</td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <div className="rowact">
                      <button className="btn" onClick={() => setDialog({ kind: 'edit', store: s })}>Sửa</button>
                      <button className="btn dng" onClick={() => setDialog({ kind: 'delete', store: s })}>Xóa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="note">
        Dữ liệu lưu trong trình duyệt này.{' '}
        <button className="link" onClick={() => setDialog({ kind: 'reset' })}>Đưa về dữ liệu mẫu ban đầu</button>
      </p>

      {dialog?.kind === 'new' && (
        <StoreForm
          onClose={() => setDialog(null)}
          onSubmit={async (s) => {
            const created = await onCreate(s)
            setDialog(null)
            onOpen(created.id)
          }}
        />
      )}
      {dialog?.kind === 'edit' && (
        <StoreForm
          store={dialog.store}
          onClose={() => setDialog(null)}
          onSubmit={async (s) => {
            await onSave(s)
            setDialog(null)
          }}
        />
      )}
      {dialog?.kind === 'delete' && (
        <Modal title={`Xóa ${dialog.store.name}?`} onClose={() => setDialog(null)}>
          <p>Xóa luôn Product info, Creative và Social của store này. Không hoàn tác được.</p>
          <div className="rowact">
            <button className="btn dng" onClick={async () => { await onRemove(dialog.store.id); setDialog(null) }}>Xóa store</button>
            <button className="btn" onClick={() => setDialog(null)}>Giữ lại</button>
          </div>
        </Modal>
      )}
      {dialog?.kind === 'reset' && (
        <Modal title="Đưa về dữ liệu mẫu?" onClose={() => setDialog(null)}>
          <p>Mọi thay đổi bạn đã nhập trong trình duyệt này sẽ mất, danh sách quay lại 3 store mẫu.</p>
          <div className="rowact">
            <button className="btn dng" onClick={async () => { await onReset(); setDialog(null) }}>Đưa về mẫu</button>
            <button className="btn" onClick={() => setDialog(null)}>Giữ nguyên</button>
          </div>
        </Modal>
      )}
    </>
  )
}
