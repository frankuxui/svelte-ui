import type { Post } from "lib/types";

export async function load({ fetch }) {
  const response = await fetch('/api/posts')
  const data: Post[] = await response.json()
  return { data }
}