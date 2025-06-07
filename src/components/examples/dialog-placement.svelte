<script lang="ts">
	import Dialog from "components/dialog.svelte";
	import Expo from "components/md/expo.svelte";
	import { cx } from "lib/cx";

	const positions = [
		"top-start",
		"top",
		"top-end",
		"center-start",
		"center",
		"center-end",
		"bottom-start",
		"bottom",
		"bottom-end"
	] as const;

	type Placement = (typeof positions)[number];

	let open = $state(false);
	let placement: Placement = $state("center");

	function setOpen(value: boolean) {
		open = value;
	}

	function handleOpenDialog(pos: Placement) {
		placement = pos;
		open = true;
	}
</script>

<Expo>
	<Dialog {open} setOpen={() => setOpen(false)} {placement}>
		<header>
			<h2>Esto es el header</h2>
		</header>

		<div>
			<p>Esto es el contenido del dialogo</p>
		</div>

		<div>
			<button onclick={() => setOpen(false)} class="rounded bg-blue-500 px-4 py-2 text-white">Cerrar</button>
		</div>
	</Dialog>

	<div
		class="border-border divide-border grid h-56 w-full grid-cols-3 divide-x divide-y overflow-hidden rounded border"
	>
		{#each positions as pos}
			<button
				class={cx(
					"hover:bg-foreground/2 focus:bg-foreground/2 relative h-full w-full text-xs font-semibold uppercase",
					placement === pos && "bg-foreground/2"
				)}
				onclick={() => handleOpenDialog(pos)}
				aria-label={`Open dialog at ${pos}`}
			>
				{#if placement === pos}
					<div
						class="border-border pointer-events-none absolute top-0 left-0 z-0 h-full w-full bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-80 [--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10"
					></div>
				{/if}

				<span class="relative z-1">{pos}</span>
			</button>
		{/each}
	</div>
</Expo>
