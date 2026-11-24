import { ADS_Q, CRIT_RULES, GATES_G, SOCIAL_S, type CritRow } from '../data/criteria'

function Table({ title, rows, note }: { title: string; rows: CritRow[]; note?: string }) {
  return (
    <div>
      <p className="db-sec">{title}</p>
      {note && <p className="note">{note}</p>}
      <div className="scroll">
        <table className="rt">
          <thead><tr><th>ID</th><th>Tiêu chí</th><th>Cách kiểm / chấm</th><th>Gốc</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td data-label="ID"><b>{r.id}</b></td>
                <td data-label="Tiêu chí">{r.name}</td>
                <td data-label="Cách kiểm" className="note">{r.how}</td>
                <td data-label="Gốc" className="note">{r.src}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Thang đánh giá video (KAN-115 B2): cổng chặn G1–G7, ADS Q1–Q9, SOCIAL S1–S8, luật kết luận. Dùng ở tab Nghiên cứu và trang Tài liệu.
export function CriteriaTables() {
  return (
    <>
      <Table title="Cổng chặn G1–G7 (Đạt / Sai / Không xác minh được)" rows={GATES_G} />
      <Table title="ADS Q1–Q9 (0–2 điểm mỗi mục)" rows={ADS_Q} />
      <Table title="SOCIAL S1–S8 (0–2 điểm mỗi mục)" rows={SOCIAL_S} note='"Gốc" = mã tiêu chí trong output/01; "MỚI" = Claude-A đề xuất, Amin đã duyệt 17/11/2026.' />
      <div>
        <p className="db-sec">Luật kết luận và ngưỡng</p>
        <ul className="dc-rules">{CRIT_RULES.map((x) => <li key={x}>{x}</li>)}</ul>
      </div>
    </>
  )
}
