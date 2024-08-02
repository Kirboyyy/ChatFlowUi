<script>
    // @ts-nocheck

    import { createEventDispatcher } from "svelte";
    import { isGenerating } from "../../stores/messageStore";

    let input = "";
    let rows = 1;
    const dispatch = createEventDispatcher();

    function send() {
        if (!$isGenerating) {
            if (input.trim()) {
                dispatch("send", input);
                input = "";
            }
        }
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
            rows = 1;
            input = "";
        }
    }

    function handleInput(event) {
        const value = event.target.value;
        const lineCount = (value.match(/\n/g) || []).length;
        rows = lineCount + 1;
        input = value;
    }
</script>

<div
    class="fixed bottom-0 left-0 right-0 border-t-2 border-t-background-secondary bg-background-primary"
>
    <div class="mx-4 md:mx-24 mb-4 mt-4 flex">
        <textarea
            id="messageInput"
            value={input}
            on:input={handleInput}
            on:keydown={handleKeyDown}
            class="flex-1 p-2 border border-border-primary rounded-l-md bg-background-secondary text-text-primary resize-none"
            {rows}
            placeholder="Send a message"
            style="overflow-y: hidden;"
        />
        <button
            on:click={send}
            class="p-2 bg-button-primary-background text-button-primary-text rounded-r-md hover:bg-button-primary-hover"
            class:disabled={$isGenerating}
            disabled={$isGenerating}>Send</button
        >
    </div>
</div>

<style>
    .disabled {
        border: 1px solid #444;
        background-color: #252525;
        color: #b3b3b3;
    }
</style>
