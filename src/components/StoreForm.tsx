import { useState } from 'react'
import type { Market, Store, StoreStatus } from '../data/types'
import { newStore } from '../data/template'
import { Modal } from './Modal'
import { Field } from './ui'

interface Props {
  store?: Store
  onSubmit: (s: Store) => void
  onClose: () => void
}

export function StoreForm({ store, onSubmit, onClose }: Props) {
  const [name, setName] = useState(store?.name ?? '')
  const [product, setProduct] = useState(store?.product ?? '')
  const [jira, setJira] = useState(store?.jira ?? '')
  const [market, setMarket] = useState<Market>(store?.market ?? 'US')
  const [status, setStatus] = useState<StoreStatus>(store?.status ?? 'Đang làm')
  const [error, setError] = useState('')

  const submit = () => {
    if (!name.trim()) {
      setError('Nhập tên store.')
      return
    }
    const base = { name: name.trim(), product: product.trim(), jira: jira.trim(), market, status }
    onSubmit(store ? { ...store, ...base } : newStore(base))
  }

  return (
    <Modal title={store ? 'Sửa store' : 'Tạo store mới'} onClose={onClose}>
      {!store && <p className="note">Store mới có sẵn 20 dòng Product info, Creative trống và 4 kênh Social.</p>}
      <Field label="Tên store">
        <input id="f-name" autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="Ví dụ: WhiskerWall" />
      </Field>
      {error && <p className="err">{error}</p>}
      <Field label="Sản phẩm">
        <input id="f-product" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Tên sản phẩm" />
      </Field>
      <div className="grid2">
        <Field label="Mã Jira">
          <input id="f-jira" value={jira} onChange={(e) => setJira(e.target.value)} placeholder="KAN-xx" />
        </Field>
        <Field label="Thị trường">
          <select id="f-market" value={market} onChange={(e) => setMarket(e.target.value as Market)}>
            <option>US</option>
            <option>AU</option>
            <option>UK</option>
          </select>
        </Field>
        <Field label="Trạng thái">
          <select id="f-status" value={status} onChange={(e) => setStatus(e.target.value as StoreStatus)}>
            <option>Đang làm</option>
            <option>Tạm dừng</option>
            <option>Đã dừng</option>
          </select>
        </Field>
      </div>
      <div className="rowact">
        <button className="btn pri" onClick={submit}>{store ? 'Lưu' : 'Tạo store'}</button>
        <button className="btn" onClick={onClose}>Hủy</button>
      </div>
    </Modal>
  )
}
