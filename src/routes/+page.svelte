<script lang="ts">
  import { todos } from "../stores";
  import AddTodo from "../lib/AddTodo.svelte";
  import TodoView from "../lib/TodoView.svelte";

  // Default to empty list
  $todos = JSON.parse(localStorage.getItem('todos') || '[]');
</script>

<AddTodo />
<TodoView />