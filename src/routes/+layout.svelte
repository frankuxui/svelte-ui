<script lang="ts">
	import Header from "components/header.svelte";
	import "../app.css";
	export const prerender = true;
	let { children } = $props();
</script>

<Header />

{@render children()}
