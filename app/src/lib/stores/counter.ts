import { writable } from 'svelte/store'


const initValue = 0;
const {subscribe, set, update} = writable(initValue);

const increment = () => {
	update(n => n + 1)
}

const decrement = () => {
	update(n => n -1)
}

const reset = () => {
	set(0)
}

export const counter = {
	subscribe,
	incr: increment,
	decr: decrement,
	reset: reset,
}
