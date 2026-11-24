import { useEffect, useState } from 'react'

type Res<T> = { key: string; data?: T; error?: string }
/** GET JSON chỉ đọc; url null = không gọi. Lỗi server trả {error, details} được gộp thành một thông báo. */
export function useFetchJson<T>(url: string | null): { loading: boolean; data?: T; error?: string } {
  const [res, setRes] = useState<Res<T> | null>(null)
  useEffect(() => {
    if (!url) return
    let off = false
    fetch(url)
      .then(async (r) => { const j = await r.json().catch(() => ({})); if (!r.ok) throw new Error([j.error, j.details].filter(Boolean).join('\n') || `Lỗi ${r.status}`); return j as T })
      .then((data) => { if (!off) setRes({ key: url, data }) })
      .catch((e) => { if (!off) setRes({ key: url, error: String(e.message ?? e) }) })
    return () => { off = true }
  }, [url])
  const cur = url && res?.key === url ? res : null
  return { loading: !!url && !cur, data: cur?.data, error: cur?.error }
}
