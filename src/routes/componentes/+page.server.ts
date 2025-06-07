import type { Post } from '$lib/types'

export async function load({ fetch }) {
  const response = await fetch('/api/posts')
  const components: Post[] = await response.json()
  return { components }
}