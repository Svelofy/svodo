<script lang="ts">
    import { todos } from "../stores";
    import Time from 'svelte-time';
    import { scale } from "svelte/transition";

    // @ts-ignore
    import Checkbox from 'svelte-checkbox';

    let isEditing = false;
    let editingId = -1;

    function deleteTodo(index: number): void {
        if(isEditing) return;

        // This won't update the UI automatically
        $todos.splice(index, 1);

        // This will
        $todos = $todos;
    }

    function editTodo(index: number): void {
        // Done if clicked on the edit button twice
        // otherwise return / edit
        if(isEditing) {
            if(editingId == index) {
                isEditing = false;
                editingId = -1;
            }

            return;
        }

        isEditing = true;
        editingId = index;
    }

    $: {
        localStorage.setItem('todos', JSON.stringify($todos));
    }
</script>

{#each $todos as { text, creationDate }, i}
    <div class='flex-container' in:scale={{
        start: 0.98,
        duration: 250,
        opacity: 0
    }}>
        <div class='flex-container' id='single-line'>
            {#if editingId == i}
                <input bind:value={$todos[i].text} />
            {:else}
                <Checkbox
                    class='checkbox'
                    bind:checked={$todos[i].completed}
                    primaryColor='white'
                    secondaryColor='#dddddd'
                    size='2.4rem'
                />
                
                <h1>{text}</h1>
            {/if}
        </div>

        <Time timestamp={creationDate} live={15000} relative />

        <div>
            <button on:click={() => editTodo(i)}>{editingId == i ? 'Done' : 'Edit'}</button>
            <button on:click={() => deleteTodo(i)}>Delete</button>
        </div>
    </div>
{/each}

<style>
    .flex-container {
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