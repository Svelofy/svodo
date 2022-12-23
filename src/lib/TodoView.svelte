<script lang="ts">
    import { todos } from "../stores";
    import Time from 'svelte-time';
</script>

{#each $todos as { text, creationDate }}
    <h1>{text}</h1>
    <Time timestamp={creationDate} live={15000} relative />
{/each}