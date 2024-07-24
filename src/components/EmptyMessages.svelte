<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    /**
     * @param {string} text
     */
    function send(text) {
        dispatch("send", text);
    }

    /**
     * @param {MouseEvent} event
     */
    function handleTextClick(event) {
        /** @type {HTMLElement} */
        const target = /** @type {HTMLElement} */ (event.target);
        const text = target.textContent || "";
        send(text);
    }
</script>

<div class="flex flex-col items-center justify-center text-center space-y-4">
    <button
        class="bg-background-tertiary text-text-primary p-4 rounded-lg max-w-xs w-full"
        on:click={handleTextClick}
    >
        <p class="text-md">
            Welcome to OmniChatUi! How can I assist you today?
        </p>
    </button>
    <button
        class="bg-background-tertiary text-text-primary p-4 rounded-lg max-w-xs w-full"
        on:click={handleTextClick}
    >
        <p class="text-md">
            Try asking me about the weather or the latest news.
        </p>
    </button>
    <button
        class="bg-background-tertiary text-text-primary p-4 rounded-lg max-w-xs w-full"
        on:click={handleTextClick}
    >
        <p class="text-md">
            Need help with something specific? Just type your question.
        </p>
    </button>
</div>
