import { writable, type Writable } from "svelte/store";

export interface Todo {
    text: string;
    creationDate: Date;
}

export const todos: Writable<Todo[]> = writable([]);