<script lang="ts">
	import { getContext } from "svelte";
	import { slide } from "svelte/transition";
	import { onDestroy } from "svelte";

	// Contexto
	interface AccordionContext {
		selected: { subscribe: (fn: (value: any) => void) => () => void };
		setSelected: (value: any) => void;
	}

	// Props
	export let header: () => any;
	export let children: () => any;
	export let arrow: () => any = () => null;
	export let initiallyOpen: boolean = false;

	// Context
	const { selected, setSelected } = getContext<AccordionContext>("ctx");

	// Identidad del item
	const self = {};

	// Abrir si inicialmenteOpen
	if (initiallyOpen) {
		setSelected(self);
	}

	// Reactividad
	let isOpen = false;
	const unsubscribe = selected.subscribe((value: any) => {
		isOpen = value === self;
	});

	onDestroy(unsubscribe);

	function toggle() {
		setSelected(isOpen ? null : self);
	}
</script>

<h2 class="w-full">
	<button on:click={toggle} class="accordion-item flex w-full items-center justify-between">
		{#if header}
			{@render header()}
		{/if}
		{#if arrow}
			{@render arrow()}
		{/if}
	</button>
</h2>

{#if isOpen}
	<div class="accordion-content overflow-hidden" transition:slide={{ duration: 200 }}>
		{@render children()}
	</div>
{/if}
