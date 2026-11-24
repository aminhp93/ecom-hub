import { useEffect, useState } from 'react'

/** Section đang chạy của từng task, lấy từ /worklog/active (item "Đang làm"); chỉ đọc, làm mới mỗi 10 giây. */
export const runningSection = (q?: { items?: { status: string; section_id: string }[] } | null): string => q?.items?.find((i) => i.status === 'Đang làm')?.section_id ?? ''

let cache: { t: number; p: Promise<unknown> } | null = null
const fetchActive = (): Promise<any> => { if (!cache || Date.now() - cache.t > 4000) cache = { t: Date.now(), p: fetch('/worklog/active').then((r) => r.json()) }; return cache.p }

export function useActiveSections(): Record<string, string> {
  const [m, setM] = useState<Record<string, string>>({})
  useEffect(() => {
    let off = false
    const load = () => fetchActive().then((j: { tasks?: { key: string; ok: boolean; query?: { items?: { status: string; section_id: string }[] } }[] }) => {
      if (off) return
      const n: Record<string, string> = {}
      for (const t of j.tasks ?? []) if (t.ok) { const s = runningSection(t.query); if (s) n[t.key] = s }
      setM((p) => (JSON.stringify(p) === JSON.stringify(n) ? p : n))
    }).catch(() => { /* không có cầu nối worklog */ })
    load(); const id = window.setInterval(load, 10000)
    return () => { off = true; window.clearInterval(id) }
  }, [])
  return m
}
