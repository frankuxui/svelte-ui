<script lang="ts">
	import Accordion from "components/ui/accordion/accordion.svelte";
	import AccordionItem from "components/ui/accordion/accordionItem.svelte";
</script>

<Accordion>
	<AccordionItem header={() => "Header 1"} arrow={() => "Arrow 1"}>
		<p>Content for Header 1</p>
	</AccordionItem>
	<AccordionItem header={() => "Header 1"} arrow={() => "Arrow 1"}>
		<p>Content for Header 1</p>
	</AccordionItem>
</Accordion>
