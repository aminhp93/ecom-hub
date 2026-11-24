import { useState } from 'react'
import type { Store } from '../data/types'
import { StoreForm } from '../components/StoreForm'
import { Modal } from '../components/Modal'
import { ProductInfoTable } from '../components/ProductInfoTable'
import { CreativeBoard } from '../components/CreativeBoard'
import { ChecklistPanel } from '../components/ChecklistPanel'
import { SocialChannels } from '../components/SocialChannels'
import { ShopifyPreviewTab } from '../components/ShopifyPreviewTab'
import { ResearchTab } from '../components/ResearchTab'

interface Props {
  store: Store
  onBack: () => void
  onSave: (s: Store) => Promise<void>
  onRemove: (id: string) => Promise<void>
}

type Tab = 'product' | 'research' | 'creative' | 'social' | 'shopify'

export function StoreDetail({ store, onBack, onSave, onRemove }: Props) {
  const [tab, setTab] = useState<Tab>('product')
  const [dialog, setDialog] = useState<'edit' | 'delete' | null>(null)
  const tabs: Array<[Tab, string]> = [
    ['product', 'Product info'],
    ['research', 'Nghiên cứu'],
    ['creative', 'Creative'],
    ['social', 'Social'],
    ['shopify', 'Preview Shopify'],
  ]

  return (
    <>
      <div className="crumb">
        <button className="link" onClick={onBack}>Store</button>
        <span>›</span>
        <span>{store.name}</span>
      </div>
      <div className="head">
        <div className="grow">
          <h1>
            {store.name} <span className="sub">· {store.product}</span>
          </h1>
        </div>
        <div className="rowact">
          <button className="btn" onClick={() => setDialog('edit')}>Sửa store</button>
          <button className="btn dng" onClick={() => setDialog('delete')}>Xóa</button>
        </div>
      </div>
      <ChecklistPanel store={store} />
      <div className="tabs" role="tablist">
        {tabs.map(([k, label]) => (
          <button key={k} className="tab" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>
            {label}
          </button>
        ))}
      </div>
      <div className="stack">
        {tab === 'product' && <ProductInfoTable store={store} onChange={onSave} />}
        {tab === 'research' && <ResearchTab store={store} />}
        {tab === 'creative' && <CreativeBoard store={store} onChange={onSave} />}
        {tab === 'shopify' && <ShopifyPreviewTab store={store} />}
        {tab === 'social' && <SocialChannels key={`${store.id}-${store.updated}`} store={store} onChange={onSave} />}
      </div>

      {dialog === 'edit' && (
        <StoreForm store={store} onClose={() => setDialog(null)} onSubmit={async (s) => { await onSave(s); setDialog(null) }} />
      )}
      {dialog === 'delete' && (
        <Modal title={`Xóa ${store.name}?`} onClose={() => setDialog(null)}>
          <p>Xóa luôn Product info, Creative và Social của store này. Không hoàn tác được.</p>
          <div className="rowact">
            <button className="btn dng" onClick={async () => { await onRemove(store.id); onBack() }}>Xóa store</button>
            <button className="btn" onClick={() => setDialog(null)}>Giữ lại</button>
          </div>
        </Modal>
      )}
    </>
  )
}
