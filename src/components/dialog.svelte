<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { tick } from 'svelte';

  type Placement = "top-start" | "top" | "top-end" | "center" | "center-start" | "center-end" | "bottom-start" | "bottom" | "bottom-end";
  type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | "full" | "full-screen";

  interface DialogProps {
    open?: boolean;
    placement?: Placement;
    size?: Size;
    staticBackdrop?: boolean;
    onClose?: () => void;
    children?: () => any; // Función para renderizar el contenido del diálogo
  }

  let {
    open = false,
    placement = "center",
    size = "md",
    staticBackdrop = false,
    onClose = () => {},
    children 
  }: DialogProps = $props();

  let shaking = $state(false);

  

  // Este efecto escucha los cambios de open para añadir o quitar el listener
  $effect(() => {
    if (!open) return;

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (staticBackdrop) {
          shaking = true;
          setTimeout(() => shaking = false, 300);
        } else {
          handleClose();
        }
      }
    }

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  });

  async function handleBackdropClick() {
    if (staticBackdrop) {
      shaking = true;
      await tick();
      setTimeout(() => shaking = false, 300);
    } else {
      handleClose();
    }
  }

  function handleClose() {
    open = false;   // Esto solo cierra visualmente
    onClose?.();    // Notificamos al padre (opcional)
  }

  function cx(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ');
  }
</script>

<style>
  @keyframes shake-scale {
    0% { transform: scale(1); }
    20% { transform: scale(1.05); }
    40% { transform: scale(0.95); }
    60% { transform: scale(1.03); }
    80% { transform: scale(0.97); }
    100% { transform: scale(1); }
  }

  .shake {
    animation: shake-scale 0.3s ease;
  }
</style>

{#if open}
  <div class={cx(
    "fixed inset-0 z-50 flex",
    placement === "top-start" && "justify-start items-start",
    placement === "top" && "justify-center items-start",
    placement === "top-end" && "justify-end items-start",
    placement === "center" && "justify-center items-center",
    placement === "center-start" && "justify-start items-center",
    placement === "center-end" && "justify-end items-center",
    placement === "bottom-start" && "justify-start items-end",
    placement === "bottom" && "justify-center items-end",
    placement === "bottom-end" && "justify-end items-end",
    size === "full-screen" ? "p-0" : "p-10"
  )}>
    
    <!-- Backdrop -->
    <div 
      role="button"
      tabindex="0"
      aria-label="Close dialog"
      class="absolute inset-0 bg-black/30 z-10"
      onclick={handleBackdropClick}
      transition:fade={{ duration: 200 }}
    ></div>

    <!-- Dialog -->
    <div 
      class={cx(
        "relative z-20 w-full bg-white flex flex-col",
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
        size === "full" && "w-full h-full",
        size === "full-screen" ? "w-screen h-screen rounded-none" : "rounded-xl p-10",
        shaking && "shake"
      )}
      transition:scale={{ duration: 300, start: 0.95, opacity: 0, easing: cubicOut }}
    >
      <div class="flex-1 overflow-y-auto">
        {#if children}
          {@render children()}
        {/if}
      </div>

      <!-- Close button -->
      <button
        onclick={handleClose}
        class="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Close dialog"
      >
        ×
      </button>
    </div>
  </div>
{/if}
