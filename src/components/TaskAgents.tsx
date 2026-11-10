import { useState } from 'react'
import type { AgentKind, AgentLink, AgentState, Store, TaskLink } from '../data/types'
import { uid } from '../data/template'
import { Modal } from './Modal'
import { Field, Pill } from './ui'

const STATE_TONE: Record<AgentState, string> = { 'Đang chạy': 'ok', 'Chờ Amin': 'warn', Idle: 'idle', Xong: 'idle' }
const KINDS: AgentKind[] = ['Claude', 'Muse', 'Codex', 'Amin', 'Khác']
const STATES: AgentState[] = ['Đang chạy', 'Chờ Amin', 'Idle', 'Xong']

interface Props {
  store: Store
  onChange: (s: Store) => void
}

export function TaskAgents({ store, onChange }: Props) {
  const tasks = store.tasks ?? []
  const [addTask, setAddTask] = useState(false)
  const [addAgent, setAddAgent] = useState<string | null>(null)
  const setTasks = (t: TaskLink[]) => onChange({ ...store, tasks: t })

  return (
    <>
      <div className="bar">
        <h2>Task và agent</h2>
        <span className="sp" />
        <button className="btn" onClick={() => setAddTask(true)}>+ Thêm task</button>
      </div>
      <div className="banner">Mỗi task ghi rõ ai đang làm (Claude, Muse, Amin) kèm link session/thread, để agent khác đọc được bối cảnh trước khi làm tiếp. Trạng thái là ảnh chụp lúc ghi, không tự cập nhật.</div>
      {tasks.length === 0 && <div className="card"><p>Chưa gắn task nào cho store này.</p></div>}
      {tasks.map((t) => (
        <div className="card" key={t.id}>
          <div className="bar">
            <h2>{t.url ? <a href={t.url} target="_blank" rel="noreferrer">{t.key}</a> : t.key} <span className="sub">· {t.title}</span></h2>
            <Pill tone={/progress|đang/i.test(t.status) ? 'ok' : 'idle'}>{t.status}</Pill>
            <span className="sp" />
            <button className="link bad" onClick={() => setTasks(tasks.filter((x) => x.id !== t.id))}>Xóa task</button>
          </div>
          {t.note && <p className="note full">{t.note}</p>}
          <div className="scroll">
            <table className="rt">
              <thead><tr><th>Agent</th><th>Vai trò</th><th>Trạng thái</th><th>Đang làm / chờ gì</th><th /></tr></thead>
              <tbody>
                {t.agents.length === 0 && <tr><td colSpan={5} className="note">Chưa có agent.</td></tr>}
                {t.agents.map((a) => (
                  <tr key={a.id}>
                    <td data-label="Agent"><b>{a.kind}</b><br />{a.url ? <a href={a.url} target="_blank" rel="noreferrer">{a.name}</a> : a.name}</td>
                    <td data-label="Vai trò">{a.role}</td>
                    <td data-label="Trạng thái"><Pill tone={STATE_TONE[a.state]}>{a.state}</Pill></td>
                    <td data-label="Ghi chú" className="note full">{a.note}</td>
                    <td><button className="link bad" onClick={() => setTasks(tasks.map((x) => (x.id === t.id ? { ...x, agents: x.agents.filter((g) => g.id !== a.id) } : x)))}>Xóa</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div><button className="btn" onClick={() => setAddAgent(t.id)}>+ Thêm agent</button></div>
        </div>
      ))}
      {addTask && <TaskForm onClose={() => setAddTask(false)} onSave={(t) => { setTasks([...tasks, t]); setAddTask(false) }} />}
      {addAgent && (
        <AgentForm
          onClose={() => setAddAgent(null)}
          onSave={(a) => { setTasks(tasks.map((x) => (x.id === addAgent ? { ...x, agents: [...x.agents, a] } : x))); setAddAgent(null) }}
        />
      )}
    </>
  )
}

function TaskForm({ onSave, onClose }: { onSave: (t: TaskLink) => void; onClose: () => void }) {
  const [key, setKey] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState('In Progress')
  return (
    <Modal title="Thêm task" onClose={onClose}>
      <div className="grid2">
        <Field label="Mã Jira"><input id="t-key" autoFocus value={key} onChange={(e) => setKey(e.target.value)} placeholder="KAN-80" /></Field>
        <Field label="Trạng thái"><input id="t-status" value={status} onChange={(e) => setStatus(e.target.value)} /></Field>
      </div>
      <Field label="Tên task"><input id="t-title" value={title} onChange={(e) => setTitle(e.target.value)} /></Field>
      <Field label="Link Jira"><input id="t-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://" /></Field>
      <div className="rowact">
        <button className="btn pri" onClick={() => key.trim() && onSave({ id: uid(), key: key.trim(), title: title.trim(), url: url.trim(), status: status.trim(), agents: [] })}>Thêm</button>
        <button className="btn" onClick={onClose}>Hủy</button>
      </div>
    </Modal>
  )
}

function AgentForm({ onSave, onClose }: { onSave: (a: AgentLink) => void; onClose: () => void }) {
  const [kind, setKind] = useState<AgentKind>('Claude')
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [role, setRole] = useState('')
  const [state, setState] = useState<AgentState>('Đang chạy')
  const [note, setNote] = useState('')
  return (
    <Modal title="Thêm agent" onClose={onClose}>
      <div className="grid2">
        <Field label="Loại"><select id="a-kind" value={kind} onChange={(e) => setKind(e.target.value as AgentKind)}>{KINDS.map((k) => <option key={k}>{k}</option>)}</select></Field>
        <Field label="Trạng thái"><select id="a-state" value={state} onChange={(e) => setState(e.target.value as AgentState)}>{STATES.map((k) => <option key={k}>{k}</option>)}</select></Field>
      </div>
      <Field label="Tên session / thread"><input id="a-name" autoFocus value={name} onChange={(e) => setName(e.target.value)} /></Field>
      <Field label="Link"><input id="a-url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https:// hoặc claude://" /></Field>
      <Field label="Vai trò"><input id="a-role" value={role} onChange={(e) => setRole(e.target.value)} /></Field>
      <Field label="Đang làm / chờ gì"><textarea id="a-note" value={note} onChange={(e) => setNote(e.target.value)} /></Field>
      <div className="rowact">
        <button className="btn pri" onClick={() => name.trim() && onSave({ id: uid(), kind, name: name.trim(), url: url.trim(), role: role.trim(), state, note: note.trim() })}>Thêm</button>
        <button className="btn" onClick={onClose}>Hủy</button>
      </div>
    </Modal>
  )
}
