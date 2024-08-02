<script>
    import markdownIt from "markdown-it";
    import { page } from "$app/stores";

    let markdownContent = "";
    const md = markdownIt();

    $: {
        const slug = $page.params.slug; // Subscribe to slug changes
        fetchMarkdown(slug);
    }

    /**
     * @param {string} slug
     */
    async function fetchMarkdown(slug) {
        try {
            const response = await fetch(`/documentation/${slug}.md`);
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
    }
</script>

<div class="documentation max-w-4xl mx-2 md:mx-auto">
    {@html md.render(markdownContent)}
</div>
