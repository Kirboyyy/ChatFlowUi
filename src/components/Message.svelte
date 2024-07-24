<script>
    export let message;

    import UserMessage from "./UserMessage.svelte";
    import BotMessage from "./BotMessage.svelte";
</script>

{#if message.role === "user"}
    <UserMessage {message} />
{:else}
    <BotMessage {message} />
{/if}
