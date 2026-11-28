import type { DayJournal, JournalLine } from '../data/todayTypes'

const JIRA = 'https://phamsworkspace-42448765.atlassian.net/browse/'

const MARK = { ok: '✓', no: '✗' } as const
function Lines({ list }: { list: JournalLine[] | string }) {
  const a: JournalLine[] = typeof list === 'string' ? [{ t: list }] : list
  return (
    <ul className="jr-ck">
      {a.map((l, i) => (
        <li key={i} className={l.s ? `jr-${l.s}` : undefined}><span className="jr-mk" aria-label={l.s === 'ok' ? 'xong' : l.s === 'no' ? 'chưa xong' : undefined}>{l.s ? MARK[l.s] : '•'}</span><span>{l.t}</span></li>
      ))}
    </ul>
  )
}

/** Nhật ký phiên dạng phẳng (Amin 28/11): một bảng 3 cột Task | Tình hình | Còn mở, bên dưới đề xuất / cập nhật chung. Dữ liệu từ day.journal. */
export function SessionJournal({ j, date }: { j: DayJournal; date: string }) {
  return (
    <section className="card jr" aria-labelledby="jr-h">
      <h2 id="jr-h">Nhật ký phiên · {date.slice(8, 10)}/{date.slice(5, 7)}</h2>
      <div className="scroll">
        <table className="jr-tbl">
          <thead><tr><th>Task</th><th>Tình hình</th><th>Còn mở</th></tr></thead>
          <tbody>
            {j.tasks.map((t) => (
              <tr key={t.key}>
                <td><a href={`${JIRA}${t.key}`} target="_blank" rel="noreferrer"><b>{t.key}</b></a> {t.title}</td>
                <td><Lines list={t.status} /></td>
                <td><Lines list={t.open} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Đề xuất và cập nhật chung</h3>
      <ul className="jr-gen">
        {j.general.map((g, n) => <li key={n}>{g.label && <b>{g.label}: </b>}{g.t}</li>)}
      </ul>
    </section>
  )
}
