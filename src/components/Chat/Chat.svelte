<script>
    import { onDestroy } from "svelte";
    import Message from "./Message/Message.svelte";
    import MessageInput from "./MessageInput.svelte";
    import {
        sendMessage,
        disconnect,
        messageMap,
    } from "../../stores/messageStore";
    import EmptyState from "./EmptyState.svelte";

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
        <EmptyState on:send={handleSend} />
    {:else}
        {#each $messageMap.values() as message (message)}
            <Message {message} />
        {/each}
    {/if}
    <MessageInput on:send={handleSend} />
</div>
