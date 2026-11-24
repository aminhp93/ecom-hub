import { useEffect, useState } from 'react'
import { Markdown } from './TikTok'

/**
 * Trang con "Market Research" trong khu Tài liệu.
 * Nội dung là tài liệu canonical trong 1-dropship/docs/1-market-research (Drive), đọc nguyên văn qua /research/file.
 * Trang nghiệp vụ #/market-research chỉ tóm tắt và dẫn về đây.
 */

interface Src { path: string; name: string; title: string; version: string; mtime: number; drive: string }

const ORDER = ['README.md', '1-criteria.md', '2-search-method.md', '5-insight-nhu-cau-lap-lai.md', '3-prompt.md', '4-verify.md']
const fmt = (n: number) => new Date(n).toLocaleDateString('vi-VN')
const fileOf = (): string => {
  const m = window.location.hash.match(/[?&]f=([^&]+)/)
  return m ? decodeURIComponent(m[1]) : 'README.md'
}

export function MarketResearchDoc() {
  const [files, setFiles] = useState<Src[] | null>(null)
  const [dir, setDir] = useState('')
  const [err, setErr] = useState('')
  const [name, setName] = useState(fileOf)
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    fetch('/research/sources').then((r) => r.json()).then((j) => { if (j.error) setErr(j.error); else { setFiles(j.standard.files); setDir(j.standard.dir) } }).catch((e) => setErr(String(e)))
  }, [])
  useEffect(() => {
    const on = () => setName(fileOf())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const cur = files?.find((f) => f.name === name) ?? files?.find((f) => f.name === 'README.md')
  useEffect(() => {
    if (!cur) return
    let alive = true
    setText(null)
    fetch(`/research/file?path=${encodeURIComponent(cur.path)}`).then((r) => (r.ok ? r.text() : '')).then((t) => { if (alive) setText(t) }).catch(() => { if (alive) setText('') })
    return () => { alive = false }
  }, [cur?.path, cur?.mtime])

  if (err) return <section className="card"><p className="note">Không đọc được tài liệu Market Research (chỉ có khi chạy dev/preview với thư mục Working trên Drive): {err}</p></section>
  if (!files) return <p className="note">Đang đọc tài liệu…</p>

  const sorted = [...files].sort((a, b) => {
    const ia = ORDER.indexOf(a.name), ib = ORDER.indexOf(b.name)
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.name.localeCompare(b.name)
  })
  const go = (n: string) => { window.location.hash = `#/docs/market-research?f=${encodeURIComponent(n)}` }

  return (
    <section className="card stack">
      <h2>Market Research</h2>
      <p className="note">
        Tài liệu chuẩn, nguồn: <code>{dir}</code> (Drive). Đây là bản gốc để đọc chi tiết; trang <a href="#/market-research">Market Research</a> chỉ tóm tắt và hiển thị kết quả.
        Web không sửa các file này.
      </p>
      <div className="tabs" role="tablist" aria-label="Tài liệu Market Research">
        {sorted.map((f) => (
          <button key={f.name} className="tab" role="tab" aria-selected={f.name === cur?.name} onClick={() => go(f.name)} title={f.title}>
            {f.name.replace(/\.md$/, '')}
          </button>
        ))}
      </div>
      {cur && (
        <p className="note">
          <b>{cur.title}</b>
          {cur.version && <> · version <b>{cur.version}</b></>} · sửa lần cuối {fmt(cur.mtime)}
          {cur.drive && <> · <a className="db-lk" href={cur.drive} target="_blank" rel="noreferrer">mở trên Drive</a></>}
        </p>
      )}
      {text === null ? <p className="note">Đang đọc…</p> : text ? <Markdown text={text} /> : <p className="note">Không đọc được file này.</p>}
    </section>
  )
}
