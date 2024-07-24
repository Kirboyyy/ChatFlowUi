<script>
    import { onDestroy } from "svelte";
    import Message from "./Message.svelte";
    import MessageInput from "./MessageInput.svelte";
    import { messageMap } from "../stores/messages";
    import { sendMessage, disconnect } from "../stores/messages";
    import EmptyMessages from "./EmptyMessages.svelte";

    onDestroy(() => {
        disconnect();
    });

    /**
     * @param {CustomEvent<string>} event
     */
    function handleSend(event) {
        sendMessage(event.detail);
    }
</script>

<div class="chat-container flex flex-col max-w-screen-xl w-full p-4 mb-20">
    {#if $messageMap.size === 0}
        <EmptyMessages on:send={handleSend} />
    {:else}
        {#each $messageMap.values() as message (message)}
            <Message {message} />
        {/each}
    {/if}
    <MessageInput on:send={handleSend} />
</div>
