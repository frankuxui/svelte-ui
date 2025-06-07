<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	let { target = null, children } = $props();
	let el: HTMLDivElement;

	onMount(() => {
		if (!target) {
			target = document.getElementById("svelte-portal") as HTMLElement;
			if (!target) {
				target = document.createElement("div");
				target.id = "svelte-portal";
				document.body.appendChild(target);
			}
		}
		target.appendChild(el);
	});

	onDestroy(() => {
		el?.remove();
	});
</script>

<div bind:this={el}>
	{@render children()}
</div>
