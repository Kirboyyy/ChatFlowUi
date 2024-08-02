<script>
    import "./documentation.css";
    import { onMount } from "svelte";
    /**
     * @type {any[]}
     */
    let docs = [];
    let isMenuOpen = false; // State to manage the menu visibility

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    onMount(async () => {
        const response = await fetch("/api/list-files");
        docs = await response.json();
    });
</script>

<div class="flex flex-col md:flex-row">
    <nav
        class="bg-gray-800 shadow-md w-full md:w-64 text-white h-auto md:h-screen"
    >
        <div class="p-5">
            <div class="flex">
                <h2 class="text-2xl font-semibold">
                    <a href="/docs" class="hover:text-blue-400 transition"
                        >Documentation</a
                    >
                </h2>
                <button
                    on:click={toggleMenu}
                    class="md:hidden text-white focus:outline-none ml-1"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>
            <ul class={`mt-5 space-y-2 ${isMenuOpen ? "" : "hidden"} md:block`}>
                {#each docs as doc}
                    <li>
                        <a
                            href={`/docs/${doc.replace(".md", "")}`}
                            class="block py-2 px-4 hover:bg-gray-700 transition rounded"
                            >{doc.replace(".md", "")}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
    <slot />
</div>
