<script lang="ts">
	import Dialog from "components/dialog.svelte";

	let open = $state(false);

	function setOpen(value: boolean) {
		open = value;
	}
	let { data } = $props();
</script>

<main class="grid place-items-start gap-4 p-28">
	<h1>Dialog</h1>

	<Dialog {open} setOpen={() => setOpen(false)} staticBackdrop={false} placement="center" size="sm">
		<div>
			<h2>Esto es el header</h2>
		</div>

		<div>
			<p>Esto es el contenido del dialogo</p>
		</div>

		<div>
			<button onclick={() => setOpen(false)} class="rounded bg-blue-500 px-4 py-2 text-white">Cerrar</button>
		</div>
	</Dialog>

	<button
		onclick={() => setOpen(true)}
		class="inline-flex h-10 items-center justify-center rounded bg-blue-700 px-6 text-sm font-medium text-white"
	>
		Open dialog
	</button>

	<section>
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href={`componentes/${post.slug}`} class="title text-3xl font-bold">{post.title}</a>
				</li>
			{/each}
		</ul>
	</section>
</main>
