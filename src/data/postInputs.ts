import type { Video, GenKit, Post, Store } from './types'

// Đầu vào của bài đăng: lấy từ chính bài (kit) nếu có, không thì từ creative cùng mã (WhiskerWall: A1 -> PT1-A1; AquaNest: video-04 -> R7-V04),
// rồi bổ sung bản ghi tay bên dưới. Chỉ ghi điều có trong dữ liệu/nguồn; thiếu thì để trống để UI ghi "Chưa có".
const EXTRA: Record<string, GenKit> = {
  'PT1-A22': {
    tool: 'Higgsfield · Genjutsu Object Swap (Amin gen trực tiếp trên web, 25/10/2026)',
    config: '720p (720×1280, 24 fps), ~29,7 s, có âm thanh gốc từ video nguồn. Credit: Amin ghi 210, sổ cái ghi 0.',
    referenceVideo: ['1-dropship/workspace/product-test-1/3-creative/round-4/gen-genjutsu/SOURCE-video1-generation.mp4'],
    prompt: "@Image1 — CAT ROOM, the replacement LOCATION: a warm off-white wall with light wood flooring, a pale rug edge, and a wall-mounted natural-wood cat furniture system: cylindrical tunnel bed at left, staggered climbing steps, a lower perch platform, and an upper enclosed cube with a cat-head-shaped opening. Preserve the furniture's exact design, natural wood color, proportions, shapes, and visible details.\nVideo edit. Keep this @Video1 clip exactly as it is — the same shots and cuts (cuts at 9.6s, 10.7s, 12.3s, 16.2s, 18.2s, 21.0s, 22.8s, 23.9s, 26.6s), the same camera moves, framing and composition, the same rhythmic dance performance, poses, blocking, screen placement, pacing and timing of every shot. Change only the modern kitchen hallway and the German Shepherd dog, keeping the original choreography and camera-driven story intact.\n1. REPLACE the original modern kitchen hallway (all shots, 0-29.5s) with CAT ROOM from @Image1. Put the exact wall-mounted cat furniture environment from @Image1 behind and around the performer in every shot, maintaining its original product design, color, shape, scale, layout, and details; integrate it naturally with the inherited perspective, occlusion, lighting, and camera movement.\n2. REPLACE the original German Shepherd dog (0-9.6s; 9.6-10.7s; 10.7-12.3s; 12.3-16.2s; 16.2-18.2s; 18.2-21.0s; 21.0-22.8s; 22.8-23.9s; 23.9-26.6s; 26.6-29.5s) with a natural orange tabby cat, matched beat-for-beat to the original upright dance, paw gestures, head tilts, close-up expressions, and lens-reaching actions. Keep the cat's fur, paws, silhouette, contact points, floor shadows, and occlusions coherent through every cut.\nIdentity lock: CAT ROOM from @Image1 belongs only to the replacement environment throughout the clip; preserve its exact product design without adding, removing, redesigning, or substituting any product. Within the entire clip, replace the original source person identified as the German Shepherd dog in @Video1 completely with the orange tabby cat in every appearance; the original identity must not appear within those windows. Retain the original performance, pose, blocking, interactions, and timing. Outside those windows, preserve that source person's original appearance, subject only to other explicitly requested edits. Lock the orange tabby cat's identity across frames and cuts; it is never duplicated onto another figure. Its shadows follow the cat throughout the active window.\nEverything else — the inherited choreography, source audio synchronization, original shot structure, camera moves and all timing — stays exactly the same.",
  },
}

export function findCreative(store: Store, post: Post): Video | undefined {
  if (post.creative) return store.creative.find((c) => c.id === post.creative)
  const suffix = post.id.split('-').pop()
  const num = /video-(\d+)/.exec(post.media ?? '')?.[1]
  return store.creative.find((c) => (num ? c.id === `R7-V${num}` : c.id.split('-').pop() === suffix))
}

export interface PostInput { kit: GenKit; creative?: Video; empty: boolean }

export function postInput(store: Store, post: Post): PostInput {
  const creative = findCreative(store, post)
  const base: GenKit = { ...(creative?.kit ?? {}), ...(post.kit ?? {}) }
  const extra = creative ? EXTRA[creative.id] : undefined
  const kit: GenKit = { ...base, ...Object.fromEntries(Object.entries(extra ?? {}).filter(([k]) => !(base as Record<string, unknown>)[k])) }
  if (!kit.tool && creative?.note) {
    const m = /Nguồn: ([^;]+)/.exec(creative.note)
    if (m) kit.tool = m[1].trim()
    if (!kit.config) kit.config = creative.note.replace(/^Nguồn: [^;]+;?\s*/, '')
  }
  const empty = !kit.tool && !kit.config && !kit.prompt && !kit.referenceVideo?.length && !kit.character?.length && !kit.product?.length
  return { kit, creative, empty }
}
