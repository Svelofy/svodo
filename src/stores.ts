import { writable, type Writable } from "svelte/store";

export interface Todo {
    text: string;
    creationDate: Date;
    completed: boolean;
}

export const todos: Writable<Todo[]> = writable([]);