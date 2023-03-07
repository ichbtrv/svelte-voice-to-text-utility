import { writable } from "svelte/store";

export const note = writable('');
export const clearNote = () => note.set('');
