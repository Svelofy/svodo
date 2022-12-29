<script lang="ts">
    import { todos } from "../stores";
    import Time from 'svelte-time';

    // @ts-ignore
    import Checkbox from 'svelte-checkbox';
</script>

{#each $todos as { text, creationDate }, i}
    <div>
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