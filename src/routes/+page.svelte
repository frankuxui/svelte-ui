<script lang="ts">
	import Dialog from "components/dialog.svelte";

  let open = $state(false);

  function setOpen(value: boolean) {
    open = value;
  }
</script>


<main class="p-28 grid place-items-start gap-4">
  <h1>Dialog</h1>
  <Dialog open={open} staticBackdrop={true} placement="center" size="sm"/>
  <button
    onclick={() => setOpen(true)}
    class="h-10 px-6 rounded inline-flex items-center justify-center text-sm font-medium bg-blue-700 text-white">
    Open dialog
  </button>
</main>
