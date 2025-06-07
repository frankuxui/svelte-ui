<script lang="ts">
	import type { Post } from "lib/types.js";
	import { page } from "$app/state";

	let { children, data } = $props();
	const components = data.data as Post[];

	let pathname = $derived(page.url.pathname);
</script>

<main class="mt-10 w-full">
	<div class="max-w-9xl mx-auto w-full px-10">
		<div class="flex w-full items-start justify-between gap-10">
			<aside class="hidden w-full max-w-3xs flex-col items-start gap-3 lg:sticky lg:top-30 lg:flex">
				<h2 class="text-foreground/40 pl-2 text-xs font-semibold uppercase">Inicio</h2>
				<ul class="flex flex-col items-start gap-1">
					{#each components as post}
						<li>
							<a
								href={`/componentes/${post.slug}`}
								aria-label={`Ir a al componente ${post.title}`}
								class="hover:bg-foreground/5 data-[state='active']:bg-foreground/5 inline-flex items-center justify-between rounded px-2 py-1 text-sm font-medium"
								data-state={pathname === `/componentes/${post.slug}` && "active"}
							>
								{post?.title}
							</a>
						</li>
					{/each}
				</ul>
			</aside>
			<article class="mx-auto w-full max-w-3xl lg:min-w-xl">
				<header class="flex w-full flex-col items-start gap-2">
					<h1 class="text-3xl font-bold">{components.find((post) => post.slug === page.params.slug)?.title}</h1>
					<p class="mt-2 text-lg">
						{components.find((post) => post.slug === page.params.slug)?.description}
					</p>
				</header>
				<div class="mt-10 w-full">
					{@render children()}
				</div>
			</article>
			<div class="sticky top-30 hidden w-full max-w-3xs xl:block">
				<h2 class="text-lg font-semibold">Tags</h2>
			</div>
		</div>
	</div>
</main>
