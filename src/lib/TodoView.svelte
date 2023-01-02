<script lang="ts">
    import { todos } from "../stores";
    import Time from 'svelte-time';
    import { scale } from "svelte/transition";

    // @ts-ignore
    import Checkbox from 'svelte-checkbox';

    function deleteTodo(index: number): void {
        // This won't update the UI automatically
        $todos.splice(index, 1);

        // This will
        $todos = $todos;
    }

    $: {
        localStorage.setItem('todos', JSON.stringify($todos));
    }
</script>

{#each $todos as { text, creationDate }, i}
    <div in:scale={{
        start: 0.98,
        duration: 250,
        opacity: 0
    }}>
        <div id='single-line'>
            <Checkbox
                class='checkbox'
                bind:checked={$todos[i].completed}
                primaryColor='white'
                secondaryColor='#dddddd'
                size='2.4rem'
            />
            
            <h1>{text}</h1>
        </div>
        <Time timestamp={creationDate} live={15000} relative />

        <button on:click={() => deleteTodo(i)}>Delete</button>
    </div>
{/each}

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #single-line {
        display: flex;
        flex-direction: row;
    }

    :global(.checkbox) {
        margin-right: 10px;
    }
</style>