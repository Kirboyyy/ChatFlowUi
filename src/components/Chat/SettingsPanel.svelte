<script>
    import {
        settings,
        strategies,
        isSettingsOpen,
    } from "../../stores/settingsStore";

    let localSettings = { ...$settings };

    function togglePanel() {
        isSettingsOpen.update((value) => !value);
    }

    function saveSettings() {
        settings.set(localSettings);
        togglePanel();
    }

    function addHeader() {
        localSettings.httpHeaders = [
            ...localSettings.httpHeaders,
            { name: "", value: "" },
        ];
    }
    /**
     * @param {number} index
     */
    function removeHeader(index) {
        localSettings.httpHeaders = localSettings.httpHeaders.filter(
            (_, i) => i !== index,
        );
    }
</script>

<!-- Main Settings Panel -->
<div
    class="settings-panel fixed top-0 right-0 h-full w-full md:w-3/5 bg-background-secondary shadow-lg p-4 text-text-primary z-10 overflow-scroll"
    class:open={$isSettingsOpen}
    class:closed={!$isSettingsOpen}
>
    <h2 class="text-xl font-bold mb-4">Settings</h2>

    <!-- System Prompt Setting -->
    <div class="mb-4">
        <label class="block mb-2 font-semibold" for="systemPrompt"
            >System Prompt</label
        >
        <textarea
            class="w-full p-2 border border-border-secondary rounded bg-background-tertiary text-text-primary"
            rows={5}
            id="systemPrompt"
            bind:value={localSettings.systemPrompt}
        />
    </div>

    <!-- Backend URL Setting -->
    <div class="mb-4">
        <label class="block mb-2 font-semibold" for="backendUrl"
            >Backend URL</label
        >
        <input
            class="w-full p-2 border border-border-secondary rounded bg-background-tertiary text-text-primary"
            type="text"
            id="backendUrl"
            bind:value={localSettings.backendUrl}
        />
    </div>

    <!--Model Setting -->
    <div class="mb-4">
        <label class="block mb-2 font-semibold" for="modelName"
            >Language Model</label
        >
        <input
            class="w-full p-2 border border-border-secondary rounded bg-background-tertiary text-text-primary"
            type="text"
            id="modelName"
            bind:value={localSettings.modelName}
        />
    </div>

    <!-- History Size -->
    <div class="mb-4">
        <label class="block mb-2 font-semibold" for="historySize"
            >History Size</label
        >
        <input
            class="w-full p-2 border border-border-secondary rounded bg-background-tertiary text-text-primary"
            type="number"
            min="0"
            id="historySize"
            bind:value={localSettings.historySize}
        />
    </div>
    <!-- HTTP Headers Setting -->
    <div class="mb-4">
        <div class="block mb-2 font-semibold">HTTP Headers</div>
        {#each localSettings.httpHeaders as header, index}
            <div class="flex mb-2">
                <input
                    class="flex-1 p-2 border border-border-secondary rounded bg-background-tertiary text-text-primary mr-2"
                    type="text"
                    placeholder="Header Name"
                    bind:value={header.name}
                />
                <input
                    class="flex-1 p-2 border border-border-secondary rounded bg-background-tertiary text-text-primary"
                    type="text"
                    placeholder="Header Value"
                    bind:value={header.value}
                />
                <button
                    class="ml-2 p-2 bg-button-secondary-background text-button--text rounded"
                    on:click={() => removeHeader(index)}>Remove</button
                >
            </div>
        {/each}
        <button
            class="w-full p-2 bg-button-primary-background text-button-primary-text rounded"
            on:click={addHeader}>Add Header</button
        >
    </div>

    <!-- Response Selector Setting -->
    <div class="mb-4">
        <label class="block mb-2 font-semibold" for="strategy"
            >Response Selector</label
        >
        <select
            class="w-full p-2 border border-border-secondary rounded bg-background-tertiary text-text-primary"
            id="strategy"
            bind:value={localSettings.strategy}
        >
            {#each strategies as strategy}
                <option value={strategy}>{strategy}</option>
            {/each}
        </select>
    </div>

    <!-- Save and Cancel Buttons -->
    <button
        class="w-full p-2 bg-button-primary-background text-button-primary-text rounded"
        on:click={saveSettings}>Save</button
    >
    <button
        class="w-full p-2 mt-2 bg-button-secondary-background text-button--text rounded"
        on:click={togglePanel}>Cancel</button
    >
</div>

<style>
    .settings-panel {
        transition: transform 0.3s ease-in-out;
    }

    .settings-panel.open {
        transform: translateX(0);
    }

    .settings-panel.closed {
        transform: translateX(100%);
    }
</style>
