<script lang="ts">
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	let { children } = $props();

	// Estado compartido: qué item está abierto
	const selected = writable(null);

	function setSelected(item: any) {
		selected.set(item);
	}

	// Compartir contexto con los hijos
	setContext("ctx", { selected, setSelected });
</script>

<div class="accordion">
	{@render children()}
</div>

<style>
	.accordion {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
