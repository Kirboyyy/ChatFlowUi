<script>
    import Header from "../components/Header.svelte";
    import "../app.css";
    import SettingsPanel from "../components/SettingsPanel.svelte";
</script>

<div class="bg-background-primary text-text-primary min-h-screen flex flex-col">
    <Header />
    <SettingsPanel />
    <slot></slot>
</div>
