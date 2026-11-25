import type { ReactNode } from 'react'

/** Render markdown tối thiểu (không thêm dependency, không dùng innerHTML): tiêu đề, đoạn, danh sách, bảng, code block, trích dẫn, đường kẻ, **đậm**, *nghiêng*, `code`, [link](url). */
const inline = (s: string, k: string): ReactNode[] => {
  const out: ReactNode[] = []
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\[[^\]]+\]\((?:https?:\/\/|\/)[^)\s]+\))|(\*[^*\s][^*]*\*)/g
  let last = 0, m: RegExpExecArray | null, i = 0
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index))
    const t = m[0]
    const key = `${k}-${i++}`
    if (m[1]) out.push(<code key={key}>{t.slice(1, -1)}</code>)
    else if (m[2]) out.push(<strong key={key}>{inline(t.slice(2, -2), key)}</strong>)
    else if (m[3]) { const mm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(t)!; out.push(<a key={key} href={mm[2]} target="_blank" rel="noreferrer">{mm[1]}</a>) }
    else out.push(<em key={key}>{t.slice(1, -1)}</em>)
    last = m.index + t.length
  }
  if (last < s.length) out.push(s.slice(last))
  return out
}
const cells = (l: string) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())
const isSep = (l: string) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l) && l.includes('-')

export function Markdown({ text }: { text: string }) {
  const L = text.replace(/\r\n/g, '\n').split('\n')
  const els: ReactNode[] = []
  let i = 0, n = 0
  while (i < L.length) {
    const line = L[i]
    const key = `b${n++}`
    if (/^\s*```/.test(line)) {
      const buf: string[] = []; i++
      while (i < L.length && !/^\s*```/.test(L[i])) buf.push(L[i++])
      i++
      els.push(<pre key={key} className="md-code"><code>{buf.join('\n')}</code></pre>); continue
    }
    const h = /^(#{1,6})\s+(.*)$/.exec(line)
    if (h) { const Tag = `h${Math.min(h[1].length + 1, 6)}` as 'h2'; els.push(<Tag key={key}>{inline(h[2], key)}</Tag>); i++; continue }
    if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) { els.push(<hr key={key} />); i++; continue }
    if (line.includes('|') && i + 1 < L.length && isSep(L[i + 1])) {
      const head = cells(line); i += 2
      const rows: string[][] = []
      while (i < L.length && L[i].includes('|') && L[i].trim()) rows.push(cells(L[i++]))
      els.push(<div key={key} className="md-tw"><table><thead><tr>{head.map((c, j) => <th key={j}>{inline(c, `${key}h${j}`)}</th>)}</tr></thead><tbody>{rows.map((r, a) => <tr key={a}>{r.map((c, j) => <td key={j}>{inline(c, `${key}${a}-${j}`)}</td>)}</tr>)}</tbody></table></div>)
      continue
    }
    if (/^\s*>/.test(line)) {
      const buf: string[] = []
      while (i < L.length && /^\s*>/.test(L[i])) buf.push(L[i++].replace(/^\s*>\s?/, ''))
      els.push(<blockquote key={key}>{inline(buf.join(' '), key)}</blockquote>); continue
    }
    const li = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/.exec(line)
    if (li) {
      const ordered = /\d/.test(li[2]); const items: { d: number; t: string }[] = []
      while (i < L.length) {
        const m = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/.exec(L[i])
        if (m && /\d/.test(m[2]) !== ordered) break
        if (m) { items.push({ d: Math.min(Math.floor(m[1].length / 2), 3), t: m[3] }); i++ }
        else if (/^\s{2,}\S/.test(L[i]) && items.length) { items[items.length - 1].t += ' ' + L[i].trim(); i++ }
        else break
      }
      const Tag = ordered ? 'ol' : 'ul'
      els.push(<Tag key={key}>{items.map((x, j) => <li key={j} style={x.d ? { marginLeft: x.d * 16 } : undefined}>{inline(x.t, `${key}-${j}`)}</li>)}</Tag>); continue
    }
    if (!line.trim()) { i++; continue }
    const buf: string[] = []
    while (i < L.length && L[i].trim() && !/^(\s*```|#{1,6}\s|\s*>|\s*([-*+]|\d+[.)])\s)/.test(L[i]) && !(L[i].includes('|') && i + 1 < L.length && isSep(L[i + 1]))) buf.push(L[i++])
    if (!buf.length) { buf.push(L[i++]) }
    els.push(<p key={key}>{inline(buf.join(' '), key)}</p>)
  }
  return <div className="md">{els}</div>
}
