<script>
    import "../app.css";
    import SettingsPanel from "../components/Chat/SettingsPanel.svelte";
    import Header from "../components/Layout/Header.svelte";
</script>

<div class="bg-background-primary text-text-primary min-h-screen flex flex-col">
    <Header />
    <SettingsPanel />
    <slot></slot>
</div>
