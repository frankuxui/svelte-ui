<script lang="ts">
	import { fade, scale } from "svelte/transition";
	import { cubicOut } from "svelte/easing";
	import { tick, onMount } from "svelte";
	import Portal from "./ui/portal.svelte";

	type Placement =
		| "top-start"
		| "top"
		| "top-end"
		| "center"
		| "center-start"
		| "center-end"
		| "bottom-start"
		| "bottom"
		| "bottom-end";
	type Size =
		| "xs"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl"
		| "full"
		| "full-screen";

	interface DialogProps {
		open?: boolean;
		placement?: Placement;
		size?: Size;
		staticBackdrop?: boolean;
		setOpen?: () => void;
		children?: () => any;
		onDialogClose?: () => void; // Metodo para ejecutar otra accion al cerrar el dialogo
	}

	let {
		open = false,
		placement = "center",
		size = "md",
		staticBackdrop = false,
		setOpen = () => {},
		children,
		onDialogClose
	}: DialogProps = $props();

	let shaking = $state(false);

	// Escuchar tecla escape de forma global (solo una vez)
	onMount(() => {
		if (typeof window === "undefined") return;

		function handleEscapeKey(event: KeyboardEvent) {
			if (event.key === "Escape" && open) {
				if (staticBackdrop) {
					shake();
				} else {
					close();
				}
			}
		}

		window.addEventListener("keydown", handleEscapeKey);
		return () => window.removeEventListener("keydown", handleEscapeKey);
	});

	function close() {
		open = false;
		setOpen?.();
		tick().then(() => {
			onDialogClose?.(); // Ejecutar otra acción al cerrar el diálogo
		});
	}

	async function handleBackdropClick() {
		if (staticBackdrop) {
			shake();
		} else {
			close();
		}
	}

	function shake() {
		shaking = true;
		setTimeout(() => (shaking = false), 300);
	}

	function cx(...classes: (string | boolean)[]) {
		return classes.filter(Boolean).join(" ");
	}
</script>

{#if open}
	<Portal>
		<div
			transition:fade={{ duration: 300, easing: cubicOut }}
			class={cx(
				"fixed inset-0 z-50 flex",
				placement === "top-start" && "items-start justify-start",
				placement === "top" && "items-start justify-center",
				placement === "top-end" && "items-start justify-end",
				placement === "center" && "items-center justify-center",
				placement === "center-start" && "items-center justify-start",
				placement === "center-end" && "items-center justify-end",
				placement === "bottom-start" && "items-end justify-start",
				placement === "bottom" && "items-end justify-center",
				placement === "bottom-end" && "items-end justify-end",
				size === "full-screen" ? "p-0" : "p-10"
			)}
			role="dialog"
			aria-modal="true"
		>
			<!-- Backdrop -->
			<div
				role="button"
				tabindex="0"
				class="bg-foreground/30 absolute inset-0 z-10"
				aria-label="Close dialog"
				onclick={() => handleBackdropClick()}
				onkeyup={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						handleBackdropClick();
					}
				}}
				onkeydown={(e) => {
					if (e.key === "Escape") {
						e.preventDefault(); // Evitar el comportamiento por defecto del escape
					}
				}}
				transition:fade={{ duration: 200, easing: cubicOut }}
			></div>

			<!-- Dialog -->
			<div
				class={cx(
					"bg-background relative z-20 flex w-full flex-col ",
					size === "xs" && "max-w-xs",
					size === "sm" && "max-w-sm",
					size === "md" && "max-w-md",
					size === "lg" && "max-w-lg",
					size === "xl" && "max-w-xl",
					size === "2xl" && "max-w-2xl",
					size === "3xl" && "max-w-3xl",
					size === "4xl" && "max-w-4xl",
					size === "5xl" && "max-w-5xl",
					size === "6xl" && "max-w-6xl",
					size === "7xl" && "max-w-7xl",
					size === "8xl" && "max-w-8xl",
					size === "9xl" && "max-w-9xl",
					size === "full" && "h-full w-full",
					size === "full-screen" ? "h-screen w-screen rounded-none" : "rounded-xl p-10",
					shaking && "animate-shake-scale"
				)}
				transition:scale={{ duration: 300, start: 0.95, opacity: 0, easing: cubicOut }}
			>
				{#if children}
					{@render children()}
				{/if}

				<header>
					<button
						type="button"
						onclick={() => close()}
						class="focus:ring-foreground hover:bg-foreground/4 absolute top-4 right-4 rounded-full p-2 transition-all duration-300 focus:ring-2 focus:outline-none"
						aria-label="Close dialog"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M18 6L6 18M6 6l12 12"
							/></svg
						>
					</button>
				</header>
			</div>
		</div>
	</Portal>
{/if}
