<script>
    import { onMount } from "svelte";
    import markdownIt from "markdown-it";
    import { page } from "$app/stores";

    let markdownContent = "";
    const md = markdownIt();

    onMount(async () => {
        try {
            const response = await fetch(`/documentation/index.md`);
            if (!response.ok) {
                throw new Error(
                    `Could not fetch the file: ${response.statusText}`,
                );
            }
            markdownContent = await response.text();
        } catch (err) {
            console.error(err);
            markdownContent = "# Page not found";
        }
    });
</script>

<div class="documentation max-w-4xl mx-4 md:mx-auto">
    {@html md.render(markdownContent)}
</div>
