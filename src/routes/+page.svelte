<script lang="ts">
	import Dialog from "components/dialog.svelte";
	import PresentationWidgets from "components/presentation-widgets.svelte";

	let openDialog1 = $state(false);
	let openDialog2 = $state(false);
</script>

<main class="w-full overflow-hidden pt-20">
	<div class="max-w-9xl mx-auto w-full overflow-hidden lg:px-10">
		<div class="flex w-full flex-col items-center justify-center gap-10 overflow-hidden lg:flex-row">
			<section class="flex w-full max-w-xl min-w-sm flex-1 flex-col items-start gap-4 px-10 lg:px-0">
				<h1 class="w-full text-4xl font-bold sm:text-7xl">
					<span>Svelte</span>
					<span>UI</span>
				</h1>
				<p class="text-xl sm:text-2xl sm:leading-10">
					Un conjunto de componentes UI para Svelte, con un diseño moderno y responsivo.
				</p>
				<a
					href="/componentes"
					class="bg-foreground text-background inline-flex h-12 items-center justify-center rounded-full px-6 font-medium"
				>
					Componentes
				</a>
				<!-- <button onclick={() => (openDialog1 = true)} class="bg-black px-6 py-2 text-white"> Abrir Dialogo 1 </button>
				<Dialog open={openDialog1} setOpen={() => (openDialog1 = false)} size="xs" placement="center">
					<button onclick={() => (openDialog2 = true)} class="bg-blue-400 px-6 py-2 text-white">
						Abrir Dialogo 2
					</button>
				</Dialog>
				<Dialog open={openDialog2} setOpen={() => (openDialog2 = false)} size="md" placement="center">
					<div class="flex h-full w-full items-center justify-center">
						<h1 class="text-3xl font-bold">Hola, soy un dialogo</h1>
					</div>
				</Dialog> -->
			</section>
			<section
				class="bg-foreground/5 border-border h-[40rem] min-w-20 overflow-hidden border px-8 pt-8 lg:max-w-[62rem] lg:rounded-2xl"
			>
				<div class="flex h-full w-full flex-1 overflow-hidden">
					<div class="w-full overflow-hidden">
						<PresentationWidgets />
					</div>
				</div>
			</section>
		</div>
	</div>
</main>
