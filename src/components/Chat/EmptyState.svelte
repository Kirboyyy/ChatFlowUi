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

<div class="text-center">
    <h1 class="text-6xl mb-4">💬 ChatFlowUi</h1>
    <h2 class="text-4xl mb-8">Empower Your Logic, We’ll Handle the Look!</h2>
    <p class="text-lg mb-8">
        Your journey starts here. This chatbot is your canvas, ready to bring
        your ideas to life with LLM backends. <br />Simply set up your
        properties, and let us handle the look while you empower your logic.
    </p>
    <p class="text-lg">
        Need help? Check out the <a class="text-blue-500" href="/docs"
            >Documentation</a
        >
        or visit our
        <a class="text-blue-500" href="https://github.com/Kirboyyy/ChatFlowUi">GitHub</a
        >.
    </p>
</div>

<div
    class="flex flex-col md:flex-row items-stretch justify-center text-center space-x-4 mt-8"
>
    <button
        class="bg-background-tertiary text-text-primary p-4 rounded-lg max-w-xs flex-1 flex items-center justify-center"
        on:click={handleTextClick}
    >
        <p class="text-md">
            How can I create a reactive store in Svelte to manage state across
            components?
        </p>
    </button>
    <button
        class="bg-background-tertiary text-text-primary p-4 rounded-lg max-w-xs flex-1 flex items-center justify-center"
        on:click={handleTextClick}
    >
        <p class="text-md">
            Why does Go's 'defer' statement feel like a breath of fresh air
            compared to Java's try-finally block? Can you explain how 'defer'
            works and why it makes cleanup so much easier?
        </p>
    </button>
    <button
        class="bg-background-tertiary text-text-primary p-4 rounded-lg max-w-xs flex-1 flex items-center justify-center"
        on:click={handleTextClick}
    >
        <p class="text-md">Why do programmers prefer dark mode?</p>
    </button>
</div>
