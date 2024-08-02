<script>
    import { isSettingsOpen } from "../../stores/settingsStore";

    function togglePanel() {
        isSettingsOpen.update((val) => !val);
    }
</script>

<div
    class="p-4 border-b-2 border-b-background-secondary flex flex-col md:flex-row justify-between items-center"
>
    <div class="flex items-end mb-2 md:mb-0">
        <a href="/"><h1 class="text-2xl">💬 ChatFlowUi</h1></a>
        <h2 class="ml-4 hidden md:block">
            Empower Your Logic, We’ll Handle the Look!
        </h2>
    </div>

    <div class="flex flex-col md:flex-row space-x-0 md:space-x-4 items-center">
        <div class="flex space-x-2 mb-2 md:mb-0">
            <a href="/" class="hover:underline cursor-pointer">Chat</a>
            <a href="/docs" class="hover:underline cursor-pointer"
                >Documentation</a
            >
        </div>
        <button
            class="p-2 bg-button-primary-background text-button-primary-text rounded"
            on:click={togglePanel}>Settings</button
        >
    </div>
</div>
