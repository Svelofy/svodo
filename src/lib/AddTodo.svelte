<script lang="ts">
    import { todos } from "../stores";

    function addTodo(): void {
        $todos = $todos.concat({
            text: `TODO Number ${$todos.length}`,
            creationDate: new Date(),
            completed: false,
        })
    }

    $: {
        localStorage.setItem('todos', JSON.stringify($todos));
    }
</script>

<div>
    <button on:click={addTodo}>Add TODO</button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>