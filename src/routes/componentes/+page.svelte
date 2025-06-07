<script>
	let { data } = $props();
	console.log(data);
</script>

<main>
	<h1>Componentes</h1>
	<div class="mx-auto w-full max-w-7xl px-10">
		<div class="grid w-full grid-cols-5 gap-6">
			{#each data.components as component}
				<article class="w-full">
					<a
						class="bg-foreground/5 flex w-full items-center justify-center rounded-xl p-6"
						href={`/componentes/${component.slug}`}
					>
						<h2>{component?.title}</h2>
					</a>
				</article>
			{/each}
		</div>
	</div>
</main>
