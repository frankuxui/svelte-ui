<script>
	import { theme } from "lib/theme.svelte";
</script>

<header class="border-border bg-background/80 sticky top-0 z-40 h-16 w-full border-b backdrop-blur-lg">
	<nav class="max-w-10xl mx-auto flex h-full w-full items-center justify-between px-10">
		<a
			class="bg-foreground/5 inline-flex h-7 items-center justify-center rounded px-3 text-xs font-semibold uppercase"
			href="/"
		>
			Svelte UI
		</a>
		<button
			onclick={theme.toggle}
			data-slot="button"
			class="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 group/toggle extend-touch-target inline-flex size-8 shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
			title="Toggle theme"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="size-4.5"
				><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
				></path><path d="M12 3l0 18"></path><path d="M12 9l4.65 -4.65"></path><path d="M12 14.3l7.37 -7.37"></path><path
					d="M12 19.6l8.85 -8.85"
				></path></svg
			><span class="sr-only">Toggle theme</span></button
		>
	</nav>
</header>
