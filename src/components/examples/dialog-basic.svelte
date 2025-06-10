<script lang="ts">
	import Dialog from "components/dialog.svelte";
	import Expo from "components/md/expo.svelte";
	
	let open = $state(false);

	function setOpen(value: boolean) {
		open = value;
	}
</script>

<Expo>
	<Dialog bind:open={open} setOpen={() => setOpen(false)}>
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
</Expo>
