<script>
    import markdownIt from "markdown-it";

    export let message;
    const md = markdownIt();

    $: result = md.render(message.content);
</script>

<div
    class="bot-message bg-background-secondary text-text-secondary p-3 m-2 rounded-lg self-start max-w-3xl break-words"
>
    {@html result}
</div>
