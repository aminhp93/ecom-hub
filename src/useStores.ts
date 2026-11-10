import { useCallback, useEffect, useState } from 'react'
import { repo } from './data'
import type { Store } from './data/types'
import { today } from './data/template'

export function useStores() {
  const [stores, setStores] = useState<Store[]>([])
  const [loaded, setLoaded] = useState(false)

  const refresh = useCallback(async () => {
    setStores(await repo.list())
    setLoaded(true)
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const create = useCallback(
    async (s: Store) => {
      const created = await repo.create(s)
      await refresh()
      return created
    },
    [refresh],
  )

  const save = useCallback(
    async (s: Store) => {
      await repo.update({ ...s, updated: today() })
      await refresh()
    },
    [refresh],
  )

  const remove = useCallback(
    async (id: string) => {
      await repo.remove(id)
      await refresh()
    },
    [refresh],
  )

  const reset = useCallback(async () => {
    await repo.reset()
    await refresh()
  }, [refresh])

  return { stores, loaded, create, save, remove, reset }
}
