---
layout: blog
title: Dialog
description: Los dialogos son componentes de interfaz de usuario que permiten mostrar contenido adicional o interactivo en una ventana emergente.
date: "2023-4-14"
categories:
  - sveltekit
  - svelte
published: true
---

<script>
	import DialogDemo from "content/expo/dialogDemo.svelte";
</script>

## Markdown

```ts
const mdsvexOptions = {
	extensions: [".md"],
	layout: {
		blog: path.resolve(__dirname, "./src/layouts/mdsvex.svelte")
	},
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await createHighlighter({
				themes: ["one-light"],
				langs: ["javascript", "typescript"]
			});
			await highlighter.loadLanguage("javascript", "typescript");
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "one-light" }));
			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};
```

## Ejemplo básico

Ejemplo de un dialogo básico que muestra un mensaje y un botón para cerrarlo.

<DialogDemo />

## Placement

Los dialogos pueden ser colocados en diferentes posiciones de la pantalla. Puedes especificar la posición utilizando la prop `placement`.

Las opciones disponibles son: `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `center`, `center-start` y `center-end`.

Por defecto, el dialogo se coloca en el centro de la pantalla.

<DialogDemo placement="top-start" />
