<script lang="ts">
	let { children } = $props();
</script>

<div
	class="border-border before:text-foreground/50 relative mt-6 mb-10 w-full rounded-xl border px-10 pt-16 pb-10 before:absolute before:top-6 before:left-10 before:text-xs before:font-semibold before:content-['EXAMPLE']"
>
	{@render children()}
</div>
