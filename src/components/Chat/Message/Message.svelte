<script>
    export let message;

    import UserMessage from "./UserMessage.svelte";
    import BotMessage from "./BotMessage.svelte";
    import ErrorMessage from "./ErrorMessage.svelte";
</script>

{#if message.error}
    <ErrorMessage {message} />
{:else if message.role === "user"}
    <UserMessage {message} />
{:else}
    <BotMessage {message} />
{/if}
